import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ItemCards from "../itemcardview/itemcards";
import db from "../firebase";
const Order = () => {
  const params = useParams();
  const [orders, setorder] = useState(null);
  useEffect(() => {
    initdb();
  }, []);
  let initdb = async () => {
    let o = null;
    await db
      .get("/orders/" + params.hotel + "/" + params.table + "/order.json")
      .then((r) => {
        console.log(r);
        o = r.data;
      });
    setorder(o);
  };
  let increment = (i) => {
    if (orders !== null) {
      let m = [...orders];
      m[i].count++;
      setorder(m);
    }
  };
  let decrement = (i) => {
    let m = [...orders];
    m[i].count--;
    setorder(m);
  };
  return (
    <div>
      {orders &&
        orders.map((e, i) => {
          return (
            <ItemCards
              index={i}
              key={i}
              description={e.description}
              img={e.img}
              name={e.name}
              count={e.count}
              price={e.price}
              increment={increment}
              decrement={decrement}
            />
          );
        })}
      <footer>
        {orders && <p>total ={calt(orders)}</p>}&nbsp;
        <div>
          <button
            onClick={() => {
              console.log("hii");
            }}
            className="font-medium text-red-500"
          >
            Confirm order
          </button>
        </div>
      </footer>
    </div>
  );
};
let calt = (p) => {
  let s = 0;
  p.forEach((e) => {
    s = s + e.price * e.count;
  });
  return s;
};

export default Order;

import React, { useState, useEffect } from "react";
import ItemCards from "./../itemcardview/itemcards";
import db from "../firebase";
import { Link, useParams } from "react-router-dom";

const Menu = () => {
  const [menu, setmenu] = useState(null);

  const params = useParams();
  let initdb = async (params) => {
    let m = null;
    let o = null;
    let ordert = db.get(
      "/orders/" + params.hotel + "/" + params.table + ".json"
    );
    await ordert.then((r) => {
      if (!r.data.confirmed && r.data.order) {
        console.log(r.data.order);
        o = [...r.data.order];
      }
    });
    console.log("order is", o);
    let menut = db.get("/menus/" + params.hotel + ".json");
    m = [];
    await menut.then((r) => {
      m = r.data.map((e) => {
        let gcount =
          o &&
          o.find((oe) => {
            return oe.name == e.name;
          });
        let x = (gcount && gcount.count) || 0;

        console.log(x);
        e.count = x;
        return e;
      });
    });
    console.log(m);
    setmenu(m);
  };
  const sendorder = () => {
    db.put("/orders/" + params.hotel + "/" + params.table + ".json", {
      order: [...menu.filter((e) => e.count > 0)],
      confirmed: false,
    });
  };
  useEffect(() => {
    initdb(params);
  }, []);
  let increment = (i) => {
    if (menu !== null) {
      let m = [...menu];
      m[i].count++;
      setmenu(m);
    }
  };
  let decrement = (i) => {
    let m = [...menu];
    m[i].count--;
    setmenu(m);
  };
  return (
    <div>
      <div>
        {menu !== null ? (
          menu.map((e, i) => {
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
          })
        ) : (
          <p>loading</p>
        )}
      </div>
      <div>
        <Link
          to={"/order/" + params.hotel + "/" + params.table}
          onClick={sendorder}
          className="font-medium text-red-500"
        >
          Place order
        </Link>
      </div>
    </div>
  );
};

export default Menu;

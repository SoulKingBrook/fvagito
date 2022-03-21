import React, { Component } from "react";
import ItemCards from "./../itemcardview/itemcards";
import Home from "./home";
import axios from "axios";
import app from "../firebase";
class HomePage extends Component {
  state = {
    menu: [],
    cart: [],
  };

  componentDidMount() {
    let menu = null;
    const db = axios.create({
      baseURL: app.options.databaseURL,
    });
    console.log(app.options.databaseURL + "/menus/hotel1.json");
    let menus = db.get("/menus/hotel1.json");
    menu = [];
    menus.then((r) => {
      menu = r.data.map((e) => {
        e.count = 0;
        return e;
      });
      this.setState({ menu });
      console.log(this.state.menu);
    });
  }
  render() {
    return (
      <div>
        <Home />
        {this.state.menu &&
          this.state.menu.map((e, i) => {
            console.log(e, i);
            return (
              <ItemCards
                index={i}
                description={e.description}
                img={e.img}
                name={e.name}
                count={e.count}
                price={e.price}
                increment={this.increment}
                decrement={this.decrement}
              />
            );
          })}
        <footer className="bg-gray-100 text-center lg:text-left">
          <div
            className="text-gray-700 text-center p-4"
            style={{ backgroundcolor: "rgba(0, 0, 0, 0.2)" }}
          >
            <button className="order">Place Order</button>
          </div>
        </footer>
      </div>
    );
  }
  increment = (i) => {
    let menu = [...this.state.menu];
    menu[i].count++;
    this.setState({ menu });
  };
  decrement = (i, value) => {
    let menu = [...this.state.menu];
    menu[i].count--;
    this.setState({ menu });
  };
}

export default HomePage;

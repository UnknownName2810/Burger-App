import React, { Component } from "react";
import "./assets/CSS/Home.css";
import Burger from "./Burger";
import MenuBurger from "./MenuBurger";
export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-7">
            <Burger />
          </div>

          <div className="col-5">
            <MenuBurger />
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Header extends Component {
  toggleMenu = () => {
    const src1 =
      "https://img.icons8.com/material-outlined/24/000000/menu--v1.png";
    const src2 = "https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png";
    const menubtn = document.getElementById("menu-btn");
    const links = document.getElementById("links");
    if (menubtn.src === src1) {
      menubtn.src = src2;
      links.style.display = "flex";
    } else {
      menubtn.src = src1;
      links.style.display = "none";
    }
  };
  render() {
    return (
      <header>
        <p className="logo">
          Jess Foods
          <img
            alt="icon"
            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-empanada-street-food-flaticons-lineal-color-flat-icons.png"
          />
        </p>
        <div id="links">
          <a href="#section2">Our Menu</a>
          <a href="#section3">Book your Order</a>
          <a href="#section4">About</a>
          <a href="#section3">Contact</a>
        </div>
        <img
          id="menu-btn"
          onClick={this.toggleMenu}
          src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
        />
      </header>
    );
  }
}

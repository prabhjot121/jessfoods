import React, { Component } from "react";

export default class Footer extends Component {
  componentDidMount() {
    const items = document.querySelectorAll("footer div");
    window.addEventListener("scroll", () => {
      for (let i = 0; i < items.length; i++) {
        var pos = items[i].getBoundingClientRect().top;
        if (pos < 700) {
          items[i].classList.add("appear-anim");
        } else {
          items[i].classList.remove("appear-anim");
        }
      }
    });
  }
  render() {
    return (
      <footer>
        <div>
          <span>Jess Foods</span>
          <img
            alt="icon"
            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-empanada-street-food-flaticons-lineal-color-flat-icons.png"
          />
        </div>
        <div>
          <h2>Location</h2>
          <p>Our address is residential</p>
          <p>will be provided upon order</p>
        </div>
        <div>
          <h2>Hours</h2>
          <p>Saturday : 8AM-8PM</p>
          <p>Sunday : 8AM-8PM</p>
        </div>
        <div>
          <h2>Contact</h2>
          <p>Phone -</p>
          <p>
            <a id="callus" href="tel:6476867310">
              647-686-7310
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

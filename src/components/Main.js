import React, { Component } from "react";
import aboutimg from "../about.jpeg";

export default class Main extends Component {
  componentDidMount() {
    const items = document.getElementsByClassName("item");
    window.addEventListener("scroll", () => {
      for (let i = 0; i < items.length; i++) {
        var pos = items[i].getBoundingClientRect().top;
        if (pos < 500) {
          items[i].classList.add("appear-anim");
        }
      }
    });
  }
  render() {
    return (
      <main>
        <div id="section1">
          <div>
            <h1 id="main-heading">Get the best quality</h1>
            <h1>Empanadas</h1>
            <h3>Authentic Venezuelan Food</h3>
          </div>
        </div>
        <div id="section2">
          <h1>Our Menu</h1>
          <div id="items">
            <div className="item">
              <img
                alt="item"
                src="https://cdn.shopify.com/s/files/1/0470/9584/0931/products/DonPanWebsite-96_800x.jpg?v=1603224577"
              />
              <div className="item-info">
                <h2>Pabellon Empanadas</h2>
                <p>
                  The Venezuelan Pabellon Empanada is prepared with crispy corn
                  our dough, stued with plantains, beans, tomatoes, sautéed
                  onions, and traditionally molded into a half-moon shape.
                </p>
                <h4>Pricing - $8/piece</h4>
              </div>
            </div>
            <div className="item">
              <img
                alt="item"
                src="https://keviniscooking.com/wp-content/uploads/2021/08/Been-Empanadas-14.jpg"
              />
              <div className="item-info">
                <h2>Shredded Beef Empanadas</h2>
                <p>
                  Venezuelan Beef Empanadas are ideal for parties, family
                  get-togethers or just a weeknight dinner.These beef empanadas
                  have homemade empanada dough that bakes up flaky and golden
                  brown.
                </p>
                <h3>Pricing - $6/piece</h3>
              </div>
            </div>
            <div className="item">
              <div className="item-info">
                <h2>Black Beans Empanadas</h2>
                <p>
                  The low-and-slow-cooked black beans are seasoned
                  Venezuelan-style. Black beans are a common side dish in
                  Venezuela, especially as a component of the national meal.
                </p>
                <h3>Pricing - $5/piece</h3>
              </div>
              <img
                alt="item"
                src="https://images-gmi-pmc.edge-generalmills.com/9c95e881-8f2f-4d1e-8b7b-06493ddeb661.jpg"
              />
            </div>
            <div className="item">
              <img
                alt="item"
                src="https://static.fanpage.it/wp-content/uploads/sites/22/2018/07/ham-cheese-empanadas_8.jpg"
              />
              <div className="item-info">
                <h2>Cheese and Ham Empanadas</h2>
                <p>
                  These to-die-for Venezuelan Cheese and Ham Empanadas are
                  filled with gooey cheese and savory ham. Our recipe is sure to
                  please just about every cheese lover and will become an
                  instant favorite.
                </p>
                <h3>Pricing - $5/piece</h3>
              </div>
            </div>
            <div className="item">
              <div className="item-info">
                <h2>Chicken Empanadas</h2>
                <p>
                  Tender, juicy shredded chicken, onions, peppers and garlic
                  make a hearty, savory filling chicken empanadas.
                </p>
                <h3>Pricing - $5/piece</h3>
              </div>
              <img
                alt="item"
                src="https://assets.bonappetit.com/photos/58a3509cf12ac6e639bf24af/5:4/w_3514,h_2811,c_limit/argentinian-chicken-empanadas.jpg"
              />
            </div>
          </div>
        </div>
        <section id="section3">
          <h2>How to book your order?</h2>
          <h3>
            Currently, we only accept orders by phone call. Give us a call at
          </h3>
          <a href="tel:6476867310">647-686-7310</a>
          <h3 id="ins2">
            Unfortunately, we only make and prepare the orders on weekends but
            you can book your order anyday of the week.
          </h3>
        </section>
        <section id="section4">
          <div>
            <h2>About us</h2>
            <p>
              We are a small team of passionate people working our best to bring
              the quality and taste you tastebuds want. For immigrants, it is
              not easy to find the exact taste as in back home. That's why we
              are here to satisfy your cravings.
            </p>
          </div>
          <img src={aboutimg} alt="aboutimg" />
        </section>
      </main>
    );
  }
}

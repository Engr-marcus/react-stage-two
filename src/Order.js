import logo from "../src/images/logo.svg";
import img10 from "../src/images/img10.png";
import menu from "../src/images/menu.png";
import bg from "../src/images/bg.svg";
import nav1 from "../src/images/help.svg";
import nav2 from "../src/images/profile.svg";
import nav3 from "../src/images/shopping-cart.svg";
import search from "../src/images/search.svg";
import social1 from "../src/images/social1.svg";
import social2 from "../src/images/social2.svg";
import social3 from "../src/images/social3.svg";
import social4 from "../src/images/social4.svg";
import React from "react";
import "./Order.css";

function Order(){
    return(
        <div>    
      <section className="product">
        <img className="bg" src={bg} />
        <nav>
          <div className="logo">
            <img src={logo} />
            <h3>TrusyBuy</h3>
          </div>
          <div className="searchContainer">
            <input
              className="search"
              type="search"
              placeholder="Search"
            ></input>
            <span>
              <img src={search} />
            </span>
          </div>
          <div className="icons">
            <span className="hide">
              <img src={nav1} />
              Help
            </span>
            <span className="hide">
              <img src={nav2} />
              Account
            </span>
            <span>
              <img src={nav3} />
              <span className="hide">Cart</span>
            </span>
            <span className="menu">
              <img className="hidden" src={menu} />
            </span>
          </div>
        </nav>
        <h1 className="hide">Order completed</h1>
      </section>
        <section className="orderContainer">
            <div className="order">
                <img src={img10} />
                <h3>Thanks for your purchase!</h3>
                <p>Your order has been successfully purchase</p>
                <button>Back to product</button>
            </div>
        </section>


      <section className="footer">
        <div className="topFooter">
          <div className="brandName">
            <img src={logo} />
            TrustBuy
          </div>
          <div className="about">
            <h3>About</h3>
            <p>Our Product</p>
            <p>Our Story</p>
            <p>Our Blog</p>
          </div>
          <div className="info">
            <h3>Information</h3>
            <p>Delivery Information</p>
            <p>Privacy policy</p>
            <p>Return</p>
            <p>Terms & conditions</p>
          </div>
          <div className="support">
            <h3>Support</h3>
            <p>Contact Us</p>
            <p>Help</p>
            <p>FAQ</p>
            <p>Checkout</p>
          </div>
          <div className="connect">
            <h3>Connect</h3>
            <div className="icons">
              <div className="icon">
                <img src={social1} />
              </div>
              <div className="icon">
                <img src={social2} />
              </div>
              <div className="icon">
                <img src={social3} />
              </div>
              <div className="icon">
                <img src={social4} />
              </div>
            </div>
          </div>
        </div>
        <div className="bottomFooter">
          <div>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
          <p>2024, Powered by TrustBuy. All Right Reserved.</p>
        </div>
      </section>
        </div>
    )
}

export default Order;
import logo from "../src/images/logo.svg";
import img6 from "../src/images/img6.png";
import img11 from "../src/images/img11.png";
import pay1 from "../src/images/pay1.png";
import pay2 from "../src/images/pay2.png";
import pay3 from "../src/images/pay3.png";
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
import "./Checkout.css";

function Checkout() {
  return (
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
        <h1 className="hide">Checkout</h1>
      </section>
      <section className="cartContainer">
        <div className="mainCart">
          <div className="leftContainer">
            <h3>Billing Details</h3>
            <div className="flex">
              <div className="column">
                <label>Firstname</label>
                <input type="text" placeholder="Enter first name" />
              </div>
              <div className="column">
                <label>Lastname</label>
                <input type="text" placeholder="Enter last name" />
              </div>
            </div>
            <div className="flex">
              <div className="column">
                <label>Phone no</label>
                <input type="text" placeholder="Enter phone no" />
              </div>
              <div className="column">
                <label>Additional Phone no</label>
                <input type="text" placeholder="Enter phone no" />
              </div>
            </div>
            <label>Address</label>
            <input type="text" placeholder="Enter address" />
            <label>Address Information</label>
            <input type="text" placeholder="Enter information" />
            <label>City</label>
            <input type="text" placeholder="Enter city" />
            <div className="buttons">
              <button className="odd">Cancel</button>
              <button className="real">Save</button>
            </div>
          </div>
          <div className="rightContainer">
            <div className="b-bottom b1">
              <span className="i1">Cart summary</span>
              <span className="i2">2 Items</span>
            </div>
            <div className="b-bottom b2">
              <span className="i3">Delivery charge </span>
              <span className="i4">
                Add your delivery address to see your delivery charge
              </span>
            </div>
            <div className="b-bottom b3">
              <span className="i5">Subtotal</span>
              <span className="i6">N500,000</span>
            </div>
            <p>Excluding delivery charge</p>
            <div className="b-bottom b4">
              <span className="i7">Total</span>
              <span className="i8">N500,000</span>
            </div>
            <button className="b5">Confirm order</button>
            <div className="pay b6">
              <span>We accept</span>
              <img src={pay1} />
              <img src={pay2} />
              <img src={pay3} />
            </div>
          </div>
        </div>
      </section>
      <section className="payContainer">
        <h1>How would you like to pay?</h1>
        <div className="pay">
          <div>
            <input type="radio" checked />
            <span className="bold">Pay with card</span>
          </div>
          <div>
            <input type="radio" />
            <span>Pay with PayPal</span>
          </div>
          <div>
            <input type="radio" />
            <span>Pay with gift card</span>
          </div>
        </div>
        <div className="flex">
          <div className="column">
            <label>Card name</label>
            <input type="text" placeholder="Enter card name" />
          </div>
          <div className="column">
            <label>Card number</label>
            <input type="text" placeholder="Enter Card Number" />
          </div>
        </div>
        <div className="flex">
          <div className="column">
            <label>Expiring date</label>
            <input type="text" placeholder="24/7" />
          </div>
          <div className="column">
            <label>CCV</label>
            <input type="text" placeholder="..." />
          </div>
        </div>
        <div className="agree">
          <input type="checkbox" checked></input>
          <p>I agree with TrustBuy Terms and condition</p>
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
  );
}

export default Checkout;

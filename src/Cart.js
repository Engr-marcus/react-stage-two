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
import { Link } from "react-router-dom";
import "./Cart.css";
import { useCart } from "react-use-cart";
import { Home } from "./Home";

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return (
      <>
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
        </section>
      <section className="cartContainer">
        <div className="cartTxt">
          <h1>Shopping cart</h1>
          <Link to="/" className="back">
            Continue shopping
          </Link>
        </div>
        <h1 className="textCenter">Your Cart is Empty</h1>
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
      </>
    );
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
      </section>
      <section className="cartContainer">
        <div className="cartTxt">
          <h1>Shopping cart</h1>
          <Link to="/" className="back">
            Continue shopping
          </Link>
        </div>
        <div className="mainCart">
          <div className="leftContainer">
            <div className="topCart">
            <h4>
              Cart
            </h4>
            <button onClick={() => emptyCart()}>Clear cart</button>
            </div>
            <div className="cardBox">
              {items.map((item, index) => {
                return (
                  <>
                    <div className="top">
                      <div className="left">
                        <img src={item.image} />
                        <div className="txt">
                          <h4>{item.name}</h4>
                          <p>In Stock</p>
                        </div>
                      </div>
                      <div className="right">
                        <div className="amount">
                          <h3>{item.price}</h3>
                          <div className="span">
                            <span className="strike">N65,000</span>
                            <span className="percent">-20%</span>
                          </div>
                        </div>
                        <div className="num">
                          <span
                            className="sub"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            ➖
                          </span>
                          <p className="numItems">{item.quantity}</p>
                          <span
                            className="add"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            ➕
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bottom">
                      <button onClick={() => removeItem(item.id)}>Remove</button>
                      <button>Save for later</button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="rightContainer">
            <div className="b-bottom b1">
              <span className="i1">Cart summary</span>
              <span className="i2">{totalUniqueItems} Items</span>
            </div>
            <div className="b-bottom b2">
              <span className="i3">Delivery charge </span>
              <span className="i4">
                Add your delivery address to see your delivery charge
              </span>
            </div>
            <div className="b-bottom b3">
              <span className="i5">Subtotal</span>
              <span className="i6">N {cartTotal}</span>
            </div>
            <p>Excluding delivery charge</p>
            <div className="b-bottom b4">
              <span className="i7">Total</span>
              <span className="i8">N {cartTotal}</span>
            </div>
            <Link to="/Checkout">
              <button className="b5">Continue checkout</button>
            </Link>
            <div className="pay b6">
              <span>We accept</span>
              <img src={pay1} />
              <img src={pay2} />
              <img src={pay3} />
            </div>
          </div>
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

export default Cart;

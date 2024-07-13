import menu from "../src/images/menu.png";
import logo from "../src/images/logo.svg";
import bg from "../src/images/bg.svg";
import social1 from "../src/images/social1.svg";
import social2 from "../src/images/social2.svg";
import social3 from "../src/images/social3.svg";
import social4 from "../src/images/social4.svg";
import nav1 from "../src/images/help.svg";
import nav2 from "../src/images/profile.svg";
import nav3 from "../src/images/shopping-cart.svg";
import search from "../src/images/search.svg";
import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { Home } from "./Home";
import { useCart } from "react-use-cart";

const Product = () => {
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
  return (
    <>
      <section className="product">
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
            <div className="hide topLeft">
              <img src={nav1} />
              <span>Help</span>
            </div>
            <div className="hide topLeft">
              <img src={nav2} />
              <span>Account</span>
            </div>
            <div className="topLeft">
              <Link to="/Cart" className="cart">
                <img className="cartIcon" src={nav3} />
                <p className="cartNum">{totalUniqueItems}</p>
              </Link>
              <span className="hide">Cart</span>
            </div>
            <div className="menu">
              <img className="hidden" src={menu} />
            </div>
          </div>
        </nav>
        <img className="bg" src={bg} />
        <Link to="/Cart" className="cart">
        <h1 className="hide">Go to Cart</h1>
        </Link>
      </section>
      <section className="categoryContainer">
        <div className="categoryBox hide">
          <h3>Filter Category</h3>
          <div className="category">
            <p>Computer and accessories</p>
            <p>Phones and Tablet</p>
            <p>Electronic</p>
            <p>Home and Kitchen</p>
          </div>
          <div className="sort">
            <h4>Sort by:</h4>
            <select>
              <option className="option">Popularity</option>
            </select>
            <select>
              <option className="option">Price</option>
            </select>
          </div>
        </div>
        <div className="filsort hidden">
          <div className="filter">
            <img src="star1" alt="filter-icon" />
            <span>Filter</span>
          </div>
          <div className="sort">
            <img src="star1" alt="sort-icon" />
            <span>Sort</span>
          </div>
        </div>
        <div className="mainCategory">
          <div className="leftContainer hide">
            <ul className="categoryItems">
              <li>Computer and accessories</li>
              <li>Phone and Tablet</li>
              <li>Electronic</li>
              <li>Home and Kitchen</li>
              <li>Fashion Wears</li>
              <li>Other category</li>
            </ul>
            <div className="priceItem">
              <h2>$25,000-$200,000</h2>
              <input className="range" type="range" min="0" max="100" />
            </div>
            <ul className="available">
              <div>
                <input type="radio" checked />
                <span>In Stock</span>
              </div>
              <div>
                <input type="radio" />
                <span>Out of Stock</span>
              </div>
            </ul>
          </div>
          <div className="rightContainer">
            <div className="cardsContainer">
              <Home />
            </div>
          </div>
        </div>
      </section>
      <section className="newsletter">
        <div className="newsContainer">
          <h4>Subscribe to our newsletter</h4>
          <p>
            Subscribe to our newsletter to get update on our latest and exciting
            offers on all our products
          </p>
          <input type="email" />
          <button className="btn">Subscribe</button>
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
    </>
  );
};

export default Product;

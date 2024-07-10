import img1 from "../src/images/img1.png";
import img3 from "../src/images/img3.png";
import img4 from "../src/images/img4.png";
import img5 from "../src/images/img5.png";
import img6 from "../src/images/img6.png";
import img7 from "../src/images/img7.png";
import img8 from "../src/images/img8.png";
import img9 from "../src/images/img9.png";
import img10 from "../src/images/img10.png";
import img11 from "../src/images/img11.png";
import img12 from "../src/images/img12.png";
import img13 from "../src/images/img13.png";
import img14 from "../src/images/img14.png";
import img15 from "../src/images/img15.png";
import img16 from "../src/images/img16.png";
import img17 from "../src/images/img17.png";
import menu from "../src/images/menu.png";
import img18 from "../src/images/img18.png";
import img19 from "../src/images/img19.png";
import logo from "../src/images/logo.svg";
import bg from "../src/images/bg.svg";
import star1 from "../src/images/star1.svg";
import star2 from "../src/images/star2.svg";
import social1 from "../src/images/social1.svg";
import social2 from "../src/images/social2.svg";
import social3 from "../src/images/social3.svg";
import social4 from "../src/images/social4.svg";
import nav1 from "../src/images/help.svg";
import nav2 from "../src/images/profile.svg";
import nav3 from "../src/images/shopping-cart.svg";
import search from "../src/images/search.svg";
import heart1 from "../src/images/heart1.png";
import heart2 from "../src/images/heart2.png";
import React from "react";
import Cart from "./Cart";
import "./Product.css";


function Product() {
  return (
    <div>
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
        <img className="bg" src={bg} />
        <h1 className="hide">Product Listing</h1>
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
            <h4>Sort by</h4>
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
                    <input type="range" />
                </div>
                <ul className="available">
                    <div><input type="radio" checked /><span>In Stock</span></div>
                    <div><input type="radio" /><span>Out of Stock</span></div>
                </ul>
            </div>
            <div className="rightContainer">
                <div className="cardsContainer">
                    <div className="card">
                        <div className="imgContainer">
                            <img src={img3} />
                            <span>-20%</span>
                            <img className="heart" src={heart1} />
                        </div>
                        <p>iPhone 15 pro max</p>    
                        <h3>N 200,000</h3>
                        <div className="stars">
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star2} />
                        </div>
                        <button className="cartBtn"><a href="./Cart">Add to cart</a></button>
                    </div>
                    <div className="card">
                        <div className="imgContainer">
                            <img src={img4} />
                            <span>-20%</span>
                            <img className="heart" src={heart2} />
                        </div>
                        <p>iPhone 15 pro max</p>    
                        <h3>N 200,000</h3>
                        <div className="stars">
                            <img src={star2} />
                            <img src={star2} />
                            <img src={star2} />
                            <img src={star2} />
                            <img src={star2} />
                        </div>
                        <button className="cartBtn"><a href="Cart.js">Add to cart</a></button>
                    </div>
                    <div className="card">
                        <div className="imgContainer">
                            <img src={img5} />
                            <span>-20%</span>
                            <img className="heart" src={heart1} />
                        </div>
                        <p>iPhone 15 pro max</p>    
                        <h3>N 200,000</h3>
                        <div className="stars">
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star2} />
                            <img src={star2} />
                        </div>
                        <button className="cartBtn"><a href="Cart.js">Add to cart</a></button>
                    </div>
                    <div className="card">
                        <div className="imgContainer">
                            <img src={img6} />
                            <span>-20%</span>
                            <img className="heart" src={heart1} />
                        </div>
                        <p>iPhone 15 pro max</p>    
                        <h3>N 200,000</h3>
                        <div className="stars">
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star2} />
                            <img src={star2} />
                        </div>
                        <button className="cartBtn"><a href="Cart.js">Add to cart</a></button>
                    </div>
                    <div className="card">
                        <div className="imgContainer">
                            <img src={img7} />
                            <span>-20%</span>
                            <img className="heart" src={heart1} />
                        </div>
                        <p>iPhone 15 pro max</p>    
                        <h3>N 200,000</h3>
                        <div className="stars">
                            <img src={star2} />
                            <img src={star2} />
                            <img src={star2} />
                            <img src={star2} />
                            <img src={star2} />
                        </div>
                        <button className="cartBtn"><a href="Cart.js">Add to cart</a></button>
                    </div>
                    <div className="card">
                        <div className="imgContainer">
                            <img src={img8} />
                            <span>-20%</span>
                            <img className="heart" src={heart1} />
                        </div>
                        <p>iPhone 15 pro max</p>    
                        <h3>N 200,000</h3>
                        <div className="stars">
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star2} />
                            <img src={star2} />
                        </div>
                        <button className="cartBtn"><a href="Cart.js">Add to cart</a></button>
                    </div>
                    <div className="card">
                        <div className="imgContainer">
                            <img src={img9} />
                            <span>-20%</span>
                            <img className="heart" src={heart2} />
                        </div>
                        <p>iPhone 15 pro max</p>    
                        <h3>N 200,000</h3>
                        <div className="stars">
                            <img src={star2} />
                            <img src={star2} />
                            <img src={star2} />
                            <img src={star2} />
                            <img src={star2} />
                        </div>
                        <button className="cartBtn"><a href="Cart.js">Add to cart</a></button>
                    </div>
                    <div className="card">
                        <div className="imgContainer">
                            <img src={img10} />
                            <span>-20%</span>
                            <img className="heart" src={heart1} />
                        </div>
                        <p>iPhone 15 pro max</p>    
                        <h3>N 200,000</h3>
                        <div className="stars">
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star2} />
                            <img src={star2} />
                        </div>
                        <button className="cartBtn"><a href="Cart.js">Add to cart</a></button>
                    </div>
                    <div className="card">
                        <div className="imgContainer">
                            <img src={img11} />
                            <span>-20%</span>
                            <img className="heart" src={heart1} />
                        </div>
                        <p>iPhone 15 pro max</p>    
                        <h3>N 200,000</h3>
                        <div className="stars">
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star2} />
                            <img src={star2} />
                        </div>
                        <button className="cartBtn"><a href="Cart.js">Add to cart</a></button>
                    </div>
                    <div className="card">
                        <div className="imgContainer">
                            <img src={img12} />
                            <span>-20%</span>
                            <img className="heart" src={heart1} />
                        </div>
                        <p>iPhone 15 pro max</p>    
                        <h3>N 200,000</h3>
                        <div className="stars">
                            <img src={star2} />
                            <img src={star2} />
                            <img src={star2} />
                            <img src={star2} />
                            <img src={star2} />
                        </div>
                        <button className="cartBtn"><a href="Cart.js">Add to cart</a></button>
                    </div>
                    <div className="card">
                        <div className="imgContainer">
                            <img src={img13} />
                            <span>-20%</span>
                            <img className="heart" src={heart1} />
                        </div>
                        <p>iPhone 15 pro max</p>    
                        <h3>N 200,000</h3>
                        <div className="stars">
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star2} />
                            <img src={star2} />
                        </div>
                        <button className="cartBtn"><a href="Cart.js">Add to cart</a></button>
                    </div>
                    <div className="card">
                        <div className="imgContainer">
                            <img src={img14} />
                            <span>-20%</span>
                            <img className="heart" src={heart1} />
                        </div>
                        <p>iPhone 15 pro max</p>    
                        <h3>N 200,000</h3>
                        <div className="stars">
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star2} />
                            <img src={star2} />
                        </div>
                        <button className="cartBtn"><a href="Cart.js">Add to cart</a></button>
                    </div>
                    <div className="card">
                        <div className="imgContainer">
                            <img src={img15} />
                            <span>-20%</span>
                            <img className="heart" src={heart1} />
                        </div>
                        <p>iPhone 15 pro max</p>    
                        <h3>N 200,000</h3>
                        <div className="stars">
                            <img src={star2} />
                            <img src={star2} />
                            <img src={star2} />
                            <img src={star2} />
                            <img src={star2} />
                        </div>
                        <button className="cartBtn"><a href="Cart.js">Add to cart</a></button>
                    </div>
                    <div className="card">
                        <div className="imgContainer">
                            <img src={img16} />
                            <span>-20%</span>
                            <img className="heart" src={heart1} />
                        </div>
                        <p>iPhone 15 pro max</p>    
                        <h3>N 200,000</h3>
                        <div className="stars">
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star2} />
                            <img src={star2} />
                        </div>
                        <button className="cartBtn"><a href="Cart.js">Add to cart</a></button>
                    </div>
                    <div className="card">
                        <div className="imgContainer">
                            <img src={img17} />
                            <span>-20%</span>
                            <img className="heart" src={heart1} />
                        </div>
                        <p>iPhone 15 pro max</p>    
                        <h3>N 200,000</h3>
                        <div className="stars">
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star1} />
                            <img src={star2} />
                            <img src={star2} />
                        </div>
                        <button className="cartBtn"><a href="Cart.js">Add to cart</a></button>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="newsletter">
        <div className="newsContainer">
            <h4>Subscribe to our newsletter</h4>
            <p>Subscribe to our newsletter to get update  on our latest and exciting offers on all our products</p>
            <input type="email" />
            <button className="btn">Subscribe</button>
        </div>
      </section>
      <section className="footer">
        <div className="topFooter">
            <div className="brandName">
            <img src={logo} />TrustBuy
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

export default Product;

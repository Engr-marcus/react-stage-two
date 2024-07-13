import React from "react";
import heart1 from "../src/images/heart1.png";
import star1 from "../src/images/star1.svg";
import star2 from "../src/images/star2.svg";
import {  useCart } from "react-use-cart";
import "./Itemcards.css";

const Itemcards = (props) => {
    const { addItem } = useCart()
  return (
    <div>
          <div className="card">
            <div className="imgContainer">
              <img src={props.image} />
              <span>-20%</span>
              <img className="heart" src={heart1} />
            </div>
            <p>{props.name}</p>
            <p>{props.desc}</p>
            <h3>{props.price}</h3>
            <div className="stars">
              <img src={star1} />
              <img src={star1} />
              <img src={star1} />
              <img src={star1} />
              <img src={star1} />
            </div>
            <button className="cartBtn" onClick={() => addItem(props.item)}>Add to cart</button>
          </div>
    </div>
  );
};

export default Itemcards;

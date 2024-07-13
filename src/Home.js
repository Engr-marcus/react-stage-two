import React from "react";
import Itemcards from "./Itemcards";
import data from "./data";

export const Home = () => {
  return (
    <>
      {data.productData.map((item, index) => {
        return(
          <Itemcards image={item.image} name={item.name}  desc={item.desc} price={item.price} item={item} key={index} />
        )
      })}
    </>
  );
};

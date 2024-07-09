import Product from "./Product";
import { Navigate } from "react-router-dom";
import React from "react";

export const Context = React.createContext();

function App() {
const {goToCart, setGoToCart} = React.useState(Context); 
return (
    <Context.Provider value={[goToCart, setGoToCart]}>
      <Product />
    </Context.Provider>
  );
}

export default App;

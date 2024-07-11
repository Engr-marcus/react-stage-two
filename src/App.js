import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Order from "./Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="Product" element={<Product />} />
        <Route path="Cart" element={<Cart/>} />
        <Route path="Checkout" element={<Checkout/>} />
        <Route path="Order" element={<Order/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Order from "./Order";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Product />} />
          <Route path="/" element={<Product />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Checkout" element={<Checkout />} />
          <Route path="Order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

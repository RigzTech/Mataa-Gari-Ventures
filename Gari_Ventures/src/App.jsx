import React from "react";
import { Routes, Route } from "react-router-dom";  // ✅ Only import Routes & Route
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import OrderPayment from "./Pages/OrderPayment";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/order-payment" element={<OrderPayment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

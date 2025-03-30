import React from "react";
import { Routes, Route } from "react-router-dom";  
import { ProductProvider } from "./context/ProductContext.jsx"; // ✅ Import ProductProvider
import { ThemeProvider } from "./context/ThemeContext"; // ✅ Import ThemeProvider

import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails"; // ✅ Import ProductDetails
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import OrderPayment from "./Pages/OrderPayment";
import GetQuote from "./Pages/GetQuote";  // ✅ Get Quote page
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <ThemeProvider> {/* Wrap the app inside ThemeProvider */}
      <ProductProvider> {/* Wrap ProductProvider inside ThemeProvider */}
        <div className="bg-black text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} /> {/* ✅ Product Details Route */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/order-payment" element={<OrderPayment />} />
            <Route path="/get-quote" element={<GetQuote />} />
          </Routes>
          <Footer />
        </div>
      </ProductProvider>
    </ThemeProvider>
  );
}

export default App;
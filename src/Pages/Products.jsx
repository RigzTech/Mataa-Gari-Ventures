import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import productData from "../data/products"; // Import product data

const Products = () => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const categories = [
    "All", "Headlights", "Taillights", "Mirrors", "Bumpers", "Bonnets", "Doors", "Car Accessories"
  ];

  const filteredProducts = productData.filter((product) => {
    const matchesCategory = filter === "All" || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-black text-white py-16 px-10">
      <h1 className="text-5xl font-bold text-green-500 text-center mb-6">Our Products</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by product name or model..."
          className="w-full max-w-md px-4 py-2 text-black rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded ${
              filter === category ? "bg-green-500 text-black" : "border border-green-500"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-gray-900 p-4 rounded-lg text-center">
            {/* Product Image */}
            <div className="w-full h-56 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <h2 className="text-xl font-semibold mt-3">{product.name}</h2>
            <p className="text-green-500">Ksh {product.price}</p>

            {/* Add to Cart Button */}
            <button
              className="mt-4 bg-green-500 text-black px-4 py-2 rounded"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>

            {/* Buy Now Button - Takes to Checkout Page */}
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                addToCart(product); // Add product to cart
                navigate("/order-payment"); // Navigate to checkout
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

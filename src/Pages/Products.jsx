import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import productData from "../data/products";
import { FaShoppingCart } from "react-icons/fa";

const Products = () => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [notification, setNotification] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { addToCart, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const categories = [
    "All", "Headlights", "Taillights", "Mirrors", "Bumpers", "Bonnets", "Doors", "Car Accessories"
  ];

  const filteredProducts = productData.filter((product) => {
    const matchesCategory = filter === "All" || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  const navigateToCart = () => {
    navigate("/order-payment"); // Redirects to the Order & Payment page
  };

  return (
    <section className="bg-black text-white py-16 px-4">
      {/* Floating Cart Icon */}
      <div 
        className="fixed top-4 right-4 cursor-pointer z-50"
        onClick={navigateToCart}
      >
        <div className="relative">
          <FaShoppingCart className="text-3xl text-green-500 hover:text-green-400 transition" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>

            {/* Buy Now Button */}
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                addToCart(product);
                navigate("/order-payment");
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* Shop Now Button */}
      <div className="text-center mt-10">
        <button
          className="bg-red-600 text-white text-xl font-bold px-6 py-3 rounded shadow-lg transition transform hover:scale-105"
          onClick={() => navigate("/order-payment")}
        >
          SHOP NOW
        </button>
      </div>

      {/* Notification */}
      {notification && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-black px-6 py-3 rounded shadow-lg">
          {notification}
        </div>
      )}

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-gray-900 text-white p-6 rounded-lg max-w-md">
            <h2 className="text-2xl font-bold text-green-500">{selectedProduct.name}</h2>
            <p><strong>Brand/Car Model:</strong> {selectedProduct.brand}</p>
            <p><strong>Category:</strong> {selectedProduct.category}</p>
            <p><strong>Price:</strong> Ksh {selectedProduct.price}</p>
            <p><strong>Stock:</strong> {selectedProduct.stock}</p>
            <p className="mt-2">{selectedProduct.description}</p>
            <button
              className="mt-4 bg-red-500 px-4 py-2 rounded"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;

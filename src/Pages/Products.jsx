import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import productData from "../data/products";

const Products = () => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [notification, setNotification] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <section className="bg-black text-white py-16 px-4">
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
      <div className="flex flex-wrap justify-center gap-2 mb-6">
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

            {/* Buttons */}
            <div className="flex justify-center gap-3 mt-4">
              <button
                className="bg-green-500 text-black px-4 py-2 rounded"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setSelectedProduct(product)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Buy Now Button (Signout/Payment) */}
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

import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [notification, setNotification] = useState(null);
  const { addToCart, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://mataa-backend.onrender.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();

        // Extract only necessary fields and exclude _id
        const updatedProducts = data.products.map(({ name, make, model, description, price, imageUrl }) => ({
          name,
          make,
          model,
          description,
          price,
          imageUrl,
        }));

        setProducts(updatedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const categories = ["All", "Lighting", "Accessories", "Mirrors", "Body Parts","Ex-Japan"];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = filter === "All" || (product.description && product.description.includes(filter));
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMake = carMake === "" || product.make.toLowerCase().includes(carMake.toLowerCase());
    const matchesModel = carModel === "" || product.model.toLowerCase().includes(carModel.toLowerCase());
    const matchesPrice =
      (minPrice === "" || product.price >= Number(minPrice)) &&
      (maxPrice === "" || product.price <= Number(maxPrice));
    const matchesStock = !onlyInStock || product.stock > 0;

    return matchesCategory && matchesSearch && matchesMake && matchesModel && matchesPrice && matchesStock;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <section className="bg-black text-white py-16 px-4">
      {/* Cart Icon */}
      <div className="fixed top-4 right-4 cursor-pointer z-50" onClick={() => navigate("/order-payment")}>
        <FaShoppingCart className="text-3xl text-[#99edc3] hover:text-green-400 transition" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </div>

      {/* Notification */}
      {notification && (
        <div className="fixed top-16 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-500">
          {notification}
        </div>
      )}

      <h1 className="text-5xl font-bold text-[#99edc3] text-center mb-6">Our Products</h1>

      {/* Search and Filter Section */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <input type="text" placeholder="Search by product name..." className="w-full max-w-md px-4 py-2 text-black rounded" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <input type="text" placeholder="Filter by car make..." className="w-full max-w-md px-4 py-2 text-black rounded" value={carMake} onChange={(e) => setCarMake(e.target.value)} />
        <input type="text" placeholder="Filter by car model..." className="w-full max-w-md px-4 py-2 text-black rounded" value={carModel} onChange={(e) => setCarModel(e.target.value)} />
        <input type="number" placeholder="Min Price" className="w-32 px-4 py-2 text-black rounded" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
        <input type="number" placeholder="Max Price" className="w-32 px-4 py-2 text-black rounded" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
        <label className="flex items-center text-white">
          <input type="checkbox" className="mr-2" checked={onlyInStock} onChange={(e) => setOnlyInStock(e.target.checked)} /> In Stock Only
        </label>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
        {categories.map((category) => (
          <button key={category} className={`px-4 py-2 rounded ${filter === category ? "bg-[#99edc3] text-black" : "border border-[#99edc3]"}`} onClick={() => setFilter(category)}>
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.name} className="bg-gray-900 p-4 rounded-lg text-center">
              <div className="w-full h-56 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-xl font-semibold mt-3">{product.name}</h2>
              <p>{product.make} {product.model}</p>
              <p className="text-[#99edc3]">Ksh {product.price}</p>

              {/* Add to Cart Button */}
              <button className="mt-4 bg-[#99edc3] text-black px-4 py-2 rounded" onClick={() => handleAddToCart(product)}>Add to Cart</button>

              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate("/order-payment")}>
                Buy Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-red-500 col-span-full">No products found matching your criteria.</p>
        )}
      </div>
    </section>
  );
};

export default Products;

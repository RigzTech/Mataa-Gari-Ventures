import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Products = () => {
  // State Management
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [notification, setNotification] = useState(null);
  const [categoryDescription, setCategoryDescription] = useState("");
  const { addToCart, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // List of Car Makes
  const allCarMakes = [
    "Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz",
    "Volkswagen", "Audi", "Hyundai", "Kia", "Subaru", "Mazda", "Lexus",
    "Jeep", "Dodge", "Chrysler", "Ram", "Cadillac", "Buick", "GMC",
    "Tesla", "Volvo", "Porsche", "Jaguar", "Land Rover", "Infiniti",
    "Acura", "Mini", "Mitsubishi", "Alfa Romeo", "Fiat", "Suzuki",
    "Peugeot", "Renault", "Skoda", "Seat","Isuzu"
  ];

  // Categories
  const categories = ["All", "Lighting", "Accessories", "Mirrors", "Body Parts", "Ex-Japan"];

  // Year Range Generation
  const currentYear = new Date().getFullYear();
  const yearRanges = [];
  for (let year = currentYear; year >= 1980; year -= 3) {
    yearRanges.push(`${year}-${year - 2 > 1980 ? year - 2 : 1980}`);
  }

  // Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://mataa-backend.onrender.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        const updatedProducts = data.products.map(({ name, make, model, year, description, price, imageUrl, stock }) => ({
          name,
          make,
          model,
          year,
          description,
          price,
          imageUrl,
          stock: stock || 0 // Added default stock value
        }));
        setProducts(updatedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Fetch Category Description
  useEffect(() => {
    if (filter !== "All") {
      const fetchCategoryDescription = async (category) => {
        try {
          const response = await fetch(`https://mataa-backend.onrender.com/category-description?category=${category}`);
          if (!response.ok) {
            throw new Error("Failed to fetch category description");
          }
          const data = await response.json();
          setCategoryDescription(data.description);
        } catch (error) {
          console.error("Error fetching category description:", error);
        }
      };

      fetchCategoryDescription(filter);
    } else {
      setCategoryDescription("");
    }
  }, [filter]);

  // Filter Products
  const filteredProducts = products.filter((product) => {
    const matchesCategory = filter === "All" || product.description?.includes(filter);
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMake = carMake === "" || product.make.toLowerCase() === carMake.toLowerCase();
    const matchesModel = carModel === "" || product.model.toLowerCase().includes(carModel.toLowerCase());
    const matchesYear = carYear === "" || 
      (product.year >= Number(carYear.split("-")[1]) && product.year <= Number(carYear.split("-")[0]));
    const matchesPrice =
      (minPrice === "" || product.price >= Number(minPrice)) &&
      (maxPrice === "" || product.price <= Number(maxPrice));
    const matchesStock = !onlyInStock || product.stock > 0;

    return matchesCategory && matchesSearch && matchesMake && matchesModel && matchesYear && matchesPrice && matchesStock;
  });

  return (
    <section className="bg-black text-white py-16 px-4">
      {/* Shopping Cart Icon */}
      <div 
        className="fixed top-4 right-4 cursor-pointer z-50" 
        onClick={() => navigate("/order-payment")}
      >
        <FaShoppingCart className="text-3xl text-[#99edc3] hover:text-green-400 transition" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </div>

      {/* Notification Banner */}
      {notification && (
        <div className="fixed top-16 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-500">
          {notification}
        </div>
      )}

      {/* Page Title */}
      <h1 className="text-5xl font-bold text-[#99edc3] text-center mb-6">Our Products</h1>

      {/* Filters Section */}
      <div className="flex flex-wrap justify-start gap-4 mb-6">
        <input 
          type="text" 
          placeholder="Search by product name..." 
          className="px-4 py-2 text-black rounded"
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />

        <select 
          className="px-4 py-2 text-black rounded" 
          value={carMake} 
          onChange={(e) => setCarMake(e.target.value)}
        >
          <option value="">Filter by car make...</option>
          {allCarMakes.map((make) => (
            <option key={make} value={make}>{make}</option>
          ))}
        </select>

        <input 
          type="text" 
          placeholder="Filter by car model..." 
          className="px-4 py-2 text-black rounded"
          value={carModel} 
          onChange={(e) => setCarModel(e.target.value)} 
        />

        <select 
          className="px-4 py-2 text-black rounded" 
          value={carYear} 
          onChange={(e) => setCarYear(e.target.value)}
        >
          <option value="">Filter by year range...</option>
          {yearRanges.map((range) => (
            <option key={range} value={range}>{range}</option>
          ))}
        </select>

        <input 
          type="number" 
          placeholder="Min Price" 
          className="px-4 py-2 text-black rounded"
          value={minPrice} 
          onChange={(e) => setMinPrice(e.target.value)} 
        />
        
        <input 
          type="number" 
          placeholder="Max Price" 
          className="px-4 py-2 text-black rounded"
          value={maxPrice} 
          onChange={(e) => setMaxPrice(e.target.value)} 
        />

        <label className="text-gray-300 flex items-center gap-2">
          <input 
            type="checkbox" 
            checked={onlyInStock} 
            onChange={() => setOnlyInStock(!onlyInStock)} 
            className="cursor-pointer" 
          />
          Only show products in stock
        </label>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded ${filter === category ? "bg-[#99edc3] text-black" : "border border-[#99edc3]"}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Category Description */}
      {categoryDescription && (
        <p className="text-center text-gray-300 mb-6">{categoryDescription}</p>
      )}

      {/* Products Display Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.name} className="bg-gray-900 p-4 rounded-lg text-center">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-56 object-cover rounded-lg" 
              />
              <h2 className="text-xl font-semibold mt-3">{product.name}</h2>
              <p>{product.make} {product.model} ({product.year})</p>
              <p className="text-[#99edc3]">Ksh {product.price}</p>

              <button 
                className="mt-4 bg-[#99edc3] text-black px-4 py-2 rounded"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <button 
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => navigate("/order-payment")}
              >
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
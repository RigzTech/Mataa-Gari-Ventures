import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductShowcase = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // State for search and filters
  const [searchQuery, setSearchQuery] = useState("");
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [onlyInStock, setOnlyInStock] = useState(false);

  // List of Car Makes
  const allCarMakes = [
    "Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz",
    "Volkswagen", "Audi", "Hyundai", "Kia", "Subaru", "Mazda", "Lexus",
    "Jeep", "Dodge", "Chrysler", "Ram", "Cadillac", "Buick", "GMC",
    "Tesla", "Volvo", "Porsche", "Jaguar", "Land Rover", "Infiniti",
    "Acura", "Mini", "Mitsubishi", "Alfa Romeo", "Fiat", "Suzuki",
    "Peugeot", "Renault", "Skoda", "Seat"
  ];

  // Year Range Generation
  const currentYear = new Date().getFullYear();
  const yearRanges = [];
  for (let year = currentYear; year >= 1980; year -= 3) {
    yearRanges.push(`${year}-${year - 2 > 1980 ? year - 2 : 1980}`);
  }

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://mataa-backend.onrender.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data);

        if (data.success && Array.isArray(data.products)) {
          const updatedProducts = data.products.map(product => ({
            ...product,
            stock: product.stock || 0 // Ensure stock is defined
          }));
          setProducts(updatedProducts);
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search and filter criteria
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMake = carMake === "" || product.make.toLowerCase() === carMake.toLowerCase();
    const matchesModel = carModel === "" || product.model.toLowerCase().includes(carModel.toLowerCase());
    const matchesYear = carYear === "" || 
      (product.year >= Number(carYear.split("-")[1]) && product.year <= Number(carYear.split("-")[0]));
    const matchesPrice =
      (minPrice === "" || product.price >= Number(minPrice)) &&
      (maxPrice === "" || product.price <= Number(maxPrice));
    const matchesStock = !onlyInStock || product.stock > 0;

    return matchesSearch && matchesMake && matchesModel && matchesYear && matchesPrice && matchesStock;
  });

  // Show error message if fetching fails
  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <section className="bg-gray-900 text-white py-16 px-4 md:px-10">
      <h2 className="text-4xl font-bold text-[#99edc3] mb-8 text-center">
        Products
      </h2>

      {/* Search and Filter Section */}
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

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-400">No products found.</p>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full md:w-4/5 mx-auto"
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product._id}>
              <div className="bg-black p-6 rounded-lg shadow-lg text-center">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-64 object-contain mb-4 mx-auto"
                  onError={(e) => (e.target.src = "/placeholder.jpg")}
                />
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-400">Make: {product.make}</p>
                <p className="text-gray-400">Model: {product.model}</p>
                <p className="text-gray-400">Description: {product.description}</p>
                <p className="text-[#99edc3] font-bold">
                  Ksh {product.price.toLocaleString()}
                </p>
                
                <button
                  className="mt-4 bg-[#99edc3] text-black px-4 py-2 rounded transition transform hover:scale-105"
                  onClick={() => navigate("/products")}
                >
                  View Details
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default ProductShowcase;
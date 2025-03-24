import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductShowcase = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [error, setError] = useState(null); // Track errors
  const navigate = useNavigate();

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://mataa-backend.onrender.com/products");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data); // Debugging log

        if (data.success && Array.isArray(data.products)) {
          setProducts(data.products); // Correctly extracting products array
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

  // Show error message if fetching fails
  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <section className="bg-gray-900 text-white py-16 px-4 md:px-10">
      <h2 className="text-4xl font-bold text-[#99edc3] mb-8 text-center">
        Products
      </h2>

      {products.length === 0 ? (
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
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <div className="bg-black p-6 rounded-lg shadow-lg text-center">
                <img
                  src={product.imageUrl} // Corrected image source
                  alt={product.name}
                  className="w-full h-64 object-contain mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-400">Make: {product.make}</p>
                <p className="text-gray-400">Model: {product.model}</p>
                <p className="text-gray-400">Description: {product.description}</p> {/* Added description */}
                <p className="text-[#99edc3] font-bold">Ksh {product.price.toLocaleString()}</p>
                
                <button
                  className="mt-4 bg-[#99edc3] text-black px-4 py-2 rounded transition transform hover:scale-105"
                  onClick={() => navigate("/products")} // Navigate to /products page
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

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductShowcase = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://mataa-backend.onrender.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        console.log("Fetched Products:", data); // Debugging: Check API response
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="bg-black p-6 rounded-lg shadow-lg text-center">
                <img
                  src={product.imageUrl} // Updated to use the correct image field
                  alt={product.name}
                  className="w-full h-64 object-contain mb-4 mx-auto"
                  onError={(e) => (e.target.src = "/placeholder.jpg")} // Fallback image
                />
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <button
                  className="mt-4 bg-[#99edc3] text-black px-4 py-2 rounded transition transform hover:scale-105"
                  onClick={() => navigate("/products")}
                >
                  Shop Now
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

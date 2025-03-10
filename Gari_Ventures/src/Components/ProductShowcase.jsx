import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import product1 from "../assets/headlight.png";
import product2 from "../assets/side-mirror.jpg";
import product3 from "../assets/bumper.png";
import product4 from "../assets/bumper3.jpg";

const products = [
  { name: "Headlights", image: product1 },
  { name: "Side Mirrors", image: product2 },
  { name: "Bumpers", image: product3 },
  { name: "Bumper Variant", image: product4 },
];

const ProductShowcase = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <section className="bg-gray-900 text-white py-16 px-10">
      <h2 className="text-4xl font-bold text-green-500 mb-8 text-center">Products</h2>

      {/* Swiper for sliding product boxes */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3} // Show 3 products at a time
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-4/5 mx-auto"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-black p-6 rounded-lg shadow-lg text-center">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              {/* Shop Now Button - Navigates to /products */}
              <button
                className="mt-4 bg-green-500 text-black px-4 py-2 rounded transition transform hover:scale-105"
                onClick={() => navigate("/products")} // Redirect on click
              >
                Shop Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductShowcase;

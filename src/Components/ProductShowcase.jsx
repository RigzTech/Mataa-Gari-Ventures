import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProductContext } from "../context/ProductContext"; // Import context

const ProductShowcase = () => {
  const { filteredProducts = [] } = useContext(ProductContext) || {}; // Default to empty array
  const navigate = useNavigate();

  return (
    <section className="bg-gray-900 text-white py-16 px-4 md:px-10">
      <h2 className="text-4xl font-bold text-[#99edc3] mb-8 text-center">
        Products
      </h2>

      {/* Ensure filteredProducts exists before checking length */}
      {filteredProducts?.length === 0 ? (
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
          {filteredProducts.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="bg-black p-6 rounded-lg shadow-lg text-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain mb-4 mx-auto"
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

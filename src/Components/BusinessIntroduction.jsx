import React from "react";
import { useNavigate } from "react-router-dom";

const BusinessIntroduction = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-16 px-4 flex justify-center">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Card */}
        <div className="text-center bg-emerald-50 p-8 rounded-xl shadow-2xl border-2 border-emerald-100">
          <h2 className="text-4xl font-bold text-emerald-800 mb-4 font-serif">
            Our Products
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-black">
            We specialize in premium automotive parts including headlamps, taillamps, 
            LED lighting systems, and side mirrors. All products meet strict quality 
            standards for durability and performance.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="bg-emerald-700 text-white font-bold text-lg px-6 py-3 rounded-lg 
                      transition-all hover:scale-105 hover:bg-emerald-800 hover:shadow-md"
          >
            Explore Products
          </button>
        </div>

        {/* Second Card */}
        <div className="text-center bg-emerald-50 p-8 rounded-xl shadow-2xl border-2 border-emerald-100">
          <h2 className="text-4xl font-bold text-emerald-800 mb-4 font-serif">
            Our Commitment
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-black">
            As a Nairobi-based startup, we're committed to providing affordable 
            automotive solutions with expert technical support and fast delivery 
            services across Kenya.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="bg-emerald-700 text-white font-bold text-lg px-6 py-3 rounded-lg 
                      transition-all hover:scale-105 hover:bg-emerald-800 hover:shadow-md"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessIntroduction;
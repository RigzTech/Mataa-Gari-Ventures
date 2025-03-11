import React from "react";
import { useNavigate } from "react-router-dom";

const BusinessIntroduction = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white py-16 px-4 flex justify-center">
      <div className="container max-w-4xl text-center bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-[#99edc3] mb-4">Business Introduction</h2>
        <p className="text-lg leading-relaxed mb-6">
          Mataa Gari Ventures is a Nairobi-based startup specializing in high-quality car auto spares.
          We provide affordable and durable parts including headlamps, taillamps, side mirrors, and LEDs.
        </p>
        
        {/* Check Our Products Button */}
        <button
          onClick={() => navigate("/products")}
          className="bg-[#99edc3] text-black font-bold text-lg px-6 py-3 rounded-lg transition transform hover:scale-105 hover:bg-[#7dd6a7]"
        >
          Check Our Products
        </button>
      </div>
    </section>
  );
};

export default BusinessIntroduction;

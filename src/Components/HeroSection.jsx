import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import heroImage from "../assets/hero-car.jpg"; // Replace with actual image path

const HeroSection = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <section className="relative bg-black text-white py-20 px-10 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Car" className="w-full h-full object-cover opacity-30" />
      </div>

      {/* Left Side - Text Content */}
      <div className="relative z-10 max-w-xl text-center md:text-left animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#99edc3] uppercase leading-tight drop-shadow-lg">
          Your Trusted Auto Spares Dealer
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Specializing in Headlamps, Taillamps, Side Lamps & LEDs for all car models.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          {/* Shop Now Button - Navigates to /products */}
          <button
            className="bg-[#99edc3] text-black px-6 py-3 rounded shadow-md transition transform hover:scale-105 hover:bg-[#7dccac]"
            onClick={() => navigate("/products")} // Redirect on click
          >
            Shop Now
          </button>

          {/* Get a Quote Button - Now Redirects to /get-quote */}
          <button
            className="border border-[#99edc3] px-6 py-3 rounded text-[#99edc3] hover:bg-[#99edc3] hover:text-black transition transform hover:scale-105"
            onClick={() => navigate("/get-quote")} // Redirects to Get a Quote page
          >
            Get a Quote
          </button>
        </div>
      </div>

      {/* Right Side - Car Image (for larger screens only) */}
      <div className="relative z-10 w-full md:w-1/2 hidden md:block animate-slideInRight">
        <img src={heroImage} alt="Car" className="w-full rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero-car.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-black text-white py-20 px-10 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Car" className="w-full h-full object-cover opacity-30" />
      </div>

      {/* Text Content Container */}
      <div className="relative z-10 max-w-xl text-center md:text-left animate-fadeIn">
        <div className="bg-emerald-50 p-8 rounded-xl shadow-2xl"> {/* Added container */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-800 uppercase leading-tight">
            Your Trusted Auto Spares Dealer
          </h1>
          <p className="mt-4 text-lg text-emerald-700">
            Specializing in Headlamps, Taillamps, Side Lamps & LEDs for all car models.
          </p>
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <button
              className="bg-emerald-700 text-white px-6 py-3 rounded shadow-md transition transform hover:scale-105 hover:bg-emerald-800"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
            <button
              className="border border-emerald-700 text-emerald-700 px-6 py-3 rounded hover:bg-emerald-700 hover:text-white transition transform hover:scale-105"
              onClick={() => navigate("/get-quote")}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Car Image */}
      <div className="relative z-10 w-full md:w-1/2 hidden md:block animate-slideInRight">
        <img src={heroImage} alt="Car" className="w-full rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default HeroSection;
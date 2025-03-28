import React from "react";
import Testimonials from "../Components/Testimonials";
import aboutImage from "../assets/about-bg.jpg"; // Hero section background image
import ctaBg from "../assets/bg3.jpg"; // Call-to-Action background image
import { FaTruck, FaExchangeAlt, FaShoppingBag, FaShieldAlt } from "react-icons/fa"; // Importing icons

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-fixed bg-center text-white py-32 px-10 text-center"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 max-w-4xl mx-auto p-10 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg">
          <h1 className="text-6xl font-extrabold text-[#99edc3] mb-6 uppercase drop-shadow-lg">
            About Us
          </h1>
          <p className="text-lg leading-relaxed">
            Mataa Gari Ventures specializes in high-quality car auto spares, 
            providing reliable and affordable parts such as headlamps, taillamps, 
            side mirrors, bumpers, and LEDs. We are committed to delivering excellence.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-gray-900 text-white py-16 px-10 flex justify-center">
        <div className="max-w-5xl bg-gray-800 p-10 rounded-lg shadow-lg border border-gray-700 text-center">
          <h2 className="text-4xl font-bold text-[#99edc3] mb-6">Who We Are</h2>
          <p className="text-lg leading-relaxed">
            At Mataa Gari Ventures, we are passionate about ensuring your vehicle gets the best auto spares. 
            Our team sources high-quality, durable, and affordable car parts to meet your needs. 
            Whether it's headlights, taillamps, or side mirrors, we guarantee genuine products.
          </p>
        </div>
      </section>

      {/* Key Services Section - Dark Themed */}
      <section className="bg-gray-950 text-white py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#99edc3] text-center mb-12 uppercase">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Service Item */}
            {[
              //{ icon: <FaTruck />, title: "FREE DELIVERY*" },
              { icon: <FaExchangeAlt />, title: "14 DAY RETURNS" },
              { icon: <FaShoppingBag />, title: "CLICK & COLLECT" },
              { icon: <FaShieldAlt />, title: "GENUINE PARTS" },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-all hover:scale-105 hover:shadow-xl border border-gray-700"
              >
                <div className="text-5xl text-[#99edc3] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black text-white py-16 px-10 flex justify-center">
        <div className="max-w-5xl bg-gray-900 p-10 rounded-lg shadow-lg border border-gray-700 w-full">
          <Testimonials />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        className="relative bg-cover bg-fixed bg-center text-white py-24 text-center"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-4xl mx-auto p-10 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-[#99edc3]">
            Looking for Reliable Auto Spares?
          </h2>
          <p className="text-lg mt-2">Explore our high-quality products today.</p>
          <button
            className="mt-6 bg-[#99edc3] text-black font-semibold px-6 py-3 rounded transition transform hover:scale-105 hover:bg-green-300"
            onClick={() => (window.location.href = "/products")}
          >
            View Products
          </button>
        </div>
      </section>
    </>
  );
};

export default About;

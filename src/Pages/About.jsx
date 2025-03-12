import React from "react";
import Testimonials from "../Components/Testimonials";
import aboutImage from "../assets/about-bg.jpg"; // Hero section background image
import ctaBg from "../assets/bg3.jpg"; // Call-to-Action background image
import { FaCheckCircle, FaUsers, FaTools, FaHandshake, FaEye, FaBullseye } from "react-icons/fa";

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

      {/* Mission and Vision Section */}
      <section className="bg-black text-white py-16 px-10 flex justify-center">
        <div className="max-w-5xl bg-gray-900 p-10 rounded-lg shadow-lg border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="flex flex-col items-center text-center">
              <FaBullseye className="text-[#99edc3] text-6xl mb-4" />
              <h3 className="text-3xl font-bold text-[#99edc3] mb-3">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                Delivering top-quality, durable, and affordable car parts to ensure customer satisfaction 
                and vehicle safety. We strive to offer the best solutions for all auto spare needs.
              </p>
            </div>

            {/* Vision */}
            <div className="flex flex-col items-center text-center">
              <FaEye className="text-[#99edc3] text-6xl mb-4" />
              <h3 className="text-3xl font-bold text-[#99edc3] mb-3">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To be the leading supplier of high-quality car auto parts in Kenya, 
                known for reliability, innovation, and customer trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-900 text-white py-16 px-10 flex justify-center">
        <div className="max-w-6xl bg-gray-800 p-10 rounded-lg shadow-lg border border-gray-700 text-center">
          <h2 className="text-4xl font-bold text-[#99edc3] mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <FaCheckCircle className="text-[#99edc3] text-5xl mb-3" />
              <h3 className="text-xl font-semibold text-[#99edc3]">Quality Assurance</h3>
              <p>We provide only the best, ensuring durability and performance.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaUsers className="text-[#99edc3] text-5xl mb-3" />
              <h3 className="text-xl font-semibold text-[#99edc3]">Customer Satisfaction</h3>
              <p>Your happiness is our priority – we ensure top-notch service.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaTools className="text-[#99edc3] text-5xl mb-3" />
              <h3 className="text-xl font-semibold text-[#99edc3]">Expertise</h3>
              <p>We have years of experience in the auto parts industry.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaHandshake className="text-[#99edc3] text-5xl mb-3" />
              <h3 className="text-xl font-semibold text-[#99edc3]">Trust & Reliability</h3>
              <p>We build long-term relationships with customers based on trust.</p>
            </div>
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

import React from "react";
import Testimonials from "../Components/Testimonials";
import aboutImage from "../assets/about-bg.jpg"; // Hero section background image
import ctaBg from "../assets/bg3.jpg"; // Call-to-Action background image
import { FaCheckCircle, FaUsers, FaTools, FaHandshake, FaEye, FaBullseye } from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <section
        className="relative bg-cover bg-fixed bg-center text-white py-32 px-10 text-center"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold text-yellow-400 mb-6 uppercase drop-shadow-lg">
            About Us
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            Mataa Gari Ventures specializes in high-quality car auto spares,
            providing reliable and affordable parts such as headlamps, taillamps,
            side mirrors, bumpers, and LEDs. We are committed to delivering excellence.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-gray-900 text-white py-16 px-10 text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8">Who We Are</h2>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed">
          At Mataa Gari Ventures, we are passionate about ensuring your vehicle gets the best auto spares.
          Our team sources high-quality, durable, and affordable car parts to meet your needs.
          Whether it's headlights, taillamps, or side mirrors, we guarantee genuine products.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-black text-white py-16 px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="flex flex-col items-center text-center">
            <FaBullseye className="text-yellow-400 text-6xl mb-4" />
            <h3 className="text-3xl font-bold text-yellow-400 mb-3">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              Delivering top-quality, durable, and affordable car parts to ensure customer satisfaction
              and vehicle safety. We strive to offer the best solutions for all auto spare needs.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center text-center">
            <FaEye className="text-yellow-400 text-6xl mb-4" />
            <h3 className="text-3xl font-bold text-yellow-400 mb-3">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              To be the leading supplier of high-quality car auto parts in Kenya,
              known for reliability, innovation, and customer trust.
            </p>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="bg-gray-900 text-white py-16 px-10">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <FaCheckCircle className="text-yellow-400 text-5xl mb-3" />
            <h3 className="text-xl font-semibold">Quality Assurance</h3>
            <p>We provide only the best, ensuring durability and performance.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaUsers className="text-yellow-400 text-5xl mb-3" />
            <h3 className="text-xl font-semibold">Customer Satisfaction</h3>
            <p>Your happiness is our priority – we ensure top-notch service.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaTools className="text-yellow-400 text-5xl mb-3" />
            <h3 className="text-xl font-semibold">Expertise</h3>
            <p>We have years of experience in the auto parts industry.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaHandshake className="text-yellow-400 text-5xl mb-3" />
            <h3 className="text-xl font-semibold">Trust & Reliability</h3>
            <p>We build long-term relationships with customers based on trust.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black text-white py-16 px-10">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-8">Testimonials</h2>
        <Testimonials />
      </section>

      {/* Call-to-Action Section with Background Image */}
      <section
        className="relative bg-cover bg-fixed bg-center text-white py-24 text-center"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold">Looking for Reliable Auto Spares?</h2>
          <p className="text-lg mt-2">Explore our high-quality products today.</p>
          <button
            className="mt-6 bg-yellow-400 text-black font-semibold px-6 py-3 rounded transition transform hover:scale-105 hover:bg-yellow-500"
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

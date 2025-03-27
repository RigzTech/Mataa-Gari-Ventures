import React from "react";

const AboutUs = () => {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="bg-green-700 text-white py-16 px-10 text-center rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-800 max-w-3xl">
        <h2 className="text-4xl font-bold text-[#99edc3] mb-4">About Us</h2>
        <p className="text-lg">
          Mataa Gari Ventures is committed to providing high-quality car parts across Kenya.
          Our mission is to ensure affordability, trust, and excellent customer service.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;

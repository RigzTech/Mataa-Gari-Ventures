import React from "react";

const AboutUs = () => {
  return (
    <section className="flex justify-center items-center py-8 px-10 mb-0">
      <div className="bg-green-700 text-white py-16 px-10 text-center rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-800 max-w-7xl w-full">
        <h2 className="text-4xl font-bold text-[#99edc3] mb-8">About Us</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: We sell car spare parts */}
          <div className="bg-green-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Car Spare Parts</h3>
            <p className="text-lg">
              Mataa Gari Ventures offers a wide range of high-quality car spare parts. We ensure the best prices and top-notch reliability for your vehicle.
            </p>
          </div>

          {/* Card 2: Customer Service */}
          <div className="bg-green-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Customer Service</h3>
            <p className="text-lg">
              We prioritize excellent customer service. Our team is dedicated to providing professional advice and support to help you find the right parts.
            </p>
          </div>

          {/* Card 3: Affordable Pricing */}
          <div className="bg-green-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Affordable Pricing</h3>
            <p className="text-lg">
              We believe in providing high-quality products at competitive prices. Get the best value for your money with Mataa Gari Ventures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import React from "react";

const AboutUs = () => {
  return (
    <section className="flex justify-center items-center py-8 px-10 mb-0 bg-white">
      <div className="bg-green-700 text-emerald-700 py-16 px-10 text-center rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl max-w-7xl w-full border-2 border-emerald-100">
        <h2 className="text-4xl font-bold text-black mb-8 font-serif">About Us</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: We sell car spare parts */}
          <div className="bg-emerald-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border-2 border-emerald-200 hover:border-emerald-300">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">Car Spare Parts</h3>
            <p className="text-emerald-900">
              Mataa Gari Ventures offers a wide range of high-quality car spare parts. We ensure the best prices and top-notch reliability for your vehicle.
            </p>
          </div>

          {/* Card 2: Customer Service */}
          <div className="bg-emerald-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border-2 border-emerald-200 hover:border-emerald-300">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">Customer Service</h3>
            <p className="text-emerald-900">
              We prioritize excellent customer service. Our team is dedicated to providing professional advice and support to help you find the right parts.
            </p>
          </div>

          {/* Card 3: Affordable Pricing */}
          <div className="bg-emerald-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border-2 border-emerald-200 hover:border-emerald-300">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">Affordable Pricing</h3>
            <p className="text-emerald-900">
              We believe in providing high-quality products at competitive prices. Get the best value for your money with Mataa Gari Ventures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
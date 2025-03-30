import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const ContactSection = () => {
  return (
<<<<<<< HEAD
    <section className="flex justify-center items-center py-8 px-10 mt-0">
      <div className="bg-gray-900 text-black rounded-lg shadow-lg p-8 max-w-4xl w-full text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-800">
        <h2 className="text-4xl font-bold text-[#99edc3] mb-8">Contact Us</h2>
=======
<section className="flex justify-center items-center py-8 px-10 mt-0 bg-emerald-50">
        <div className="bg-black text-white rounded-lg shadow-lg p-8 max-w-4xl w-full text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-green-600">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8">Contact Us</h2>
>>>>>>> c043e97fa565c89f36f035f1de98bb5477409217

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Card 1: Location */}
          <div className="bg-[#99edc3] p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-black-800 mb-4">Our Location</h3>
            <p className="text-lg">
              Nairobi, Kirinyaga Road, MSP Plaza, Ground Floor, Store G09
            </p>
          </div>

          {/* Card 2: Contact Information */}
          <div className="bg-[#99edc3] p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-black-500 mb-4">Contact Information</h3>
            <p className="text-lg">Email: mataagariventures@gmail.com</p>
            <p className="text-lg">WhatsApp: 0796 383719</p>
          </div>
        </div>

        <div className="mt-6">
          {/* Button wrapped with Link */}
          <Link to="/contact">
            <button className="bg-blue-600 text-black px-6 py-3 rounded-lg shadow-md transition-transform duration-200 hover:scale-110 hover:bg-[#99edc3]">
              Contact Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

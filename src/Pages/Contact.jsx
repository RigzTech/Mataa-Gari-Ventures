import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

import bgImage from "../assets/contactus1.jpg"; // Ensure this image is in the assets folder

const Contact = () => {
  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <section
        className="relative bg-cover bg-fixed bg-center text-white py-32 px-10 text-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold text-[#99edc3] uppercase drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="bg-gray-900 text-white py-16 px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#99edc3] mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-300 mb-6">
              We’d love to hear from you! Whether you have questions about our products, pricing, or anything else, our team is ready to help.
            </p>

            <div className="space-y-4">
              <p className="flex items-center space-x-3">
                <FaPhone className="w-6 h-6 text-[#99edc3]" />
                <span>+254 796383719</span>
              </p>
              <p className="flex items-center space-x-3">
                <FaEnvelope className="w-6 h-6 text-[#99edc3]" />
                <span>info@mataagariventures.com</span>
              </p>
              <p className="flex items-center space-x-3">
                <FaMapMarkerAlt className="w-6 h-6 text-[#99edc3]" />
                <span>Nairobi, Kenya</span>
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-[#99edc3] text-2xl hover:text-[#80d4aa]">
                <FaFacebook />
              </a>
              <a href="#" className="text-[#99edc3] text-2xl hover:text-[#80d4aa]">
                <FaInstagram />
              </a>
              <a href="#" className="text-[#99edc3] text-2xl hover:text-[#80d4aa]">
                <FaTwitter />
              </a>
              <a href="#" className="text-[#99edc3] text-2xl hover:text-[#80d4aa]">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#99edc3] mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 rounded bg-gray-700 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-[#99edc3]"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 rounded bg-gray-700 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-[#99edc3]"
              />
              <textarea 
                placeholder="Your Message" 
                rows="4" 
                className="w-full p-3 rounded bg-gray-700 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-[#99edc3]"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-[#99edc3] text-black font-bold py-3 rounded hover:bg-[#80d4aa] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

    </>
  );
};

export default Contact;

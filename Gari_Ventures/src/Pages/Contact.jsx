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
          <h1 className="text-6xl font-extrabold text-green-500 uppercase drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="bg-gray-900 text-white py-16 px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-green-400 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-300 mb-6">
              We’d love to hear from you! Whether you have questions about our products, pricing, or anything else, our team is ready to help.
            </p>

            <div className="space-y-4">
              <p className="flex items-center space-x-3">
                <FaPhone className="w-6 h-6 text-green-500" />
                <span>+254 712 345 678</span>
              </p>
              <p className="flex items-center space-x-3">
                <FaEnvelope className="w-6 h-6 text-green-500" />
                <span>info@mataagariventures.com</span>
              </p>
              <p className="flex items-center space-x-3">
                <FaMapMarkerAlt className="w-6 h-6 text-green-500" />
                <span>Nairobi, Kenya</span>
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-green-500 text-2xl hover:text-green-400">
                <FaFacebook />
              </a>
              <a href="#" className="text-green-500 text-2xl hover:text-green-400">
                <FaInstagram />
              </a>
              <a href="#" className="text-green-500 text-2xl hover:text-green-400">
                <FaTwitter />
              </a>
              <a href="#" className="text-green-500 text-2xl hover:text-green-400">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-400 mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 rounded bg-gray-700 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 rounded bg-gray-700 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <textarea 
                placeholder="Your Message" 
                rows="4" 
                className="w-full p-3 rounded bg-gray-700 bg-opacity-70 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-green-500 text-black font-bold py-3 rounded hover:bg-green-400 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map Embed */}
      <section className="relative w-full h-64">
        <iframe 
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.168769416407!2d36.8219!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4c4c4b4d9%3A0x3b2f0aede0d491a4!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1616192989289!5m2!1sen!2s" 
          allowFullScreen="" 
          loading="lazy">
        </iframe>
      </section>
    </>
  );
};

export default Contact;

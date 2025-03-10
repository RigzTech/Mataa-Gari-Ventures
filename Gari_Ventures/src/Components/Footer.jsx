import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold text-green-500">Contact Us</h2>
          <p className="mt-2">📍 Nairobi, Kenya</p>
          <p>📞 +254 712 345 678</p>
          <p>📧 info@mataagariventures.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-green-500">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-green-400">Home</a></li>
            <li><a href="/products" className="hover:text-green-400">Shop</a></li>
            <li><a href="/blog" className="hover:text-green-400">Blog</a></li>
            <li><a href="/about" className="hover:text-green-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold text-green-500">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" className="text-xl hover:text-green-400"><FaFacebook /></a>
            <a href="#" className="text-xl hover:text-green-400"><FaInstagram /></a>
            <a href="#" className="text-xl hover:text-green-400"><FaTwitter /></a>
            <a href="#" className="text-xl hover:text-green-400"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; 2025 Mataa Gari Ventures. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

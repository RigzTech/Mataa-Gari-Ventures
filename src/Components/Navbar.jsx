import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-emerald-50" style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MATAA GARI Logo" className="h-28 w-40" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          <Link to="/" className="text-black hover:text-gray-400 transition">Home</Link>
          <Link to="/about" className="text-black hover:text-gray-400 transition">About</Link>
          <Link to="/products" className="text-black hover:text-gray-400 transition">Products</Link>
          <Link to="/blog" className="text-black hover:text-gray-400 transition">Blogs</Link>
          <Link to="/contact" className="text-black hover:text-gray-400 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-3xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isOpen && (
        <div style={{ textAlign: "center", padding: "12px", borderTop: "1px solid #333" }}>
          <div className="mt-4 pt-4">
            <Link to="/" className="block py-2 text-black hover:text-gray-400">Home</Link>
            <Link to="/about" className="block py-2 text-black hover:text-gray-400">About</Link>
            <Link to="/products" className="block py-2 text-black hover:text-gray-400">Products</Link>
            <Link to="/blog" className="block py-2 text-black hover:text-gray-400">Blogs</Link>
            <Link to="/contact" className="block py-2 text-black hover:text-gray-400">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

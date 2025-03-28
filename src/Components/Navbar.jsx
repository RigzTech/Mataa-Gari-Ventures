import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import menu icons
import logo from "../assets/mataa_logo.jpg"; // Import your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo (Left-Aligned) */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MATAA GARI Logo" className="h-28 w-40" />
        </Link>

        {/* Desktop & Mobile Menu */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-400 transition">About</Link>
          <Link to="/products" className="hover:text-gray-400 transition">Products</Link>
          <Link to="/blog" className="hover:text-gray-400 transition">Blogs</Link>
          <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
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
        <div className="md:hidden bg-black text-white text-center py-3 border-t border-gray-700">
          <Link to="/" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/products" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/blog" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link to="/contact" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link>

          {/* Product Categories (Dropdown) */}
          <div className="mt-3 border-t border-gray-700 pt-3">
            <p className="text-lg font-bold">Categories</p>
            <Link to="/products#lighting" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>Lighting</Link>
            <Link to="/products#accessories" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>Accessories</Link>
            <Link to="/products#mirrors" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>Mirrors</Link>
            <Link to="/products#body-parts" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>Body Parts</Link>
            <Link to="/products#ex-japan" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>Ex-Japan</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

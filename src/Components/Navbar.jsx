import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import menu icons
import logo from "../assets/logo.webp"; // Import your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo - Increased Size */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MATAA GARI Logo" className="h-28 w-40" /> {/* Bigger logo */}
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400 transition">About</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-400 transition">Services</Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-gray-400 transition">Blogs</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-3xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black text-white text-center space-y-4 py-4 border-t border-gray-700">
          <li>
            <Link to="/" className="block py-3 hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="block py-3 hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/services" className="block py-3 hover:text-gray-400" onClick={() => setIsOpen(false)}>Services</Link>
          </li>
          <li>
            <Link to="/contact" className="block py-3 hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

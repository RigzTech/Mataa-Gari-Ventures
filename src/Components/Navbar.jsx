import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import menu icons
import logo from "../assets/logo.webp"; // Import your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
<<<<<<< HEAD
        {/* Logo - Increased Size */}
=======
        {/* Logo (Left-Aligned) */}
>>>>>>> b6887213975c0da484ec10a82c23dd7b45a2ea60
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MATAA GARI Logo" className="h-28 w-40" /> {/* Bigger logo */}
        </Link>

<<<<<<< HEAD
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400 transition">About</Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-400 transition">Products</Link>
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
            <Link to="/products" className="block py-3 hover:text-gray-400" onClick={() => setIsOpen(false)}>Products</Link>
          </li>
          <li>
            <Link to="/contact" className="block py-3 hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
=======
        {/* Right-Aligned Section (Menu + Icon) */}
        <div className="flex items-center space-x-8 ml-auto">
          {/* Desktop Menu (Always Visible) */}
          <ul className="hidden md:flex space-x-10 text-lg font-medium">
            <li><Link to="/" className="hover:text-gray-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-400 transition">About</Link></li>
            <li><Link to="/products" className="hover:text-gray-400 transition">Products</Link></li>
            <li><Link to="/blog" className="hover:text-gray-400 transition">Blogs</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400 transition">Contact</Link></li>
          </ul>

          {/* Menu Button (Desktop & Mobile) */}
          <button 
            className="text-3xl focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Expanded Menu (Linked to Menu Icon) */}
      {isOpen && (
        <ul className="bg-black text-white text-right space-y-3 py-3 border-t border-gray-700">
          <li><Link to="/lighting" className="block py-3 hover:text-gray-400" onClick={() => setIsOpen(false)}>Lighting</Link></li>
          <li><Link to="/accessories" className="block py-3 hover:text-gray-400" onClick={() => setIsOpen(false)}>Accessories</Link></li>
          <li><Link to="/mirrors" className="block py-3 hover:text-gray-400" onClick={() => setIsOpen(false)}>Mirrors</Link></li>
          <li><Link to="/body-parts" className="block py-3 hover:text-gray-400" onClick={() => setIsOpen(false)}>Body Parts</Link></li>
          <li><Link to="/ex-japan" className="block py-3 hover:text-gray-400" onClick={() => setIsOpen(false)}>Ex-Japan</Link></li>
>>>>>>> b6887213975c0da484ec10a82c23dd7b45a2ea60
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

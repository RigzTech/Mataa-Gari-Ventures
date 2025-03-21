import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp"; // Import your logo

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-6 py-4">
        
        {/* Logo (Left-Aligned) */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MATAA GARI Logo" className="h-28 w-40" />
        </Link>

        {/* Main Navigation (Always Visible) */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-10 w-full md:w-auto mt-4 md:mt-0">
          <ul className="flex flex-wrap justify-center md:flex-row md:space-x-10 text-lg font-medium w-full">
            <li><Link to="/" className="hover:text-gray-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-400 transition">About</Link></li>
            <li><Link to="/products" className="hover:text-gray-400 transition">Products</Link></li>
            <li><Link to="/blog" className="hover:text-gray-400 transition">Blogs</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400 transition">Contact</Link></li>
          </ul>

          {/* Product Categories Menu (Commented Out) */}
          {/*
          <ul className="flex flex-wrap justify-center md:flex-row md:space-x-10 text-lg font-bold mt-4 md:mt-0 w-full">
            <li><Link to="/products#lighting" className="hover:text-gray-400 transition">Lighting</Link></li>
            <li><Link to="/products#accessories" className="hover:text-gray-400 transition">Accessories</Link></li>
            <li><Link to="/products#mirrors" className="hover:text-gray-400 transition">Mirrors</Link></li>
            <li><Link to="/products#body-parts" className="hover:text-gray-400 transition">Body Parts</Link></li>
            <li><Link to="/products#ex-japan" className="hover:text-gray-400 transition">Ex-Japan</Link></li>
          </ul>
          */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

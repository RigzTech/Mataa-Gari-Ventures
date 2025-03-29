import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext.jsx";
import { SunIcon, MoonIcon, SystemIcon } from "./icons.jsx";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Get theme context

  // Define inline styles for the light and dark modes
  const lightStyle = {
    backgroundColor: "#ffffff",
    color: "#000000",
  };

  const darkStyle = {
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
  };

  // Define navbar styles based on theme
  const navbarStyle = theme === "dark" ? darkStyle : lightStyle;

  return (
    <nav style={{ ...navbarStyle, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MATAA GARI Logo" className="h-28 w-40" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          <Link to="/" style={{ ...navbarStyle }} className="hover:text-gray-400 transition">Home</Link>
          <Link to="/about" style={{ ...navbarStyle }} className="hover:text-gray-400 transition">About</Link>
          <Link to="/products" style={{ ...navbarStyle }} className="hover:text-gray-400 transition">Products</Link>
          <Link to="/blog" style={{ ...navbarStyle }} className="hover:text-gray-400 transition">Blogs</Link>
          <Link to="/contact" style={{ ...navbarStyle }} className="hover:text-gray-400 transition">Contact</Link>
        </div>

        {/* Right Section (Theme Toggle + Mobile Menu) */}
        <div className="flex items-center gap-6">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            style={{ ...navbarStyle, padding: "8px", borderRadius: "50%", cursor: "pointer" }}
            className="hidden md:flex hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {theme === 'light' && <SunIcon className="w-6 h-6" />}
            {theme === 'dark' && <MoonIcon className="w-6 h-6" />}
            {theme === 'system' && <SystemIcon className="w-6 h-6" />}
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-3xl focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isOpen && (
        <div style={{ ...navbarStyle, textAlign: "center", padding: "12px", borderTop: "1px solid #333" }}>
          {/* Mobile Theme Toggle */}
          <div className="mt-4 pt-4">
            <button 
              onClick={toggleTheme}
              style={{ ...navbarStyle, display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", cursor: "pointer" }}
              aria-label="Toggle theme"
            >
              {theme === 'light' && <SunIcon className="w-6 h-6 mr-2" />}
              {theme === 'dark' && <MoonIcon className="w-6 h-6 mr-2" />}
              {theme === 'system' && <SystemIcon className="w-6 h-6 mr-2" />}
              <span>Toggle Theme</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

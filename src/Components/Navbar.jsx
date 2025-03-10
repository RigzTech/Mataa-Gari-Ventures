import React from "react"; 
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-6 flex items-center">
      {/* Push everything else to the right */}
      <h1 className="text-2xl font-bold text-[#99edc3] flex-1">MATAA GARI VENTURES</h1>
      
      <ul className="flex space-x-6 mr-6"> {/* Added margin-right for spacing */}
        <li><Link to="/" className="hover:text-[#7dccac]">Home</Link></li>
        <li><Link to="/about" className="hover:text-[#7dccac]">About Us</Link></li>
        <li><Link to="/products" className="hover:text-[#7dccac]">Products</Link></li>
        <li><Link to="/blog" className="hover:text-[#7dccac]">Blog</Link></li>
      </ul>

      <Link to="/contact">
        <button className="bg-[#99edc3] text-black px-4 py-2 rounded">Contact Us</button>
      </Link>
    </nav>
  );
};

export default Navbar;

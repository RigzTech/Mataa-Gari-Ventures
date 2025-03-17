import React from 'react';
import HeroSection from '../Components/HeroSection';
<<<<<<< HEAD
=======
import SearchBar from '../Components/SearchBar'; // Import the new SearchBar component
>>>>>>> b6887213975c0da484ec10a82c23dd7b45a2ea60
import BusinessIntroduction from '../Components/BusinessIntroduction';
import ProductShowcase from '../Components/ProductShowcase';
import AboutUs from '../Components/AboutUs';
import ContactSection from '../Components/ContactSection';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className="bg-dark text-white">
      {/* Hero Section */}
      <HeroSection />
<<<<<<< HEAD
      
      {/* Business Introduction */}
      <BusinessIntroduction />
=======

      {/* Business Introduction */}
      <BusinessIntroduction />

      
      {/* Search Bar */}
      <SearchBar />
>>>>>>> b6887213975c0da484ec10a82c23dd7b45a2ea60
      
      {/* Product Showcase */}
      <ProductShowcase />

    </div>
  );
};

export default Home;

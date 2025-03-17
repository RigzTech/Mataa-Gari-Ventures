import React from 'react';
import HeroSection from '../Components/HeroSection';
import SearchBar from '../Components/SearchBar';
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

      {/* Business Introduction */}
      <BusinessIntroduction />

      {/* Search Bar */}
      <SearchBar />
      
      {/* Product Showcase */}
      <ProductShowcase />

      {/* About Us Section */}
      <AboutUs />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

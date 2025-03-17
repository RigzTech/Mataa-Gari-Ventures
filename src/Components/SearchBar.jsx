import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext'; // Import the global context

const SearchBar = () => {
  const { setFilters } = useContext(ProductContext); // Access context to update filters
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const handleSearch = () => {
    setFilters({ make, model, year });
  };

  return (
    <div className="search-container">
      <style>{`
        .search-container {
          background-color: #111;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .search-select, .search-button {
          padding: 10px;
          font-size: 16px;
          border-radius: 5px;
          border: none;
          outline: none;
        }

        .search-select {
          width: 180px;
          background: #222;
          color: white;
        }

        .search-button {
          background: #99edc3;
          color: #000;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .search-button:hover {
          background: #77cfa4;
        }
      `}</style>

      {/* Make Dropdown */}
      <select className="search-select" value={make} onChange={(e) => setMake(e.target.value)}>
        <option value="">Select Make</option>
        <option value="Toyota">Toyota</option>
        <option value="Honda">Honda</option>
        <option value="Nissan">Nissan</option>
        <option value="Mazda">Mazda</option>
        <option value="Subaru">Subaru</option>
        <option value="Mitsubishi">Mitsubishi</option>
      </select>

      {/* Model Dropdown */}
      <select className="search-select" value={model} onChange={(e) => setModel(e.target.value)}>
        <option value="">Select Model</option>
        <option value="Corolla">Corolla</option>
        <option value="Civic">Civic</option>
        <option value="X-Trail">X-Trail</option>
        <option value="Demio">Demio</option>
        <option value="Forester">Forester</option>
        <option value="Lancer">Lancer</option>
      </select>

      {/* Year Dropdown */}
      <select className="search-select" value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="">Select Year</option>
        {Array.from({ length: 25 }, (_, i) => (
          <option key={i} value={2025 - i}>{2025 - i}</option>
        ))}
      </select>

      {/* Search Button */}
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;

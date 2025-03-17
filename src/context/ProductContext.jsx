import React, { createContext, useState } from 'react';

// Create a new context
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [filters, setFilters] = useState({ make: '', model: '', year: '' });

  return (
    <ProductContext.Provider value={{ filters, setFilters }}>
      {children}
    </ProductContext.Provider>
  );
};

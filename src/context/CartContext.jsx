import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      // Create a unique identifier for each product based on its properties
      const productId = `${product.name}-${product.make}-${product.model}`;
      
      const existingItem = prevCart.find(
        (item) => item.id === productId
      );
      
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevCart,
          { 
            ...product, 
            quantity: 1, 
            id: productId // Use our generated unique ID
          },
        ];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevCart) =>
      prevCart.map((item) => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, quantity) } 
          : item
      )
    );
  };

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
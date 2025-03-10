import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider> {/* Wrap App with CartProvider */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import mpesaLogo from "../assets/mpesa.jpg"; 
import visaLogo from "../assets/visa.jpg"; 
import mastercardLogo from "../assets/mastercard.jpg"; 

const OrderPayment = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "M-Pesa",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="container mx-auto p-6 text-white">
      <h2 className="text-4xl font-bold text-center text-green-500 mb-6">Checkout</h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-red-500">
          <p>Your cart is empty!</p>
          <button className="bg-green-500 px-4 py-2 mt-4 rounded" onClick={() => navigate("/products")}>
            Return to Shop
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Cart Summary */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-green-400">Your Cart</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <span className="text-lg font-semibold">{item.name}</span> <br />
                  <span className="text-gray-400">KES {item.price}</span>
                </div>
                <div className="flex space-x-2">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-red-500 px-3 py-1 rounded">-</button>
                  <span className="text-lg">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-green-500 px-3 py-1 rounded">+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600">
                  Remove
                </button>
              </div>
            ))}
            <div className="text-xl font-bold mt-4">Total: KES {totalAmount}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPayment;

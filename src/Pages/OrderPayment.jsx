import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import mpesaLogo from "../assets/Mpesa.jpeg"; 
import visaLogo from "../assets/Visa.png"; 
import mastercardLogo from "../assets/mastercard-icon.png"; 

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
      <h2 className="text-4xl font-bold text-center text-[#99edc3] mb-6">Checkout</h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-red-500">
          <p>Your cart is empty!</p>
          <button 
            className="bg-[#99edc3] text-black px-4 py-2 mt-4 rounded hover:bg-[#7fcfa8]" 
            onClick={() => navigate("/products")}
          >
            Return to Shop
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cart Summary */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#99edc3]">Your Cart</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <span className="text-lg font-semibold">{item.name}</span> <br />
                  <span className="text-gray-400">KES {item.price}</span>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                    className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                    className="bg-[#99edc3] text-black px-3 py-1 rounded hover:bg-[#7fcfa8]"
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="text-red-400 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="text-xl font-bold mt-4">Total: KES {totalAmount}</div>
          </div>

          {/* Customer Information */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#99edc3]">Customer Details</h3>
            <form onSubmit={handleOrderSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label className="block mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label className="block mb-2">Delivery Address</label>
                  <textarea
                    name="address"
                    required
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    onChange={handleInputChange}
                    rows="3"
                  />
                </div>

                {/* Payment Method Selection */}
                <div>
                  <label className="block mb-2">Payment Method</label>
                  <div className="flex space-x-4">
                    {/* M-Pesa */}
                    <label className={`border-2 ${customerInfo.paymentMethod === 'M-Pesa' ? 'border-[#99edc3]' : 'border-gray-400'} p-1 rounded-lg cursor-pointer flex items-center justify-center w-20 h-14`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="M-Pesa"
                        checked={customerInfo.paymentMethod === "M-Pesa"}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <img src={mpesaLogo} alt="M-Pesa" className="h-8" />
                    </label>

                    {/* Visa */}
                    <label className={`border-2 ${customerInfo.paymentMethod === 'Visa' ? 'border-[#99edc3]' : 'border-gray-600'} p-1 rounded-lg cursor-pointer flex items-center justify-center w-20 h-14`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Visa"
                        checked={customerInfo.paymentMethod === "Visa"}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <img src={visaLogo} alt="Visa" className="h-7" />
                    </label>

                    {/* Mastercard */}
                    <label className={`border-2 ${customerInfo.paymentMethod === 'Mastercard' ? 'border-[#99edc3]' : 'border-gray-600'} p-1 rounded-lg cursor-pointer flex items-center justify-center w-20 h-14`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Mastercard"
                        checked={customerInfo.paymentMethod === "Mastercard"}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <img src={mastercardLogo} alt="Mastercard" className="h-8" />
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#99edc3] text-black font-bold py-3 rounded hover:bg-[#7fcfa8] transition"
                >
                  Place Order (KES {totalAmount})
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPayment;

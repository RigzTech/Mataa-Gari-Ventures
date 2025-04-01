import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import mpesaLogo from "../assets/Mpesa.jpeg"; 
import visaLogo from "../assets/Visa.png"; 
import mastercardLogo from "../assets/mastercard-icon.png"; 
import paybillImage from "../assets/paybill.jpeg";
import { jsPDF } from "jspdf";

const OrderPayment = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "M-Pesa",
  });

  const [showPaybill, setShowPaybill] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    setOrderDetails({
      date: currentDate.toLocaleDateString(),
      time: currentDate.toLocaleTimeString(),
      items: cartItems,
      total: totalAmount,
      amountPaid: totalAmount,
      customer: customerInfo,
    });
    setShowPaybill(true);
  };

  const handlePaymentDone = () => {
    setShowPaybill(false);
    setShowReceipt(true);
  };

  const generateSerialNumber = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const getProductDescription = (item) => {
    return `Description for ${item.name}`;
  };

  const downloadReceiptAsPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 20;

    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("Mataa Gari Ventures", pageWidth / 2, y, { align: "center" });
    y += 10;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Receipt", pageWidth / 2, y, { align: "center" });
    y += 10;

    doc.text(`Date: ${orderDetails.date}`, 20, y);
    doc.text(`Time: ${orderDetails.time}`, pageWidth - 80, y);
    y += 10;
    doc.text(`Customer: ${orderDetails.customer.name}`, 20, y);
    y += 15;

    doc.setFont("helvetica", "bold");
    doc.text("Serial", 20, y);
    doc.text("Product Name", 40, y);
    doc.text("Qty", 90, y);
    doc.text("Description", 110, y);
    doc.text("Price (KES)", 160, y);
    y += 5;
    doc.line(20, y, pageWidth - 20, y);
    y += 5;

    doc.setFont("helvetica", "normal");
    orderDetails.items.forEach((item) => {
      const serial = generateSerialNumber();
      const description = getProductDescription(item);
      doc.text(serial, 20, y);
      doc.text(item.name.length > 15 ? item.name.substring(0, 12) + "..." : item.name, 40, y);
      doc.text(item.quantity.toString(), 90, y);
      doc.text(description.length > 15 ? description.substring(0, 12) + "..." : description, 110, y);
      doc.text((item.price * item.quantity).toString(), 160, y);
      y += 10;
    });

    y += 5;
    doc.line(20, y, pageWidth - 20, y);
    y += 10;
    doc.setFont("helvetica", "bold");
    doc.text(`Total Price: KES ${orderDetails.total}`, 20, y);
    y += 10;
    doc.text(`Amount Paid: KES ${orderDetails.amountPaid}`, 20, y);
    y += 15;

    doc.setFont("helvetica", "italic");
    doc.text("Thank you for shopping with Mataa Gari Ventures! We appreciate your business.", pageWidth / 2, y, { align: "center" });
    y += 15;

    doc.setFont("helvetica", "normal");
    doc.text("--- Contact Information ---", pageWidth / 2, y, { align: "center" });
    y += 10;
    doc.text("Nairobi, Kirinyaga Road, MSP Plaza Ground Flr, Store G0", pageWidth / 2, y, { align: "center" });
    y += 10;
    doc.text("Email: info@mataagariventures.com", pageWidth / 2, y, { align: "center" });
    y += 10;
    doc.text("Phone: (254) 796383719", pageWidth / 2, y, { align: "center" });

    doc.save(`receipt_${orderDetails.date.replace(/\//g, "-")}.pdf`);
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

      {/* Paybill Prompt Modal */}
      {showPaybill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-[#99edc3]">Complete Payment</h3>
            <img src={paybillImage} alt="Paybill" className="mx-auto mb-4 max-w-xs" />
            <p className="mb-4">Please use the paybill details above to make your payment.</p>
            <button
              onClick={handlePaymentDone}
              className="bg-[#99edc3] text-black font-bold py-2 px-4 rounded hover:bg-[#7fcfa8] transition"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Receipt Modal */}
      {showReceipt && orderDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg text-center max-w-md w-full max-h-[80vh] flex flex-col">
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Receipt Header */}
              <div className="border-b border-gray-300 pb-4 mb-4">
                <h3 className="text-2xl font-bold text-[#99edc3]">Mataa Gari Ventures</h3>
                <p className="text-sm text-gray-600">Receipt</p>
                <p className="text-sm text-gray-600 mt-2">Date: {orderDetails.date}</p>
                <p className="text-sm text-gray-600">Time: {orderDetails.time}</p>
                <p className="text-sm text-gray-600">Customer: {orderDetails.customer.name}</p>
              </div>

              {/* Items Table */}
              <div className="text-left mb-4">
                <div className="grid grid-cols-5 gap-2 font-semibold border-b border-gray-300 pb-2 text-gray-800">
                  <span>Serial</span>
                  <span>Name</span>
                  <span>Qty</span>
                  <span>Description</span>
                  <span className="text-right">Price</span>
                </div>
                {orderDetails.items.map((item) => (
                  <div key={item.id} className="grid grid-cols-5 gap-2 py-2 border-b border-gray-200 text-gray-700">
                    <span>{generateSerialNumber()}</span>
                    <span>{item.name}</span>
                    <span>{item.quantity}</span>
                    <span>{getProductDescription(item)}</span>
                    <span className="text-right">KES {item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="text-left border-t border-gray-300 pt-4 mb-4 text-gray-800">
                <p className="font-semibold">Total Price: KES {orderDetails.total}</p>
                <p className="font-semibold">Amount Paid: KES {orderDetails.amountPaid}</p>
              </div>

              {/* Thank You Note and Contact Info */}
              <div className="border-t border-gray-300 pt-4">
                <p className="italic text-gray-600 mb-4">
                  Thank you for shopping with Mataa Gari Ventures! We appreciate your business.
                </p>
                <div className="text-sm text-gray-600">
                  <p><strong>Contact Information:</strong></p>
                  <p>Nairobi, Kirinyaga Road, MSP Plaza Ground Flr, Store G0</p>
                  <p>Email: info@mataagariventures.com</p>
                  <p>Phone: (254) 796383719</p>
                </div>
              </div>
            </div>

            {/* Buttons (Fixed at Bottom) */}
            <div className="flex space-x-4 mt-6">
              <button
                onClick={downloadReceiptAsPDF}
                className="flex-1 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
              >
                Download as PDF
              </button>
              <button
                onClick={() => {
                  setShowReceipt(false);
                  navigate("/");
                }}
                className="flex-1 bg-[#99edc3] text-black font-bold py-2 px-4 rounded hover:bg-[#7fcfa8] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPayment;
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Import the autoTable plugin for tables in PDF
import mpesaLogo from "../assets/Mpesa.jpeg";
import visaLogo from "../assets/Visa.png";
import mastercardLogo from "../assets/mastercard-icon.png";
import paybillImage from "../assets/paybill.jpeg";
import companyLogo from "../assets/Mataa_logo.jpg"; // Local logo import

const OrderPayment = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "M-Pesa",
  });
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [receiptData, setReceiptData] = useState(null);
  const [showReceipt, setShowReceipt] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const generateReceipt = () => {
    const tableHeader = `| ${"Item Name".padEnd(20)} | ${"Description".padEnd(40)} | ${"Qty".padEnd(5)} | ${"Price".padEnd(10)} | ${"Total".padEnd(10)} |`;
    const tableDivider = `|${"-".padEnd(22, "-")}|${"-".padEnd(42, "-")}|${"-".padEnd(7, "-")}|${"-".padEnd(12, "-")}|${"-".padEnd(12, "-")}|`;
    const tableRows = cartItems.map(item =>
      `| ${item.name.padEnd(20)} | ${item.description.padEnd(40)} | ${String(item.quantity).padEnd(5)} | ${String(item.price).padEnd(10)} | ${String(item.price * item.quantity).padEnd(10)} |`
    ).join("\n");

    const receiptContent = `
      -----------------------------------
      **Mataa Gari Ventures**
      -----------------------------------
      **Customer:** ${customerInfo.name}  
      **Phone:** ${customerInfo.phone}  
      **Address:** ${customerInfo.address}  

      **Items Purchased:**
      ${tableHeader}
      ${tableDivider}
      ${tableRows}

      **Total Quantity:** ${totalQuantity}  
      **Total Amount:** KES ${totalAmount}  
      **Payment Method:** ${customerInfo.paymentMethod}  

      -----------------------------------
      **Contact Us:**
      Phone: (254) 796383719  
      Email: info@mataagariventures.com  
      Address: Nairobi, Kirinyaga Road, MSP Plaza Ground Flr, Store G0  
      -----------------------------------
      Thank you for shopping with us!
    `;

    setReceiptData({
      text: receiptContent,
      items: cartItems,
    });
    setShowReceipt(true);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (customerInfo.paymentMethod === "M-Pesa") {
      setShowPaymentPopup(true);
    } else {
      generateReceipt();
      clearCart();
    }
  };

  const downloadReceiptAsPDF = () => {
    const doc = new jsPDF();

    // Add logo placeholder or text if logo isn't dynamically loaded
    doc.setFontSize(16);
    doc.text("Mataa Gari Ventures", 10, 20);
    doc.setFontSize(12);
    doc.text("-----------------------------------", 10, 25);

    // Add customer details
    doc.text(`Customer: ${customerInfo.name}`, 10, 35);
    doc.text(`Phone: ${customerInfo.phone}`, 10, 40);
    doc.text(`Address: ${customerInfo.address}`, 10, 45);
    doc.text("-----------------------------------", 10, 50);

    // Add the "Items Purchased" table using autoTable
    doc.text("Items Purchased:", 10, 60);
    doc.autoTable({
      startY: 65,
      head: [["Item Name", "Description", "Qty", "Price", "Total"]],
      body: receiptData.items.map(item => [
        item.name,
        item.description,
        item.quantity,
        `KES ${item.price}`,
        `KES ${item.price * item.quantity}`,
      ]),
      theme: "grid",
      styles: { fontSize: 10 },
      columnStyles: {
        0: { cellWidth: 30 }, // Item Name
        1: { cellWidth: 60 }, // Description
        2: { cellWidth: 20 }, // Qty
        3: { cellWidth: 30 }, // Price
        4: { cellWidth: 30 }, // Total
      },
    });

    // Add totals and footer
    const finalY = doc.lastAutoTable.finalY || 65;
    doc.text(`Total Quantity: ${totalQuantity}`, 10, finalY + 10);
    doc.text(`Total Amount: KES ${totalAmount}`, 10, finalY + 15);
    doc.text(`Payment Method: ${customerInfo.paymentMethod}`, 10, finalY + 20);
    doc.text("-----------------------------------", 10, finalY + 25);
    doc.text("Contact Us:", 10, finalY + 35);
    doc.text("Phone: (254) 796383719", 10, finalY + 40);
    doc.text("Email: info@mataagariventures.com", 10, finalY + 45);
    doc.text("Address: Nairobi, Kirinyaga Road, MSP Plaza Ground Flr, Store G0", 10, finalY + 50);
    doc.text("-----------------------------------", 10, finalY + 55);
    doc.text("Thank you for shopping with us!", 10, finalY + 65);

    // Save the PDF
    doc.save("receipt.pdf");
  };

  const handlePaymentClick = (method) => {
    setClickedButton(method);
    setCustomerInfo({ ...customerInfo, paymentMethod: method });
    setTimeout(() => setClickedButton(null), 300);
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
                  <span className="text-gray-400">KES {item.price}</span> <br />
                  <span className="text-sm text-gray-500">{item.description}</span>
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
                <div>
                  <label className="block mb-2">Payment Method</label>
                  <div className="flex space-x-4">
                    <img
                      src={mpesaLogo}
                      alt="Mpesa"
                      className={`w-16 cursor-pointer transition-transform duration-300 ${clickedButton === "M-Pesa" ? "scale-110" : ""}`}
                      onClick={() => handlePaymentClick("M-Pesa")}
                    />
                    <img
                      src={visaLogo}
                      alt="Visa"
                      className={`w-16 cursor-pointer transition-transform duration-300 ${clickedButton === "Visa" ? "scale-110" : ""}`}
                      onClick={() => handlePaymentClick("Visa")}
                    />
                    <img
                      src={mastercardLogo}
                      alt="Mastercard"
                      className={`w-16 cursor-pointer transition-transform duration-300 ${clickedButton === "Mastercard" ? "scale-110" : ""}`}
                      onClick={() => handlePaymentClick("Mastercard")}
                    />
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

      {/* Mpesa Payment Popup */}
      {showPaymentPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Mpesa Payment Details</h2>
            <img src={paybillImage} alt="Mpesa Payment" className="w-72 mx-auto rounded-lg shadow-lg" />
            <button
              onClick={() => {
                setShowPaymentPopup(false);
                generateReceipt();
              }}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Receipt Popup */}
      {showReceipt && (
        <div className="text-center mt-6">
          <div className="bg-gray-800 text-white p-4 rounded">
            <img src={companyLogo} alt="Mataa Gari Ventures Logo" className="mx-auto mb-4 w-32" />
            <pre className="text-left whitespace-pre-wrap">
              -----------------------------------
              <br />
              **Mataa Gari Ventures**
              <br />
              -----------------------------------
              <br />
              **Customer:** {customerInfo.name}
              <br />
              **Phone:** {customerInfo.phone}
              <br />
              **Address:** {customerInfo.address}
              <br />
              <br />
              **Items Purchased:**
              <br />
            </pre>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="p-2">Item Name</th>
                  <th className="p-2">Description</th>
                  <th className="p-2">Qty</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {receiptData.items.map((item, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="p-2">{item.name}</td>
                    <td className="p-2">{item.description}</td>
                    <td className="p-2">{item.quantity}</td>
                    <td className="p-2">KES {item.price}</td>
                    <td className="p-2">KES {item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <pre className="text-left whitespace-pre-wrap">
              <br />
              **Total Quantity:** {totalQuantity}
              <br />
              **Total Amount:** KES {totalAmount}
              <br />
              **Payment Method:** {customerInfo.paymentMethod}
              <br />
              <br />
              -----------------------------------
              <br />
              **Contact Us:**
              <br />
              Phone: (254) 796383719
              <br />
              Email: info@mataagariventures.com
              <br />
              Address: Nairobi, Kirinyaga Road, MSP Plaza Ground Flr, Store G0
              <br />
              -----------------------------------
              <br />
              Thank you for shopping with us!
            </pre>
          </div>
          <button onClick={downloadReceiptAsPDF} className="mt-2 bg-blue-500 px-4 py-2 text-white rounded">
            Download Receipt as PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderPayment;
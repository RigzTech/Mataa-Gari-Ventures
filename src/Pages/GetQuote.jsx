import React, { useState } from "react";
import { FaUser, FaPhone, FaCar, FaTools, FaPaperclip, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carModel: "",
    partNeeded: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e, method) => {
    e.preventDefault();

    const message = `Hello, I need a quote:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nCar Model: ${formData.carModel}\nPart Needed: ${formData.partNeeded}`;
    
    if (method === "whatsapp") {
      const whatsappLink = `https://wa.me/254796383719?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, "_blank");
    } else {
      const mailtoLink = `mailto:info@mataagariventures.com?subject=Quote Request&body=${encodeURIComponent(message)}`;
      window.open(mailtoLink, "_blank");
    }
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-6 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-lg bg-black p-8 rounded-lg shadow-lg border border-gray-700">
        {/* Welcome Message */}
        <h1 className="text-3xl font-bold text-[#99edc3] text-center mb-2">Get a Quote</h1>
        <p className="text-gray-300 text-center mb-6">
          Need a car part? Fill out the form below, and we'll get back to you with a price quote as soon as possible.
        </p>

        <form className="space-y-5">
          {/* Name Field */}
          <div className="flex items-center bg-gray-700 text-white border border-[#99edc3] rounded-lg px-3 py-3">
            <FaUser className="text-[#bbbbbb] mr-3" />
            <input type="text" name="name" value={formData.name} onChange={handleChange} required 
              className="w-full bg-transparent outline-none placeholder-gray-300" placeholder="Your Name"/>
          </div>

          {/* Phone Number Field */}
          <div className="flex items-center bg-gray-700 text-white border border-[#99edc3] rounded-lg px-3 py-3">
            <FaPhone className="text-[#bbbbbb] mr-3" />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required 
              className="w-full bg-transparent outline-none placeholder-gray-300" placeholder="Phone Number"/>
          </div>

          {/* Car Model Field */}
          <div className="flex items-center bg-gray-700 text-white border border-[#99edc3] rounded-lg px-3 py-3">
            <FaCar className="text-[#bbbbbb] mr-3" />
            <input type="text" name="carModel" value={formData.carModel} onChange={handleChange} required 
              className="w-full bg-transparent outline-none placeholder-gray-300" placeholder="Car Model"/>
          </div>

          {/* Part Needed Field */}
          <div className="flex items-center bg-gray-700 text-white border border-[#99edc3] rounded-lg px-3 py-3">
            <FaTools className="text-[#bbbbbb] mr-3" />
            <input type="text" name="partNeeded" value={formData.partNeeded} onChange={handleChange} required 
              className="w-full bg-transparent outline-none placeholder-gray-300" placeholder="Part Needed"/>
          </div>

          {/* Image Upload Field */}
          <div className="flex items-center bg-gray-700 text-white border border-[#99edc3] rounded-lg px-3 py-3">
            <FaPaperclip className="text-[#bbbbbb] mr-3" />
            <input type="file" accept="image/*" onChange={handleImageUpload} 
              className="w-full bg-transparent outline-none text-gray-300"/>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-between mt-4">
            <button onClick={(e) => handleSubmit(e, "email")} 
              className="w-1/2 bg-blue-500 text-white py-3 rounded-lg mr-2 font-semibold flex items-center justify-center hover:bg-blue-600 transition transform hover:scale-105">
              <FaEnvelope className="mr-2" /> Send via Email
            </button>

            <button onClick={(e) => handleSubmit(e, "whatsapp")} 
              className="w-1/2 bg-green-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-green-600 transition transform hover:scale-105">
              <FaWhatsapp className="mr-2" /> Send via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetQuote;

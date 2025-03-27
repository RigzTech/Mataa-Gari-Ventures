import React from "react";

const ContactSection = () => {
  return (
    <section className="flex justify-center items-center py-16 px-10">
      <div className="bg-green-700 text-white rounded-lg shadow-lg p-8 max-w-xl text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-green-800">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">Contact Us</h2>
        <p className="text-lg">📍 Nairobi, Kirinyaga Road, MSP Plaza, Ground Floor, Store G09</p>
        <p className="text-lg">📧 Email: mataagariventures@gmail.com</p>
        <p className="text-lg">📞 WhatsApp: 0796 383719</p>
        <div className="mt-6">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-md transition-transform duration-200 hover:scale-110 hover:bg-yellow-500">
            Contact Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

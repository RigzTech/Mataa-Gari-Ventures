import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-16 px-10 text-center">
      <h2 className="text-4xl font-bold text-yellow-500 mb-4">Contact Us</h2>
      <p className="text-lg">📍 Nairobi, Kirinyaga Road, MSP Plaza, Ground Floor, Store G09</p>
      <p className="text-lg">📧 Email: mataagariventures@gmail.com</p>
      <p className="text-lg">📞 WhatsApp: 0796 383719</p>
      <div className="mt-4">
        <button className="bg-yellow-500 text-black px-6 py-3 rounded">Contact Now</button>
      </div>
    </section>
  );
};

export default ContactSection;

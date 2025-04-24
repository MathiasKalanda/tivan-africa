import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  const phoneNumber = "256776978176";
  const message = "Hello, I’m interested in your products!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <div>
      <div className="border-2 border-green-600 px-5 py-1 rounded-lg">
        <button onClick={() => window.open(whatsappUrl, "_blank")}>
          <FaWhatsapp size={24} className="text-green-600" />
        </button>
      </div>
    </div>
  );
};

export default WhatsApp;

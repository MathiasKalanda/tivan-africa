import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  const phoneNumber = "256776978176";
  const message = "Hello, I’m interested in your products!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <div className="fixed">
      <div className="border-2 border-green-600 rounded-full  sticky  z-50 flex flex-row justify-center items-center py-1 px-2 mt-32 bg-white">
        <button
          onClick={() => window.open(whatsappUrl, "_blank")}
          className="flex flex-row justify-center items-center gap-2"
        >
          <FaWhatsapp size={24} className="text-green-600" />
          {/* <p className="text-sm">Contact Us</p> */}
        </button>
      </div>
    </div>
  );
};

export default WhatsApp;

import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { IoChatbubbleEllipses } from "react-icons/io5";

const WhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "256776978176";
  const message = "Hello, I'm interested in your products!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Show button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-show tooltip after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 5000);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  const quickMessages = [
    "I'd like to place an order",
    "What are your prices?",
    "Do you deliver to my area?",
    "I need help with my order",
  ];

  return (
    <>
      {/* Main WhatsApp Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        {/* Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
            showTooltip
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <div className="bg-white text-amber-800 px-4 py-2 rounded-2xl shadow-lg border border-amber-100 text-sm font-medium whitespace-nowrap">
            Chat with us on WhatsApp! 💬
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white border-r border-b border-amber-100 transform rotate-45"></div>
          </div>
        </div>

        {/* Button Container */}
        <div className="relative">
          {/* Quick Options Panel */}
          <div
            className={`absolute bottom-full right-0 mb-4 transition-all duration-300 ${
              isOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-amber-100 overflow-hidden w-64">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                    <FaWhatsapp className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Chat with us</h3>
                    <p className="text-green-100 text-xs">
                      Reply within minutes
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Messages */}
              <div className="p-3">
                <p className="text-xs text-amber-600 mb-2 px-2">
                  Quick questions:
                </p>
                {quickMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const customUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
                      window.open(customUrl, "_blank");
                      setIsOpen(false);
                    }}
                    className="w-full text-left p-3 rounded-xl hover:bg-green-50 transition-colors duration-300 text-sm text-amber-700 group"
                  >
                    <span className="group-hover:text-green-600 transition-colors">
                      {msg}
                    </span>
                  </button>
                ))}
              </div>

              {/* Footer */}
              <div className="p-3 bg-amber-50 border-t border-amber-100">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2 rounded-xl font-medium text-sm transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Start New Chat
                </button>
              </div>
            </div>
          </div>

          {/* Main Button */}
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsOpen(!isOpen)}
            className="relative group"
          >
            {/* Ripple Effect */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-30"></div>

            {/* Main Button */}
            <div
              className={`relative w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-xl flex items-center justify-center transition-all duration-300 transform ${
                isHovered ? "scale-110 rotate-6" : "scale-100"
              } hover:shadow-2xl cursor-pointer`}
            >
              {isOpen ? (
                <MdClose className="text-white text-2xl" />
              ) : (
                <FaWhatsapp className="text-white text-3xl" />
              )}
            </div>

            {/* Pulse Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full border-2 border-green-300 animate-pulse animation-delay-300"></div>
          </button>

          {/* Status Indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Quick Contact Bar (shows on scroll) */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-amber-100 p-3 z-40 transition-all duration-500 transform ${
          isVisible ? "translate-y-0" : "translate-y-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <IoChatbubbleEllipses className="text-green-600" />
            </div>
            <div>
              <p className="text-xs text-amber-600">Chat with us</p>
              <p className="text-sm font-bold text-amber-800">
                Reply within minutes
              </p>
            </div>
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:shadow-lg transition-all duration-300"
          >
            <FaWhatsapp />
            WhatsApp
          </button>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </>
  );
};

export default WhatsApp;

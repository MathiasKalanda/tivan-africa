import { Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { LiaArrowRightSolid, LiaChevronDownSolid } from "react-icons/lia";
import { FaLeaf, FaOilCan, FaList } from "react-icons/fa";
import { GiButter, GiHoneyJar } from "react-icons/gi";
import { FaCow } from "react-icons/fa6";
import { PiCheese } from "react-icons/pi";
const MobileNav = ({ isOpen, MdClose, handleMenu }) => {
  const [isProductsOpen, setProductsOpen] = useState(false);

  if (!isOpen) return null;

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/aboutus", label: "About Us" },
    { path: "/order", label: "Orders" },
    { path: "/contactus", label: "Contact Us" },
  ];

  const productLinks = [
    {
      name: "All Products",
      path: "/productPage",
      icon: FaList,
      color: "from-amber-500 to-amber-600",
      description: "View all products",
    },
    {
      name: "Honey",
      path: "/productDetails/honey-details",
      icon: GiHoneyJar,
      color: "from-amber-400 to-amber-600",
      description: "Pure natural honey",
    },
    {
      name: "Butter",
      path: "/productDetails/butter-details",
      icon: GiButter,
      color: "from-yellow-400 to-yellow-600",
      description: "Creamy fresh butter",
    },
    {
      name: "Cheese",
      path: "/productDetails/cheese-details",
      icon: PiCheese,
      color: "from-yellow-500 to-yellow-700",
      description: "Artisan cheese",
    },
    {
      name: "Ghee",
      path: "/productDetails/ghee-details",
      icon: FaCow,
      color: "from-amber-500 to-amber-700",
      description: "Pure cow ghee",
    },
    {
      name: "Castor Oil",
      path: "/productDetails/oil-details",
      icon: FaOilCan,
      color: "from-green-400 to-green-600",
      description: "Cold-pressed oil",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop with blur effect */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={handleMenu}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-gradient-to-b from-amber-50 to-white shadow-2xl animate-slide-in">
        {/* Decorative honeycomb pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="grid grid-cols-4 gap-2 transform rotate-12 scale-150 mt-20">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="w-12 h-12 bg-amber-800 clip-hexagon"
              ></div>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="relative bg-gradient-to-r from-amber-600 to-amber-500 p-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={handleMenu}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <div>
                <span className="text-2xl font-black text-white">TIVAN</span>
                <span className="block text-xs text-amber-100 tracking-wider">
                  Pure Natural Products
                </span>
              </div>
            </Link>

            <button
              onClick={handleMenu}
              className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <MdClose size={24} className="text-white" />
            </button>
          </div>

          {/* Decorative honey drip */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-amber-700/20 to-transparent"></div>
        </div>

        {/* Menu Items */}
        <div className="relative px-4 py-8 max-h-[calc(100vh-120px)] overflow-y-auto">
          <div className="space-y-3">
            {/* Products Dropdown */}
            <div className="space-y-2">
              <button
                onClick={() => setProductsOpen(!isProductsOpen)}
                className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                      <FaList className="text-white text-xl" />
                    </div>
                    <div className="text-left">
                      <span className="font-bold text-lg block">Products</span>
                      <span className="text-xs text-amber-100">
                        Browse our collection
                      </span>
                    </div>
                  </div>
                  <LiaChevronDownSolid
                    size={20}
                    className={`transform transition-transform duration-300 ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Product Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isProductsOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="pl-4 space-y-2 mt-2">
                  {productLinks.map((product, index) => {
                    const Icon = product.icon;
                    return (
                      <Link
                        key={index}
                        to={product.path}
                        onClick={handleMenu}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white border border-amber-100 hover:border-amber-400 transition-all duration-300 group"
                        style={{
                          animationDelay: `${index * 50}ms`,
                        }}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="text-white text-sm" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-amber-900 text-sm">
                            {product.name}
                          </p>
                          <p className="text-xs text-amber-600">
                            {product.description}
                          </p>
                        </div>
                        <LiaArrowRightSolid className="text-amber-400 text-sm group-hover:translate-x-1 transition-transform" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Other Menu Items */}
            {menuItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleMenu}
                className="group relative block overflow-hidden rounded-2xl bg-white border-2 border-amber-100 hover:border-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-200/50"
                style={{
                  animationDelay: `${(index + 1) * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    {/* Icon based on menu item */}
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                      {item.label === "Home" && (
                        <span className="text-amber-600 text-xl">🏠</span>
                      )}
                      {item.label === "About Us" && (
                        <span className="text-amber-600 text-xl">📖</span>
                      )}
                      {item.label === "Orders" && (
                        <span className="text-amber-600 text-xl">📦</span>
                      )}
                      {item.label === "Contact Us" && (
                        <span className="text-amber-600 text-xl">📞</span>
                      )}
                    </div>

                    <span className="font-bold text-lg text-amber-900 group-hover:text-amber-700 transition-colors">
                      {item.label}
                    </span>
                  </div>

                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 group-hover:translate-x-1 transition-all duration-300">
                    <LiaArrowRightSolid size={20} className="text-amber-600" />
                  </div>
                </div>

                {/* Animated bottom border on hover */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            ))}
          </div>

          {/* Policy Link (separate style) */}
          <div className="mt-6">
            <button
              onClick={handleMenu}
              className="w-full group relative overflow-hidden rounded-2xl bg-amber-50 border-2 border-amber-200 hover:border-amber-400 transition-all duration-300"
            >
              <div className="relative flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-200 rounded-xl flex items-center justify-center">
                    <span className="text-amber-700 text-xl">📜</span>
                  </div>
                  <span className="font-bold text-lg text-amber-800">
                    Policy
                  </span>
                </div>
                <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <LiaArrowRightSolid size={20} className="text-amber-700" />
                </div>
              </div>
            </button>
          </div>

          {/* Honey Facts Section */}
          <div className="mt-8 p-4 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl">
            <div className="flex items-center gap-2 mb-3">
              <GiHoneyJar className="text-amber-600" />
              <span className="text-sm font-semibold text-amber-800">
                Honey Fact
              </span>
            </div>
            <p className="text-xs text-amber-700 leading-relaxed">
              "Honey is the only food that never spoils. Archaeologists found
              3000-year-old honey in Egyptian tombs that was still perfectly
              edible!"
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex justify-center gap-4 pb-4">
            {["FB", "IG", "TW", "YT"].map((social) => (
              <button
                key={social}
                className="w-10 h-10 bg-amber-100 rounded-full text-amber-700 font-medium hover:bg-amber-200 transition-colors shadow-sm hover:shadow-md"
              >
                {social}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-amber-50 border-t border-amber-200">
          <p className="text-xs text-center text-amber-600">
            © 2026 Tivan Honey. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

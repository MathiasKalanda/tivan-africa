import { Link } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import {
  FaShoppingCart,
  FaUser,
  FaLeaf,
  FaChevronDown,
  FaOilCan,
  FaList,
} from "react-icons/fa";
import { PiCheese } from "react-icons/pi";
import { FaCow } from "react-icons/fa6";
import { GiHoneyJar } from "react-icons/gi";
import { GiButter } from "react-icons/gi";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import MobileNav from "./MobileNav";
import CartDrawer from "./CartDrawer";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.count, 0);
  const [isOpen, setOpen] = useState(false);
  const [isCart, setCart] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".products-dropdown")) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleMenu = () => setOpen((prev) => !prev);
  const handleCart = () => setCart((prev) => !prev);

  const productLinks = [
    {
      name: "All Products",
      path: "/productPage",
      icon: FaList,
      color: "from-amber-500 to-amber-600",
    },
    {
      name: "Honey",
      path: "/productDetails/honey-details",
      icon: GiHoneyJar,
      color: "from-amber-400 to-amber-600",
    },
    {
      name: "Butter",
      path: "/productDetails/butter-details",
      icon: GiButter,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Cheese",
      path: "/productDetails/cheese-details",
      icon: PiCheese,
      color: "from-yellow-500 to-yellow-700",
    },
    {
      name: "Ghee",
      path: "/productDetails/ghee-details",
      icon: FaCow,
      color: "from-amber-500 to-amber-700",
    },
    {
      name: "Castor Oil",
      path: "/productDetails/oil-details",
      icon: FaOilCan,
      color: "from-green-400 to-green-600",
    },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-black/15 py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative group">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                  <FaLeaf className="text-white text-xl" />
                </div>
                <div>
                  <span
                    className={`text-xl font-black ${
                      isScrolled ? "text-amber-900" : "text-white"
                    }`}
                  >
                    TIVAN
                  </span>
                  <span
                    className={`block text-[10px] uppercase tracking-widest ${
                      isScrolled ? "text-amber-600" : "text-amber-200"
                    }`}
                  >
                    PURE NATURAL PRODUCTS
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`font-medium transition-all duration-300 hover:border-b-2 border-amber-500 pb-1 ${
                  isScrolled
                    ? "text-amber-800 hover:text-amber-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Home
              </Link>
              <Link
                to="/aboutus"
                className={`font-medium transition-all duration-300 hover:border-b-2 border-amber-500 pb-1 ${
                  isScrolled
                    ? "text-amber-800 hover:text-amber-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                About
              </Link>

              {/* Products Dropdown */}
              <div className="relative products-dropdown">
                <button
                  onClick={() => setProductsOpen(!isProductsOpen)}
                  className={`flex items-center gap-1 font-medium transition-all duration-300 hover:border-b-2 border-amber-500 pb-1 ${
                    isScrolled
                      ? "text-amber-800 hover:text-amber-600"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  Products
                  <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isProductsOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-amber-100 overflow-hidden animate-fade-in">
                    {/* Decorative Header */}
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-3">
                      <p className="text-white text-sm font-medium text-center">
                        Our Products
                      </p>
                    </div>

                    {/* Product Links */}
                    <div className="p-2">
                      {productLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                          <Link
                            key={index}
                            to={link.path}
                            onClick={() => setProductsOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-amber-50 transition-all duration-300 group"
                          >
                            <div
                              className={`w-8 h-8 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                            >
                              <Icon className="text-white text-sm" />
                            </div>
                            <span className="text-amber-800 font-medium flex-1">
                              {link.name}
                            </span>
                            {link.name === "All Products" && (
                              <span className="text-xs text-amber-400">
                                View All
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>

                    {/* Decorative Footer */}
                    <div className="p-3 bg-amber-50 border-t border-amber-100">
                      <p className="text-xs text-amber-600 text-center">
                        Premium quality natural products
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <Link
                to="/order"
                className={`font-medium transition-all duration-300 hover:border-b-2 border-amber-500 pb-1 ${
                  isScrolled
                    ? "text-amber-800 hover:text-amber-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Orders
              </Link>
              <Link
                to="/contactus"
                className={`font-medium transition-all duration-300 hover:border-b-2 border-amber-500 pb-1 ${
                  isScrolled
                    ? "text-amber-800 hover:text-amber-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button
                className={`p-2 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "text-amber-800 hover:bg-amber-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <CiSearch size={22} />
              </button>

              {/* User (Desktop) */}
              <button
                className={`hidden md:block p-2 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "text-amber-800 hover:bg-amber-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <FaUser size={20} />
              </button>

              {/* Cart */}
              <button
                onClick={handleCart}
                className={`relative p-2 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "text-amber-800 hover:bg-amber-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <FaShoppingCart size={22} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={handleMenu}
                className={`md:hidden p-2 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "text-amber-800 hover:bg-amber-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {isOpen ? (
                  <MdClose size={24} />
                ) : (
                  <HiOutlineBars3BottomRight size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isOpen}
        handleMenu={handleMenu}
        isScrolled={isScrolled}
        MdClose={MdClose}
      />

      {/* Cart Drawer */}
      <CartDrawer isCart={isCart} handleCart={handleCart} />
    </>
  );
};

export default Navbar;

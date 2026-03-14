import React, { useState, useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";
import { MdClose, MdDeleteOutline } from "react-icons/md";
import {
  FaShoppingCart,
  FaLeaf,
  FaPhone,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";
import { LiaArrowRightSolid } from "react-icons/lia";
import emailjs from "@emailjs/browser";
import { GiHoneyJar } from "react-icons/gi";

const CartDrawer = ({ handleCart, isCart }) => {
  const { cart, increaseQuantity, decreaseQuantity, removeItem } = useCart();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const drawerRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        handleCart();
      }
    };

    if (isCart) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when drawer is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isCart, handleCart]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        handleCart();
      }
    };

    if (isCart) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isCart, handleCart]);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.count,
    0,
  );

  const totalItems = cart.reduce((acc, item) => acc + item.count, 0);

  const message = cart
    .map(
      (item) => `
🛒 ${item.name}
Qty: ${item.count} -- ${item.quantity}
Price: UGX ${item.price.toLocaleString()}
------------------------------
`,
    )
    .join("\n");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = () => {
    if (!form.name || !form.email || !form.phone) {
      setError("Please fill all customer details.");
      return;
    }

    setSending(true);
    setError("");

    const order_id = Math.random().toString(36).substring(2, 10).toUpperCase();
    const shippingCost = 0;
    const tax = 0;
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.count,
      0,
    );
    const total = subtotal + shippingCost + tax;

    const templateParams = {
      order_id,
      message,
      costShipping: shippingCost.toLocaleString(),
      costTax: tax.toLocaleString(),
      costTotal: total.toLocaleString(),
      customer_name: form.name,
      customer_email: form.email,
      customer_phone: form.phone,
      reply_to: form.email,
      price: subtotal,
    };

    emailjs
      .send(
        "service_0jfdjpq",
        "template_ztsy4bg",
        templateParams,
        "atAg2pOsFv7yNYVmE",
      )
      .then(() => {
        setSending(false);
        setSuccess(true);
        setForm({ name: "", email: "", phone: "" });
        setTimeout(() => {
          setSuccess(false);
          handleCart();
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setSending(false);
        setError("Failed to send order. Please try again.");
      });
  };

  if (!isCart) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={handleCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 w-full max-w-md h-full bg-gradient-to-b from-amber-50 to-white shadow-2xl z-50 overflow-y-auto animate-slide-in"
      >
        {/* Decorative Header with Honey Theme */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-amber-600 to-amber-500 p-6 shadow-lg">
          {/* Honeycomb Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-6 gap-1 transform rotate-12 scale-150">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-white clip-hexagon"></div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                <FaShoppingCart className="text-white text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Your Cart</h2>
                {cart.length > 0 && (
                  <p className="text-amber-100 text-sm">
                    {totalItems} {totalItems === 1 ? "item" : "items"}
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={handleCart}
              className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <MdClose size={24} className="text-white" />
            </button>
          </div>

          {/* Honey Drip Decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-amber-700/20 to-transparent"></div>
        </div>

        <div className="p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              {/* Empty State Illustration */}
              <div className="relative mb-8">
                <div className="w-32 h-32 bg-amber-100 rounded-full flex items-center justify-center">
                  <GiHoneyJar className="text-amber-400 text-5xl" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-amber-600 text-lg">🥄</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-amber-800 mb-2">
                Your cart is empty
              </h3>
              <p className="text-amber-600 text-center mb-8">
                Looks like you haven't added any honey to your cart yet.
              </p>

              <button
                onClick={handleCart}
                className="group bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <FaLeaf className="text-amber-100" />
                Continue Shopping
                <LiaArrowRightSolid className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Honey Facts */}
              <div className="mt-12 p-4 bg-amber-100/50 rounded-2xl">
                <p className="text-sm text-amber-700 text-center">
                  🍯 "Honey is nature's sweetest gift – rich in antioxidants and
                  natural energy!"
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-xl border-2 border-amber-100 p-4 hover:border-amber-300 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-amber-50 rounded-lg overflow-hidden border-2 border-amber-200">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-amber-900">
                            {item.name}
                          </h3>
                          <button
                            onClick={() => removeItem(item)}
                            className="text-amber-400 hover:text-red-500 transition-colors"
                          >
                            <MdDeleteOutline size={20} />
                          </button>
                        </div>

                        <p className="text-sm text-amber-600 mb-2">
                          {item.quantity}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 bg-amber-50 rounded-lg p-1">
                            <button
                              onClick={() => decreaseQuantity(item)}
                              className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-amber-700 font-bold hover:bg-amber-100 transition-colors shadow-sm"
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-semibold text-amber-800">
                              {item.count}
                            </span>
                            <button
                              onClick={() => increaseQuantity(item)}
                              className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-amber-700 font-bold hover:bg-amber-100 transition-colors shadow-sm"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-bold text-amber-800">
                            UGX {(item.price * item.count).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Animated bottom border on hover */}
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-bold text-amber-800 mb-4">
                  Order Summary
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-amber-700">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>UGX {totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-amber-700">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="border-t border-amber-200 pt-2 mt-2">
                    <div className="flex justify-between font-bold text-amber-900 text-lg">
                      <span>Total</span>
                      <span>UGX {totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Information Form */}
              <div className="space-y-4 mb-6">
                <h3 className="font-bold text-amber-800">Your Information</h3>

                <div className="space-y-3">
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-amber-200 rounded-xl focus:border-amber-400 focus:outline-none transition-colors bg-white"
                    />
                  </div>

                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-amber-200 rounded-xl focus:border-amber-400 focus:outline-none transition-colors bg-white"
                    />
                  </div>

                  <div className="relative">
                    <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-amber-200 rounded-xl focus:border-amber-400 focus:outline-none transition-colors bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={sendEmail}
                disabled={sending}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <FaLeaf />
                    Submit Order
                  </>
                )}
              </button>

              {/* Error Message */}
              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-600 text-sm text-center">{error}</p>
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl animate-fade-in">
                  <p className="text-green-600 text-sm text-center">
                    ✓ Order sent successfully! We'll contact you shortly.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

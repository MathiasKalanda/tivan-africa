import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BiArrowToLeft,
  BiArrowToRight,
  BiPackage,
  BiTime,
  BiCheckCircle,
  BiXCircle,
} from "react-icons/bi";
import {
  FaShoppingCart,
  FaLeaf,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { GiHoneycomb, GiHoneyJar } from "react-icons/gi";
import CartDrawer from "../components/CartDrawer";
import { useCart } from "../context/CartContext";

export const Route = createFileRoute("/order")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isOpen, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("current");
  const { cart } = useCart();

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  // Mock order history
  const orderHistory = [
    {
      id: "ORD-001",
      date: "2024-03-15",
      status: "delivered",
      items: 3,
      total: 67.97,
      products: ["Natural Honey", "Castor Oil"],
    },
    {
      id: "ORD-002",
      date: "2024-03-10",
      status: "shipped",
      items: 2,
      total: 43.98,
      products: ["Organic Butter", "Artisan Cheese"],
    },
    {
      id: "ORD-003",
      date: "2024-03-05",
      status: "processing",
      items: 1,
      total: 24.99,
      products: ["Pure Cow Ghee"],
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "delivered":
        return <BiCheckCircle className="text-green-500" />;
      case "shipped":
        return <BiPackage className="text-blue-500" />;
      case "processing":
        return <BiTime className="text-amber-500" />;
      default:
        return <BiXCircle className="text-red-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-700 border-green-200";
      case "shipped":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "processing":
        return "bg-amber-100 text-amber-700 border-amber-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-amber-50 to-white pt-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Honeycomb Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 transform rotate-12 scale-150">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-amber-800 clip-hexagon"></div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-40 left-20">
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-6 h-6 bg-amber-400/20 rounded-full"
          />
        </div>

        <div className="absolute bottom-40 right-20">
          <motion.div
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-8 h-8 bg-amber-500/20 rounded-full"
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-300 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
            <GiHoneycomb className="text-amber-600" />
            <span className="text-amber-800 font-medium">Order Management</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-transparent bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text">
              Your Orders
            </span>
          </h1>

          <p className="text-amber-700/80 text-lg max-w-2xl">
            Track your current orders and view your order history
          </p>
        </div>

        {/* Cart Toggle Button */}
        <div className="mb-8">
          <button
            onClick={handleOpen}
            className="group relative overflow-hidden bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <FaShoppingCart className="text-xl" />
            <span>{isOpen ? "Hide Cart" : "Show Cart"}</span>
            <div className="ml-2">
              {isOpen ? (
                <BiArrowToRight className="text-xl group-hover:translate-x-1 transition-transform" />
              ) : (
                <BiArrowToLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
              )}
            </div>

            {/* Cart Badge */}
            {cart.length > 0 && !isOpen && (
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Order Management */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <div className="flex gap-4 border-b border-amber-200">
              <button
                onClick={() => setActiveTab("current")}
                className={`px-6 py-3 font-medium transition-all duration-300 relative ${
                  activeTab === "current"
                    ? "text-amber-800"
                    : "text-amber-400 hover:text-amber-600"
                }`}
              >
                Current Orders
                {activeTab === "current" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("history")}
                className={`px-6 py-3 font-medium transition-all duration-300 relative ${
                  activeTab === "history"
                    ? "text-amber-800"
                    : "text-amber-400 hover:text-amber-600"
                }`}
              >
                Order History
                {activeTab === "history" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600"
                  />
                )}
              </button>
            </div>

            {/* Order List */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {activeTab === "current"
                  ? // Current Orders (filter processing/shipped)
                    orderHistory
                      .filter((o) => o.status !== "delivered")
                      .map((order) => (
                        <motion.div
                          key={order.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-amber-100"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                                <BiPackage className="text-white text-2xl" />
                              </div>
                              <div>
                                <h3 className="font-bold text-amber-900">
                                  {order.id}
                                </h3>
                                <p className="text-sm text-amber-600">
                                  {order.date}
                                </p>
                              </div>
                            </div>
                            <div
                              className={`px-4 py-2 rounded-full border ${getStatusColor(order.status)} flex items-center gap-2`}
                            >
                              {getStatusIcon(order.status)}
                              <span className="text-sm font-medium capitalize">
                                {order.status}
                              </span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            {order.products.map((product, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-amber-700"
                              >
                                <GiHoneyJar className="text-amber-400" />
                                <span>{product}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex justify-between items-center mt-4 pt-4 border-t border-amber-100">
                            <span className="text-amber-600">
                              {order.items} items
                            </span>
                            <span className="text-xl font-bold text-amber-900">
                              ${order.total}
                            </span>
                          </div>

                          {/* Track Order Button */}
                          <button className="w-full mt-4 bg-amber-100 hover:bg-amber-200 text-amber-700 px-4 py-2 rounded-xl font-medium transition-colors">
                            Track Order
                          </button>
                        </motion.div>
                      ))
                  : // Order History (all orders)
                    orderHistory.map((order) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-amber-100"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                              <BiPackage className="text-white text-2xl" />
                            </div>
                            <div>
                              <h3 className="font-bold text-amber-900">
                                {order.id}
                              </h3>
                              <p className="text-sm text-amber-600">
                                {order.date}
                              </p>
                            </div>
                          </div>
                          <div
                            className={`px-4 py-2 rounded-full border ${getStatusColor(order.status)} flex items-center gap-2`}
                          >
                            {getStatusIcon(order.status)}
                            <span className="text-sm font-medium capitalize">
                              {order.status}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {order.products.map((product, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-amber-700"
                            >
                              <GiHoneyJar className="text-amber-400" />
                              <span>{product}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-amber-100">
                          <span className="text-amber-600">
                            {order.items} items
                          </span>
                          <span className="text-xl font-bold text-amber-900">
                            ${order.total}
                          </span>
                        </div>

                        {/* Reorder Button */}
                        {order.status === "delivered" && (
                          <button className="w-full mt-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300">
                            Reorder
                          </button>
                        )}
                      </motion.div>
                    ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column - Customer Info & Cart */}
          <div className="space-y-6">
            {/* Customer Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-amber-100">
              <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                <FaLeaf className="text-amber-500" />
                Customer Information
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-amber-700">
                  <FaPhone className="text-amber-400" />
                  <span>+256 700 000000</span>
                </div>
                <div className="flex items-center gap-3 text-amber-700">
                  <FaEnvelope className="text-amber-400" />
                  <span>customer@tivan.com</span>
                </div>
                <div className="flex items-center gap-3 text-amber-700">
                  <FaMapMarkerAlt className="text-amber-400" />
                  <span>Kampala, Uganda</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-amber-100">
                <div className="flex items-center justify-between">
                  <span className="text-amber-600">Member since</span>
                  <span className="font-bold text-amber-800">2024</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-amber-600">Total orders</span>
                  <span className="font-bold text-amber-800">12</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-amber-100">
              <h3 className="text-xl font-bold text-amber-900 mb-4">
                Order Summary
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-amber-600">Active orders</span>
                  <span className="font-bold text-amber-800">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600">Completed orders</span>
                  <span className="font-bold text-amber-800">10</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-amber-100">
                  <span className="text-amber-800 font-bold">
                    Loyalty points
                  </span>
                  <span className="text-2xl font-black text-amber-600">
                    250
                  </span>
                </div>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Need Help?</h3>
              <p className="text-amber-100 text-sm mb-4">
                Our customer support team is available 24/7 to assist you with
                your orders.
              </p>
              <button className="w-full bg-white text-amber-600 hover:bg-amber-50 px-4 py-3 rounded-xl font-semibold transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isOpen && <CartDrawer handleCart={handleOpen} isCart={isOpen} />}
      </AnimatePresence>
    </div>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaStarHalfAlt,
  FaLeaf,
  FaShoppingCart,
  FaCheck,
  FaInfoCircle,
  FaFire,
} from "react-icons/fa";

import { GiCow, GiMilkCarton, GiAges } from "react-icons/gi";
import { useCart } from "../../context/CartContext";
import { PiCheese } from "react-icons/pi";

const CheeseMoree = () => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState({});

  const cheeseDetails = [
    {
      id: 1,
      name: "Mozzarella Cheese",
      price: 6554,
      quantity: "500g",
      image: "/mozarella.jpg",
      description:
        "Soft, mild-flavored cheese perfect for pizzas and Italian dishes",
      benefits: ["Soft", "Mild", "Stretchy"],
      inStock: true,
      rating: 4.8,
      reviews: 189,
      category: "Fresh Cheese",
    },
    {
      id: 2,
      name: "Cheddar Cheese",
      price: 643,
      quantity: "500g",
      image: "/cheddar.jpg",
      description:
        "Sharp, aged cheese with rich flavor, great for sandwiches and cooking",
      benefits: ["Sharp", "Aged", "Versatile"],
      inStock: true,
      rating: 4.9,
      reviews: 256,
      category: "Aged Cheese",
    },
    {
      id: 3,
      name: "Gouda Cheese",
      price: 321,
      quantity: "500g",
      image: "/gouda.jpg",
      description:
        "Smooth, creamy cheese with a slightly sweet and nutty flavor",
      benefits: ["Creamy", "Nutty", "Smooth"],
      inStock: true,
      rating: 4.7,
      reviews: 167,
      category: "Semi-Hard Cheese",
    },
    {
      id: 4,
      name: "Paneer Cheese",
      price: 790,
      quantity: "500g",
      image: "/paneer.jpg",
      description:
        "Fresh, non-melting Indian cheese perfect for curries and grilling",
      benefits: ["Fresh", "Non-melting", "High Protein"],
      inStock: true,
      rating: 4.8,
      reviews: 145,
      category: "Fresh Cheese",
    },
  ];

  const cheeseTypes = [
    { name: "Mozzarella", image: "/mozarella.jpg", category: "Fresh" },
    { name: "Cheddar", image: "/cheddar.jpg", category: "Aged" },
    { name: "Gouda", image: "/gouda.jpg", category: "Semi-Hard" },
    { name: "Paneer", image: "/paneer.jpg", category: "Fresh" },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedToCart((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-16"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/flyers/1000728711.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 px-4 py-2 rounded-full mb-4">
                <PiCheese className="text-amber-400" />
                <span className="text-amber-300 text-sm font-medium">
                  Artisan Cheese
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                Premium Cheese
              </h1>
              <p className="text-amber-100/90 text-lg max-w-xl">
                Handcrafted artisan cheeses made from fresh cow milk. Aged to
                perfection for rich flavor and creamy texture.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Badge */}
        <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-xl hidden md:block">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
              <GiMilkCarton className="text-white text-2xl" />
            </div>
            <div>
              <p className="text-sm text-amber-600">Fresh from</p>
              <p className="font-bold text-amber-900">Local Farms</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
          <PiCheese className="text-amber-600" />
          <span className="text-amber-800 font-medium">Cheese Collection</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-amber-900 mb-4">
          Best Sales on{" "}
          <span className="text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text">
            All Cheese Types
          </span>
        </h2>

        <p className="text-amber-700/80 max-w-2xl mx-auto">
          Available in 100g, 250g, 400g, 500g, and 1000g packs. Each cheese is
          carefully aged and packaged to preserve its unique flavor.
        </p>
      </motion.div>

      {/* Cheese Types Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {cheeseTypes.map((cheese, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="group relative cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={cheese.image}
                alt={cheese.name}
                className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-white font-bold text-sm md:text-base">
                  {cheese.name}
                </h3>
                <p className="text-amber-300 text-xs">{cheese.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Product Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {cheeseDetails.map((product) => (
          <motion.div
            key={product.id}
            variants={fadeInUp}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-amber-100"
          >
            {/* Product Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                {product.category}
              </div>

              {/* Stock Badge */}
              {!product.inStock && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Out of Stock
                </div>
              )}

              {/* Size Badge */}
              {product.inStock && (
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-lg">
                  <span className="text-sm font-bold text-amber-800">
                    {product.quantity}
                  </span>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-5">
              {/* Rating */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => {
                    if (i < Math.floor(product.rating)) {
                      return (
                        <FaStar key={i} className="text-amber-400 text-sm" />
                      );
                    } else if (
                      i === Math.floor(product.rating) &&
                      product.rating % 1 !== 0
                    ) {
                      return (
                        <FaStarHalfAlt
                          key={i}
                          className="text-amber-400 text-sm"
                        />
                      );
                    } else {
                      return (
                        <FaStar key={i} className="text-gray-300 text-sm" />
                      );
                    }
                  })}
                </div>
                <span className="text-xs text-amber-600">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Product Name */}
              <h3 className="text-lg font-bold text-amber-900 mb-2">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-amber-700/80 mb-3 line-clamp-2">
                {product.description}
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap gap-1 mb-4">
                {product.benefits.map((benefit, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-yellow-50 text-yellow-600 rounded-full text-xs font-medium"
                  >
                    {benefit}
                  </span>
                ))}
              </div>

              {/* Price and Add to Cart */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-amber-600">Price</span>
                  <div className="text-2xl font-black text-amber-900">
                    UGX {product.price.toLocaleString()}
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock || addedToCart[product.id]}
                  className={`relative overflow-hidden ${
                    product.inStock
                      ? addedToCart[product.id]
                        ? "bg-green-500"
                        : "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700"
                      : "bg-gray-400 cursor-not-allowed"
                  } text-white w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105`}
                >
                  {addedToCart[product.id] ? (
                    <FaCheck className="text-white text-xl" />
                  ) : (
                    <FaShoppingCart className="text-white text-xl" />
                  )}
                </button>
              </div>
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400 rounded-2xl transition-colors duration-500 pointer-events-none"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 border border-yellow-100">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
            <GiCow className="text-white text-2xl" />
          </div>
          <h3 className="text-lg font-bold text-amber-900 mb-2">
            Fresh Cow Milk
          </h3>
          <p className="text-amber-700/80 text-sm">
            Made from fresh, high-quality cow milk sourced from local farms.
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 border border-yellow-100">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
            <GiAges className="text-white text-2xl" />
          </div>
          <h3 className="text-lg font-bold text-amber-900 mb-2">
            Perfectly Aged
          </h3>
          <p className="text-amber-700/80 text-sm">
            Each cheese is aged to perfection for optimal flavor and texture.
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 border border-yellow-100">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
            <FaFire className="text-white text-2xl" />
          </div>
          <h3 className="text-lg font-bold text-amber-900 mb-2">
            High Protein
          </h3>
          <p className="text-amber-700/80 text-sm">
            Rich in protein and calcium for a healthy, balanced diet.
          </p>
        </div>
      </motion.div>

      {/* Cheese Serving Tips */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-12 bg-white rounded-2xl p-8 border border-amber-100"
      >
        <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
          <FaInfoCircle className="text-yellow-500" />
          Cheese Serving & Storage Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-yellow-600 text-xs font-bold">1</span>
            </div>
            <p className="text-amber-700 text-sm">
              Serve at room temperature for best flavor
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-yellow-600 text-xs font-bold">2</span>
            </div>
            <p className="text-amber-700 text-sm">
              Store in refrigerator wrapped in wax paper
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-yellow-600 text-xs font-bold">3</span>
            </div>
            <p className="text-amber-700 text-sm">
              Pair with fruits, nuts, or honey for a delightful snack
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-yellow-600 text-xs font-bold">4</span>
            </div>
            <p className="text-amber-700 text-sm">
              Use within 7-10 days after opening for freshness
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CheeseMoree;

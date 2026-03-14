import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaStarHalfAlt,
  FaLeaf,
  FaShoppingCart,
  FaCheck,
  FaInfoCircle,
} from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { GiHoneycomb, GiHoneyJar, GiBee } from "react-icons/gi";
import { useCart } from "../../context/CartContext";

const HoneyMoree = () => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState({});

  const honeyDetails = [
    {
      id: 1,
      name: "Wild Honey",
      price: 500,
      quantity: "500g",
      image: "/honeyinto.jpg",
      description: "Raw wildflower honey harvested from pristine forests",
      benefits: ["Raw", "Unfiltered", "Wildflower"],
      inStock: true,
      rating: 4.9,
      reviews: 328,
    },
    {
      id: 2,
      name: "Premium Honey",
      price: 600,
      quantity: "1kg",
      image: "/honeyinto.jpg",
      description: "Premium grade honey with rich flavor and aroma",
      benefits: ["Premium", "Rich Flavor", "Pure"],
      inStock: true,
      rating: 4.8,
      reviews: 256,
    },
    {
      id: 3,
      name: "Organic Honey",
      price: 300,
      quantity: "250g",
      image: "/honeyinto.jpg",
      description: "Certified organic honey from sustainable sources",
      benefits: ["Organic", "Sustainable", "Natural"],
      inStock: true,
      rating: 4.7,
      reviews: 189,
    },
    {
      id: 4,
      name: "Manuka Honey",
      price: 900,
      quantity: "200g",
      image: "/honeyinto.jpg",
      description: "Premium Manuka honey with high MGO content",
      benefits: ["Manuka", "High MGO", "Therapeutic"],
      inStock: true,
      rating: 4.9,
      reviews: 412,
    },
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
          style={{ backgroundImage: "url('/flyers/1000728713.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 px-4 py-2 rounded-full mb-4">
                <GiBee className="text-amber-400" />
                <span className="text-amber-300 text-sm font-medium">
                  100% Pure Honey
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                Natural Honey
              </h1>
              <p className="text-amber-100/90 text-lg max-w-xl">
                Pure, raw wildflower honey harvested from the pristine forests
                of Uganda. Rich in antioxidants and natural enzymes.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Badge */}
        <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-xl hidden md:block">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
              <GiHoneycomb className="text-white text-2xl" />
            </div>
            <div>
              <p className="text-sm text-amber-600">Rich in</p>
              <p className="font-bold text-amber-900">Antioxidants</p>
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
          <GiHoneyJar className="text-amber-600" />
          <span className="text-amber-800 font-medium">Honey Variants</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-amber-900 mb-4">
          Choose Your{" "}
          <span className="text-transparent bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text">
            Perfect
          </span>{" "}
          Honey
        </h2>

        <p className="text-amber-700/80 max-w-2xl mx-auto">
          Available in 100g, 250g, 400g, 500g, and 1000g jars. Each jar is
          carefully filled and sealed to preserve freshness.
        </p>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {honeyDetails.map((product) => (
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

              {/* Stock Badge */}
              {!product.inStock && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Out of Stock
                </div>
              )}

              {/* Size Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-lg">
                <span className="text-sm font-bold text-amber-800">
                  {product.quantity}
                </span>
              </div>
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
                    className="px-2 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-medium"
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
                        : "bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600"
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
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400 rounded-2xl transition-colors duration-500 pointer-events-none"></div>
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
        <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 border border-amber-100">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-4">
            <FaDroplet className="text-white text-2xl" />
          </div>
          <h3 className="text-lg font-bold text-amber-900 mb-2">100% Raw</h3>
          <p className="text-amber-700/80 text-sm">
            Never heated or processed, preserving all natural enzymes and
            nutrients.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 border border-amber-100">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-4">
            <GiBee className="text-white text-2xl" />
          </div>
          <h3 className="text-lg font-bold text-amber-900 mb-2">
            Wild Harvested
          </h3>
          <p className="text-amber-700/80 text-sm">
            Sourced from wild beehives in pristine Ugandan forests.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 border border-amber-100">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-4">
            <GiHoneycomb className="text-white text-2xl" />
          </div>
          <h3 className="text-lg font-bold text-amber-900 mb-2">
            Rich in Antioxidants
          </h3>
          <p className="text-amber-700/80 text-sm">
            Packed with natural antioxidants that support immune health.
          </p>
        </div>
      </motion.div>

      {/* Honey Facts */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-12 bg-white rounded-2xl p-8 border border-amber-100"
      >
        <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
          <FaInfoCircle className="text-amber-500" />
          Honey Facts & Storage Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-amber-600 text-xs font-bold">1</span>
            </div>
            <p className="text-amber-700 text-sm">
              Honey never spoils - store in a cool, dry place
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-amber-600 text-xs font-bold">2</span>
            </div>
            <p className="text-amber-700 text-sm">
              If crystallized, place jar in warm water to liquefy
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-amber-600 text-xs font-bold">3</span>
            </div>
            <p className="text-amber-700 text-sm">
              Don't refrigerate - room temperature is ideal
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-amber-600 text-xs font-bold">4</span>
            </div>
            <p className="text-amber-700 text-sm">
              Keep lid tightly closed to prevent moisture absorption
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HoneyMoree;

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
import { GiButter, GiCow, GiMilkCarton, GiCookingPot } from "react-icons/gi";
import { useCart } from "../../context/CartContext";

const ButterMoree = () => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState({});

  const butterDetails = [
    {
      id: 1,
      name: "Unsalted Butter",
      price: 789,
      quantity: "500g",
      image: "/flyers/buuter22.jpg",
      description: "Pure, unsalted butter perfect for baking and cooking",
      benefits: ["Unsalted", "Baking Grade", "Creamy"],
      inStock: true,
      rating: 4.8,
      reviews: 234,
      type: "Unsalted",
    },
    {
      id: 2,
      name: "Salted Butter",
      price: 650,
      quantity: "500g",
      image: "/flyers/buuter22.jpg",
      description: "Perfectly salted butter for spreading and everyday use",
      benefits: ["Salted", "Spreadable", "Rich Flavor"],
      inStock: true,
      rating: 4.7,
      reviews: 189,
      type: "Salted",
    },
    {
      id: 3,
      name: "European Style",
      price: 900,
      quantity: "500g",
      image: "/flyers/buuter22.jpg",
      description: "High-fat European style butter for rich, creamy texture",
      benefits: ["High Fat", "European Style", "Extra Creamy"],
      inStock: true,
      rating: 4.9,
      reviews: 156,
      type: "European",
    },
    {
      id: 4,
      name: "Cultured Butter",
      price: 7899,
      quantity: "250g",
      image: "/flyers/buuter22.jpg",
      description: "Artisanal cultured butter with tangy, complex flavor",
      benefits: ["Cultured", "Artisanal", "Tangy"],
      inStock: true,
      rating: 4.9,
      reviews: 98,
      type: "Cultured",
    },
  ];

  const butterTypes = [
    { name: "Unsalted", description: "Perfect for baking", icon: GiButter },
    { name: "Salted", description: "Ideal for spreading", icon: GiButter },
    { name: "European", description: "Extra creamy", icon: GiButter },
    { name: "Cultured", description: "Tangy flavor", icon: GiButter },
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
          style={{ backgroundImage: "url('/flyers/1000728708.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 px-4 py-2 rounded-full mb-4">
                <GiButter className="text-amber-400" />
                <span className="text-amber-300 text-sm font-medium">
                  Creamy & Delicious
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                Natural Butter
              </h1>
              <p className="text-amber-100/90 text-lg max-w-xl">
                Smooth and fresh from farms. Creamy, organic butter from
                grass-fed cows, perfect for cooking, baking, and spreading.
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
              <p className="font-bold text-amber-900">Grass-fed Cows</p>
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
          <GiButter className="text-amber-600" />
          <span className="text-amber-800 font-medium">Butter Collection</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-amber-900 mb-4">
          Best Sales on{" "}
          <span className="text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text">
            Premium Butter
          </span>
        </h2>

        <p className="text-amber-700/80 max-w-2xl mx-auto">
          Available in 100g, 250g, 400g, 500g, and 1000g packs. Each block is
          carefully churned and packaged for freshness.
        </p>
      </motion.div>

      {/* Butter Types Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {butterTypes.map((butter, index) => {
          const Icon = butter.icon;
          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-amber-100"
            >
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Icon className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-amber-900">{butter.name}</h3>
              <p className="text-xs text-amber-600 mt-1">
                {butter.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Product Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {butterDetails.map((product) => (
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

              {/* Type Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                {product.type}
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
            Grass-Fed Cows
          </h3>
          <p className="text-amber-700/80 text-sm">
            Our butter comes from cows that graze on natural grasslands,
            producing richer, more nutritious milk.
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 border border-yellow-100">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
            <GiCookingPot className="text-white text-2xl" />
          </div>
          <h3 className="text-lg font-bold text-amber-900 mb-2">
            Versatile Usage
          </h3>
          <p className="text-amber-700/80 text-sm">
            Perfect for baking, cooking, spreading, and all your culinary needs.
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 border border-yellow-100">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
            <FaDroplet className="text-white text-2xl" />
          </div>
          <h3 className="text-lg font-bold text-amber-900 mb-2">
            Rich & Creamy
          </h3>
          <p className="text-amber-700/80 text-sm">
            High butterfat content for that rich, creamy texture you love.
          </p>
        </div>
      </motion.div>

      {/* Butter Tips */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-12 bg-white rounded-2xl p-8 border border-amber-100"
      >
        <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
          <FaInfoCircle className="text-yellow-500" />
          Butter Tips & Storage
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-yellow-600 text-xs font-bold">1</span>
            </div>
            <p className="text-amber-700 text-sm">
              Keep refrigerated at all times
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-yellow-600 text-xs font-bold">2</span>
            </div>
            <p className="text-amber-700 text-sm">
              Use within 2-3 weeks for best freshness
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-yellow-600 text-xs font-bold">3</span>
            </div>
            <p className="text-amber-700 text-sm">
              Can be frozen for up to 6 months
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-yellow-600 text-xs font-bold">4</span>
            </div>
            <p className="text-amber-700 text-sm">
              Bring to room temperature for easy spreading
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ButterMoree;

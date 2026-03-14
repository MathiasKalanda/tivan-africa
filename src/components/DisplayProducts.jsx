import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaStar, FaLeaf, FaShoppingCart } from "react-icons/fa";
import { GiHoneyJar, GiButter, GiOilDrum } from "react-icons/gi";
import { MdLocalFireDepartment } from "react-icons/md";
import { PiCheeseThin } from "react-icons/pi";
import { Link } from "@tanstack/react-router";
const products = [
  {
    name: "Castor Oil",
    description:
      "Purely refined for daily use. Cold-pressed and rich in vitamin E for hair and skin nourishment.",
    image: "/refined-removebg-preview.png",
    price: "$24.99",
    rating: 4.8,
    icon: GiOilDrum,
    color: "from-green-500 to-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    features: ["Cold-pressed", "Vitamin E Rich", "100% Pure"],
  },
  {
    name: "Natural Honey",
    description:
      "Harvested straight from the hive. Raw, unfiltered wildflower honey packed with antioxidants.",
    image: "/honeyinto.jpg",
    price: "$29.99",
    rating: 4.9,
    icon: GiHoneyJar,
    color: "from-amber-500 to-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    features: ["Raw", "Unfiltered", "Wildflower"],
  },
  {
    name: "Organic Butter",
    description:
      "Smooth and fresh from farms. Creamy, organic butter from grass-fed cows.",
    image: "/flyers/buuter22.jpg",
    price: "$18.99",
    rating: 4.7,
    icon: GiButter,
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    features: ["Grass-fed", "Creamy", "Organic"],
  },
  {
    name: "Fresh Cow Ghee",
    description:
      "From grass-fed dairy cows. Clarified butter, pure and aromatic for traditional cooking.",
    image: "/flyers/ghee.jpg",
    price: "$28.99",
    rating: 4.9,
    icon: GiHoneyJar,
    color: "from-amber-600 to-amber-800",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    features: ["Clarified", "Aromatic", "Traditional"],
  },
  {
    name: "Pure Tasty Cheese",
    description:
      "Relax and unwind naturally. Aged artisanal cheese, rich and flavorful.",
    image: "/flyers/cheese.jpg",
    price: "$22.99",
    rating: 4.8,
    icon: PiCheeseThin,
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    features: ["Aged", "Artisanal", "Rich Flavor"],
  },
];

const DisplayProducts = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % products.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleDotClick = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="relative bg-gradient-to-br from-amber-50 via-white to-amber-50 py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Honeycomb Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 transform rotate-12 scale-150">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-amber-800 clip-hexagon"></div>
            ))}
          </div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-amber-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-amber-300 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>

        {/* Floating Dots */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/30 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
            <FaLeaf className="text-amber-600" />
            <span className="text-amber-800 font-medium">
              Featured Products
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-transparent bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text">
              Our Premium Selection
            </span>
          </h2>
          <p className="text-amber-700/80 max-w-2xl mx-auto">
            Discover our hand-picked selection of natural products, each crafted
            with care and tradition to bring you the finest quality.
          </p>
        </div>

        {/* Main Carousel */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-[500px] md:h-[450px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full max-w-4xl"
              >
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-amber-100">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Product Image */}
                    <div className="relative md:w-1/2">
                      <div className="relative">
                        {/* Glow Effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${products[current].color} rounded-full filter blur-3xl opacity-20`}
                        ></div>

                        {/* Image */}
                        <img
                          src={products[current].image}
                          alt={products[current].name}
                          className="relative z-10 w-full h-64 md:h-80 object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                        />

                        {/* Floating Badge */}
                        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full p-3 shadow-xl">
                          <div className="text-white font-bold text-sm">
                            {current + 1}/{products.length}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="md:w-1/2 space-y-4">
                      {/* Icon and Category */}
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${products[current].color} flex items-center justify-center`}
                        >
                          {(() => {
                            const Icon = products[current].icon;
                            return <Icon className="text-white text-2xl" />;
                          })()}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-amber-600 text-sm">
                              Premium Quality
                            </span>
                            {current === 0 && (
                              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                <MdLocalFireDepartment className="animate-pulse" />
                                Bestseller
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Product Name */}
                      <h3 className="text-3xl md:text-4xl font-black text-amber-900">
                        {products[current].name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={
                                i < Math.floor(products[current].rating)
                                  ? "text-amber-400"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                        <span className="text-amber-700 font-medium">
                          {products[current].rating}
                        </span>
                        <span className="text-amber-400">•</span>
                        <span className="text-amber-600">120+ reviews</span>
                      </div>

                      {/* Description */}
                      <p className="text-amber-700/90 leading-relaxed">
                        {products[current].description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {products[current].features.map((feature, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 ${products[current].bgColor} ${products[current].borderColor} border rounded-full text-sm text-amber-800`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-4">
                        <div>
                          <span className="text-sm text-amber-600">
                            Starting from
                          </span>
                          <div className="text-3xl font-bold text-amber-900">
                            {products[current].price}
                          </div>
                        </div>

                        <button className="group bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                          <FaShoppingCart />
                          Order Now
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-50 transition-colors z-20"
          >
            <FaArrowRight className="text-amber-600 transform rotate-180" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-50 transition-colors z-20"
          >
            <FaArrowRight className="text-amber-600" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 ${
                index === current
                  ? "w-10 h-3 bg-gradient-to-r from-amber-600 to-amber-500"
                  : "w-3 h-3 bg-amber-300 hover:bg-amber-400"
              } rounded-full`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to={"/productPage"}
            className="inline-flex items-center gap-2 border-2 border-amber-300 hover:border-amber-400 text-amber-700 hover:text-amber-800 px-8 py-3 rounded-full font-medium transition-all duration-300"
          >
            View All Products
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;

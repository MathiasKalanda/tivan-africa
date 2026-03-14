import { Link } from "@tanstack/react-router";
import React from "react";
import { motion } from "framer-motion";
import {
  FaCircleArrowRight,
  FaLeaf,
  FaStar,
  FaDroplet,
  FaShield,
  FaFire,
  FaSprayCanSparkles,
} from "react-icons/fa6";
import {
  GiOilDrum,
  GiDrop,
  GiHealthNormal,
  GiHairStrands,
} from "react-icons/gi";
import {} from "react-icons/gi";
import { MdFaceRetouchingNatural } from "react-icons/md";
const OilDetails = () => {
  const oilProducts = [
    {
      id: 1,
      name: "Cold-Pressed Castor Oil",
      price: "UGX 15,000",
      size: "100ml",
      image: "/oil6.jpg",
      description:
        "Pure cold-pressed castor oil, rich in vitamin E and fatty acids",
      benefits: ["Hair Growth", "Skin Care", "Anti-inflammatory"],
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Organic Castor Oil",
      price: "UGX 25,000",
      size: "250ml",
      image: "/oil3.jpg",
      description:
        "Certified organic castor oil for therapeutic and beauty applications",
      benefits: ["Organic", "Therapeutic", "Chemical-free"],
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: "Premium Castor Oil",
      price: "UGX 45,000",
      size: "500ml",
      image: "/oil7.jpg",
      description: "Premium grade castor oil, cold-pressed and unrefined",
      benefits: ["Premium", "Unrefined", "Nutrient-rich"],
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      name: "Refined Castor Oil",
      price: "UGX 65,000",
      size: "1L",
      image: "/oilrefined.jpg",
      description: "Refined castor oil for industrial and beauty applications",
      benefits: ["Refined", "Versatile", "Multi-purpose"],
      rating: 4.6,
      reviews: 67,
    },
  ];

  const benefits = [
    {
      icon: GiHairStrands,
      title: "Hair Growth",
      description: "Promotes thicker, stronger hair",
    },
    {
      icon: MdFaceRetouchingNatural,
      title: "Skin Nourishment",
      description: "Deeply moisturizes skin",
    },
    {
      icon: GiHealthNormal,
      title: "Anti-inflammatory",
      description: "Reduces inflammation",
    },
    {
      icon: FaSprayCanSparkles,
      title: "Vitamin E Rich",
      description: "Natural antioxidant",
    },
  ];

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
    <div className="relative min-h-screen bg-gradient-to-b from-green-50 to-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 transform rotate-12 scale-150">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-green-800 clip-hexagon"></div>
            ))}
          </div>
        </div>

        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-300 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div
          className="h-[300px] md:h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/jar3.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-transparent"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full mb-4">
                  <GiOilDrum className="text-green-300" />
                  <span className="text-white text-sm font-medium">
                    100% Natural
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                  Our{" "}
                  <span className="text-transparent bg-gradient-to-r from-green-300 to-green-400 bg-clip-text">
                    Castor Oil
                  </span>{" "}
                  Products
                </h1>
                <p className="text-green-100/90 text-lg max-w-xl">
                  Discover our range of pure, cold-pressed castor oils for hair,
                  skin, and wellness
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 -mt-16 relative z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-xl p-6 text-center border border-green-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                  <Icon className="text-white text-2xl" />
                </div>
                <h3 className="font-bold text-green-800 text-sm md:text-base">
                  {benefit.title}
                </h3>
                <p className="text-xs text-green-600 mt-1 hidden md:block">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Product Sections */}
      <div className="container mx-auto px-4 py-20">
        {oilProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 mb-20 last:mb-0`}
          >
            {/* Product Image */}
            <div className="md:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Size Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                    <span className="font-bold text-green-700">
                      {product.size}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-3 py-2 rounded-full shadow-lg flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="font-bold text-green-700">
                      {product.rating}
                    </span>
                    <span className="text-xs text-green-600">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <div
                className={`w-20 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 mb-6 ${
                  index % 2 === 0 ? "" : "md:ml-auto"
                }`}
              ></div>

              <h2
                className={`text-3xl md:text-4xl font-black text-green-800 mb-4 ${
                  index % 2 === 0 ? "" : "md:text-right"
                }`}
              >
                {product.name}
              </h2>

              <p
                className={`text-green-700/80 text-lg mb-6 ${
                  index % 2 === 0 ? "" : "md:text-right"
                }`}
              >
                {product.description}
              </p>

              {/* Benefits */}
              <div
                className={`flex flex-wrap gap-2 mb-6 ${
                  index % 2 === 0 ? "" : "md:justify-end"
                }`}
              >
                {product.benefits.map((benefit, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                  >
                    {benefit}
                  </span>
                ))}
              </div>

              {/* Price and CTA */}
              <div
                className={`flex items-center gap-6 ${
                  index % 2 === 0 ? "" : "md:justify-end"
                }`}
              >
                <div>
                  <span className="text-sm text-green-600">Price</span>
                  <div className="text-3xl font-black text-green-800">
                    {product.price}
                  </div>
                </div>

                <Link
                  to="/products/$slug"
                  params={{ slug: "natural-tivanoil" }}
                  className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span>Order Now</span>
                  <FaCircleArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <GiOilDrum className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cold-Pressed</h3>
              <p className="text-green-100">
                Retains all natural nutrients and benefits
              </p>
            </div>

            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <FaShield className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Pure</h3>
              <p className="text-green-100">
                No additives, preservatives, or chemicals
              </p>
            </div>

            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <FaFire className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Rich in Vitamin E</h3>
              <p className="text-green-100">
                Natural antioxidant for skin and hair
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-green-800 mb-4">
            Our Castor Oil{" "}
            <span className="text-transparent bg-gradient-to-r from-green-500 to-green-600 bg-clip-text">
              Gallery
            </span>
          </h2>
          <p className="text-green-700/80 max-w-2xl mx-auto">
            Explore our collection of pure, natural castor oil products
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {oilProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-sm p-3">{product.size}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(
            25% 0%,
            75% 0%,
            100% 50%,
            75% 100%,
            25% 100%,
            0% 50%
          );
        }
      `}</style>
    </div>
  );
};

export default OilDetails;

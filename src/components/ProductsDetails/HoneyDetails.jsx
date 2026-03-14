import { Link } from "@tanstack/react-router";
import React from "react";
import { motion } from "framer-motion";
import {
  FaCircleArrowRight,
  FaLeaf,
  FaStar,
  FaDroplet,
  FaShield,
  FaSprayCanSparkles,
} from "react-icons/fa6";
import { GiHoneycomb, GiHoneyJar, GiBee, GiHive } from "react-icons/gi";

const HoneyDetails = () => {
  const honeyProducts = [
    {
      id: 1,
      name: "Wild Honey",
      price: "UGX 25,000",
      size: "250g",
      image: "/honeyinto.jpg",
      description: "Raw wildflower honey harvested from pristine forests",
      benefits: ["Raw", "Unfiltered", "Wildflower"],
      rating: 4.9,
      reviews: 328,
      color: "from-amber-400 to-amber-600",
    },
    {
      id: 2,
      name: "Premium Honey",
      price: "UGX 45,000",
      size: "500g",
      image: "/honeyinto.jpg",
      description: "Premium grade honey with rich flavor and aroma",
      benefits: ["Premium", "Rich Flavor", "Pure"],
      rating: 4.8,
      reviews: 256,
      color: "from-amber-500 to-amber-700",
    },
    {
      id: 3,
      name: "Organic Honey",
      price: "UGX 55,000",
      size: "1kg",
      image: "/honeyinto.jpg",
      description: "Certified organic honey from sustainable sources",
      benefits: ["Organic", "Sustainable", "Natural"],
      rating: 4.7,
      reviews: 189,
      color: "from-amber-600 to-amber-800",
    },
    {
      id: 4,
      name: "Manuka Honey",
      price: "UGX 85,000",
      size: "250g",
      image: "/honeyinto.jpg",
      description: "Premium Manuka honey with high MGO content",
      benefits: ["Manuka", "High MGO", "Therapeutic"],
      rating: 4.9,
      reviews: 412,
      color: "from-amber-700 to-amber-900",
    },
  ];

  const benefits = [
    {
      icon: GiBee,
      title: "Raw & Unfiltered",
      description: "Never heated or processed",
    },
    {
      icon: GiHive,
      title: "Wild Harvested",
      description: "From pristine forests",
    },
    {
      icon: FaDroplet,
      title: "Rich in Enzymes",
      description: "Natural goodness",
    },
    {
      icon: FaSprayCanSparkles,
      title: "Antioxidant Rich",
      description: "Supports immunity",
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
    <div className="relative min-h-screen bg-gradient-to-b from-amber-50 to-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 transform rotate-12 scale-150">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-amber-800 clip-hexagon"></div>
            ))}
          </div>
        </div>

        {/* Floating Honey Drops */}
        <div className="absolute top-20 left-20">
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-3 h-3 bg-amber-400/30 rounded-full"
          />
        </div>
        <div className="absolute bottom-40 right-20">
          <motion.div
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="w-4 h-4 bg-amber-500/30 rounded-full"
          />
        </div>

        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-300 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div
          className="h-[300px] md:h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/jar3.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-amber-800/60 to-transparent"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full mb-4">
                  <GiHoneycomb className="text-amber-300" />
                  <span className="text-white text-sm font-medium">
                    100% Pure Honey
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                  Our{" "}
                  <span className="text-transparent bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text">
                    Honey
                  </span>{" "}
                  Products
                </h1>
                <p className="text-amber-100/90 text-lg max-w-xl">
                  Discover our range of pure, raw honey harvested from the
                  pristine forests of Uganda
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
                className="bg-white rounded-2xl shadow-xl p-6 text-center border border-amber-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
                  <Icon className="text-white text-2xl" />
                </div>
                <h3 className="font-bold text-amber-800 text-sm md:text-base">
                  {benefit.title}
                </h3>
                <p className="text-xs text-amber-600 mt-1 hidden md:block">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Product Sections */}
      <div className="container mx-auto px-4 py-20">
        {honeyProducts.map((product, index) => (
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
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`}
                ></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Honeycomb Overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-6 gap-1 transform rotate-12 scale-150 h-full">
                      {[...Array(24)].map((_, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 bg-white clip-hexagon"
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Size Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                    <span className="font-bold text-amber-700">
                      {product.size}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-3 py-2 rounded-full shadow-lg flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="font-bold text-amber-700">
                      {product.rating}
                    </span>
                    <span className="text-xs text-amber-600">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <div
                className={`w-20 h-2 rounded-full bg-gradient-to-r ${product.color} mb-6 ${
                  index % 2 === 0 ? "" : "md:ml-auto"
                }`}
              ></div>

              <h2
                className={`text-3xl md:text-4xl font-black text-amber-800 mb-4 ${
                  index % 2 === 0 ? "" : "md:text-right"
                }`}
              >
                {product.name}
              </h2>

              <p
                className={`text-amber-700/80 text-lg mb-6 ${
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
                    className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium"
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
                  <span className="text-sm text-amber-600">Price</span>
                  <div className="text-3xl font-black text-amber-800">
                    {product.price}
                  </div>
                </div>

                <Link
                  to="/products/$slug"
                  params={{ slug: "natural-honey" }}
                  className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span>Order Now</span>
                  <FaCircleArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Honey Facts Section */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Honey{" "}
              <span className="text-transparent bg-gradient-to-r from-amber-200 to-amber-300 bg-clip-text">
                Facts
              </span>
            </h2>
            <p className="text-amber-100 max-w-2xl mx-auto">
              Discover the amazing benefits and properties of pure natural honey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <GiHoneycomb className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Never Spoils</h3>
              <p className="text-amber-100">
                Honey is the only food that never spoils - archaeologists found
                3000-year-old honey in Egyptian tombs that was still edible!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <GiBee className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bee Power</h3>
              <p className="text-amber-100">
                A single bee colony can produce up to 100 pounds of honey per
                year, visiting millions of flowers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <FaLeaf className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Natural Healer</h3>
              <p className="text-amber-100">
                Raw honey has natural antibacterial and antifungal properties,
                making it a traditional remedy for wounds
              </p>
            </motion.div>
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
          <h2 className="text-3xl md:text-4xl font-black text-amber-800 mb-4">
            Our Honey{" "}
            <span className="text-transparent bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text">
              Collection
            </span>
          </h2>
          <p className="text-amber-700/80 max-w-2xl mx-auto">
            Explore our range of pure, natural honey products
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {honeyProducts.map((product, index) => (
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
                <div className="p-3">
                  <p className="text-white text-sm font-bold">{product.name}</p>
                  <p className="text-amber-300 text-xs">{product.size}</p>
                </div>
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

export default HoneyDetails;

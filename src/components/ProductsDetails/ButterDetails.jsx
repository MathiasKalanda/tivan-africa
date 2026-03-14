import { Link } from "@tanstack/react-router";
import React from "react";
import { motion } from "framer-motion";
import {
  FaCircleArrowRight,
  FaLeaf,
  FaStar,
  FaDroplet,
  FaShield,
  FaCow,
} from "react-icons/fa6";
import {
  GiButter,
  GiCow,
  GiMilkCarton,
  GiCookingPot,
  GiSlicedBread,
} from "react-icons/gi";

const ButterDetails = () => {
  const butterProducts = [
    {
      id: 1,
      name: "Unsalted Butter",
      price: "UGX 15,000",
      size: "250g",
      image: "/flyers/buuter22.jpg",
      description:
        "Pure, unsalted butter perfect for baking and cooking. Made from fresh cow milk.",
      benefits: ["Unsalted", "Baking Grade", "Creamy"],
      rating: 4.8,
      reviews: 234,
      color: "from-yellow-400 to-yellow-600",
      fatContent: "82%",
      bestFor: "Baking, Pastries",
    },
    {
      id: 2,
      name: "Salted Butter",
      price: "UGX 28,000",
      size: "500g",
      image: "/flyers/buuter22.jpg",
      description:
        "Perfectly salted butter for spreading and everyday use. Rich, creamy flavor.",
      benefits: ["Salted", "Spreadable", "Rich Flavor"],
      rating: 4.7,
      reviews: 189,
      color: "from-yellow-500 to-amber-600",
      fatContent: "80%",
      bestFor: "Spreading, Cooking",
    },
    {
      id: 3,
      name: "European Style",
      price: "UGX 32,000",
      size: "250g",
      image: "/flyers/buuter22.jpg",
      description:
        "High-fat European style butter for rich, creamy texture in pastries and sauces.",
      benefits: ["High Fat", "European Style", "Extra Creamy"],
      rating: 4.9,
      reviews: 156,
      color: "from-yellow-500 to-amber-700",
      fatContent: "85%",
      bestFor: "Pastries, Sauces",
    },
    {
      id: 4,
      name: "Cultured Butter",
      price: "UGX 45,000",
      size: "200g",
      image: "/flyers/buuter22.jpg",
      description:
        "Artisanal cultured butter with tangy, complex flavor from traditional fermentation.",
      benefits: ["Cultured", "Artisanal", "Tangy"],
      rating: 4.9,
      reviews: 98,
      color: "from-amber-400 to-amber-600",
      fatContent: "84%",
      bestFor: "Gourmet Cooking",
    },
  ];

  const butterTypes = [
    { name: "Unsalted", icon: GiButter, description: "Perfect for baking" },
    { name: "Salted", icon: GiButter, description: "Ideal for spreading" },
    { name: "European", icon: GiButter, description: "Extra creamy" },
    { name: "Cultured", icon: GiButter, description: "Tangy flavor" },
  ];

  const benefits = [
    {
      icon: GiCow,
      title: "Grass-Fed Cows",
      description: "From cows grazing on natural pastures",
    },
    {
      icon: GiMilkCarton,
      title: "Fresh Daily",
      description: "Made from fresh milk daily",
    },
    {
      icon: FaShield,
      title: "No Preservatives",
      description: "100% natural ingredients",
    },
    {
      icon: GiCookingPot,
      title: "Versatile Use",
      description: "Perfect for all cooking needs",
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
    <div className="relative min-h-screen bg-gradient-to-b from-yellow-50 to-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 transform rotate-12 scale-150">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-yellow-800 clip-hexagon"></div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20">
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-3 h-3 bg-yellow-400/30 rounded-full"
          />
        </div>
        <div className="absolute bottom-40 right-20">
          <motion.div
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="w-4 h-4 bg-yellow-500/30 rounded-full"
          />
        </div>

        <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div
          className="h-[300px] md:h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/jar3.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/80 via-amber-800/60 to-transparent"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full mb-4">
                  <GiButter className="text-yellow-300" />
                  <span className="text-white text-sm font-medium">
                    Pure & Natural
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                  Our{" "}
                  <span className="text-transparent bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text">
                    Butter
                  </span>{" "}
                  Products
                </h1>
                <p className="text-yellow-100/90 text-lg max-w-xl">
                  Discover our range of premium butter, churned fresh from
                  grass-fed cows for rich, creamy flavor
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
                className="bg-white rounded-2xl shadow-xl p-6 text-center border border-yellow-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
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

      {/* Butter Types Preview */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 mt-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {butterTypes.map((butter, index) => {
            const Icon = butter.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-yellow-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                  <Icon className="text-white text-2xl" />
                </div>
                <h3 className="font-bold text-amber-800">{butter.name}</h3>
                <p className="text-xs text-amber-600 mt-1">
                  {butter.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Product Sections */}
      <div className="container mx-auto px-4 py-20">
        {butterProducts.map((product, index) => (
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

                  {/* Butter Pattern Overlay */}
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

                  {/* Fat Content Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                    <span className="text-sm font-bold text-amber-700">
                      {product.fatContent} Fat
                    </span>
                  </div>

                  {/* Size Badge */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                    <span className="font-bold text-amber-700">
                      {product.size}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-3 py-2 rounded-full shadow-lg flex items-center gap-1">
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
                    className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium"
                  >
                    {benefit}
                  </span>
                ))}
              </div>

              {/* Best For */}
              <div
                className={`mb-6 p-4 bg-amber-50 rounded-xl border border-amber-100 ${
                  index % 2 === 0 ? "" : "md:text-right"
                }`}
              >
                <span className="text-sm font-medium text-amber-700">
                  Best For:
                </span>
                <p className="text-amber-600 text-sm mt-1">{product.bestFor}</p>
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
                  params={{ slug: "natural-butter" }}
                  className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span>Order Now</span>
                  <FaCircleArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Butter Benefits Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-amber-600 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Why Choose{" "}
              <span className="text-transparent bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text">
                Natural Butter?
              </span>
            </h2>
            <p className="text-yellow-100 max-w-2xl mx-auto">
              Discover the benefits of choosing pure, natural butter
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
                <FaDroplet className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Rich in Vitamins</h3>
              <p className="text-yellow-100">
                Natural source of vitamins A, D, E, and K2 for overall health
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
                <GiSlicedBread className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Better Baking</h3>
              <p className="text-yellow-100">
                Creates flakier pastries and richer baked goods
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
              <h3 className="text-xl font-bold mb-2">No Additives</h3>
              <p className="text-yellow-100">
                Pure butter with no preservatives or artificial ingredients
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Butter Tips Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-yellow-100"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <GiButter className="text-white text-5xl" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  💡
                </div>
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-amber-800 mb-4">
                Butter Tips & Storage
              </h3>
              <p className="text-amber-700/90 text-lg mb-4">
                Get the most out of your butter with these helpful tips:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-amber-700">
                    Keep refrigerated at all times
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-amber-700">
                    Use within 2-3 weeks for freshness
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-amber-700">
                    Can be frozen for up to 6 months
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-amber-700">
                    Bring to room temp before spreading
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-amber-800 mb-4">
            Our Butter{" "}
            <span className="text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text">
              Collection
            </span>
          </h2>
          <p className="text-amber-700/80 max-w-2xl mx-auto">
            Explore our range of premium butter products
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {butterProducts.map((product, index) => (
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
                  <p className="text-yellow-300 text-xs">{product.size}</p>
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

export default ButterDetails;

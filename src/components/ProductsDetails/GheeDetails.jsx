import { Link } from "@tanstack/react-router";
import React from "react";
import { motion } from "framer-motion";
import {
  FaCircleArrowRight,
  FaLeaf,
  FaStar,
  FaFire,
  FaShield,
  FaCow,
  FaSprayCanSparkles,
} from "react-icons/fa6";
import { GiCow, GiButter, GiCookingPot, GiHealthNormal } from "react-icons/gi";
import { LuBellDot } from "react-icons/lu";
const GheeDetails = () => {
  const gheeProducts = [
    {
      id: 1,
      name: "Pure Cow Ghee",
      price: "UGX 35,000",
      size: "250ml",
      image: "/flyers/crsipyghee.jpg",
      description:
        "Traditional clarified butter from grass-fed cows, rich in aroma and nutrients",
      benefits: ["Grass-fed", "Aromatic", "Traditional"],
      rating: 4.9,
      reviews: 256,
      color: "from-amber-400 to-amber-600",
    },
    {
      id: 2,
      name: "Flavoured Ghee",
      price: "UGX 45,000",
      size: "500ml",
      image: "/flyers/flavoured.jpg",
      description:
        "Infused with natural herbs for enhanced flavor and therapeutic benefits",
      benefits: ["Herb-infused", "Flavorful", "Therapeutic"],
      rating: 4.8,
      reviews: 189,
      color: "from-amber-500 to-amber-700",
    },
    {
      id: 3,
      name: "Premium Ghee",
      price: "UGX 65,000",
      size: "1L",
      image: "/flyers/tastyghee.jpg",
      description:
        "Premium quality ghee, perfect for cooking, baking, and Ayurvedic practices",
      benefits: ["Premium", "Ayurvedic", "Pure"],
      rating: 4.9,
      reviews: 312,
      color: "from-amber-600 to-amber-800",
    },
    {
      id: 4,
      name: "Crispy Ghee",
      price: "UGX 55,000",
      size: "500ml",
      image: "/flyers/crsipyghee.jpg",
      description:
        "Specially prepared for that perfect crispy texture in traditional cooking",
      benefits: ["Crispy", "Cooking Grade", "Rich"],
      rating: 4.7,
      reviews: 145,
      color: "from-amber-500 to-amber-700",
    },
  ];

  const benefits = [
    {
      icon: GiCow,
      title: "Grass-Fed Cows",
      description: "From cows grazing on natural pastures",
    },
    {
      icon: GiHealthNormal,
      title: "Ayurvedic Benefits",
      description: "Traditional healing properties",
    },
    {
      icon: FaFire,
      title: "High Smoke Point",
      description: "Perfect for high-temperature cooking",
    },
    {
      icon: FaSprayCanSparkles,
      title: "Rich in Nutrients",
      description: "Packed with healthy fats and vitamins",
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

        {/* Floating Elements */}
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
                  <LuBellDot className="text-amber-300" />
                  <span className="text-white text-sm font-medium">
                    Pure Cow Ghee
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                  Our{" "}
                  <span className="text-transparent bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text">
                    Ghee
                  </span>{" "}
                  Products
                </h1>
                <p className="text-amber-100/90 text-lg max-w-xl">
                  Discover our range of pure, traditional ghee made from
                  grass-fed cows for authentic flavor and health benefits
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
        {gheeProducts.map((product, index) => (
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

                  {/* Traditional Pattern Overlay */}
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
                  params={{ slug: "natural-cowghee" }}
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

      {/* Ghee Benefits Section */}
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
              Why Choose{" "}
              <span className="text-transparent bg-gradient-to-r from-amber-200 to-amber-300 bg-clip-text">
                Pure Ghee?
              </span>
            </h2>
            <p className="text-amber-100 max-w-2xl mx-auto">
              Discover the amazing benefits of traditional cow ghee for your
              health and cooking
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
                <GiButter className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Rich in Butyrate</h3>
              <p className="text-amber-100">
                Supports digestive health and reduces inflammation in the gut
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
                <GiCookingPot className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">High Smoke Point</h3>
              <p className="text-amber-100">
                Perfect for frying and sautéing without producing harmful
                compounds
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
              <h3 className="text-xl font-bold mb-2">Lactose-Free</h3>
              <p className="text-amber-100">
                Safe for those with dairy sensitivities - the milk solids are
                removed
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ayurvedic Benefits Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-amber-100"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <GiHealthNormal className="text-white text-5xl" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  𑁍
                </div>
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-amber-800 mb-4">
                Ayurvedic Wisdom
              </h3>
              <p className="text-amber-700/90 text-lg mb-4">
                In Ayurveda, ghee is considered a sacred and medicinal food.
                It's believed to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-amber-700">
                    Nourish all body tissues
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-amber-700">
                    Improve digestion and metabolism
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-amber-700">Enhance mental clarity</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-amber-700">
                    Boost immunity and vitality
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
            Our Ghee{" "}
            <span className="text-transparent bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text">
              Collection
            </span>
          </h2>
          <p className="text-amber-700/80 max-w-2xl mx-auto">
            Explore our range of pure, traditional ghee products
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gheeProducts.map((product, index) => (
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

export default GheeDetails;

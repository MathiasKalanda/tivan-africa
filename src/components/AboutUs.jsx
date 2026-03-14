import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaLeaf,
  FaHandsHelping,
  FaSeedling,
  FaUsers,
  FaStar,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";
import {
  GiHoneycomb,
  GiHoneyJar,
  GiFarmTractor,
  GiHeartBeats,
} from "react-icons/gi";
import { MdOutlineAgriculture, MdSpa } from "react-icons/md";

const AboutUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const values = [
    {
      icon: FaSeedling,
      title: "100% Organic",
      description: "All our products are naturally grown without chemicals",
      color: "from-green-400 to-green-600",
    },
    {
      icon: GiFarmTractor,
      title: "Ethical Sourcing",
      description: "Partnering with local farmers for fair trade practices",
      color: "from-amber-400 to-amber-600",
    },
    {
      icon: FaHeart,
      title: "Community First",
      description: "Supporting and empowering local communities",
      color: "from-red-400 to-red-600",
    },
    {
      icon: GiHeartBeats,
      title: "Wellness Focused",
      description: "Promoting healthier lifestyles through natural products",
      color: "from-emerald-400 to-emerald-600",
    },
  ];

  const stats = [
    { number: "50+", label: "Products", icon: GiHoneyJar },
    { number: "10k+", label: "Happy Customers", icon: FaUsers },
    { number: "100+", label: "Local Farmers", icon: MdOutlineAgriculture },
    { number: "5+", label: "Years of Trust", icon: FaStar },
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
    <div
      ref={sectionRef}
      className="relative bg-gradient-to-b from-amber-50 via-white to-amber-50 overflow-hidden"
    >
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
        <div className="absolute top-20 left-10">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-4 h-4 bg-amber-400/30 rounded-full"
          />
        </div>

        <div className="absolute bottom-20 right-10">
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-6 h-6 bg-amber-500/20 rounded-full"
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-amber-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-amber-300 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-20">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
            <GiHoneycomb className="text-amber-600" />
            <span className="text-amber-800 font-medium">Our Story</span>
          </div>

          {/* Title with Honey Drip Effect */}
          <h1 className="relative inline-block">
            <span className="text-6xl md:text-7xl lg:text-8xl font-black">
              <span className="text-transparent bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text">
                Who We
              </span>
              <br />
              <span className="text-amber-900 relative">
                Are
                <svg
                  className="absolute -bottom-4 left-0 w-full"
                  viewBox="0 0 300 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0L50 12L100 8L150 16L200 12L250 14L300 10"
                    stroke="#F59E0B"
                    strokeWidth="6"
                    strokeLinecap="round"
                    className="animate-draw"
                  />
                </svg>
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl text-amber-700/80 max-w-2xl mx-auto mt-8"
          >
            Crafting nature's finest products with love, tradition, and
            sustainability at heart
          </motion.p>
        </motion.div>

        {/* Main Description */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-100"
          >
            {/* Quote Icon */}
            <div className="text-6xl text-amber-300 mb-4">"</div>

            <p className="text-lg md:text-xl text-amber-800 mb-6 leading-relaxed font-medium">
              At <span className="font-bold text-amber-600">Tivan Africa</span>,
              we believe in the power of nature to nourish, heal, and sustain.
              Our mission is to provide pure, organic, and farm-fresh products
              that support healthier lifestyles across homes, supermarkets, and
              communities.
            </p>

            <p className="text-lg md:text-xl text-amber-700/90 mb-6 leading-relaxed">
              From raw honey and ghee to castor oil, cheese, and butter — every
              item we offer is carefully harvested, ethically sourced, and
              quality-assured. We work hand-in-hand with local Ugandan farmers
              to ensure freshness, sustainability, and fair practices across our
              supply chain.
            </p>

            <p className="text-lg md:text-xl text-amber-800 font-semibold leading-relaxed">
              Tivan isn't just a brand — it's a commitment to purity, wellness,
              and community. Join us on a journey of wholesome living and
              natural health.
            </p>

            {/* Signature */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <div>
                <p className="text-amber-900 font-bold">Vivian Sekitto</p>
                <p className="text-amber-600 text-sm">Founder, Tivan Africa</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-100">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                    <Icon className="text-white text-2xl" />
                  </div>
                  <div className="text-3xl font-black text-amber-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-amber-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-black text-center text-amber-900 mb-12"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-100">
                    {/* Icon with Gradient */}
                    <div
                      className={`w-16 h-16 mb-4 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="text-white text-2xl" />
                    </div>

                    <h3 className="text-xl font-bold text-amber-900 mb-2">
                      {value.title}
                    </h3>

                    <p className="text-amber-700/80 text-sm">
                      {value.description}
                    </p>

                    {/* Decorative Corner */}
                    <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-3xl p-12 text-center shadow-2xl overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-6 gap-2 transform rotate-12 scale-150">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-white clip-hexagon"></div>
                ))}
              </div>
            </div>

            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Ready to Taste Nature's Best?
              </h3>
              <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
                Explore our collection of pure, natural products and experience
                the goodness of organic living.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-white text-amber-700 hover:text-amber-800 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Explore Products
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="group border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105">
                  Contact Us
                  <FaHandsHelping className="group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;

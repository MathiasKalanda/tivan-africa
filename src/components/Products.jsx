import { Link } from "@tanstack/react-router";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCircleArrowRight, FaLeaf, FaStar, FaEye } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { GiHoneyJar, GiButter, GiOilDrum, GiHoneycomb } from "react-icons/gi";
import { PiCheeseThin } from "react-icons/pi";
import { Helmet } from "react-helmet";
import Gallery from "./Gallery";
import MetaTags from "./MetaTags";

const Products = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const products = [
    {
      id: 1,
      name: "Natural Honey",
      slug: "natural-honey",
      slugDetail: "honey-details",
      image: "/flyers/1000728713.jpg",
      color: "#701E12",
      gradient: "from-[#701E12] to-[#A8321A]",
      icon: GiHoneyJar,
      description:
        "Pure, raw wildflower honey harvested from the pristine forests of Uganda. Rich in antioxidants and natural enzymes.",
      price: "$24.99",
      rating: 4.9,
      reviews: 328,
      features: ["Raw", "Unfiltered", "Wildflower"],
    },
    {
      id: 2,
      name: "Natural Butter",
      slug: "natural-butter",
      slugDetail: "butter-details",
      image: "/flyers/1000728708.jpg",
      color: "#2E5C2D",
      gradient: "from-[#2E5C2D] to-[#3F7A3E]",
      icon: GiButter,
      description:
        "Creamy, organic butter churned from the milk of grass-fed cows. Perfect for cooking and baking.",
      price: "$18.99",
      rating: 4.8,
      reviews: 256,
      features: ["Grass-fed", "Creamy", "Organic"],
    },
    {
      id: 3,
      name: "Artisan Cheese",
      slug: "natural-cheese",
      slugDetail: "cheese-details",
      image: "/flyers/1000728711.jpg",
      color: "#F5BF15",
      gradient: "from-[#F5BF15] to-[#FFD966]",
      icon: PiCheeseThin,
      description:
        "Aged artisan cheese with rich, complex flavors. Made using traditional methods from fresh cow milk.",
      price: "$22.99",
      rating: 4.7,
      reviews: 189,
      features: ["Aged", "Artisanal", "Rich Flavor"],
    },
    {
      id: 4,
      name: "Pure Cow Ghee",
      slug: "natural-cowghee",
      slugDetail: "ghee-details",
      image: "/flyers/1000728712.jpg",
      color: "#15B3E2",
      gradient: "from-[#15B3E2] to-[#4AC7F0]",
      icon: GiHoneyJar,
      description:
        "Clarified butter made from grass-fed cow milk. Aromatic and perfect for traditional cooking.",
      price: "$28.99",
      rating: 4.9,
      reviews: 412,
      features: ["Clarified", "Aromatic", "Traditional"],
    },
    {
      id: 5,
      name: "Castor Oil",
      slug: "natural-tivanoil",
      slugDetail: "oil-details",
      image: "/flyers/1000728709.jpg",
      color: "#486F43",
      gradient: "from-[#486F43] to-[#5F8B58]",
      icon: GiOilDrum,
      description:
        "Cold-pressed castor oil rich in vitamin E and fatty acids. Perfect for hair and skin nourishment.",
      price: "$15.99",
      rating: 4.8,
      reviews: 167,
      features: ["Cold-pressed", "Vitamin E Rich", "100% Pure"],
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
    <div
      ref={sectionRef}
      className="relative bg-gradient-to-b from-amber-50 to-white overflow-hidden"
    >
      <Helmet>
        <title>
          Tivan Natural Products | Organic Honey, Ghee, Butter & More
        </title>
        <meta
          name="description"
          content="Shop natural Ugandan products from Tivan. Pure honey, ghee, butter, castor oil, and cheese. 100% farm-fresh and organic."
        />
      </Helmet>

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

      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/jar3.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 px-4 py-2 rounded-full mb-4">
                <GiHoneycomb className="text-amber-400" />
                <span className="text-amber-300 text-sm font-medium">
                  Our Collection
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">
                Our{" "}
                <span className="text-transparent bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text">
                  Products
                </span>
              </h1>
              <p className="text-amber-100/90 text-lg max-w-xl">
                Discover our range of premium natural products, each crafted
                with care and tradition
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="relative container mx-auto px-4 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {products.map((product, index) => {
            const Icon = product.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
              >
                {/* Product Image Section */}
                <div className="lg:w-1/2 relative group">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    {/* Image with Overlay */}
                    <div className="relative h-[400px]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60`}
                      ></div>

                      {/* Product Icon */}
                      <div className="absolute top-6 left-6">
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform`}
                        >
                          <Icon className="text-white text-3xl" />
                        </div>
                      </div>

                      {/* Rating Badge */}
                      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-3 py-2 rounded-full shadow-lg">
                        <div className="flex items-center gap-1">
                          <FaStar className="text-amber-400" />
                          <span className="font-bold text-amber-800">
                            {product.rating}
                          </span>
                          <span className="text-amber-600 text-sm">
                            ({product.reviews})
                          </span>
                        </div>
                      </div>

                      {/* Price Tag */}
                      <div className="absolute bottom-6 left-6">
                        <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                          <span className="text-2xl font-bold text-amber-800">
                            {product.price}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-3">
                        <Link
                          to="/productDetails/$slug"
                          params={{ slug: product.detailSlug || product.slug }}
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-amber-100 transition-colors shadow-lg"
                        >
                          <FaEye className="text-amber-700" />
                        </Link>
                        <Link
                          to="/products/$slug"
                          params={{ slug: product.slug }}
                          className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors shadow-lg"
                        >
                          <FaShoppingCart className="text-white" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Info Section */}
                <div className="lg:w-1/2 space-y-6">
                  {/* Color Bar */}
                  <div
                    className={`w-20 h-2 rounded-full bg-gradient-to-r ${product.gradient}`}
                  ></div>

                  {/* Product Name */}
                  <h2 className="text-4xl md:text-5xl font-black text-amber-900">
                    {product.name}
                  </h2>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-amber-100 border border-amber-200 rounded-full text-sm text-amber-800"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-amber-700/90 text-lg leading-relaxed">
                    {product.description}
                  </p>

                  {/* Benefits */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-2">
                      <FaLeaf className="text-amber-500" />
                      <span className="text-amber-700">100% Natural</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaStar className="text-amber-500" />
                      <span className="text-amber-700">Premium Quality</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-6">
                    <Link
                      to="/productDetails/$slug"
                      params={{ slug: product.slugDetail }}
                      className="group relative overflow-hidden border-2 border-amber-300 hover:border-amber-400 text-amber-700 hover:text-amber-800 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                    >
                      <span className="relative z-10">Learn More</span>
                      <div className="absolute inset-0 bg-amber-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </Link>

                    <Link
                      to="/products/$slug"
                      params={{ slug: product.slug }}
                      className={`group relative overflow-hidden bg-gradient-to-r ${product.gradient} text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
                    >
                      <span>Order Now</span>
                      <FaCircleArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <Gallery />
        </motion.div>

        <MetaTags />
      </div>
    </div>
  );
};

export default Products;

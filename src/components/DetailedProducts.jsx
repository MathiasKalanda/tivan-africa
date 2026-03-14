import { Link } from "@tanstack/react-router";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowAltCircleRight, FaStar, FaLeaf, FaFire } from "react-icons/fa";
import { GiHoneyJar, GiButter, GiOilDrum } from "react-icons/gi";
import { MdLocalFireDepartment } from "react-icons/md";
import { PiCheeseThin } from "react-icons/pi";
const DetailedProducts = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const productsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px" },
    );

    if (titleRef.current) observer.observe(titleRef.current);
    productsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      name: "Natural Honey",
      image: "/honeyinto.jpg",
      slug: "natural-honey",
      detailSlug: "honey-details",
      icon: GiHoneyJar,
      price: "$24.99",
      rating: 5,
      description: "Pure wildflower honey, raw and unfiltered",
      color: "from-amber-500 to-amber-700",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-800",
      badge: "Bestseller",
    },
    {
      name: "Noushrized Butter",
      image: "/flyers/butter.jpg",
      slug: "natural-butter",
      detailSlug: "butter-details",
      icon: GiButter,
      price: "$18.99",
      rating: 4,
      description: "Creamy, organic butter from grass-fed cows",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-800",
      badge: "New",
    },
    {
      name: "Noushrized Cheese",
      image: "/flyers/cheese.jpg",
      slug: "natural-cheese",
      detailSlug: "cheese-details",
      icon: PiCheeseThin,
      price: "$22.99",
      rating: 5,
      description: "Aged artisanal cheese, rich and flavorful",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-800",
      badge: "Premium",
    },
    {
      name: "Natural Cow Ghee",
      image: "/flyers/ghee.jpg",
      slug: "natural-cowghee",
      detailSlug: "ghee-details",
      icon: GiHoneyJar,
      price: "$28.99",
      rating: 5,
      description: "Clarified butter, pure and aromatic",
      color: "from-amber-600 to-amber-800",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-800",
      badge: "Traditional",
    },
    {
      name: "Castor Oil",
      image: "/flyers/castoroil.jpg",
      slug: "natural-tivanoil",
      detailSlug: "oil-details",
      icon: GiOilDrum,
      price: "$15.99",
      rating: 4,
      description: "Cold-pressed castor oil for hair and skin",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-800",
      badge: "Organic",
    },
  ];

  // Calculate average rating
  const averageRating = (
    products.reduce((acc, p) => acc + p.rating, 0) / products.length
  ).toFixed(1);

  return (
    <div
      ref={sectionRef}
      className="relative bg-gradient-to-b from-amber-50 to-white py-20 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Honeycomb Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 transform rotate-12 scale-150">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-amber-800 clip-hexagon"></div>
            ))}
          </div>
        </div>

        {/* Floating Honey Drops */}
        <div className="absolute top-20 left-10">
          <div className="relative">
            <div className="w-4 h-4 bg-amber-300 rounded-full animate-float"></div>
            <div className="absolute top-2 left-6 w-3 h-3 bg-amber-400 rounded-full animate-float animation-delay-500"></div>
            <div className="absolute top-6 left-12 w-2 h-2 bg-amber-500 rounded-full animate-float animation-delay-1000"></div>
          </div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-300 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div
          ref={titleRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
            <FaLeaf className="text-amber-600" />
            <span className="text-amber-800 font-medium">
              Our Premium Collection
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">
            <span className="text-transparent bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text">
              Enriched
            </span>
            <br />
            <span className="text-amber-900">Products</span>
          </h1>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-800">
                {products.length}+
              </div>
              <div className="text-sm text-amber-600">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-800">
                {averageRating}
              </div>
              <div className="flex text-amber-400 text-sm">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-800">100%</div>
              <div className="text-sm text-amber-600">Organic</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-amber-700/80 max-w-2xl mx-auto mt-8 text-lg">
            Discover our range of natural, organic products crafted with care
            and tradition. Each product is harvested and prepared using
            traditional methods to preserve its natural goodness.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                ref={(el) => (productsRef.current[index] = el)}
                className="group opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Product Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${product.color} text-white shadow-lg`}
                    >
                      {product.badge}
                    </div>
                  </div>

                  {/* Hot Label for popular items */}
                  {index < 2 && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                        <MdLocalFireDepartment className="animate-pulse" />
                        Hot
                      </div>
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${product.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>

                    {/* Icon Overlay */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform`}
                      >
                        <Icon className="text-white text-xl" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-xl">
                          {product.name}
                        </div>
                        <div className="flex text-amber-300 text-sm">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={
                                i < product.rating
                                  ? "text-amber-400"
                                  : "text-gray-400"
                              }
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                      <span
                        className={`font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}
                      >
                        {product.price}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{product.description}</p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span
                        className={`px-3 py-1 ${product.bgColor} ${product.textColor} rounded-full text-xs font-medium border ${product.borderColor}`}
                      >
                        100% Natural
                      </span>
                      <span
                        className={`px-3 py-1 ${product.bgColor} ${product.textColor} rounded-full text-xs font-medium border ${product.borderColor}`}
                      >
                        Organic
                      </span>
                      <span
                        className={`px-3 py-1 ${product.bgColor} ${product.textColor} rounded-full text-xs font-medium border ${product.borderColor}`}
                      >
                        Premium
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link
                        to="/productDetails/$slug"
                        params={{ slug: product.detailSlug }}
                        className="flex-1 group/btn relative overflow-hidden border-2 border-amber-200 hover:border-amber-400 text-amber-700 hover:text-amber-800 px-4 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300"
                      >
                        <span>Learn More</span>
                        <FaArrowAltCircleRight className="group-hover/btn:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-amber-50 -z-10 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left"></div>
                      </Link>

                      <Link
                        to="/products/$slug"
                        params={{ slug: product.slug }}
                        className={`flex-1 bg-gradient-to-r ${product.color} text-white px-4 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                      >
                        <span>Order</span>
                        <FaArrowAltCircleRight className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className={`absolute inset-0 border-2 border-transparent group-hover:border-amber-400 rounded-3xl transition-colors duration-500 pointer-events-none`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 opacity-0 animate-fade-in-up animation-delay-1000">
          <Link
            to="/productPage"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            View All Products
            <FaArrowAltCircleRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailedProducts;

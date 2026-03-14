import { Link } from "@tanstack/react-router";
import React, { useEffect, useRef } from "react";
import {
  FaLeaf,
  FaDroplet,
  FaShield,
  FaStar,
  FaArrowRight,
  FaSeedling,
  FaHeart,
} from "react-icons/fa6";
import { GiOilDrum, GiDrop, GiHealthNormal } from "react-icons/gi";
import { MdLocalFlorist, MdSpa } from "react-icons/md";
import { GiSparkles, GiHairStrands } from "react-icons/gi";
import { MdOutlineFaceRetouchingNatural } from "react-icons/md";

const Oil = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef(null);

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

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => observer.disconnect();
  }, []);

  const oil = [
    {
      name: "Castor Oil",
      image: "/flyers/castoroil.jpg",
      slug: "natural-tivanoil",
      detailSlug: "oil-details",
    },
  ];

  const benefits = [
    {
      icon: GiHairStrands,
      text: "Hair Growth",
      color: "from-green-400 to-green-600",
    },
    {
      icon: MdOutlineFaceRetouchingNatural,
      text: "Skin Nourishment",
      color: "from-amber-400 to-amber-600",
    },
    {
      icon: GiHealthNormal,
      text: "Anti-inflammatory",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: FaSeedling,
      text: "Cold-pressed",
      color: "from-emerald-400 to-emerald-600",
    },
  ];

  const features = [
    { icon: FaShield, text: "100% Pure", subtext: "No additives" },
    { icon: FaDroplet, text: "Cold-pressed", subtext: "Retains nutrients" },
    { icon: FaLeaf, text: "Organic", subtext: "Chemical-free" },
    { icon: GiDrop, text: "Rich in Vitamin E", subtext: "Natural antioxidant" },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F8F5F0] via-[#F0E8D8] to-[#E8DCC8]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Organic Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="oil-pattern"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="2"
                  fill="#8B7355"
                  className="animate-pulse"
                />
                <circle
                  cx="5"
                  cy="5"
                  r="1"
                  fill="#8B7355"
                  className="animate-pulse animation-delay-500"
                />
                <circle
                  cx="35"
                  cy="35"
                  r="1.5"
                  fill="#8B7355"
                  className="animate-pulse animation-delay-1000"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#oil-pattern)" />
          </svg>
        </div>

        {/* Floating Oil Drops */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-600/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-80 h-80 bg-amber-300/20 rounded-full filter blur-3xl animate-pulse-gentle"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-emerald-300/20 rounded-full filter blur-3xl animate-pulse-gentle animation-delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left Content - Oil Info */}
          <div className="flex-1 lg:pr-12">
            {/* Badge */}
            <div
              ref={textRef}
              className="inline-flex items-center gap-2 bg-amber-600/10 backdrop-blur-sm border border-amber-600/20 px-4 py-2 rounded-full mb-8 opacity-0 translate-y-10 transition-all duration-700"
            >
              <MdSpa className="text-amber-600" />
              <span className="text-amber-800 text-sm font-medium tracking-wider">
                PURE • NATURAL • ORGANIC
              </span>
            </div>

            {/* Title */}
            <div
              ref={textRef}
              className="opacity-0 translate-y-10 transition-all duration-700 delay-200"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">
                <span className="text-transparent bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 bg-clip-text">
                  Castor
                </span>
                <br />
                <span className="text-amber-900">Oil</span>
              </h1>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-amber-500 text-lg" />
                  ))}
                </div>
                <span className="text-amber-700/80 text-sm">
                  (1.8k+ reviews)
                </span>
              </div>

              <p className="text-amber-800/90 text-lg leading-relaxed max-w-xl">
                Cold-pressed Ugandan castor oil — rich in fatty acids and
                vitamin E, perfect for nourishing skin, strengthening hair, and
                promoting natural growth. Sourced from premium castor seeds and
                processed traditionally to preserve all natural benefits.
              </p>
            </div>

            {/* Key Features Grid */}
            <div
              ref={featuresRef}
              className="grid grid-cols-2 gap-4 mt-10 opacity-0 translate-y-10 transition-all duration-700 delay-400"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/60 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/80 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                      <feature.icon className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="font-bold text-amber-900">{feature.text}</p>
                      <p className="text-xs text-amber-600">
                        {feature.subtext}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits Icons */}
            <div className="mt-8 flex gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${benefit.color} bg-opacity-20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}
                  >
                    <benefit.icon className="text-white text-xl" />
                  </div>
                  <span className="text-xs text-amber-800 font-medium">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div
              ref={featuresRef}
              className="flex flex-wrap gap-4 mt-10 opacity-0 translate-y-10 transition-all duration-700 delay-600"
            >
              {oil.map((oil, index) => (
                <React.Fragment key={index}>
                  <Link
                    to="/productDetails/$slug"
                    params={{ slug: oil.detailSlug }}
                    className="group relative overflow-hidden bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30"
                  >
                    <span className="relative z-10">Learn More</span>
                    <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>

                  <Link
                    to="/products/$slug"
                    params={{ slug: oil.slug }}
                    className="group relative overflow-hidden border-2 border-amber-600/50 hover:border-amber-500 text-amber-700 hover:text-amber-800 px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/30"
                  >
                    <span className="relative z-10">Buy Now</span>
                    <GiOilDrum className="relative z-10 group-hover:rotate-12 transition-transform" />
                    <div className="absolute inset-0 bg-amber-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Content - Oil Bottle Image */}
          <div
            ref={imageRef}
            className="flex-1 relative opacity-0 translate-y-10 transition-all duration-700 delay-300"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-amber-600/30 rounded-full filter blur-3xl animate-pulse"></div>

              {/* Oil Bottle Image */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/newcastor.jpg"
                  alt="Tivan Castor Oil"
                  className="w-full max-w-md mx-auto drop-shadow-2xl animate-float"
                />
              </div>

              {/* Floating Oil Drops Animation */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <div className="w-4 h-4 bg-amber-500 rounded-full animate-bounce"></div>
                  <div className="absolute top-2 left-6 w-3 h-3 bg-amber-400 rounded-full animate-bounce animation-delay-200"></div>
                  <div className="absolute top-4 left-12 w-2 h-2 bg-amber-300 rounded-full animate-bounce animation-delay-400"></div>
                </div>
              </div>

              {/* Stats Badges */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-4 shadow-2xl animate-pulse-gentle">
                <p className="text-white font-bold text-2xl">100%</p>
                <p className="text-amber-100 text-xs">Pure</p>
              </div>

              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-xl">
                <span className="text-amber-700 text-sm font-medium flex items-center gap-1">
                  <GiSparkles className="text-amber-500" />
                  Cold-pressed
                </span>
              </div>

              {/* Benefits Badge */}
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-xl hidden lg:block">
                <div className="text-center">
                  <FaHeart className="text-amber-500 text-xl mx-auto mb-1" />
                  <p className="text-xs font-bold text-amber-800">Vitamin E</p>
                  <p className="text-[10px] text-amber-600">Rich</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-20 -left-20 w-40 h-40 opacity-20">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-amber-700 rounded-full opacity-50"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="relative mt-20 text-center opacity-0 animate-fade-in-up animation-delay-1000">
          <div className="inline-block px-8 py-4 bg-white/50 backdrop-blur-sm border border-amber-200 rounded-full">
            <p className="text-transparent bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 bg-clip-text font-bold text-xl tracking-wider">
              "Nature's Elixir for Hair & Skin"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oil;

import { Link } from "@tanstack/react-router";
import React, { useEffect, useRef } from "react";
import {
  FaLeaf,
  FaDroplet,
  FaShield,
  FaStar,
  FaArrowRight,
} from "react-icons/fa6";
import { GiHoneyJar, GiBee, GiHoneycomb } from "react-icons/gi";

const Honey = () => {
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

  const honey = [
    {
      name: "Natural Honey",
      image: "/honeyinto.jpg",
      slug: "natural-honey",
      detailSlug: "honey-details",
    },
  ];

  const benefits = [
    {
      icon: FaShield,
      text: "100% Organic",
      color: "from-green-400 to-green-600",
    },
    {
      icon: FaDroplet,
      text: "Unprocessed",
      color: "from-amber-400 to-amber-600",
    },
    {
      icon: FaStar,
      text: "Rich in Enzymes",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: GiBee,
      text: "Wild Harvested",
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0A0F14] via-[#1A282F] to-[#2A3A3F]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Honeycomb Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-4 transform rotate-12 scale-150">
            {[...Array(48)].map((_, i) => (
              <div
                key={i}
                className="w-12 h-12 bg-amber-500/30 clip-hexagon animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: "3s",
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-64 h-64 bg-amber-600/20 rounded-full filter blur-3xl animate-pulse-gentle"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-amber-500/10 rounded-full filter blur-3xl animate-pulse-gentle animation-delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 lg:pr-12">
            {/* Badge */}
            <div
              ref={textRef}
              className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 px-4 py-2 rounded-full mb-8 opacity-0 translate-y-10 transition-all duration-700"
            >
              <GiHoneycomb className="text-amber-400" />
              <span className="text-amber-300 text-sm font-medium tracking-wider">
                PREMIUM QUALITY SINCE 2020
              </span>
            </div>

            {/* Title */}
            <div
              ref={textRef}
              className="opacity-0 translate-y-10 transition-all duration-700 delay-200"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">
                <span className="text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text">
                  Tivan
                </span>
                <br />
                <span className="text-white">Pure Honey</span>
              </h1>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 text-lg" />
                  ))}
                </div>
                <span className="text-amber-300/80 text-sm">
                  (2.5k+ reviews)
                </span>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                Tivan's pure Ugandan honey is 100% organic, unprocessed, and
                naturally harvested from wildflower-rich regions. Rich in
                enzymes, antioxidants, and natural sweetness, it's perfect for
                boosting immunity, sweetening meals, or promoting holistic
                wellness.
              </p>
            </div>

            {/* Benefits Grid */}
            <div
              ref={featuresRef}
              className="grid grid-cols-2 gap-4 mt-10 opacity-0 translate-y-10 transition-all duration-700 delay-400"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div
                    className={`w-10 h-10 mb-3 rounded-xl bg-gradient-to-br ${benefit.color} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <benefit.icon className="text-white text-lg" />
                  </div>
                  <p className="text-white font-medium">{benefit.text}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div
              ref={featuresRef}
              className="flex flex-wrap gap-4 mt-10 opacity-0 translate-y-10 transition-all duration-700 delay-600"
            >
              {honey.map((honey, index) => (
                <React.Fragment key={index}>
                  <Link
                    to="/productDetails/$slug"
                    params={{ slug: honey.detailSlug }}
                    className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30"
                  >
                    <span className="relative z-10">Know More</span>
                    <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>

                  <Link
                    to="/products/$slug"
                    params={{ slug: honey.slug }}
                    className="group relative overflow-hidden border-2 border-amber-500/50 hover:border-amber-400 text-amber-300 hover:text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                  >
                    <span className="relative z-10">Buy Now</span>
                    <GiHoneyJar className="relative z-10 group-hover:rotate-12 transition-transform" />
                    <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Content - Honey Jar Image */}
          <div
            ref={imageRef}
            className="flex-1 relative opacity-0 translate-y-10 transition-all duration-700 delay-300"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-amber-300/30 rounded-full filter blur-3xl animate-pulse"></div>

              {/* Honey Jar Image */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/nobgjar.png"
                  alt="Tivan Pure Honey Jar"
                  className="w-full max-w-md mx-auto drop-shadow-2xl animate-float"
                />
              </div>

              {/* Floating Honey Drops */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce"></div>
                  <div className="absolute top-2 left-4 w-2 h-2 bg-amber-300 rounded-full animate-bounce animation-delay-200"></div>
                  <div className="absolute top-4 left-8 w-2 h-2 bg-amber-200 rounded-full animate-bounce animation-delay-400"></div>
                </div>
              </div>

              {/* Stats Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-4 shadow-2xl animate-pulse-gentle">
                <p className="text-white font-bold text-2xl">100%</p>
                <p className="text-amber-100 text-xs">Natural</p>
              </div>

              {/* Origin Badge */}
              <div className="absolute -top-4 -left-4 bg-black/30 backdrop-blur-sm border border-amber-500/30 rounded-full px-4 py-2">
                <span className="text-amber-300 text-sm font-medium">
                  🇺🇬 Ugandan Wildflower
                </span>
              </div>
            </div>

            {/* Honeycomb Decoration */}
            <div className="absolute -bottom-20 -left-20 w-40 h-40 opacity-20">
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-amber-400 clip-hexagon"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="relative mt-20 text-center opacity-0 animate-fade-in-up animation-delay-1000">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500/10 via-amber-400/10 to-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-full">
            <p className="text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text font-bold text-xl tracking-wider">
              "Taste the flavour beyond treasure"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Honey;

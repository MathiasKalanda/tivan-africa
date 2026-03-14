import { Link } from "@tanstack/react-router";
import React, { useEffect, useRef } from "react";
import { FaArrowAltCircleRight, FaLeaf } from "react-icons/fa";
import { GiHoneyJar } from "react-icons/gi";
const Hero = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);

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
    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-screen bg-amber-50/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Honeycomb Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-6 gap-4 transform rotate-12 scale-150">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-20 h-20 bg-amber-800 clip-hexagon"></div>
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-4 pt-32 md:pt-40 lg:pt-48">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left Content */}
          <div
            ref={textRef}
            className="flex-1 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
              <FaLeaf className="text-amber-600" />
              <span className="text-sm font-medium">100% Natural Honey</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-amber-950 leading-tight">
              Taste the <br />
              <span className="relative inline-block">
                Flavour Beyond
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0L50 8L100 4L150 10L200 6L250 8L300 4"
                    stroke="#F59E0B"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
                Treasure
              </span>
            </h1>

            <p className="text-lg text-amber-700/80 mt-6 max-w-xl">
              Discover our premium collection of raw, organic honey harvested
              from the purest flowers. Each jar contains the essence of nature's
              finest.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/productPage"
                className="group bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Explore Collection
                <FaArrowAltCircleRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-4 rounded-full font-semibold transition-all duration-300">
                Watch Video
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-amber-900">50+</div>
                <div className="text-sm text-amber-700">Honey Variants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-900">10k+</div>
                <div className="text-sm text-amber-700">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-900">100%</div>
                <div className="text-sm text-amber-700">Organic</div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div
            ref={cardRef}
            className="flex-1 max-w-md mx-auto lg:mx-0 opacity-0 translate-y-10 transition-all duration-700 delay-300 ease-out"
          >
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-amber-100 hover:shadow-amber-200/50 transition-shadow">
              {/* Decorative Dots */}
              <div className="flex gap-2 mb-6">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === 0
                        ? "bg-amber-600"
                        : i === 1
                          ? "bg-amber-500"
                          : i === 2
                            ? "bg-amber-400"
                            : i === 3
                              ? "bg-amber-300"
                              : i === 4
                                ? "bg-amber-200"
                                : "bg-amber-100"
                    }`}
                  ></div>
                ))}
              </div>

              {/* Honey Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                  <GiHoneyJar className="text-white text-3xl" />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center mb-2">
                Enriched Variants
              </h2>
              <p className="text-amber-700 text-center mb-8">
                Discover our enriched variant products that build a healthier
                body and mind
              </p>

              {/* Product Preview */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl">
                  <span className="font-medium text-amber-900">Raw Honey</span>
                  <span className="text-amber-600">$24.99</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl">
                  <span className="font-medium text-amber-900">
                    Manuka Honey
                  </span>
                  <span className="text-amber-600">$39.99</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl">
                  <span className="font-medium text-amber-900">Wildflower</span>
                  <span className="text-amber-600">$29.99</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg">
                Shop Now
                <FaArrowAltCircleRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-amber-400 rounded-full mt-2 animate-bounce"></div>
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
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Hero;

import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaLeaf, FaStar, FaEye } from "react-icons/fa";
import { GiHoneycomb, GiHoneyJar, GiButter } from "react-icons/gi";
import { MdOutlineZoomInMap } from "react-icons/md";
import { PiCheeseThin } from "react-icons/pi";
const HoneyGallery = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const galleryRef = useRef([]);

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
    galleryRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    {
      id: 1,
      src: "/oil7.jpg",
      alt: "Pure Castor Oil",
      title: "Pure Castor Oil",
      description: "Cold-pressed for maximum benefits",
      category: "Oils",
      icon: "GiHoneyJar",
      color: "from-amber-500 to-amber-700",
    },
    {
      id: 2,
      src: "/Organic.jpg",
      alt: "Organic Honey",
      title: "Organic Honey",
      description: "Harvested from wildflower regions",
      category: "Honey",
      icon: "GiHoneycomb",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      id: 3,
      src: "/oil3.jpg",
      alt: "Natural Butter",
      title: "Natural Butter",
      description: "Creamy and rich in nutrients",
      category: "Dairy",
      icon: "GiButter",
      color: "from-orange-400 to-orange-600",
    },
  ];

  // Function to render icon based on string name
  const renderIcon = (iconName, className = "text-white text-xl") => {
    switch (iconName) {
      case "GiHoneyJar":
        return <GiHoneyJar className={className} />;
      case "GiHoneycomb":
        return <GiHoneycomb className={className} />;
      case "GiButter":
        return <GiButter className={className} />;
      case "PiCheeseThin":
        return <PiCheeseThin className={className} />;
      default:
        return <GiHoneyJar className={className} />;
    }
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div
      ref={sectionRef}
      className="relative bg-gradient-to-b from-amber-50 to-white py-20 overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Honeycomb Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 transform rotate-12 scale-150">
            {[...Array(48)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 bg-amber-800 clip-hexagon"
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-300 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>

        {/* Honey Drops */}
        <div className="absolute top-40 right-20">
          <div className="relative">
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce"></div>
            <div className="absolute top-2 left-4 w-2 h-2 bg-amber-300 rounded-full animate-bounce animation-delay-200"></div>
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div
          ref={titleRef}
          className="mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
            <GiHoneycomb className="text-amber-600" />
            <span className="text-amber-800 font-medium">Our Gallery</span>
          </div>

          {/* Title with Animation */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">
                <span className="text-transparent bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text">
                  Discover Our
                </span>
                <br />
                <span className="text-amber-900 relative">
                  Enriched Products
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
              </h1>
              <p className="text-amber-700/80 mt-4 max-w-xl">
                Explore our collection of premium natural products, each crafted
                with care and tradition to bring you the finest quality.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-800">50+</div>
                <div className="text-sm text-amber-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-800">10k+</div>
                <div className="text-sm text-amber-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-800">100%</div>
                <div className="text-sm text-amber-600">Natural</div>
              </div>
            </div>
          </div>

          {/* Category Tags */}
          <div className="flex flex-wrap gap-3 mt-8">
            {["All", "Honey", "Oils", "Butter", "Cheese", "Ghee"].map(
              (cat, index) => (
                <button
                  key={cat}
                  className="px-4 py-2 rounded-full border border-amber-200 text-amber-700 hover:bg-amber-100 hover:border-amber-400 transition-all duration-300 text-sm font-medium"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {cat}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Large Image */}
          <div
            ref={(el) => (galleryRef.current[0] = el)}
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 opacity-0 translate-y-10"
            style={{ transitionDelay: "200ms" }}
            onMouseEnter={() => setHoveredImage(0)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="relative h-full min-h-[400px] md:min-h-[500px]">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${hoveredImage === 0 ? "opacity-100" : "opacity-0"}`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${galleryImages[0].color} flex items-center justify-center`}
                    >
                      {renderIcon(galleryImages[0].icon, "text-white text-xl")}
                    </div>
                    <span className="text-amber-300 text-sm font-medium">
                      {galleryImages[0].category}
                    </span>
                  </div>
                  <h3 className="text-white text-3xl font-bold mb-2">
                    {galleryImages[0].title}
                  </h3>
                  <p className="text-gray-200 mb-4">
                    {galleryImages[0].description}
                  </p>
                  <button
                    onClick={() => openLightbox(galleryImages[0])}
                    className="bg-white/20 backdrop-blur hover:bg-white/30 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all duration-300 w-fit"
                  >
                    <FaEye />
                    View Details
                  </button>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                <span className="text-amber-700 font-bold">Featured</span>
              </div>

              {/* Zoom Icon */}
              <button
                onClick={() => openLightbox(galleryImages[0])}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-amber-100 transition-colors shadow-lg"
              >
                <MdOutlineZoomInMap className="text-amber-700" />
              </button>
            </div>
          </div>

          {/* Image 2 */}
          <div
            ref={(el) => (galleryRef.current[1] = el)}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 opacity-0 translate-y-10"
            style={{ transitionDelay: "400ms" }}
            onMouseEnter={() => setHoveredImage(1)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="relative h-64 md:h-80">
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 ${hoveredImage === 1 ? "opacity-100" : "opacity-0"}`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={`w-8 h-8 rounded-lg bg-gradient-to-br ${galleryImages[1].color} flex items-center justify-center`}
                    >
                      {renderIcon(galleryImages[1].icon, "text-white text-sm")}
                    </div>
                    <span className="text-amber-300 text-xs">
                      {galleryImages[1].category}
                    </span>
                  </div>
                  <h3 className="text-white text-xl font-bold">
                    {galleryImages[1].title}
                  </h3>
                </div>
              </div>

              {/* Rating */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full px-2 py-1 flex items-center gap-1">
                <FaStar className="text-amber-400 text-xs" />
                <span className="text-amber-700 text-xs font-bold">4.9</span>
              </div>
            </div>
          </div>

          {/* Image 3 */}
          <div
            ref={(el) => (galleryRef.current[2] = el)}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 opacity-0 translate-y-10"
            style={{ transitionDelay: "600ms" }}
            onMouseEnter={() => setHoveredImage(2)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="relative h-64 md:h-80">
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 ${hoveredImage === 2 ? "opacity-100" : "opacity-0"}`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={`w-8 h-8 rounded-lg bg-gradient-to-br ${galleryImages[2].color} flex items-center justify-center`}
                    >
                      {renderIcon(galleryImages[2].icon, "text-white text-sm")}
                    </div>
                    <span className="text-amber-300 text-xs">
                      {galleryImages[2].category}
                    </span>
                  </div>
                  <h3 className="text-white text-xl font-bold">
                    {galleryImages[2].title}
                  </h3>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-3 left-3 bg-amber-500 px-3 py-1 rounded-full">
                <span className="text-white text-xs font-bold">New</span>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 opacity-0 animate-fade-in-up animation-delay-800">
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            View Full Gallery
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white text-4xl"
          >
            ×
          </button>

          <div
            className="max-w-4xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-2xl"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-2xl">
              <h3 className="text-white text-3xl font-bold mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-200">{selectedImage.description}</p>

              <div className="flex gap-4 mt-4">
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full transition-colors">
                  Learn More
                </button>
                <button className="border-2 border-white/50 hover:border-white text-white px-6 py-2 rounded-full transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoneyGallery;

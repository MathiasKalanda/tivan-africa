import { Link } from "@tanstack/react-router";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaLeaf,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiHoneycomb, GiHoneyJar } from "react-icons/gi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/photo.php?fbid=518426450840151&id=100080184001040&set=a.190305443652255",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/tivanconsults",
      label: "Twitter",
      color: "hover:bg-black",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/tivanconsults/",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: FaYoutube,
      href: "#",
      label: "YouTube",
      color: "hover:bg-red-600",
    },
    {
      icon: FaLinkedin,
      href: "https://ug.linkedin.com/in/viviansekitto",
      label: "LinkedIn",
      color: "hover:bg-blue-700",
    },
  ];

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/aboutus", label: "About Us" },
    { to: "/productPage", label: "Products" },
    { to: "/contactus", label: "Contact" },
  ];

  const businessLinks = [
    { to: "/contactus", label: "For Business" },
    { to: "/productPage", label: "Buy" },
    { to: "/contactus", label: "Legal" },
    { to: "/productPage", label: "Wholesale" },
  ];

  const contactInfo = [
    { icon: FaEnvelope, text: "info@tivan.com", href: "mailto:info@tivan.com" },
    { icon: FaPhone, text: "+256 700 000000", href: "tel:+256700000000" },
    { icon: FaMapMarkerAlt, text: "Kampala, Uganda", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-amber-900 to-amber-950 text-amber-100 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Honeycomb Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 transform rotate-12 scale-150">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-amber-300 clip-hexagon"></div>
            ))}
          </div>
        </div>

        {/* Floating Honey Drops */}
        <div className="absolute top-20 left-10">
          <div className="relative">
            <div className="w-3 h-3 bg-amber-400/30 rounded-full animate-float"></div>
            <div className="absolute top-2 left-4 w-2 h-2 bg-amber-300/30 rounded-full animate-float animation-delay-500"></div>
          </div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-700/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                <GiHoneyJar className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">TIVAN</h3>
                <p className="text-xs text-amber-300 tracking-wider">
                  PURE NATURAL PRODUCTS
                </p>
              </div>
            </div>

            <p className="text-amber-200/80 text-sm leading-relaxed">
              Bringing you the finest natural products from the heart of Uganda.
              Pure, organic, and harvested with care.
            </p>

            {/* Trust Badge */}
            <div className="flex items-center gap-2 bg-amber-800/50 rounded-full px-4 py-2 w-fit">
              <FaHeart className="text-amber-400 animate-pulse" />
              <span className="text-sm text-amber-200">
                100% Natural & Organic
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <GiHoneycomb className="text-amber-400" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-amber-200/80 hover:text-amber-300 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-amber-400 rounded-full group-hover:w-2 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <GiHoneycomb className="text-amber-400" />
              Business
            </h4>
            <ul className="space-y-2">
              {businessLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-amber-200/80 hover:text-amber-300 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-amber-400 rounded-full group-hover:w-2 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <GiHoneycomb className="text-amber-400" />
              Contact Us
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-amber-200/80 hover:text-amber-300 transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 bg-amber-800/50 rounded-lg flex items-center justify-center group-hover:bg-amber-700 transition-colors">
                      <item.icon className="text-amber-400 text-sm" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="relative mb-12 p-8 bg-gradient-to-r from-amber-800/50 to-amber-900/50 rounded-3xl border border-amber-700/30">
          <div className="absolute inset-0 bg-[url('/honeycomb.jpg')] bg-cover bg-center opacity-5 rounded-3xl"></div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-amber-600/30 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-amber-300 text-3xl" />
              </div>
              <div>
                <h5 className="text-xl font-bold text-white">
                  Subscribe to our newsletter
                </h5>
                <p className="text-amber-200/80 text-sm">
                  Get updates on new products and special offers
                </p>
              </div>
            </div>

            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-80 px-4 py-3 bg-amber-800/30 border border-amber-600/50 rounded-l-xl text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-r-xl transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="relative pt-8 border-t border-amber-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={social.label}
                >
                  <div
                    className={`w-12 h-12 bg-amber-800/50 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                  >
                    <social.icon className="text-amber-200 text-xl group-hover:text-white transition-colors" />
                  </div>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center text-amber-200/80 text-sm">
              <p>
                Copyright © {currentYear} Tivan Consultancy Ltd. All rights
                reserved.
              </p>
              <p className="text-xs mt-1 text-amber-300/60">
                Crafted with{" "}
                <FaHeart className="inline text-amber-400 animate-pulse" /> in
                Uganda
              </p>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-amber-300">We accept:</span>
              <div className="flex gap-1">
                <div className="w-8 h-5 bg-amber-700/50 rounded text-[8px] flex items-center justify-center text-amber-300">
                  VISA
                </div>
                <div className="w-8 h-5 bg-amber-700/50 rounded text-[8px] flex items-center justify-center text-amber-300">
                  MC
                </div>
                <div className="w-8 h-5 bg-amber-700/50 rounded text-[8px] flex items-center justify-center text-amber-300">
                  MPESA
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-6 text-center">
          <ul className="flex flex-wrap justify-center items-center gap-4 text-xs text-amber-400/60">
            <li>
              <a href="#" className="hover:text-amber-300 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>•</li>
            <li>
              <a href="#" className="hover:text-amber-300 transition-colors">
                Terms of Service
              </a>
            </li>
            <li>•</li>
            <li>
              <a href="#" className="hover:text-amber-300 transition-colors">
                Shipping Policy
              </a>
            </li>
            <li>•</li>
            <li>
              <a href="#" className="hover:text-amber-300 transition-colors">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

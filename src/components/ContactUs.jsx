import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapPin,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaLeaf,
  FaStar,
  FaPaperPlane,
} from "react-icons/fa";
import {
  MdAccessTimeFilled,
  MdMail,
  MdLocalShipping,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { GiHoneycomb, GiHoneyJar } from "react-icons/gi";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted", formData);
    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FaMapPin,
      title: "Visit Us",
      details: ["123 Green Blue Street", "Wellness City @001 KV"],
      color: "from-red-400 to-red-600",
    },
    {
      icon: FaPhoneAlt,
      title: "Call Us",
      details: ["+256 789 695 695", "+256 789 695 695"],
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      details: ["+256 789 695 695", "24/7 Support"],
      color: "from-green-400 to-green-600",
    },
    {
      icon: MdMail,
      title: "Email Us",
      details: ["info@tivan.africa", "support@tivan.africa"],
      color: "from-amber-400 to-amber-600",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM", status: "Open" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM", status: "Open" },
    { day: "Sunday", hours: "Closed", status: "Closed" },
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
    <div className="relative min-h-screen bg-gradient-to-b from-amber-50 to-white pt-20 overflow-hidden">
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
          className="absolute top-20 left-20 w-6 h-6 bg-amber-400/20 rounded-full"
        />

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
          className="absolute bottom-40 right-20 w-8 h-8 bg-amber-500/20 rounded-full"
        />

        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-300 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
            <GiHoneycomb className="text-amber-600" />
            <span className="text-amber-800 font-medium">Get In Touch</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-transparent bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text">
              Contact
            </span>
            <br />
            <span className="text-amber-900">Us</span>
          </h1>

          <p className="text-amber-700/80 text-lg max-w-2xl mx-auto">
            Have questions about our products? Want to place a bulk order? We'd
            love to hear from you. Reach out to us anytime!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-6 border border-amber-100"
              >
                <div
                  className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <Icon className="text-white text-2xl" />
                </div>

                <h3 className="text-lg font-bold text-amber-900 mb-2">
                  {info.title}
                </h3>

                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-amber-700 text-sm">
                    {detail}
                  </p>
                ))}

                {/* Decorative Corner */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-amber-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                <MdOutlineSupportAgent className="text-white text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-amber-900">
                  Send Us a Message
                </h2>
                <p className="text-amber-600 text-sm">
                  We'll get back to you within 24 hours
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-amber-800 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-amber-400 focus:outline-none transition-colors bg-amber-50/50"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-amber-800 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-amber-400 focus:outline-none transition-colors bg-amber-50/50"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-amber-800 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-amber-400 focus:outline-none transition-colors bg-amber-50/50"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-amber-800 text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-amber-400 focus:outline-none transition-colors bg-amber-50/50 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-600 text-center"
                >
                  ✓ Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Business Hours & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            {/* Business Hours Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-amber-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <MdAccessTimeFilled className="text-white text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-amber-900">
                  Business Hours
                </h2>
              </div>

              <div className="space-y-4">
                {businessHours.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-amber-100 last:border-0"
                  >
                    <span className="text-amber-800 font-medium">
                      {item.day}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-amber-600">{item.hours}</span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === "Open"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Info Card */}
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <MdLocalShipping className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold">Fast Delivery</h3>
              </div>

              <p className="text-amber-100 mb-4">
                Need your order quickly? We offer express delivery services
                within Kampala and surrounding areas.
              </p>

              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-amber-200" />
                <span className="font-semibold">
                  Call for delivery: +256 789 695 695
                </span>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-4 right-4 opacity-10">
                <GiHoneyJar className="text-8xl" />
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-white rounded-2xl p-6 border border-amber-100 flex items-center gap-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                <FaStar className="text-amber-500 text-3xl" />
              </div>
              <div>
                <h4 className="font-bold text-amber-900">
                  Trusted by 10,000+ Customers
                </h4>
                <p className="text-amber-600 text-sm">
                  4.9/5 average rating from verified buyers
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[450px]"
        >
          <iframe
            title="Tivan Location Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8526746833693!2d32.58251987580943!3d0.3475966639571671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0ac0a3658d%3A0x98aa6f49ff1ea12c!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1712328551632!5m2!1sen!2sug"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Map Overlay Badge */}
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <FaMapPin className="text-white" />
              </div>
              <div>
                <p className="font-bold text-amber-900">Visit Our Store</p>
                <p className="text-sm text-amber-600">Kampala, Uganda</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;

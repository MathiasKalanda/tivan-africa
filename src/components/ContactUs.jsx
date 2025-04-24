import React, { useState } from "react";
import { FaMapPin, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdAccessTimeFilled, MdMail } from "react-icons/md";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate EmailJS, Formspree, or custom backend here
    console.log("Form submitted", formData);
  };
  return (
    <div className="mt-24">
      <div className="my-10 mx-15">
        <div className="bg-orange-600 py-3 px-4 w-9/12 mt-10 text-3xl text-white  rounded-4xl text-center font-bold">
          Contact Us
        </div>
        <div className="mt-10 mb-5">
          <div className="flex flex-row justify-start items-center gap-3 text-green-950 font-bold">
            <FaMapPin /> <span className="">Address:</span>
          </div>
          <p className="text-green-950">123 Green Blue Street</p>
          <p className="text-green-950">Wellness City @001 KV</p>
        </div>
        <div className="mb-5">
          <div className="flex flex-row justify-start items-center gap-3 text-green-950 font-bold">
            <FaPhoneAlt />
            <span className="">Phone:</span>
          </div>
          <p className="">+256789695695</p>
        </div>
        <div className="mb-5">
          <div className="flex flex-row justify-start items-center gap-3 text-green-950 font-bold">
            <FaWhatsapp />
            <span className="">Whatsapp:</span>
          </div>
          <p className="">+256789695695</p>
        </div>
        <div className="mb-5">
          <div className="flex flex-row justify-start items-center gap-3 text-green-950 font-bold">
            <FaPhoneAlt />
            <span className="">For Delivery:</span>
          </div>
          <p className="">+256789695695</p>
        </div>
        <div className="mb-5">
          <div className="flex flex-row justify-start items-center gap-3 text-green-950 font-bold">
            <MdMail />
            <span className="">Email Us:</span>
          </div>
          <p className="">info@tivan.africa</p>
        </div>
        <div className="">
          <div className="flex flex-row justify-start items-center gap-3 text-green-950 font-bold">
            <MdAccessTimeFilled />
            <span className="">Business Hours:</span>
          </div>
          <p className="">Monday - Friday : 9:00AM - 6:00PM</p>
          <p className="">Saturay : 10:00AM - 4:00PM</p>
          <p className="">Sunday : Closed</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto my-12 p-6 bg-white  rounded-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-amber-700">
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="bg-amber-600 hover:bg-amber-700 text-black font-semibold py-2 px-6 rounded-full transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="w-full h-[400px]  rounded-xl overflow-hidden">
        <iframe
          title="Google Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8526746833693!2d32.58251987580943!3d0.3475966639571671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0ac0a3658d%3A0x98aa6f49ff1ea12c!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1712328551632!5m2!1sen!2sug"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

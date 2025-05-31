import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 py-12 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-orange-600 text-6xl font-bold my-10 underline tracking-tighter">
          Who We Are
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
          At <strong>Tivan Africa</strong>, we believe in the power of nature to
          nourish, heal, and sustain. Our mission is to provide pure, organic,
          and farm-fresh products that support healthier lifestyles across
          homes, supermarkets, and communities.
        </p>

        <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
          From raw honey and ghee to castor oil, cheese, and butter — every item
          we offer is carefully harvested, ethically sourced, and
          quality-assured. We work hand-in-hand with local Ugandan farmers to
          ensure freshness, sustainability, and fair practices across our supply
          chain.
        </p>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Tivan isn't just a brand — it's a commitment to purity, wellness, and
          community. Join us on a journey of wholesome living and natural
          health.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;

import React from "react";
import Honey from "./Honey";
import Oil from "./Oil";
// import Butter from "./Butter";
import Dimensions from "./Dimensions";
import HoneyGallery from "./HoneyGallery";
import DisplayProducts from "./DisplayProducts";
import HeroSection from "./HeroSection";
import Hero from "./Hero";
import DetailedProducts from "./DetailedProducts";

const HomePage = () => {
  return (
    <div className="">
      <Hero />

      <Honey />
      <DetailedProducts />
      <Oil />
      <HoneyGallery />
      <Dimensions />
      <DisplayProducts />
      {/* <HeroSection /> */}
      {/* <Butter /> */}
    </div>
  );
};

export default HomePage;

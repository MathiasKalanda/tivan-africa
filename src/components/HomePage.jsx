import React from "react";
import Honey from "./Honey";
import Oil from "./Oil";

import HoneyGallery from "./HoneyGallery";
import DisplayProducts from "./DisplayProducts";

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
      <DisplayProducts />
    </div>
  );
};

export default HomePage;

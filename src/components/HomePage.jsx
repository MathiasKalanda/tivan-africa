import React from "react";
import Honey from "./Honey";
import Oil from "./Oil";

import HoneyGallery from "./HoneyGallery";
import DisplayProducts from "./DisplayProducts";

import Hero from "./Hero";
import DetailedProducts from "./DetailedProducts";
import FAQSchema from "./FAQSchema";
import MetaTags from "./MetaTags";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <Honey />
      <DetailedProducts />
      <Oil />
      <FAQSchema />
      <MetaTags />
      <HoneyGallery />
      <DisplayProducts />
    </div>
  );
};

export default HomePage;

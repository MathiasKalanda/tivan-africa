import React from "react";
import Honey from "./Honey";
import Oil from "./Oil";
// import Butter from "./Butter";
import Dimensions from "./Dimensions";
import HoneyGallery from "./HoneyGallery";
import DisplayProducts from "./DisplayProducts";

const HomePage = () => {
  return (
    <div className="">
      <Honey />

      <Oil />
      <HoneyGallery />
      {/* <Dimensions /> */}
      <DisplayProducts />
      {/* <Butter /> */}
    </div>
  );
};

export default HomePage;

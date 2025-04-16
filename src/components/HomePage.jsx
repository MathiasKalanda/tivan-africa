import React from "react";
import Honey from "./Honey";
import Oil from "./Oil";
// import Butter from "./Butter";
import Dimensions from "./Dimensions";
import HoneyGallery from "./HoneyGallery";

const HomePage = () => {
  return (
    <div className="">
      <Honey />

      <HoneyGallery />
      <Oil />
      {/* <Dimensions /> */}
      {/* <Butter /> */}
    </div>
  );
};

export default HomePage;

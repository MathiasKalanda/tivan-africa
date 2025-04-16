import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HoneyGallery = () => {
  return (
    <div className="pt-16">
      {" "}
      <div className="">
        <h1 className="px-6 ">
          <span className="text-3xl">Discover Our Enriched</span>
          <br />{" "}
          <div className="flex flex-row items-center gap-4">
            {" "}
            <div className="uppercase font-bold text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text flex flex-row">
              Varient Of Products
            </div>{" "}
            <FaArrowRight className="moving-arrow" />
          </div>
        </h1>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 p-6">
        {/* Image 1 */}
        <div className="col-span-2 row-span-2">
          <img
            src="/oil7.jpg"
            alt="Oil"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="col-span-2 row-span-1">
          <img
            src="/Organic.jpg"
            alt="Africa"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Image 3 */}
        <div className="col-span-2 row-span-1">
          <img
            src="/oil3.jpg"
            alt="Butter"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HoneyGallery;

import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="mt-10">
      <div className="bg-[url('/honeycomb.jpg')] bg-cover bg-center h-screen flex flex-col items-start justify-center">
        <h1 className="text-6xl font-extrabold p-10 text-wrap bg-slate-100/25 text-lime-950 pt-15 ">
          Taste the <br />
          flavour beyond
          <br />
          treasure
        </h1>
        <div className="py-5 w-50 h-64 bg-slate-100/55 mx-10 rounded-3xl">
          <div className="flex flex-row gap-2 justify-start ml-5">
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600/75  rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600/70  rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600/65  rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600/60  rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600/55  rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600/50  rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600/40  rounded-full"></div>
          </div>
          <h1 className="py-1 px-5 text-xl text-lime-950 font-bold capitalize">
            Enriched Varients products.
          </h1>
          <p className="px-5 capitalize tracking-tighter text-lime-900 leading-tight">
            discover our enriched variant products that build a healthier body
            and mind
          </p>

          <button className="bg-orange-600  rounded-3xl flex flex-row justify-center items-center gap-3 px-5 my-2 mx-5 py-1 text-white">
            Discover <FaArrowAltCircleRight className="moving-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

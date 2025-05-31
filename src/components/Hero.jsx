import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="mt-10 md:mt-16">
      <div className="bg-[url('/honeycomb.jpg')] bg-cover bg-center h-screen flex flex-col items-start justify-center md:h-[120] lg:h-[160] md:bg-contain md:bg-repeat md:flex-row md:items-center">
        <h1 className="text-6xl font-extrabold p-10 text-wrap bg-slate-100/25 md:rounded-3xl text-lime-950 pt-15 md:text-nowrap md:text-8xl">
          Taste the <br />
          flavour beyond
          <br />
          treasure
        </h1>
        <div className="py-5 w-50 h-64 bg-slate-100/55 mx-10 rounded-3xl md:h-80 md:w-72">
          <div className="flex flex-row gap-2 justify-start ml-5">
            <div className="w-3 h-3 bg-gray-600 rounded-full  md:w-6 md:h-6"></div>
            <div className="w-3 h-3 bg-gray-600/75  rounded-full  md:w-6 md:h-6"></div>
            <div className="w-3 h-3 bg-gray-600/70  rounded-full  md:w-6 md:h-6"></div>
            <div className="w-3 h-3 bg-gray-600/65  rounded-full  md:w-6 md:h-6"></div>
            <div className="w-3 h-3 bg-gray-600/60  rounded-full  md:w-6 md:h-6"></div>
            <div className="w-3 h-3 bg-gray-600/55  rounded-full  md:w-6 md:h-6"></div>
            <div className="w-3 h-3 bg-gray-600/50  rounded-full  md:w-6 md:h-6"></div>
            <div className="w-3 h-3 bg-gray-600/40  rounded-full md:w-6 md:h-6"></div>
          </div>
          <h1 className="py-1 px-5 text-xl text-lime-950 font-bold capitalize md:text-3xl">
            Enriched Varients products.
          </h1>
          <p className="px-5 capitalize tracking-tighter text-lime-900 leading-tight md:text-xl md:my-2">
            discover our enriched variant products that build a healthier body
            and mind
          </p>

          <button className="bg-orange-600  rounded-3xl flex flex-row justify-center items-center gap-3 px-5 my-2 mx-5 py-1 text-white md:my-4 md:text-xl">
            Discover <FaArrowAltCircleRight className="moving-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

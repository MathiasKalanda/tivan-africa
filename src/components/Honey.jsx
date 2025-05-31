import { Link } from "@tanstack/react-router";
import React from "react";

const Honey = () => {
  const honey = [
    {
      name: "Natural Honey",
      image: "/honeyinto.jpg",
      slug: "natural-honey",
      detailSlug: "honey-details",
    },
  ];
  return (
    <div
      style={{
        background: "radial-gradient(circle,#435154,#1B252F,#05060B,#000000 )",

        color: "white",
      }}
      className="pb-10"
    >
      {" "}
      <div className="flex flex-col justify-center items-center ">
        {" "}
        <h1 className=" text-3xl md:text-4xl mt-24 font-bold uppercase text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text">
          Tivan Honey
        </h1>
        <p className="pt-2 font-bold mb-2 text-amber-700">
          Natural and Pure Honey
        </p>
        <p className="font-medium text-center px-20 text-sm md:text-md tracking-wide">
          Tivan’s pure Ugandan honey is 100% organic, unprocessed, and naturally
          harvested from wildflower-rich regions. Rich in enzymes, antioxidants,
          and natural sweetness, it’s perfect for boosting immunity, sweetening
          meals, or promoting holistic wellness.
        </p>
        {honey.map((honey, index) => (
          <div
            className="flex flex-row justify-between items-center gap-4 mt-4"
            key={index}
          >
            <Link
              to="/productDetails/$slug"
              params={{ slug: honey.detailSlug }}
              className="bg-amber-600 px-3 py-2 rounded-3xl text-black"
            >
              Know More
            </Link>
            <Link
              to="/products/$slug"
              params={{ slug: honey.slug }}
              className="px-5 py-2 border-amber-600 border-1 rounded-3xl"
            >
              Buy
            </Link>
          </div>
        ))}
        <img src="/nobgjar.png" alt="" className="w-80 " />
        <div className="uppercase font-bold text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
          Taste the flavour beyond treasure
        </div>
      </div>
    </div>
  );
};

export default Honey;

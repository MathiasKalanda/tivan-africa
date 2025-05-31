import { Link } from "@tanstack/react-router";
import React from "react";

const Oil = () => {
  const oil = [
    {
      name: "Castor Oil",
      image: "/flyers/castoroil.jpg",
      slug: "natural-tivanoil",
      detailSlug: "oil-details",
    },
  ];
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom,#ffffff, #f9f6ef, #f0ead6, #e3dbc6)",

        color: "white",
      }}
      className="pb-10"
    >
      {" "}
      <div className="flex flex-col justify-center items-center ">
        {" "}
        <h1 className=" text-3xl md:text-4xl mt-24 font-bold uppercase text-transparent bg-gradient-to-r from-gray-800 via-black/30  to-black  bg-clip-text">
          Castor Oil
        </h1>
        <p className="pt-2 font-bold mb-2 text-amber-700 ">
          Natural and Flavoured Oil
        </p>
        <img
          src="/bestoil-removebg-preview.png"
          alt=""
          className="w-80 border-0  "
        />
        <div className="uppercase font-bold text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
          Taste the flavour beyond treasure
        </div>
        <p className="font-medium text-center px-20 text-sm md:text-md tracking-wide text-black">
          Cold-pressed Ugandan castor oil — rich in fatty acids and vitamin E,
          perfect for nourishing skin, strengthening hair, and promoting natural
          growth
        </p>
        {oil.map((oil, index) => (
          <div
            className="flex flex-row justify-between items-center gap-4 mt-4"
            key={index}
          >
            <Link
              to="/productDetails/$slug"
              params={{ slug: oil.detailSlug }}
              className="bg-amber-600 px-3 py-2 rounded-3xl text-black font-bold"
            >
              Know More
            </Link>
            <Link
              to="/products/$slug"
              params={{ slug: oil.slug }}
              className="px-5 py-2 text-black border-amber-600 border-1 rounded-3xl font-bold"
            >
              Buy
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Oil;

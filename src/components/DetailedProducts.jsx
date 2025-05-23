import { Link } from "@tanstack/react-router";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const DetailedProducts = () => {
  const products = [
    {
      name: "Natural Honey",
      image: "/honeyinto.jpg",
      slug: "natural-honey",
    },
    {
      name: "Noushrized Bitter",
      image: "/honeyinto.jpg",
      slug: "noushrized-bitter",
    },
    {
      name: "Organic Oil",
      image: "/honeyinto.jpg",
      slug: "organic-oil",
    },
    {
      name: "Natural Honey",
      image: "/honeyinto.jpg",
      slug: "natural-honey-2",
    },
  ];
  return (
    <div>
      <div className="my-10 mx-10">
        <h1 className="text-orange-600 text-6xl font-bold">
          Our Enriched Products.
        </h1>
        <div className="flex flex-col justify-center items-center my-15">
          {" "}
          {products.map((product, index) => (
            <div className="w-full my-6" key={index}>
              {" "}
              <div className="bg-slate-600  h-64 rounded-3xl flex flex-col justify-end bg-[url('/honeyinto.jpg')] bg-cover bg-center">
                <div className="bg-black/45 flex flex-row justify-start items-center rounded-b-3xl px-6 py-5 gap-2">
                  <div className="bg-orange-600 w-4 h-10 rounded-l-lg"></div>
                  <h1 className="text-white text-xl leading-5 font-bold">
                    {product.name}
                  </h1>
                </div>
              </div>
              <div className="flex flex-row my-5 gap-5 justify-end">
                <Link
                  to="/products/$slug"
                  params={{ slug: product.slug }}
                  className="flex flex-row justify-center items-center gap-3 border-1 px-4 py-1 rounded-4xl font-bold"
                >
                  Learn More
                  <FaArrowAltCircleRight
                    className="moving-arrow text-lime-950"
                    size="24"
                  />
                </Link>
                <button className="flex flex-row justify-center items-center gap-3  px-2 py-1 rounded-4xl font-bold bg-orange-600 text-white">
                  Order Now
                  <FaArrowAltCircleRight
                    className="moving-arrow text-white"
                    size="24"
                  />
                </button>
                <button className=""></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedProducts;

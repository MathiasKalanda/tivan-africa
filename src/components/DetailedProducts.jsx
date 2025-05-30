import { Link } from "@tanstack/react-router";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const DetailedProducts = () => {
  const products = [
    {
      name: "Natural Honey",
      image: "/honeyinto.jpg",
      slug: "natural-honey",
      detailSlug: "honey-details",
    },
    {
      name: "Noushrized Butter",
      image: "/flyers/butter.jpg",
      slug: "natural-butter",
      detailSlug: "butter-details",
    },
    {
      name: "Noushrized Cheese",
      image: "/flyers/cheese.jpg",
      slug: "natural-cheese",
      detailSlug: "cheese-details",
    },
    {
      name: "Natural CowGhee",
      image: "/flyers/ghee.jpg",
      slug: "natural-cowghee",
      detailSlug: "ghee-details",
    },
    {
      name: "Castor Oil",
      image: "/flyers/castoroil.jpg",
      slug: "natural-tivanoil",
      detailSlug: "oil-details",
    },
  ];
  return (
    <div>
      <div className="my-10 mx-10">
        <h1 className="text-orange-600 text-6xl font-bold">
          Our Enriched Products.
        </h1>
        <div className="flex flex-col justify-center items-center my-15 md:grid md:grid-cols-2 md:gap-10">
          {" "}
          {products.map((product, index) => (
            <div className="w-full my-6" key={index}>
              {" "}
              <div
                className="bg-slate-600  h-64 rounded-3xl flex flex-col justify-end  bg-cover bg-center md:h-80 "
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div className="bg-black/45 flex flex-row justify-start items-center rounded-b-3xl px-6 py-5 gap-2">
                  <div className="bg-orange-600 w-4 h-10 rounded-l-lg"></div>
                  <h1 className="text-white text-xl leading-5 font-bold">
                    {product.name}
                  </h1>
                </div>
              </div>
              <div className="flex flex-row my-5 gap-5 justify-end">
                <Link
                  to="/productDetails/$slug"
                  params={{ slug: product.detailSlug }}
                  className="flex flex-row justify-center items-center gap-3  px-2 py-1 rounded-4xl font-bold border-1"
                >
                  Learn More
                  <FaArrowAltCircleRight
                    className="moving-arrow text-black"
                    size="24"
                  />
                </Link>
                <Link
                  to="/products/$slug"
                  params={{ slug: product.slug }}
                  className="flex flex-row justify-center items-center gap-3 border-1 px-4 py-1 rounded-4xl  bg-orange-600 font-bold text-white"
                >
                  Order Now
                  <FaArrowAltCircleRight
                    className="moving-arrow text-lime-950"
                    size="24"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedProducts;

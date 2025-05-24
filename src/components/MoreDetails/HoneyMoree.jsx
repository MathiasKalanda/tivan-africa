import { image } from "framer-motion/client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const HoneyMoree = () => {
  const honeyDetails = [
    {
      name: "Honey ",
      price: "ugx 15000",
      quantity: "500g",
      image: "/honeyinto.jpg",
    },
    {
      name: "Honey ",
      price: "ugx 30000",
      quantity: "1KG",
      image: "/honeyinto.jpg",
    },
    {
      name: "Honey ",
      price: "ugx 15000",
      quantity: "250g",
      image: "/honeyinto.jpg",
    },
    {
      name: "Honey ",
      price: "ugx 15000",
      quantity: "200g",
      image: "/honeyinto.jpg",
    },
  ];
  return (
    <div className="mt-16">
      <div className="bg-blue-400 h-64 flex flex-row justify-end items-center  md:m-3 rounded-2xl bg-[url('/flyers/1000728713.jpg')] bg-cover bg-center">
        {/* <div className="w-3/4 pr-6 ">
          {" "}
          <h1 className="ml-6 font-bold md:text-3xl text-xl ">
            Make Your Diet Shine Naturally With Our Products
          </h1>
          <p className="ml-6 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            eaque sint libero?
          </p>
          <button className="ml-6 bg-orange-600 px-3 py-2 rounded-2xl font-bold mt-4">
            Order Now
          </button>
        </div> */}
        <div className="bg-black w-28 h-52 pl-3 rounded-2xl bg-[url('/flyers/1000728713.jpg')] bg-cover bg-center"></div>
      </div>

      <div className="mt-16">
        <h1 className="text-center font-bold text-3xl capitalize">
          Categories for our Honey Products
        </h1>
        <p className="text-center text-sm px-10 my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dolor
          soluta dicta reiciendis possimus asperiores.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-10 mt-10">
        {honeyDetails.map((honey, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4">
            <div className="w-full h-48 rounded-xl bg-amber-300 flex items-center justify-center">
              <img
                src={honey.image}
                alt="Honey"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="mt-6">
              <div className="flex flex-row">
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStarHalfAlt className="text-orange-500" />
              </div>
              <div className="flex flex-row justify-between items-center">
                {" "}
                <h1 className="font-bold my-2 uppercase">{honey.name}</h1>
                <h1 className="font-bold ">{honey.quantity}</h1>
              </div>
              <div className="">
                <h1 className="text-orange-500 uppercase">{honey.price}</h1>
                <button className="bg-black text-white text-center px-4 rounded-xl mt-2">
                  Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoneyMoree;

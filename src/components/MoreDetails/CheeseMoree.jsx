import { div } from "framer-motion/client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const CheeseMoree = () => {
  const { addToCart } = useCart();
  const honeyDetails = [
    {
      name: "mozarrela cheese",
      price: 6554,
      quantity: "500g",
      image: "/mozarella.jpg",
    },
    {
      name: "cheddar cheese",
      price: 643,
      quantity: "500g",
      image: "/cheddar.jpg",
    },
    {
      name: "gouda cheese",
      price: 321,
      quantity: "500g",
      image: "/gouda.jpg",
    },
    {
      name: "paneer cheese",
      price: 790,
      quantity: "500g",
      image: "/paneer.jpg",
    },
  ];
  return (
    <div className="mt-16">
      <div className="bg-blue-400 h-64 flex flex-row justify-end items-center  md:m-3 rounded-2xl bg-[url('/flyers/1000728711.jpg')] bg-cover bg-center">
        <div className="bg-black w-28 h-52 pl-3 rounded-2xl bg-[url('/flyers/1000728711.jpg')] bg-cover bg-center"></div>
      </div>

      <div className="mt-16">
        <h1 className="text-center font-extrabold md:text-3xl text-xl uppercase">
          Best Sales on all the types of cheese
        </h1>
        <p className="text-center text-sm px-10 my-2">
          Available in 100g, 250g, 400g, 500g, and 1000g.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 place-items-center">
        {" "}
        {honeyDetails.map((honey, index) => (
          <div className="" key={index}>
            <div className="my-5">
              <img
                src={honey.image}
                alt=""
                className="w-40 sm:w-32 md:w-44 h-36 rounded-xl"
              />
              <h1 className="text-center font-bold uppercase my-2 underline">
                {honey.name}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:px-8 px-2 mt-10">
        {honeyDetails.map((honey, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4">
            <div className="w-full h-48 rounded-xl bg-amber-300 flex items-center justify-center">
              {/* Ideally use <img src={honey.image} /> */}
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
                <button
                  className="bg-black text-white text-center px-4 rounded-xl mt-2"
                  onClick={() => addToCart(honey)}
                >
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

export default CheeseMoree;

import { image } from "framer-motion/client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const TivanOil = () => {
  const { addToCart } = useCart();
  const honeyDetails = [
    {
      name: "Oil 1 ",
      price: 500,
      quantity: "500ml",
      image: "/oil3.jpg",
    },
    {
      name: "Oil 2 ",
      price: 600,
      quantity: "100ml",
      image: "/oil6.jpg",
    },
    {
      name: "Oil 3 ",
      price: 300,
      quantity: "250ml",
      image: "/oil7.jpg",
    },
    {
      name: "Oil 4 ",
      price: 900,
      quantity: "200ml",
      image: "/oilrefined.jpg",
    },
  ];
  return (
    <div className="mt-16">
      <div className="bg-blue-400 h-64 flex flex-row justify-end items-center  md:m-3 rounded-2xl bg-[url('/flyers/1000728709.jpg')] bg-cover bg-center">
        <div className="bg-black w-28 h-52 pl-3 rounded-2xl bg-[url('/flyers/1000728709.jpg')] bg-cover bg-center"></div>
      </div>

      <div className="mt-16">
        <h1 className="text-center font-bold text-3xl capitalize">
          Categories for our Castor Oil
        </h1>
        <p className="text-center text-sm px-10 my-2">
          Available in 100ml, 250ml, 400ml, 500ml, and 1000ml jars.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  mt-10 md:px-8 px-2">
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

export default TivanOil;

import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const ButterMoree = () => {
  const { addToCart } = useCart();
  const honeyDetails = [
    {
      name: "product Name Moistured",
      price: 789,
      quantity: "1KG",
      image: "/honeyinto.jpg",
    },
    {
      name: "product Name Moistured",
      price: 650,
      quantity: "1KG",
      image: "/honeyinto.jpg",
    },
    {
      name: "product Name Moistured",
      price: 900,
      quantity: "1KG",
      image: "/honeyinto.jpg",
    },
    {
      name: "product Name Moistured",
      price: 7899,
      quantity: "1KG",
      image: "/honeyinto.jpg",
    },
  ];
  return (
    <div className="mt-16">
      <div className="bg-blue-400 h-64 flex flex-row justify-end items-center  md:m-3 rounded-2xl bg-[url('/flyers/1000728708.jpg')] bg-cover bg-center">
        <div className="bg-black w-28 h-52 pl-3 rounded-2xl bg-[url('/flyers/1000728708.jpg')] bg-cover bg-center"></div>
      </div>

      <div className="mt-16">
        <h1 className="text-center font-bold text-3xl">
          Best Sales of beauty products
        </h1>
        <p className="text-center text-sm px-10 my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dolor
          soluta dicta reiciendis possimus asperiores.
        </p>
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

export default ButterMoree;

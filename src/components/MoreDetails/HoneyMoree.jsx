import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const HoneyMoree = () => {
  const { addToCart } = useCart();
  const honeyDetails = [
    {
      name: "Honey ",
      price: 500,
      quantity: "500g",
      image: "/honeyinto.jpg",
    },
    {
      name: "Honey ",
      price: 600,
      quantity: "1KG",
      image: "/honeyinto.jpg",
    },
    {
      name: "Honey ",
      price: 300,
      quantity: "250g",
      image: "/honeyinto.jpg",
    },
    {
      name: "Honey ",
      price: 900,
      quantity: "200g",
      image: "/honeyinto.jpg",
    },
  ];
  return (
    <div className="mt-16">
      <div className="bg-blue-400 h-64 flex flex-row justify-end items-center  md:m-3 rounded-2xl bg-[url('/flyers/1000728713.jpg')] bg-cover bg-center">
        <div className="bg-black w-28 h-52 pl-3 rounded-2xl bg-[url('/flyers/1000728713.jpg')] bg-cover bg-center"></div>
      </div>

      <div className="mt-16">
        <h1 className="text-center font-bold text-3xl capitalize">
          Categories for our Honey Products
        </h1>
        <p className="text-center text-sm px-10 my-2">
          Available in 100g, 250g, 400g, 500g, and 1000g jars.
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

export default HoneyMoree;

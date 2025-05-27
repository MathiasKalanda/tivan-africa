import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const CowGheeMoree = () => {
  const { addToCart } = useCart();
  const honeyDetails = [
    {
      name: "Ghee 1",
      price: 700,
      quantity: "250g",
      image: "/flyers/crsipyghee.jpg",
    },
    {
      name: "Ghee 2",
      price: 788,
      quantity: "500g",
      image: "/flyers/flavoured.jpg",
    },
    {
      name: "Ghee 3",
      price: 788,
      quantity: "1kg",
      image: "/flyers/tastyghee.jpg",
    },
    {
      name: "Ghee 4",
      price: 543,
      quantity: "500g",
      image: "/flyers/crsipyghee.jpg",
    },
  ];
  return (
    <div className="mt-16">
      <div className="bg-blue-400 h-64 flex flex-row justify-end items-center  md:m-3 rounded-2xl bg-[url('/flyers/1000728712.jpg')] bg-cover bg-center">
        <div className="bg-black w-28 h-52 pl-3 rounded-2xl bg-[url('/flyers/1000728712.jpg')] bg-cover bg-center"></div>
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

export default CowGheeMoree;

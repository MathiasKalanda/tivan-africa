import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const products = [
  {
    name: "Castor Oil",
    description: "Purely refined for daily use.",
    image: "/refined-removebg-preview.png",
  },
  {
    name: "Natural Honey",
    description: "Harvested straight from the hive.",
    image: "/honeyinto.jpg",
  },
  {
    name: "Organic Butter",
    description: "Smooth and fresh from farms.",
    image: "flyers/buuter22.jpg",
  },
  {
    name: "Fresh Cow Ghee",
    description: "From grass-fed dairy cows.",
    image: "flyers/ghee.jpg",
  },
  {
    name: "Pure Tasty Cheese",
    description: "Relax and unwind naturally.",
    image: "flyers/cheese.jpg",
  },
];

const DisplayProducts = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      style={{
        background:
          "radial-gradient(circle, #ffffff, #f5f5f5, #fef9e7, #faebd7)",

        color: "black",
      }}
      className="flex flex-row justify-center items-center"
    >
      <div className="relative w-full flex justify-center items-center h-100 overflow-hidden ">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-row justify-center items-center gap-6 px-2 absolute rounded-2xl"
          >
            <img
              src={products[current].image}
              alt={products[current].name}
              className="w-50 h-80 object-contain rounded-2xl"
            />
            <div>
              <h1 className="uppercase font-black text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text underline text-2xl">
                {products[current].name}
              </h1>
              <p className="mt-2">{products[current].description}</p>
              <button className="bg-amber-700 px-4 py-1 rounded-xl mt-3 font-bold text-white">
                Order Now
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DisplayProducts;

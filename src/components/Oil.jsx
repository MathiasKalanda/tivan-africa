import React from "react";


const Oil = () => {
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
          Tivan Oil
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
        <p className="text-wrap text-center px-20 text-black">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Neque
        </p>
        <div className="flex flex-row justify-between items-center gap-4 mt-4">
          <button className="bg-amber-600 px-3 py-2 rounded-3xl text-black font-bold">
            Know More
          </button>
          <button className="px-5 py-2 text-black border-amber-600 border-1 rounded-3xl font-bold">
            Buy
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default Oil;

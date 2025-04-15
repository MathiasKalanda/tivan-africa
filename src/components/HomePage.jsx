import React from "react";

const HomePage = () => {
  return (
    <div
      style={{
        background: "radial-gradient(circle,#435154,#1B252F,#05060B,#000000 )",

        color: "white",
      }}
      className="pb-10"
    >
      {" "}
      <div className="flex flex-col justify-center items-center ">
        {" "}
        <h1 className=" text-3xl md:text-4xl mt-24 font-bold uppercase text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text">
          Tivan Honey
        </h1>
        <p className="pt-2 font-bold mb-2 text-amber-700">
          Natural and Pure Honey
        </p>
        <p className="text-wrap text-center px-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Neque
        </p>
        <div className="flex flex-row justify-between items-center gap-4 mt-4">
          <button className="bg-amber-600 px-3 py-2 rounded-3xl text-black">
            Know More
          </button>
          <button className="px-5 py-2 border-amber-600 border-1 rounded-3xl">
            Buy
          </button>
        </div>
        <img src="/nobgjar.png" alt="" className="w-80 " />
        <div className="uppercase font-bold text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
          Taste the flavour beyond treasure
        </div>
      </div>
    </div>
  );
};

export default HomePage;

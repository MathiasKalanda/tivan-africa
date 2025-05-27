import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

const Products = () => {
  return (
    <div className="mt-10">
      <div className="">
        <div className="bg-[url('/jar3.jpg')]  bg-cover h-56 flex flex-row items-end">
          <h1 className="text-white mb-10 ml-15 text-4xl font-bold">
            Our Products
          </h1>
        </div>
        {/* product honey */}
        <div className="my-20">
          {" "}
          <div className="flex flex-row mt-15 gap-6">
            <div className="bg-[#701E12] h-30 w-10 rounded-r-3xl"></div>
            <div className="bg-green-600 h-60 w-35 rounded-3xl flex flex-row justify-center items-end bg-[url('/flyers/1000728713.jpg')]  bg-cover bg-center">
              <span className="mb-5 mx-3 text-white font-bold text-3xl">
                Natural Honey
              </span>
            </div>
            <div className="flex flex-col">
              <p className="w-50 py-5 text-green-950">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                ex rerum et voluptates quam harum, natus voluptate numquam
                repudiandae inventore, sapiente quis esse, qui non!
              </p>
              <button className="bg-[#701E12] self-end px-4 py-1 flex flex-row justify-center items-center gap-2 rounded-2xl">
                <span className="capitalize text-white">order now</span>
                <FaCircleArrowRight className="bg-[#701E12] rounded-full text-white moving-arrow" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-8 grid-rows-16  gap-4 mt-10">
            <div className="bg-gray-400 col-span-3 row-span-10 rounded-r-full bg-[url('/jar3.jpg')]  bg-cover bg-center"></div>

            <div className="bg-black/15 col-span-5 row-span-15 rounded-l-full bg-[url('/jar3.jpg')]  bg-cover bg-center"></div>
            <div className="bg-amber-200 col-span-3 ml-10  row-span-6 rounded-4xl bg-[url('/jar3.jpg')]  bg-cover bg-center"></div>
          </div>
        </div>

        {/* product butter */}
        <div className="my-20">
          {" "}
          <div className="flex flex-row mt-15 gap-6">
            <div className="bg-[#2E5C2D] h-30 w-10 rounded-r-3xl"></div>
            <div className="bg-green-600 h-60 w-35 rounded-3xl flex flex-row justify-center items-end bg-[url('/flyers/1000728708.jpg')]  bg-cover bg-center">
              <span className="mb-5 mx-3 text-white font-bold text-3xl">
                Castor Oil
              </span>
            </div>
            <div className="flex flex-col">
              <p className="w-50 py-5 text-green-950">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                ex rerum et voluptates quam harum, natus voluptate numquam
                repudiandae inventore, sapiente quis esse, qui non!
              </p>
              <button className="bg-[#2E5C2D] self-end px-4 py-1 flex flex-row justify-center items-center gap-2 rounded-2xl">
                <span className="capitalize text-white">order now</span>
                <FaCircleArrowRight className="bg-[#486F43] rounded-full text-white moving-arrow" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-8 grid-rows-16  gap-4 mt-10">
            <div className="bg-gray-400 col-span-3 row-span-10 rounded-r-full bg-[url('/jar3.jpg')]  bg-cover bg-center"></div>

            <div className="bg-black/15 col-span-5 row-span-15 rounded-l-full bg-[url('/jar3.jpg')]  bg-cover bg-center"></div>
            <div className="bg-amber-200 col-span-3 ml-10  row-span-6 rounded-4xl bg-[url('/jar3.jpg')]  bg-cover bg-center"></div>
          </div>
        </div>

        {/* product cheese */}
        <div className="my-20">
          {" "}
          <div className="flex flex-row mt-15 gap-6">
            <div className="bg-[#F5BF15] h-30 w-10 rounded-r-3xl"></div>
            <div className="bg-green-600 h-60 w-35 rounded-3xl flex flex-row justify-center items-end bg-[url('/flyers/1000728711.jpg')]  bg-cover bg-center">
              <span className="mb-5 mx-3 text-white font-bold text-3xl">
                Cheese
              </span>
            </div>
            <div className="flex flex-col">
              <p className="w-50 py-5 text-green-950">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                ex rerum et voluptates quam harum, natus voluptate numquam
                repudiandae inventore, sapiente quis esse, qui non!
              </p>
              <button className="bg-[#F5BF15] self-end px-4 py-1 flex flex-row justify-center items-center gap-2 rounded-2xl">
                <span className="capitalize text-white">order now</span>
                <FaCircleArrowRight className="bg-[#15B3E2] rounded-full text-white moving-arrow" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-8 grid-rows-16  gap-4 mt-10">
            <div className="bg-gray-400 col-span-3 row-span-10 rounded-r-full bg-[url('/jar3.jpg')]  bg-cover bg-center"></div>

            <div className="bg-black/15 col-span-5 row-span-15 rounded-l-full bg-[url('/jar3.jpg')]  bg-cover bg-center"></div>
            <div className="bg-amber-200 col-span-3 ml-10  row-span-6 rounded-4xl bg-[url('/jar3.jpg')]  bg-cover bg-center"></div>
          </div>
        </div>

        {/* product ghee */}
        <div className="my-20">
          {" "}
          <div className="flex flex-row mt-15 gap-6">
            <div className="bg-[#15B3E2] h-30 w-10 rounded-r-3xl"></div>
            <div className="bg-green-600 h-60 w-35 rounded-3xl flex flex-row justify-center items-end bg-[url('/flyers/1000728712.jpg')]  bg-cover bg-center">
              <span className="mb-5 mx-3 text-white font-bold text-3xl">
                CowGhee
              </span>
            </div>
            <div className="flex flex-col">
              <p className="w-50 py-5 text-green-950">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                ex rerum et voluptates quam harum, natus voluptate numquam
                repudiandae inventore, sapiente quis esse, qui non!
              </p>
              <button className="bg-[#15B3E2] self-end px-4 py-1 flex flex-row justify-center items-center gap-2 rounded-2xl">
                <span className="capitalize text-white">order now</span>
                <FaCircleArrowRight className="bg-[#15B3E2] rounded-full text-white moving-arrow" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-8 grid-rows-16  gap-4 mt-10">
            <div className="bg-gray-400 col-span-3 row-span-10 rounded-r-full bg-[url('/jar3.jpg')]  bg-cover bg-center"></div>

            <div className="bg-black/15 col-span-5 row-span-15 rounded-l-full bg-[url('/jar3.jpg')]  bg-cover bg-center"></div>
            <div className="bg-amber-200 col-span-3 ml-10  row-span-6 rounded-4xl bg-[url('/jar3.jpg')]  bg-cover bg-center"></div>
          </div>
        </div>

        {/* product oil */}
        <div className="my-20">
          {" "}
          <div className="flex flex-row mt-15 gap-6">
            <div className="bg-[#486F43] h-30 w-10 rounded-r-3xl"></div>
            <div className="bg-green-600 h-60 w-35 rounded-3xl flex flex-row justify-center items-end bg-[url('/flyers/1000728709.jpg')]  bg-cover bg-center">
              <span className="mb-5 mx-3 text-white font-bold text-3xl">
                Castor Oil
              </span>
            </div>
            <div className="flex flex-col">
              <p className="w-50 py-5 text-green-950">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                ex rerum et voluptates quam harum, natus voluptate numquam
                repudiandae inventore, sapiente quis esse, qui non!
              </p>
              <button className="bg-[#486F43] self-end px-4 py-1 flex flex-row justify-center items-center gap-2 rounded-2xl">
                <span className="capitalize text-white">order now</span>
                <FaCircleArrowRight className="bg-[#486F43] rounded-full text-white moving-arrow" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-8 grid-rows-16  gap-4 mt-10">
            <div className="bg-gray-400 col-span-3 row-span-10 rounded-r-full bg-[url('/jar3.jpg')]  bg-cover bg-center"></div>

            <div className="bg-black/15 col-span-5 row-span-15 rounded-l-full bg-[url('/jar3.jpg')]  bg-cover bg-center"></div>
            <div className="bg-amber-200 col-span-3 ml-10  row-span-6 rounded-4xl bg-[url('/jar3.jpg')]  bg-cover bg-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

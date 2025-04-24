import React from "react";
import { FaArrowRight, FaHome, FaOpencart, FaWhatsapp } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { PiHeartStraight } from "react-icons/pi";

const HeroSection = () => {
  const phoneNumber = "256776978176";
  const message = "Hello, I’m interested in your products!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <div className="mt-10">
      <div className="h-screen  pt-10 flex flex-col  items-center justify-evenly relative">
        <video
          className="fixed top-0 left-0 w-full h-full object-cover z-[-1] mt-10"
          autoPlay
          muted
          loop
        >
          <source src="/honeyvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="self-center pt-40 flex flex-col justify-center items-cente gap-2">
          <div className=" font-bold text-4xl bg-gradient-to-r from-green-700 via-green-400 to-lime-300 bg-clip-text text-transparent">
            Tivan Organic Products
          </div>
          <p className="text-center font-bold text-lg">
            Organic Butter. Golden Honey. Natural Oils.
          </p>{" "}
          <span className="font-bold underline italic mb-5 text-center">
            Rooted in nature. Crafted with care.
          </span>
        </div>

        <div className="flex flex-col gap-5 w-96 mx-10 ">
          <div className="flex flex-row items-center gap-5">
            <div className="bg-amber-700/35 p-2 rounded-full">
              {" "}
              <img src="/Logo.png" alt="" className="w-10" />
            </div>

            <div className="flex flex-row items-center gap-2 ">
              <span className="font-bold underline">Contact Us Direct</span>{" "}
              <FaArrowRight className="moving-arrow " />
            </div>
            <div className="border-2 border-green-600 px-5 py-1 rounded-lg">
              <button onClick={() => window.open(whatsappUrl, "_blank")}>
                <FaWhatsapp size={24} className="text-green-600" />
              </button>
            </div>
          </div>
          <div className="bg-black/25 p-5 rounded-md flex flex-col gap-5">
            <div className="">
              <div className="w-10 flex flex-row  items-center gap-3">
                <div className="text-nowrap text-xl font-bold text-black uppercase">
                  Honey <span className="font-black text-green-800">|</span> Oil{" "}
                  <span className="font-black text-green-800">|</span>{" "}
                  Butter{" "}
                </div>
              </div>
            </div>
            <div className="bg-amber-700 flex flex-row justify-between items-center rounded-md py-2 px-2">
              <span className="capitalize font-bold">
                view Tivan Organic Products
              </span>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

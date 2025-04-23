import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { PiHeartStraight } from "react-icons/pi";
// import honeyVideo from "../public/honeyvideo.mp4";
const HeroSection = () => {
  return (
    <div className="mt-10">
      <div className="h-screen  pt-10 flex flex-row  items-end justify-between pb-20 relative">
        <video
          className="fixed top-0 left-0 w-full h-full object-cover z-[-1] mt-10"
          autoPlay
          muted
          loop
        >
          <source src="/honeyvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col gap-10 w-96 mx-10">
          <div className="flex flex-row items-center gap-5">
            <div className="w-10 h-10 rounded-full bg-red-600"></div>
            <div className="">jewelry_prices</div>
            <div className="border-2 border-white px-5 py-1 rounded-lg">
              follow
            </div>
          </div>
          <div className="bg-black/25 p-5 rounded-md flex flex-col gap-5">
            <div className="">
              <div className="w-10 flex flex-row">
                <div className="w-20 h-10 bg-gray-500 rounded-lg">hey</div>
                <div className="text-nowrap">50K followers.493 posts</div>
              </div>
            </div>
            <div className="bg-amber-700 flex flex-row justify-between items-center rounded-md py-2 px-2">
              <span className="capitalize font-bold">
                visit instagram profile
              </span>
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mr-5">
          <div className="flex flex-col items-center justify-center">
            <PiHeartStraight />
            <h1 className="">375</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IoChatbubbleOutline />
            <h1 className="">7</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IoMdMore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

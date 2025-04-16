import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";

const MobileNav = ({ isOpen, MdClose, handleMenu }) => {
  return (
    <div>
      <div className="bg-black text-white h-screen top-0 md:hidden flex fixed w-full flex-col items-center">
        <div className="flex flex-row justify-between mx-3 w-full p-3">
          {" "}
          <div className="px-5 py-3">
            <img src="/logofull.png" alt="bingo" className="w-30" />
          </div>
          <button
            onClick={handleMenu}
            className="text-white md:hidden flex py-3 px-5"
          >
            <MdClose size={30} />
          </button>
        </div>
        <div className="self-start  h-full w-full px-10 py-6">
          <ul className="text-white">
            <li className="py-3 px-4 rounded-3xl border-1 hover:border-amber-500 my-5 flex flex-row items-center justify-between">
              <span className="font-bold uppercase">Products</span>
              <span className="moving-arrow text-green-800">
                <LiaArrowRightSolid size={24} className="" />
              </span>
            </li>
            <li className="py-3 px-4 rounded-3xl border-1 hover:border-amber-500 my-5 flex flex-row items-center justify-between">
              <span className="font-bold uppercase">Orders</span>
              <span className="moving-arrow text-green-800">
                <LiaArrowRightSolid size={24} className="" />
              </span>
            </li>
            <li className="py-3 px-4 rounded-3xl border-1 hover:border-amber-500 my-5 flex flex-row items-center justify-between">
              <span className="uppercase font-bold">Policy</span>
              <span className="moving-arrow text-green-800">
                <LiaArrowRightSolid size={24} className="" />
              </span>
            </li>
            <li className="py-3 px-4 rounded-3xl border-1 hover:border-amber-500 my-5 flex flex-row items-center justify-between">
              <span className="font-bold uppercase">About Us</span>
              <span className="moving-arrow text-green-800">
                <LiaArrowRightSolid size={24} className="" />
              </span>
            </li>
            <li className="py-3 px-4 rounded-3xl border-1 hover:border-amber-500 my-5 flex flex-row items-center justify-between cursor-pointer">
              <span className="font-bold uppercase">Contact Us</span>
              <span className="moving-arrow text-green-800">
                <LiaArrowRightSolid size={24} className="" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

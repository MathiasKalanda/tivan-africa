import { Link } from "@tanstack/react-router";
import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";

const MobileNav = ({ isOpen, MdClose, handleMenu }) => {
  return (
    <div>
      <div className="bg-black text-white h-screen top-0 md:hidden flex fixed w-full flex-col items-center">
        <div className="flex flex-row justify-between mx-3 w-full p-3">
          {" "}
          <Link to="/" onClick={handleMenu} className="px-5 py-3">
            <img src="/logofull.png" alt="bingo" className="w-30" />
          </Link>
          <button
            onClick={handleMenu}
            className="text-green-950 md:hidden flex py-3 px-5"
          >
            <MdClose size={30} />
          </button>
        </div>
        <div className="self-start  h-full w-full px-10 py-6">
          <ul className="text-white">
            <Link
              to="/productPage"
              onClick={handleMenu}
              className="py-3 px-4 rounded-3xl border-green-400 border-1 hover:border-amber-500 my-5 flex flex-row items-center justify-between"
            >
              <span className="font-bold uppercase">Products</span>
              <span className="moving-arrow text-green-800">
                <LiaArrowRightSolid size={24} className="" />
              </span>
            </Link>
            <Link
              to="/order"
              onClick={handleMenu}
              className="py-3 px-4 rounded-3xl border-1 hover:border-amber-500 my-5 flex flex-row items-center justify-between border-green-400"
            >
              <span className="font-bold uppercase">Orders</span>
              <span className="moving-arrow text-green-800">
                <LiaArrowRightSolid size={24} className="" />
              </span>
            </Link>
            <li className="py-3 px-4 rounded-3xl border-1 hover:border-amber-500 my-5 flex flex-row items-center justify-between border-green-400">
              <span className="uppercase font-bold">Policy</span>
              <span className="moving-arrow text-green-800">
                <LiaArrowRightSolid size={24} className="" />
              </span>
            </li>
            <li className="py-3 px-4 rounded-3xl border-1 hover:border-amber-500 my-5 flex flex-row items-center justify-between border-green-400">
              <span className="font-bold uppercase">About Us</span>
              <span className="moving-arrow text-green-800">
                <LiaArrowRightSolid size={24} className="" />
              </span>
            </li>

            <Link
              to="/contactus"
              onClick={handleMenu}
              className="py-3 px-4 rounded-3xl border-1 hover:border-amber-500 my-5 flex flex-row items-center justify-between cursor-pointer border-green-400"
            >
              <span className="font-bold uppercase">Contact Us</span>
              <span className="moving-arrow text-green-800">
                <LiaArrowRightSolid size={24} className="" />
              </span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

import { Link } from "@tanstack/react-router";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
// className = "[&.active]:font-bold";

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-row justify-between mx-3">
        <div className="p-3">
          <img src="/Logo.png" alt="" className="w-7" />
        </div>
        <div className="flex flex-row gap-4 p-3">
          <button className="text-white">
            <CiSearch size={24} />
          </button>
          <button className="text-white">
            <FaShoppingCart size={24} />
          </button>
          <button className="text-white">
            <HiOutlineBars3BottomRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

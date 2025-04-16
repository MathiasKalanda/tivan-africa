import { Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import MobileNav from "./MobileNav";
// className = "[&.active]:font-bold";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="bg-black fixed w-full top-0 z-50">
      <div className="flex flex-row justify-between mx-3">
        <div className="p-3">
          <img src="/Logo.png" alt="" className="w-7 flex md:hidden" />
          <img src="/logofull.png" alt="" className="w-30 hidden md:flex" />
        </div>
        <div className="flex flex-row gap-4 p-3">
          <button className=" text-white">
            <CiSearch size={24} />
          </button>
          <button className="text-white">
            <FaShoppingCart size={24} />
          </button>
          {isOpen ? (
            <button onClick={handleMenu} className="text-white md:hidden flex">
              <MdClose size={26} />
            </button>
          ) : (
            <button onClick={handleMenu} className="text-white md:hidden flex">
              {" "}
              <HiOutlineBars3BottomRight size={26} />
            </button>
          )}
        </div>
      </div>{" "}
      {isOpen && (
        <MobileNav handleMenu={handleMenu} isOpen={isOpen} MdClose={MdClose} />
      )}
    </div>
  );
};

export default Navbar;

import { Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import MobileNav from "./MobileNav";
import MobileCart from "./MobileCart";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
  const { cart } = useCart();
  // ✅ Total quantity = sum of all counts
  const totalItems = cart.reduce((acc, item) => acc + item.count, 0);

  const [isOpen, setOpen] = useState(false);
  const [isCart, setCart] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  const handleCart = () => {
    setCart((prev) => !prev);
  };
  return (
    <div className="bg-black fixed w-full top-0 z-50">
      <div className="flex flex-row justify-between mx-3">
        <Link className="p-3" to="/">
          <img src="/Logo.png" alt="" className="w-7 flex md:hidden" />
          <img src="/logofull.png" alt="" className="w-30 hidden md:flex" />
        </Link>
        <div className="flex flex-row gap-4 p-3">
          <button className=" text-white">
            <CiSearch size={24} />
          </button>
          {isCart ? (
            <div className="relative">
              {" "}
              <button onClick={handleCart} className="text-red-900 relative">
                <FaShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          ) : (
            <div className="relative">
              {" "}
              <button onClick={handleCart} className="text-red-900 relative">
                <FaShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          )}

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
      {isCart && (
        <CartDrawer handleCart={handleCart} isCart={isCart} MdClose={MdClose} />
      )}
    </div>
  );
};

export default Navbar;

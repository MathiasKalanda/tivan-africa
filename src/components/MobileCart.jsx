import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import { LiaArrowLeftSolid } from "react-icons/lia";

const MobileCart = ({ isCart, handleCart, MdClose }) => {
  return (
    <div>
      {" "}
      <div className="bg-black text-white h-screen top-0 md:hidden flex fixed w-full flex-col items-center">
        <div className="flex flex-row justify-between mx-3 w-full p-3">
          {" "}
          <div className="px-5 py-3">
            <img src="/logofull.png" alt="bingo" className="w-30" />
          </div>
          <button
            onClick={handleCart}
            className="text-white md:hidden flex py-3 px-5"
          >
            <MdClose size={30} />
          </button>
        </div>
        <div className="self-start  h-full w-full px-10 py-6">
          <h1 className="capitalize font-bold underline">Your Bag Is Empty</h1>
          <p className="font-mono">
            Kindly choose Your Order Before proceeding
          </p>
          <div className="my-3">
            <button className="bg-amber-950 px-3 py-2 rounded-3xl font-medium flex flex-row justify-center items-center gap-2 ">
              <LiaArrowLeftSolid className="moving-arrow" />
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCart;

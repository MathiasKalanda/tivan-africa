import React from "react";

const MobileNav = ({ isOpen, MdClose, handleMenu }) => {
  return (
    <div>
      <div className="bg-black text-white h-screen top-0 md:hidden flex fixed w-full">
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
        <hr className="text-green-900" />
      </div>
    </div>
  );
};

export default MobileNav;

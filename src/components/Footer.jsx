import { Link } from "@tanstack/react-router";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="my-6">
      <div className="text-center font-bold">
        Copyright© 2025 Tivan Consultancy Ltd. All rights reserved.
      </div>
      <div className="flex flex-row justify-center items-center gap-5 my-10">
        <a
          href="https://www.facebook.com/photo.php?fbid=518426450840151&id=100080184001040&set=a.190305443652255"
          className=""
        >
          {" "}
          <FaFacebook size={38} />
        </a>
        <a href="https://x.com/tivanconsults" className="">
          {" "}
          <FaXTwitter size={38} />
        </a>
        <a href="https://www.instagram.com/tivanconsults/" className="">
          {" "}
          <FaInstagram size={38} />
        </a>
        <a href="" className="">
          {" "}
          <FaYoutube size={38} />
        </a>
        <a href="https://ug.linkedin.com/in/viviansekitto" className="">
          {" "}
          <FaLinkedin size={38} />
        </a>
      </div>
      <div className="my-3">
        <ul className="flex flex-row justify-center items-center gap-2">
          <Link
            to="/contactus"
            className="p-2 hover:underline font-bold uppercase"
          >
            For Business
          </Link>
          <Link
            to="/productPage"
            className="p-2 hover:underline font-bold uppercase"
          >
            Buy
          </Link>
          <Link
            to="/contactus"
            className="p-2 hover:underline font-bold uppercase"
          >
            Legal
          </Link>
          <Link
            to="/productPage"
            className="p-2 hover:underline font-bold uppercase"
          >
            Products
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

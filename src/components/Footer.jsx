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
        <FaFacebook size={38} />
        <FaXTwitter size={38} />
        <FaInstagram size={38} />
        <FaYoutube size={38} />
        <FaLinkedin size={38} />
      </div>
      <div className="my-3">
        <ul className="flex flex-row justify-center items-center gap-2">
          <li className="p-2 hover:underline">For Business</li>
          <li className="p-2 hover:underline">Privacy</li>
          <li className="p-2 hover:underline">Legal</li>
          <li className="p-2 hover:underline">Products</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { MdFavorite, MdEmail } from "react-icons/md";
import {
  FaLinkedin,
  FaGithub,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-row py-12 bg-[#1d1d25]  justify-between">
      <div className="flex text-white font-bold text-xl ml-20">
        <p>Copyright © 2023 Coded with</p>
        <span>
          <MdFavorite className="text-2xl mx-2 text-red-500" />
        </span>
        <p>by FranciscoHIDev</p>
      </div>
      <div className="flex flex-row mr-20">
        <a
          href="https://www.linkedin.com/in/isidoro-francisco/"
          target="_blank"
          className=" mr-3 text-2xl text-white hover:text-red-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/FranciscoHIDev/"
          target="_blank"
          className="mr-3 text-2xl text-white hover:text-red-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/IsidoroFH"
          target="_blank"
          className="mr-3 text-2xl text-white hover:text-red-500"
        >
          <FaTwitterSquare />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=529984921643&text=hola,%20qu%C3%A9%20tal?"
          target="_blank"
          className="mr-3 text-2xl text-white hover:text-red-500"
        >
          <FaWhatsappSquare />
        </a>
        <a
          href="mailto:ihilario00@gmail.com"
          className="text-2xl text-white hover:text-red-500"
        >
          <MdEmail />
        </a>
      </div>
    </div>
  );
}

export default Footer;

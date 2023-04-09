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
    <div className="flex flex-row py-12 bg-background  justify-between">
      <div className="flex text-white font-bold text-xl ml-20">
        <p>Copyright © 2023 Coded with</p>
        <span>
          <MdFavorite className="text-2xl mx-2 mt-1 text-primary" />
        </span>
        <p>by Isidoro Francisco. All rights reserved. </p>
      </div>
      <div className="flex flex-row mr-20">
        <a
          href="https://www.linkedin.com/in/isidoro-francisco/"
          target="_blank"
          className=" mr-3 text-2xl text-primary hover:text-secondary"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/FranciscoHIDev/"
          target="_blank"
          className="mr-3 text-2xl text-primary hover:text-secondary"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/IsidoroFH"
          target="_blank"
          className="mr-3 text-2xl text-primary hover:text-secondary"
        >
          <FaTwitterSquare />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=529984921643&text=hola,%20qu%C3%A9%20tal?"
          target="_blank"
          className="mr-3 text-2xl text-primary hover:text-secondary"
        >
          <FaWhatsappSquare />
        </a>
        <a
          href="mailto:ihilario00@gmail.com"
          className="text-2xl text-primary hover:text-secondary"
        >
          <MdEmail />
        </a>
      </div>
    </div>
  );
}

export default Footer;

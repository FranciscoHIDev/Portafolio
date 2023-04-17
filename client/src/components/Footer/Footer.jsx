import React from "react";
import { MdFavorite } from "react-icons/md";
import {
  FaLinkedin,
  FaGithub,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* -------------- Footer Mobile---------------- */}
      <div className="flex flex-col pt-12 pb-5 bg-background mx-auto items-center">
        <div className="flex  flex-row mb-4">
          <a
            href="https://www.linkedin.com/in/isidoro-francisco/"
            target="_blank"
            className=" mr-3 text-3xl text-primary hover:text-secondary"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/FranciscoHIDev/"
            target="_blank"
            className="mr-3 text-3xl text-primary hover:text-secondary"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/IsidoroFH"
            target="_blank"
            className="mr-3 text-3xl text-primary hover:text-secondary"
          >
            <FaTwitterSquare />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=529984921643&text=hola,%20qu%C3%A9%20tal?"
            target="_blank"
            className="mr-3 text-3xl text-primary hover:text-secondary"
          >
            <FaWhatsappSquare />
          </a>
          <a
            href="mailto:ihilario00@gmail.com"
            className="text-3xl text-primary hover:text-secondary"
          >
            <FaEnvelope />
          </a>
        </div>
        <div className="flex  text-[#EEEEEE] font-bold text-xl ">
          <p className="flex text-[16px] md:text-2xl">
            Copyright © 2023 Coded with
          </p>
          <span>
            <MdFavorite className="flex text-2xl md:text-3xl mt-1 mx-1 md:mt-1 text-primary" />
          </span>
          <p className="flex text-[16px] md:text-2xl">by Isidoro Francisco</p>
        </div>
      </div>
      {/* -------------- Footer---------------- */}
      {/* <div className="flex py-12 bg-background  justify-between ">
        <div className="flex  text-[#EEEEEE] font-bold text-xl ml-20 ">
          <p className="">Copyright © 2023 Coded with</p>
          <span>
            <MdFavorite className="text-2xl mx-2 mt-1 text-primary" />
          </span>
          <p>by Isidoro Francisco. All rights reserved. </p>
        </div>
        <div className="flex  flex-row mr-20">
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
            <FaEnvelope />
          </a>
        </div>
      </div> */}
    </>
  );
}

export default Footer;

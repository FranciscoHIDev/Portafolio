import React from "react";
import { Link } from "react-scroll";
import {
  FaLinkedin,
  FaGithub,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaEnvelope,
} from "react-icons/fa";

function Home() {
  return (
    <React.Fragment>
      <div
        className="flex md:flex-row flex-col-reverse   pt-20 bg-background mx-auto items-center"
        id="home"
      >
        <div className="flex flex-col md:fixed md:ml-10 md:mt-40">
          <a
            href="https://www.linkedin.com/in/isidoro-francisco/"
            target="_blank"
            className=" pb-2 text-4xl text-primary hover:text-secondary"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/FranciscoHIDev/"
            target="_blank"
            className="pb-2 text-4xl text-primary hover:text-secondary"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/IsidoroFH"
            target="_blank"
            className="pb-2 text-4xl text-primary hover:text-secondary"
          >
            <FaTwitterSquare />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=529984921643&text=hola,%20qu%C3%A9%20tal?"
            target="_blank"
            className="pb-2 text-4xl text-primary hover:text-secondary"
          >
            <FaWhatsappSquare />
          </a>
          <a
            href="mailto:ihilario00@gmail.com"
            className="text-4xl text-primary hover:text-secondary"
          >
            <FaEnvelope />
          </a>
        </div>
        <div className="flex flex-col md:ml-[150px] text-white md:mt-40 md:mr-20 md:w-[40%] mx-10 mt-10 items-center md:items-start">
          <p className="text-2xl mb-3 ">¡Hola! Bienvedin@</p>
          <p className="text-3xl mb-3"> Soy Isidoro Francisco Hilario</p>
          <h1 className="text-3xl md:text-4xl text-secondary font-bold block animate-typing overflow-hidden whitespace-nowrap">
            FULL STACK DEVELOPER
          </h1>

          <div className="flex py-5 text-white">
            <Link
              to="#cv"
              className="   m-3 p-2 text-lg rounded-xl bg-primary hover:bg-secondary cursor-pointer"
            >
              DESCARGAR CV
            </Link>
            <Link
              to="contact"
              className="m-3 p-2 text-lg rounded-xl bg-primary hover:bg-secondary  cursor-pointer"
            >
              CONTACTO
            </Link>
          </div>
        </div>
        <div className="md:flex content-center mx-8 md:mx-[-32px]">
          <img
            src="https://res.cloudinary.com/duaysiozi/image/upload/v1681150534/pick-Linux-removebg-preview_1_dlayfx.png"
            alt="image"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;

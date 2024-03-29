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
        className="flex md:flex-row flex-col-reverse   pt-20 pb-10 bg-[#000c1f] mx-auto items-center md:justify-around"
        id="about"
      >
        <div className="lg:flex lg:flex-col lg:fixed lg:left-8 lg:mt-28 hidden">
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
            href="https://api.whatsapp.com/send?phone=529833282730&text=hola"
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
        <div className="flex flex-col lg:mx-10 text-white lg:mt-28 lg:mr-0  mx-10 mt-10 items-center lg:items-start lg:w-[50%]">
          <p className="text-2xl mb-3 ">¡Hola! Bienvedin@</p>
          <p className="text-3xl mb-3"> Soy Isidoro Francisco</p>
          <h1 className="text-3xl md:text-4xl text-white font-bold block animate-typing overflow-hidden whitespace-nowrap">
            FULL STACK DEVELOPER
          </h1>

          <div className="flex py-2 text-white">
            <a
              href="https://drive.google.com/file/d/14SQW4krC4y2JIa-8kE2dxVIBd3I8CoXD/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              download
              className=" m-3 p-2 text-lg rounded-xl bg-primary
              hover:bg-secondary hover:text-black cursor-pointer"
            >
              {" "}
              DESCARGAR CV
            </a>
            <Link
              to="contact"
              className="m-3 p-2 text-lg rounded-xl bg-primary hover:bg-secondary  hover:text-black  cursor-pointer"
            >
              CONTACTO
            </Link>
          </div>
        </div>
        <div className="lg:flex content-center mx-8 lg:ml-0 mt-20 ">
          <img
            className="rounded-full md:w-[250px] w-[250px] border-solid border-2 border-primary"
            src="https://res.cloudinary.com/duaysiozi/image/upload/v1681013244/105096858_b4josv.png"
            alt="profile"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;

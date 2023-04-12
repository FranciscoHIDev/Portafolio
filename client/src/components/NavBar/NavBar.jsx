import React from "react";
import { Link } from "react-scroll";
//import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className=" flex  w-full fixed bg-background shadow-md">
      <div className="container mx-auto m-2 ">
        <div className="sm:flex justify-around">
          <Link
            to="/"
            className="text-white text-3xl font-bold p-4 cursor-pointer"
          >
            {"<Francisco Developer/>"}
          </Link>
          <ul className="text-white sm:self-center text-xl border-t sm:border-none">
            <li className="sm:inline-block ">
              <button className=" focus:bg-primary rounded-lg hover:bg-primary p-[5px]">
                <Link to="home" className="p-3">
                  Inicio
                </Link>
              </button>
            </li>
            <li className="sm:inline-block">
              <button className=" focus:bg-primary rounded-lg hover:bg-primary p-[5px]">
                <Link to="about" className="p-3">
                  Sobre mí
                </Link>
              </button>
            </li>
            <li className="sm:inline-block">
              <button className=" focus:bg-primary rounded-lg hover:bg-primary p-[5px]">
                <Link to="skills" className="p-3">
                  Habilidades
                </Link>
              </button>
            </li>
            <li className="sm:inline-block">
              <button className=" focus:bg-primary rounded-lg hover:bg-primary p-[5px]">
                <Link to="projects" className="p-3">
                  Proyectos
                </Link>
              </button>
            </li>

            <li className="sm:inline-block">
              <button className=" focus:bg-primary rounded-lg hover:bg-primary p-[5px]">
                <Link to="testimonials" className="p-3">
                  Testimonios
                </Link>
              </button>
            </li>
            <li className="sm:inline-block">
              <button className=" focus:bg-primary rounded-lg hover:bg-primary p-[5px]">
                <Link to="contact" className="p-3">
                  Contacto
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

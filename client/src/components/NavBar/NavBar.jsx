import React from "react";
import { Link } from "react-scroll";
//import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className=" flex bg-gray-700 w-full fixed">
      <div className="container mx-auto m-2 ">
        <div className="sm:flex justify-around">
          <Link
            to="/"
            className="text-white text-3xl font-bold p-4 cursor-pointer"
          >
            {"<Francisco Developer/>"}
          </Link>
          <ul className="text-white sm:self-center text-xl border-t sm:border-none">
            <li className="sm:inline-block">
              <Link to="home" className="p-3 hover:text-white cursor-pointer">
                Home
              </Link>
            </li>
            <li className="sm:inline-block">
              <Link to="about" className="p-3 hover:text-white cursor-pointer">
                Sobre mí
              </Link>
            </li>
            <li className="sm:inline-block">
              <Link to="skills" className="p-3 hover:text-white cursor-pointer">
                Habilidades
              </Link>
            </li>
            <li className="sm:inline-block">
              <Link
                to="projects"
                className="p-3 hover:text-white cursor-pointer"
              >
                Proyectos
              </Link>
            </li>
            <li className="sm:inline-block">
              <Link
                to="education"
                className="p-3 hover:text-white cursor-pointer"
              >
                Formación
              </Link>
            </li>
            <li className="sm:inline-block">
              <Link
                to="testimonials"
                className="p-3 hover:text-white cursor-pointer"
              >
                Testimonios
              </Link>
            </li>
            <li className="sm:inline-block">
              <Link
                to="contact"
                className="p-3 hover:text-white cursor-pointer"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

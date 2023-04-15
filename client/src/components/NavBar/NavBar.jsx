import React, { useState } from "react";
import { Link } from "react-scroll";
import { CgMenuGridR, CgClose } from "react-icons/cg";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className=" flex fixed w-full bg-primary md:shadow-md">
      <div className="container sm:mx-auto md:mx-auto m-2 ">
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="sm:flex absolute right-5 top-3 cursor-pointer md:hidden "
        >
          {openMenu ? (
            <CgClose className="text-white text-3xl" />
          ) : (
            <CgMenuGridR className="text-white text-3xl" />
          )}
        </div>
        <div className="sm:flex justify-around md:items-center">
          <Link
            to="/"
            className="text-white text-3xl font-bold p-4 cursor-pointer"
          >
            {"<FranciscoDev/>"}
          </Link>

          <ul
            className={`  md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 text-white sm:self-center text-xl border-t sm:border-none ${
              !openMenu ? "top-10 hidden" : "top-14"
            }`}
          >
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

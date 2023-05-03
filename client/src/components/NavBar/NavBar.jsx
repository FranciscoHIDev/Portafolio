import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { CgMenu, CgClose, CgMenuRightAlt } from "react-icons/cg";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className=" shadow-md w-full fixed top-0 left-0  bg-menu ">
      <div className="container mx-auto m-4 md:m-3">
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className=" absolute right-6 top-4  cursor-pointer lg:hidden"
        >
          {openMenu ? (
            <CgClose className="text-white text-4xl" />
          ) : (
            <CgMenuRightAlt className="text-white text-4xl" />
          )}
        </div>
        <div className="md:flex md:justify-around md:items-center">
          <Link
            to="/"
            className="text-white text-3xl font-bold p-4 cursor-pointer"
          >
            {"<FranciscoDev/>"}
          </Link>

          <div
            className={` lg:flex lg:items-center lg:pb-0 lg:pt-0 absolute lg:static lg:z-auto z-[-1] left-0 w-full  lg:w-auto lg:pl-0 pb-5 pt-3 text-white self-center text-xl   bg-cards md:bg-menu  ${
              !openMenu ? "top-10 hidden" : "top-[68px]"
            }`}
          >
            <ul>
              <li className="sm:inline-block">
                <button className=" focus:text-primary hover:text-primary p-[5px]">
                  <Link
                    to="about"
                    className="p-3"
                    smooth={true}
                    duration={1500}
                  >
                    Sobre mí
                  </Link>
                </button>
              </li>
              <li className="sm:inline-block">
                <button className=" focus:text-primary hover:text-primary p-[5px] ">
                  <Link
                    to="skills"
                    className="p-3"
                    smooth={true}
                    duration={1500}
                  >
                    Habilidades
                  </Link>
                </button>
              </li>
              <li className="sm:inline-block">
                <button className=" focus:text-primary hover:text-primary p-[5px] ">
                  <Link
                    to="projects"
                    className="p-3"
                    smooth={true}
                    duration={1500}
                  >
                    Proyectos
                  </Link>
                </button>
              </li>

              <li className="sm:inline-block">
                <button className="  focus:text-primary hover:text-primary p-[5px] ">
                  <Link
                    to="testimonials"
                    className="p-3"
                    smooth={true}
                    duration={1500}
                  >
                    Testimonios
                  </Link>
                </button>
              </li>
              <li className="sm:inline-block">
                <button className=" focus:text-primary hover:text-primary p-[5px] ">
                  <Link
                    to="contact"
                    className="p-3"
                    smooth={true}
                    duration={1500}
                  >
                    Contacto
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

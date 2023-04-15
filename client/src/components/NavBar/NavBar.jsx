import React, { useState } from "react";
import { Link } from "react-scroll";
import { CgMenu, CgClose } from "react-icons/cg";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className=" shadow-md w-full fixed top-0 left-0   ">
      <div className="container mx-auto m-2 ">
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className=" absolute right-5 top-3  cursor-pointer md:hidden"
        >
          {openMenu ? (
            <CgClose className="text-white text-3xl" />
          ) : (
            <CgMenu className="text-white text-3xl" />
          )}
        </div>
        <div className="md:flex md:justify-around md:items-center">
          <Link
            to="/"
            className="text-white text-3xl font-bold p-4 cursor-pointer"
          >
            {"<FranciscoDev/>"}
          </Link>

          <ul
            className={` md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 text-white sm:self-center text-xl  sm:border-none ${
              !openMenu ? "top-10 hidden" : "top-[51px]"
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

    // <div className="shadow-md w-full fixed top-0 left-0 bg-background ">
    //   <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
    //     <div
    //       className="font-bold text-2xl cursor-pointer flex items-center
    //   text-gray-800"
    //     >
    //       <span className="text-3xl text-white mr-1 pt-2">Developer</span>
    //     </div>

    //     <div
    //       onClick={() => setOpenMenu(!openMenu)}
    //       className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
    //     >
    //       {openMenu ? (
    //         <CgClose className="text-white text-3xl" />
    //       ) : (
    //         <CgMenu className="text-white text-3xl" />
    //       )}
    //     </div>

    //     <ul
    //       className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
    //         openMenu ? "top-20 " : "top-[-450px]"
    //       }`}
    //     >
    //       <li className="sm:inline-block ">
    //         <button className=" focus:bg-primary rounded-lg hover:bg-primary p-[5px]">
    //           <Link to="home" className="p-3">
    //             Inicio
    //           </Link>
    //         </button>
    //       </li>
    //       <li className="sm:inline-block">
    //         <button className=" focus:bg-primary rounded-lg hover:bg-primary p-[5px]">
    //           <Link to="about" className="p-3">
    //             Sobre mí
    //           </Link>
    //         </button>
    //       </li>
    //       <li className="sm:inline-block">
    //         <button className=" focus:bg-primary rounded-lg hover:bg-primary p-[5px]">
    //           <Link to="skills" className="p-3">
    //             Habilidades
    //           </Link>
    //         </button>
    //       </li>
    //       <li className="sm:inline-block">
    //         <button className=" focus:bg-primary rounded-lg hover:bg-primary p-[5px]">
    //           <Link to="projects" className="p-3">
    //             Proyectos
    //           </Link>
    //         </button>
    //       </li>

    //       <li className="sm:inline-block">
    //         <button className=" focus:bg-primary rounded-lg hover:bg-primary p-[5px]">
    //           <Link to="testimonials" className="p-3">
    //             Testimonios
    //           </Link>
    //         </button>
    //       </li>
    //       <li className="sm:inline-block">
    //         <button className=" focus:bg-primary rounded-lg hover:bg-primary p-[5px]">
    //           <Link to="contact" className="p-3">
    //             Contacto
    //           </Link>
    //         </button>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}

export default NavBar;

import React from "react";

function NavBar() {
  return (
    <div className=" flex bg-purple-600 w-full fixed">
      <div className="container mx-auto ">
        <div className="sm:flex justify-around">
          <a href="#" className="text-white text-3xl font-bold p-4">
            {"<Francisco Developer/>"}
          </a>
          <ul className="text-gray-900 sm:self-center text-xl border-t sm:border-none">
            <li className="sm:inline-block">
              <a href="#home" className="p-3 hover:text-white">
                Home
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="#about" className="p-3 hover:text-white">
                Sobre mí
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="#skills" className="p-3 hover:text-white">
                Habilidades
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="#projects" className="p-3 hover:text-white">
                Proyectos
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="#education" className="p-3 hover:text-white">
                Formación
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="#contact" className="p-3 hover:text-white">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

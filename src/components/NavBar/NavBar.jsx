import React from "react";
import { Outlet } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">Sobre mí</a>
      <a href="#skills">Habilidades</a>
      <a href="#projects">Proyectos</a>
      <a href="#education">Formación</a>
      <a href="#contact">Contacto</a>
    </nav>
  );
}

export default NavBar;

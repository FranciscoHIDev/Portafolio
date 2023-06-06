import React from "react";
import { AiOutlineLine } from "react-icons/ai";

function About() {
  return (
    <React.Fragment>
      <div className=" flex flex-col bg-[#000c1f]  pt-8 pb-8" id="about">
        <div className="flex flex-col text-white items-center">
          <p className="text-center text-4xl font-bold ">Sobre mí</p>
          <AiOutlineLine className="text-primary text-4xl" />
        </div>
        <div className="flex  items-center">
          <div className=" md:mt-3 my-5 p-4 md:mx-28  mx-8">
            <p className="md:text-2xl text-justify text-colortext">
              Soy Full Stack Developer y Licenciado en Administración de
              Empresas. Poseo habilidades en trabajo en equipo, responsabilidad,
              proactividad y comunicación asertiva. Mi pasión por aprender y
              crecer profesionalmente me ha llevado a sumergirme en el mundo de
              la tecnología, lo cual me motivó a iniciar una nueva etapa en el
              desarrollo web. He cursado un bootcamp en Henry y actualmente
              continúo capacitándome y adquiriendo conocimentos en nuevas
              tecnologías.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;

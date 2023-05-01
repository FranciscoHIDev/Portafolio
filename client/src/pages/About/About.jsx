import React from "react";

function About() {
  return (
    <React.Fragment>
      <div className=" flex flex-col bg-[#000c1f]  pt-8 pb-8" id="about">
        <div className="flex flex-col text-white ">
          <p className="text-center text-4xl font-bold ">Sobre mí</p>
        </div>
        <div className="flex  items-center">
          <div className=" md:mt-3 my-5 p-4 md:mx-28  mx-8">
            <p className="md:text-2xl text-justify text-colortext">
              Soy Licenciado en Administración de Empresas y Full Stack
              Developer, soy una persona con competencias enfocadas al trabajo
              en equipo, responsable, proactivo y con comunicación asertiva, me
              gusta mucho aprender de las experiencias y poder crecer
              profesionalmente, estoy abierto a nuevos retos, me apasiona mucho
              la tecnología es por lo inicie esta nueva etapa en el desarrollo
              web y curse un bootcamp en Henry, actualmente sigo capacitandome y
              aprendiendo nuevas herramientas.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;

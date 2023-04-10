import React from "react";

function About() {
  return (
    <React.Fragment>
      <div className=" flex flex-col bg-background py-20" id="about">
        <div className="flex flex-col text-white pb-5">
          <p className="text-center text-4xl font-bold ">Sobre mí</p>
        </div>
        <div className="flex flex-row">
          <div className="bg-cards rounded-xl  my-4 p-4 mx-20 w-[60%]">
            <p className="text-2xl text-justify px-10 text-[#EEEEEE]">
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
          <div className="mt-5">
            <img
              className="rounded-full w-[250px] border-solid border-2 border-primary"
              src="https://res.cloudinary.com/duaysiozi/image/upload/v1681013244/105096858_b4josv.png"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;

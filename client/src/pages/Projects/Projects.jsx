import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import data from "./data.json";
import ProjectCard from "./ProjectCard";

function Projects() {
  const project = data;
  return (
    <React.Fragment>
      <div className="flex flex-col bg-background pt-28" id="projects">
        <p className="text-center text-4xl font-bold">Proyectos</p>

        <div className="flex mb-[10px] mt-5 flex-col justify-center px-20">
          {project?.map((t) => {
            return (
              <ProjectCard
                key={crypto.randomUUID()}
                title={t.title}
                item={t.item}
                image={t.image}
                tech={t.tech}
                demo={t.demo}
                repo={t.repo}
              />
            );
          })}
        </div>
        {/* <div className="flex flex-col text-white items-center md:px-28 px-48 ">
          <div className="mb-10">
            <p className="text-center text-4xl font-bold">Proyectos</p>
          </div>
          <div className="flex flex-col  items-center">
            <div className="flex flex-col-reverse md:flex-row  bg-cards  py-14 rounded-2xl  md:mb-20 mb-10">
              <div className="flex flex-col md:w-[50%] md:mx-10  rounded-xl  justify-center">
                <p className="text-2xl mb-4 mt-2 text-center">CarMania App</p>
                <p className=" md:text-[19px] text-justify md:px-0 px-2">
                  Carmania es una aplicacion e-commerce sobre venta de autos
                  nuevos y usados, donde el usuario puede navegar de manera
                  amigable utilizar nuestro formulario de contacto, pude agregar
                  a favoritos, utilizar filtros de precios, categorias, modelos
                  o buscar autos por marcas, cuenta con un perfil de usuario, un
                  dashboard para el administrador y pasarela de MercadoPago.
                </p>
                <div className="flex flex-row text-secondary text-[14px] md:text-[18px] font-bold justify-between mb-4 mt-4 md:px-0 px-2">
                  <p>JavaScript</p>
                  <p>React</p>
                  <p>Redux</p>
                  <p>NodeJs</p>
                  <p>Express</p>
                  <p>MongoDB</p>
                  <p>Tailwind</p>
                </div>
                <div className="flex flex-row justify-center">
                  <div className="mr-2">
                    <button className="flex rounded-lg bg-primary p-2 hover:bg-secondary items-center">
                      <TbWorldWww className="text-white md:text-[20px] mr-[5px]" />
                      <a
                        href="https://carmania-henry.netlify.app/"
                        target="_blank"
                        className="md:text-[20px]"
                      >
                        DEMO
                      </a>
                    </button>
                  </div>
                  <div>
                    <button className="flex rounded-lg bg-primary p-2 hover:bg-secondary items-center">
                      <FaGithub className="text-white md:text-[20px] mr-[5px]" />
                      <a
                        href="https://github.com/FranciscoHIDev/PF-HENRY/tree/main"
                        target="_blank"
                        className="md:text-[20px]"
                      >
                        REPO
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-xl  md:mr-10  md:w-[50%] md:mx-0 mx-10 ">
                <img
                  className="rounded-xl "
                  src="https://res.cloudinary.com/duaysiozi/image/upload/v1680930807/carmaniajpg_gm1prf.jpg"
                  alt="image"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row  bg-cards  py-14 rounded-2xl">
              <div className="rounded-xl md:w-[50%] mx-10">
                <img
                  className="rounded-xl"
                  src="https://res.cloudinary.com/duaysiozi/image/upload/v1680930054/PI-henry2_uewhn0.png"
                  alt="pi-henry"
                />
              </div>
              <div className="flex flex-col md:w-[50%] md:mx-10 rounded-xl  justify-center">
                <p className="text-2xl mb-4 mt-2 text-center">Dog App</p>
                <p className="m-4 md:text-[19px] text-justify md:px-0 px-2">
                  Crear un SPA sobre recetas de comidas utilizado una API
                  externa, para el Front utilice ReactJs, Redux y Styled
                  Components. Para BackEnd use NodeJS, Express, PostgreSQL.
                </p>
                <div className="flex flex-row text-secondary md:text-[19px] text-[14px] font-bold justify-between mb-4 mt-4 md:px-0 px-2">
                  <p>JavaScript</p>
                  <p>React</p>
                  <p>Redux</p>
                  <p>NodeJs</p>
                  <p>Express</p>
                  <p>PostgreSQL</p>
                </div>
                <div className="flex flex-row justify-center">
                  <div className="mr-2">
                    <button className="flex rounded-lg bg-primary p-2 hover:bg-secondary items-center">
                      <TbWorldWww className="text-white md:text-2xl mr-[5px]" />
                      <a
                        href="https://henry-pi-food.netlify.app/"
                        target="_blank"
                        className="md:text-[20px]"
                      >
                        DEMO
                      </a>
                    </button>
                  </div>
                  <div>
                    <button className="flex rounded-lg bg-primary p-2 hover:bg-secondary items-center">
                      <FaGithub className="text-white md:text-2xl mr-[5px]" />
                      <a
                        href="https://github.com/FranciscoHIDev/PI-Food"
                        target="_blank"
                        className="md:text-[20px]"
                      >
                        REPO
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
}

export default Projects;

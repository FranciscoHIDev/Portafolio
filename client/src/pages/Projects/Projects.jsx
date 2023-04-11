import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";

function Projects() {
  return (
    <React.Fragment>
      <div className="flex flex-col bg-background pt-28" id="projects">
        <div className="flex flex-col text-white items-center">
          <div className="mb-10">
            <p className="text-center text-4xl font-bold">Proyectos</p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row  bg-background mx-10 py-14 rounded-2xl shadow-2xl mb-20 ">
              <div className="flex flex-col w-[50%] mx-10  rounded-xl  justify-center">
                <p className="text-2xl mb-4 mt-2 text-center">CarMania App</p>
                <p className="m-4 text-[19px]">
                  Carmania es una aplicacion e-commerce sobre venta de autos
                  nuevos y usados, donde el usuario puede navegar de manera
                  amigable utilizar nuestro formulario de contacto, pude agregar
                  a favoritos, utilizar filtros de precios, categorias, modelos
                  o buscar autos por marcas, cuenta con un perfil de usuario, un
                  dashboard para el administrador y pasarela de MercadoPago.
                </p>
                <div className="flex flex-row text-secondary text-[18px] font-bold justify-between mb-4">
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
                      <TbWorldWww className="text-white text-[20px] mr-[5px]" />
                      <a
                        href="https://carmania-henry.netlify.app/"
                        target="_blank"
                        className="text-[20px]"
                      >
                        DEMO
                      </a>
                    </button>
                  </div>
                  <div>
                    <button className="flex rounded-lg bg-primary p-2 hover:bg-secondary items-center">
                      <FaGithub className="text-white text-[20px] mr-[5px]" />
                      <a
                        href="https://github.com/FranciscoHIDev/PF-HENRY/tree/main"
                        target="_blank"
                        className="text-[20px]"
                      >
                        REPO
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-xl  mr-10  items-center text-center w-[50%]">
                <img
                  className="rounded-xl "
                  src="https://res.cloudinary.com/duaysiozi/image/upload/v1680930807/carmaniajpg_gm1prf.jpg"
                  alt="image"
                />
              </div>
            </div>
            <div className="flex flex-row  bg-background mx-10 py-14 rounded-2xl shadow-2xl">
              <div className="rounded-xl  ml-10  items-center text-center w-[50%]">
                <img
                  className="rounded-xl"
                  src="https://res.cloudinary.com/duaysiozi/image/upload/v1680930054/PI-henry2_uewhn0.png"
                  alt="pi-henry"
                />
              </div>
              <div className="flex flex-col w-[50%] mx-10 rounded-xl  justify-center">
                <p className="text-2xl mb-4 mt-2 text-center">Dog App</p>
                <p className="m-4 text-[19px]">
                  Crear un SPA sobre recetas de comidas utilizado una API
                  externa, para el Front utilice ReactJs, Redux y Styled
                  Components. Para BackEnd use NodeJS, Express, PostgreSQL.
                </p>
                <div className="flex flex-row text-secondary text-[19px] font-bold justify-between mb-4">
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
                      <TbWorldWww className="text-white text-2xl mr-[5px]" />
                      <a
                        href="https://henry-pi-food.netlify.app/"
                        target="_blank"
                        className="text-[20px]"
                      >
                        DEMO
                      </a>
                    </button>
                  </div>
                  <div>
                    <button className="flex rounded-lg bg-primary p-2 hover:bg-secondary items-center">
                      <FaGithub className="text-white text-2xl mr-[5px]" />
                      <a
                        href="https://github.com/FranciscoHIDev/PI-Food"
                        target="_blank"
                        className="text-[20px]"
                      >
                        REPO
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projects;

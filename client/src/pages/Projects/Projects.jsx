import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <React.Fragment>
      <div className="flex flex-col bg-background py-20" id="projects">
        <div className="flex flex-col text-white items-center">
          <div className="mb-10">
            <p className="text-center text-4xl font-bold">Proyectos</p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row mb-20  bg-background mx-10 py-14 rounded-2xl shadow-2xl">
              <div className="rounded-xl  ml-10  items-center text-center w-[50%]">
                <img
                  className="rounded-xl"
                  src="https://res.cloudinary.com/duaysiozi/image/upload/v1680930054/PI-henry2_uewhn0.png"
                  alt="pi-henry"
                />
              </div>
              <div className="flex flex-col w-[50%] mx-10 rounded-xl  justify-center">
                <p className="text-2xl mb-4 mt-2 text-center">Dog App</p>
                <p className="m-4">
                  Crear un SPA sobre recetas de comidas utilizado una API
                  externa, para el Front utilice ReactJs, Redux y Styled
                  Components. Para BackEnd use NodeJS, Express, Sequelize.
                </p>
                <div className="flex  flex-row justify-center">
                  <div>
                    <BsEyeFill className="text-primary hover:text-secondary" />
                    <a
                      href="https://henry-pi-food.netlify.app/"
                      target="_blank"
                      className="m-3 p-2 text-lg rounded-xl bg-primary hover:bg-secondary  cursor-pointer"
                    >
                      DEMO
                    </a>
                  </div>
                  <div>
                    <FaGithub className="text-primary hover:text-secondary" />
                    <a
                      href="https://henry-pi-food.netlify.app/"
                      target="_blank"
                      className="m-3 p-2 text-lg rounded-xl bg-primary hover:bg-secondary  cursor-pointer"
                    >
                      REPO
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row  bg-background mx-10 py-14 rounded-2xl shadow-2xl">
              <div className="rounded-xl  ml-10  items-center text-center w-[50%]">
                <img
                  className="rounded-xl "
                  src="https://res.cloudinary.com/duaysiozi/image/upload/v1680930807/carmaniajpg_gm1prf.jpg"
                  alt="image"
                />
              </div>
              <div className="flex flex-col w-[50%] mx-10  rounded-xl  justify-center">
                <p className="text-2xl mb-4 mt-2 text-center">CarMania App</p>
                <p className="m-4">
                  Carmania es una aplicacion e-commerce sobre venta de autos
                  nuevos y usados, donde el usuario puede navegar de manera
                  amigable utilizar nuestro formulario de contacto, pude agregar
                  a favoritos, utilizar filtros de precios, categorias, modelos
                  o buscar autos por marcas, cuenta con un perfil de usuario, un
                  dashboard para el administrador y pasarela de pagos.
                </p>
                <div className="flex flex-row justify-center">
                  <div>
                    <BsEyeFill className="text-primary hover:text-secondary" />
                    <a
                      href="https://henry-pi-food.netlify.app/"
                      target="_blank"
                      className="m-3 p-2 text-lg rounded-xl bg-primary hover:bg-secondary  cursor-pointer"
                    >
                      DEMO
                    </a>
                  </div>
                  <div>
                    <FaGithub className="text-primary hover:text-secondary" />
                    <a
                      href="https://carmania-henry.netlify.app/"
                      target="_blank"
                      className="m-3 p-2 text-lg rounded-xl bg-primary hover:bg-secondary  cursor-pointer"
                    >
                      REPO
                    </a>
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

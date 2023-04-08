import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";

function Projects() {
  return (
    <React.Fragment>
      <div className="flex flex-col bg-[#1d1d25] py-20" id="projects">
        <div className="flex flex-col text-white items-center">
          <div className="mb-10">
            <p className="text-center text-4xl font-bold">Proyectos</p>
          </div>
          <div className="flex flex-row">
            <div className="bg-gray-500   rounded-xl  mr-10 w-[600px] items-center text-center">
              <img
                className="rounded-t-xl"
                src="https://res.cloudinary.com/duaysiozi/image/upload/v1680930054/PI-henry2_uewhn0.png"
                alt="pi-henry"
              />
              <p className="text-2xl mb-4 mt-2">Dog App</p>
              <p className="m-4">
                Crear un SPA sobre recetas de comidas utilizado una API externa,
                para el Front utilice ReactJs, Redux y Styled Components. Para
                BackEnd use NodeJS, Express, Sequelize.
              </p>
              <div className="flex  flex-row justify-center">
                <div>
                  <BsEyeFill />
                  <p>DEMO</p>
                </div>
                <div>
                  <FaGithub />
                  <p>REPO</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-500   rounded-xl  w-[600px] items-center text-center">
              <img
                className="rounded-t-xl"
                src="https://res.cloudinary.com/duaysiozi/image/upload/v1680930807/carmaniajpg_gm1prf.jpg"
                alt="image"
              />
              <p className="text-2xl mb-4 mt-2">CarMania App</p>
              <p className="m-4">
                Carmania es una aplicacion e-commerce sobre venta de autos
                nuevos y usados, donde el usuario puede navegar de manera
                amigable utilizar nuestro formulario de contacto, pude agregar a
                favoritos, utilizar filtros de precios, categorias, modelos o
                buscar autos por marcas, cuenta con un perfil de usuario, un
                dashboard para el administrador y pasarela de pagos.
              </p>
              <div className="flex flex-row justify-center">
                <div>
                  <BsEyeFill />
                  <p>DEMO</p>
                </div>
                <div>
                  <FaGithub />
                  <p>REPO</p>
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

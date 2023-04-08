import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";

import pi from "../../assets/images/PI-henry2.png";

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
              <img className="rounded-t-xl" src={pi} alt="pi-henry" />
              <p>Dog App</p>
              <p>Es una aplicacion de perros</p>
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
              <img className="rounded-t-xl" src={pi} alt="image" />
              <p>E-COMERCE APP</p>
              <p>Es una aplicacion de una e-comerce</p>
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projects;

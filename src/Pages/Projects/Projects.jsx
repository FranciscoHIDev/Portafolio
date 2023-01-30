import React from "react";
import demo from "../../assets/images/demo-icon.png";
import repo from "../../assets/images/icon-github2.png";
import pi from "../../assets/images/PI-henry2.png";

function Projects() {
  return (
    <div className="flex flex-col bg-green-800 py-20" id="projects">
      <div className="flex flex-col text-white items-center">
        <div className="mb-10">
          <h2 className="text-center text-4xl font-bold">Proyectos</h2>
        </div>
        <div className="flex flex-row">
          <div className="bg-purple-400  rounded-xl  mr-10 w-96 items-center text-center">
            <img className="rounded-t-xl" src={pi} alt="pi-henry" />
            <p>Dog App</p>
            <p>Es una aplicacion de perros</p>
            <div className="flex  flex-col items-center content-center">
              <button className="bg-yellow-300 m-3  ">
                <img src={demo} alt="demo" /> DEMO
              </button>

              <button className="bg-yellow-300 ">
                <img src={repo} alt="repo" /> REPO
              </button>
            </div>
          </div>

          <div className="bg-purple-400  rounded-xl  w-96 items-center text-center">
            <img className="rounded-t-xl" src={pi} alt="image" />
            <p>E-COMERCE APP</p>
            <p>Es una aplicacion de una e-comerce</p>
            <button>
              <img src={demo} alt="demo" /> DEMO
            </button>

            <button>
              <img src={repo} alt="repo" /> REPO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

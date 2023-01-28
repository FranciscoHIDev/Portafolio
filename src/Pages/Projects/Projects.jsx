import React from "react";
import demo from "../../assets/images/demo-icon.png";
import repo from "../../assets/images/icon-github2.png";

function Projects() {
  return (
    <div className="flex flex-col bg-green-800 py-20" id="projects">
      <div className="flex flex-col text-white items-center">
        <div className="mb-10">
          <h2 className="text-center text-4xl font-bold">Proyectos</h2>
        </div>
        <div className="flex flex-row">
          <div className="bg-purple-400 p-3 rounded-xl m-3 w-44 items-center text-center">
            <img src={"demo"} alt="image" />
            <p>Dog App</p>
            <p>Es una aplicacion de perros</p>
            <button>
              <img src={demo} alt="demo" /> DEMO
            </button>

            <button>
              <img src={repo} alt="repo" /> REPO
            </button>
          </div>

          <div className="bg-purple-400 p-3 rounded-xl m-3 w-44 items-center text-center">
            <img src="imagen" alt="image" />
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

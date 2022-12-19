import React from "react";
import demo from "../../assets/images/demo-icon.png";
import repo from "../../assets/images/icon-github2.png";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>Proyectos</h2>

      <div>
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

      <div>
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
  );
}

export default Projects;

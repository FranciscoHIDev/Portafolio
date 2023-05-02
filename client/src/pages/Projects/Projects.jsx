import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import data from "./data.json";
import ProjectCard from "./ProjectCard";
import { AiOutlineLine } from "react-icons/ai";

function Projects() {
  const project = data;
  return (
    <React.Fragment>
      <div className="flex flex-col bg-background lg:pt-28 pt-20" id="projects">
        <div className="flex flex-col text-white items-center">
          <p className="text-center text-4xl font-bold text-white">Proyectos</p>
          <AiOutlineLine className="text-primary text-4xl" />

          <div className="flex mt-5 flex-col justify-center md:px-20 px-5">
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
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projects;

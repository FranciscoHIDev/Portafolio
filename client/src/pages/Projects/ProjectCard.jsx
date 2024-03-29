import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";

function ProjectCard({ title, item, image, tech, demo, repo }) {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row  bg-cards  py-14 rounded-2xl  md:mb-20 mb-10">
        <div className="flex flex-col lg:w-[50%] lg:mx-10  rounded-xl  justify-center">
          <p className="text-2xl mb-4 mt-2 text-center text-white">{title}</p>
          <p className=" md:text-[19px] text-justify px-4 text-colortext">
            {item}
          </p>
          <div className="flex flex-row text-primary text-[14px] md:text-[18px] font-bold justify-center mb-4 mt-4 md:px-0 px-2">
            <button>{tech.map((e) => e).join(", ")}</button>
          </div>
          <div className="flex flex-row justify-center">
            <div className="mr-2">
              <button className="flex rounded-lg bg-primary p-2 hover:bg-secondary items-center hover:text-black text-white">
                <TbWorldWww className=" md:text-[20px] mr-[5px]" />
                <a href={demo} target="_blank" className="md:text-[20px]">
                  DEMO
                </a>
              </button>
            </div>
            <div>
              <button className="flex rounded-lg bg-primary p-2 hover:bg-secondary items-center hover:text-black text-white">
                <FaGithub className="md:text-[20px] mr-[5px]" />
                <a href={repo} target="_blank" className="md:text-[20px]">
                  REPO
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-xl  lg:mr-10  lg:w-[50%] lg:mx-0 mx-10 ">
          <img className="rounded-xl " src={image} alt="image" />
        </div>
      </div>
    </>
  );
}

export default ProjectCard;

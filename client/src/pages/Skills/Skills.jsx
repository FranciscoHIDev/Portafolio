import React from "react";
import css from "../../assets/images/css.png";
import html from "../../assets/images/html.png";
import react from "../../assets/images/react.png";
import redux from "../../assets/images/redux.png";
import postgre from "../../assets/images/postgre.png";
import git from "../../assets/images/git.png";
import github from "../../assets/images/github.png";
import js from "../../assets/images/js.png";
import tailwind from "../../assets/images/icon-tailwind.png";
import node from "../../assets/images/node.png";

function Skills() {
  return (
    <React.Fragment>
      <div className="flex flex-col bg-background pt-28" id="skills">
        <div className="flex flex-col text-white items-center">
          <p className="pb-4 text-center text-4xl font-bold">Habilidades</p>

          <div className="flex md:flex-row flex-col text-white my-4 p-4 font-bold  animate-pulse">
            <div className=" border-solid border-2 border-primary p-3 rounded-xl m-3 w-44 items-center text-center  ">
              <img src={html} alt="logo" />
              <p>HTML</p>
            </div>

            <div className=" border-solid border-2 border-primary p-3 rounded-xl m-3 w-44   items-center text-center">
              <img src={css} alt="logo" />
              <p>CSS</p>
            </div>
            <div className=" border-solid border-2 border-primary p-3 rounded-xl m-3 w-44 items-center text-center">
              <img src={js} alt="logo" />
              <p>JavaScript</p>
            </div>
            <div className=" border-solid border-2 border-primary p-3 rounded-xl m-3 w-44 items-center text-center">
              <img src={tailwind} alt="logo" />
              <p>Tailwind CSS</p>
            </div>
            <div className=" border-solid border-2 border-primary p-3 rounded-xl m-3 w-44 items-center text-center">
              <img src={node} alt="logo" />
              <p>NodeJs</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col text-white font-bold animate-pulse">
            <div className=" border-solid border-2 border-primary p-3 rounded-xl m-3 w-44 items-center text-center">
              <img src={react} alt="logo" />
              <p>React</p>
            </div>
            <div className=" border-solid border-2 border-primary p-3 rounded-xl m-3 w-44 items-center text-center">
              <img src={redux} alt="logo" />
              <p>Redux</p>
            </div>

            <div className=" border-solid border-2 border-primary p-3 rounded-xl m-3 w-44 items-center text-center">
              <img src={postgre} alt="logo" />
              <p>PostgreSQL</p>
            </div>
            <div className=" border-solid border-2 border-primary p-3 rounded-xl m-3 w-44 items-center text-center">
              <img src={git} alt="logo" />
              <p>Git</p>
            </div>
            <div className=" border-solid border-2 border-primary  p-3 rounded-xl m-3 w-44 items-center text-center">
              <img src={github} alt="logo" />
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skills;

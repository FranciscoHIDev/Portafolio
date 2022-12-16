import React from "react";
import css from "../../assets/images/css.png";
import html from "../../assets/images/html.png";
import react from "../../assets/images/react.png";
import redux from "../../assets/images/redux.png";
import postgre from "../../assets/images/postgre.png";
import git from "../../assets/images/git.png";
import github from "../../assets/images/github.png";
import js from "../../assets/images/js.png";
import node from "../../assets/images/node.png";

function Skills() {
  return (
    <div className="skills" id="skills">
      <h2>Habilidades</h2>
      <div className="card">
        <img src={html} alt="logo" />
        <p>HTML5</p>
      </div>

      <div className="card">
        <img src={css} alt="logo" />
        <p>CSS3</p>
      </div>
      <div className="card">
        <img src={js} alt="logo" />
        <p>JavaScript</p>
      </div>

      <div className="card">
        <img src={node} alt="logo" />
        <p>NodeJs</p>
      </div>

      <div className="card">
        <img src={react} alt="logo" />
        <p>React</p>
      </div>
      <div className="card">
        <img src={redux} alt="logo" />
        <p>Redux</p>
      </div>

      <div className="card">
        <img src={postgre} alt="logo" />
        <p>PostgreSQL</p>
      </div>
      <div className="card">
        <img src={git} alt="logo" />
        <p>Git</p>
      </div>
      <div className="card">
        <img src={github} alt="logo" />
        <p>GitHub</p>
      </div>
    </div>
  );
}

export default Skills;

import React from "react";
import uia from "../../assets/images/logouia.png";
import henry from "../../assets/images/henrylogo.png";

function Education() {
  return (
    <div className="education" id="education">
      <h2>Formación</h2>
      <div>
        <img src={uia} alt="logo" />
        <h3>Universidad Istmo Americana</h3>
        <p>Licenciatura en Administración de Empresas</p>
        <p>2010-2014</p>
      </div>
      <div>
        <img src={henry} alt="logo" />
        <h3>HENRY</h3>
        <p>Full Stack Developer</p>
        <p>2022</p>
      </div>
    </div>
  );
}

export default Education;

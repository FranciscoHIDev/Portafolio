import React from "react";
import uia from "../../assets/images/logouia.png";
import henry from "../../assets/images/henrylogo.png";

function Education() {
  return (
    <React.Fragment>
      <div className="flex flex-col bg-background py-20" id="education">
        <div className="flex flex-col text-white  items-center">
          <div className="mb-10">
            <p className="text-center text-4xl font-bold">Formación</p>
          </div>
          <div className="flex flex-row">
            <div className="bg-cards  p-3 rounded-xl m-3 w-80 items-center text-center">
              <img src={uia} alt="logo" />
              <h3>Universidad Istmo Americana</h3>
              <p>Licenciatura en Administración de Empresas</p>
              <p>2010-2014</p>
            </div>
            <div className="bg-cards  p-3 rounded-xl m-3 w-44 items-center text-center">
              <img src={henry} alt="logo" />
              <h3>HENRY</h3>
              <p>Full Stack Developer</p>
              <p>2022</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Education;

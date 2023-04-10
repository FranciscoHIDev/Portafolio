import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Testimonials() {
  return (
    <React.Fragment>
      <div className="flex flex-col bg-background" id="testimonials">
        <div className="flex flex-col text-white items-center">
          <div className="mb-10">
            <p className="text-center text-4xl font-bold">Testimonios</p>
          </div>
          <div className="flex flex-row mx-10">
            <div className="flex flex-col bg-cards   rounded-xl w-[450px] p-6 items-center mr-8">
              <img
                className="w-20 h-20 rounded-full items-center"
                src="https://media.licdn.com/dms/image/D4E35AQGXBtCBhpNixw/profile-framedphoto-shrink_200_200/0/1680011008516?e=1681351200&v=beta&t=f9KO7uJFSKeH0_xFONmyt5d1vYIEAhX75Y2fe1QpY6c"
                alt="image"
              />
              <p className="mb-6">
                Tuve la oportunidad de trabajar juntos y me gustaria destacar
                sus habilidades de trabajo en equipo, excelente comunicacion y
                siempre dispuesto a colaborar con los demas compañeros en la
                resolucion de problemas.
              </p>
              <p className="text-3xl">Isidoro Francisco</p>
              <div className="flex flex-row justify-center">
                <p className="text-2xl mr-4">Full Stack Developer</p>

                <Link
                  to="/"
                  className="mt-2 mr-2 text-[20px] text-primary hover:text-secondary"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  to="/"
                  className="mt-2 text-[20px] text-primary hover:text-secondary"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
            <div className="flex flex-col bg-cards   rounded-xl w-[450px] p-6 items-center mr-8">
              <img
                className="w-20 h-20 rounded-full items-center"
                src="https://media.licdn.com/dms/image/D4E35AQGXBtCBhpNixw/profile-framedphoto-shrink_200_200/0/1680011008516?e=1681351200&v=beta&t=f9KO7uJFSKeH0_xFONmyt5d1vYIEAhX75Y2fe1QpY6c"
                alt="image"
              />
              <p className="mb-6">
                Tuve la oportunidad de trabajar juntos y me gustaria destacar
                sus habilidades de trabajo en equipo, excelente comunicacion y
                siempre dispuesto a colaborar con los demas compañeros en la
                resolucion de problemas.
              </p>
              <p className="text-3xl">Isidoro Francisco</p>
              <div className="flex flex-row justify-center">
                <p className="text-2xl mr-4">Full Stack Developer</p>

                <Link
                  to="/"
                  className="mt-2 mr-2 text-[20px] text-primary hover:text-secondary"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  to="/"
                  className="mt-2 text-[20px] text-primary hover:text-secondary"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
            {/* <div className="flex flex-col bg-gray-500   rounded-xl w-[450px] p-6 items-center ">
              <img
                className="w-20 h-20 rounded-full items-center"
                src="https://media.licdn.com/dms/image/D4E35AQGXBtCBhpNixw/profile-framedphoto-shrink_200_200/0/1680011008516?e=1681351200&v=beta&t=f9KO7uJFSKeH0_xFONmyt5d1vYIEAhX75Y2fe1QpY6c"
                alt="image"
              />
              <p className="mb-6">
                Tuve la oportunidad de trabajar juntos y me gustaria destacar
                sus habilidades de trabajo en equipo, excelente comunicacion y
                siempre dispuesto a colaborar con los demas compañeros en la
                resolucion de problemas.
              </p>
              <p className="text-3xl">Isidoro Francisco</p>
              <div className="flex flex-row justify-center">
                <p className="text-2xl mr-4">Full Stack Developer</p>

                <Link
                  to="/"
                  className="mt-2 mr-2 text-[20px] text-primary hover:text-secondary"
                >
                  <FaLinkedin />
                </Link>
                <Link to="/" className="mt-2 text-[20px] text-primary hover:text-secondary">
                  <FaGithub />
                </Link>
              </div>
            </div> */}
            {/* <div className="flex flex-col bg-gray-500   rounded-xl w-[450px] p-6 items-center">
              <img
                className="w-20 h-20 rounded-full items-center"
                src="https://media.licdn.com/dms/image/D4E35AQGXBtCBhpNixw/profile-framedphoto-shrink_200_200/0/1680011008516?e=1681351200&v=beta&t=f9KO7uJFSKeH0_xFONmyt5d1vYIEAhX75Y2fe1QpY6c"
                alt="image"
              />
              <p className="mb-6">
                Tuve la oportunidad de trabajar juntos y me gustaria destacar
                sus habilidades de trabajo en equipo, excelente comunicacion y
                siempre dispuesto a colaborar con los demas compañeros en la
                resolucion de problemas.
              </p>
              <p className="text-3xl">Isidoro Francisco</p>
              <div className="flex flex-row justify-center">
                <p className="text-2xl mr-4">Full Stack Developer</p>

                <Link to="/" className="mt-2 mr-2 text-[20px] text-primary hover:text-secondary">
                  <FaLinkedin />
                </Link>
                <Link to="/" className="mt-2 text-[20px] text-primary hover:text-secondary">
                  <FaGithub />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Testimonials;

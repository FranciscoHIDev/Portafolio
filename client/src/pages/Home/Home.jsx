import React from "react";
import { Link } from "react-scroll";
function Home() {
  return (
    <React.Fragment>
      <div className="flex flex-col py-20 bg-[#1d1d25]" id="home">
        <div className="flex flex-col mx-20 text-white mt-20">
          <p className="text-2xl mb-3">¡Hola! Bienvedin@</p>
          <p className="text-3xl mb-3"> Soy Isidoro Francisco Hilario</p>
          <p className="text-5xl font-bold ">FULL STACK DEVELOPER</p>
          <div className="flex py-5 text-white">
            <Link
              to="#cv"
              className="border-solid border-2  border-purple-800 m-3 p-2 text-lg rounded-xl bg-red-600 hover:bg-violet-600 hover:border-violet-600"
            >
              DESCARGAR CV
            </Link>
            <Link
              to="contact"
              className="border-solid border-2  border-purple-800 m-3 p-2 text-lg rounded-xl bg-red-600 hover:bg-violet-600 hover:border-violet-600 cursor-pointer"
            >
              CONTACTO
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;

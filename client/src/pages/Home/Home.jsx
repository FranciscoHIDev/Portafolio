import React from "react";
import { Link } from "react-scroll";
function Home() {
  return (
    <React.Fragment>
      <div className="flex flex-col py-20 bg-[#1d1d25]" id="home">
        <div className="flex flex-col mx-20 text-white mt-20">
          <p className="text-2xl mb-3 text-primary">¡Hola! Bienvedin@</p>
          <p className="text-3xl mb-3"> Soy Isidoro Francisco Hilario</p>
          <p className="text-5xl font-bold ">FULL STACK DEVELOPER</p>
          <div className="flex py-5 text-white">
            <Link
              to="#cv"
              className="   m-3 p-2 text-lg rounded-xl bg-primary hover:bg-secondary cursor-pointer"
            >
              DESCARGAR CV
            </Link>
            <Link
              to="contact"
              className="m-3 p-2 text-lg rounded-xl bg-primary hover:bg-secondary  cursor-pointer"
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

import React from "react";
import { Link } from "react-scroll";
function Home() {
  return (
    <React.Fragment>
      <div className="flex flex-row py-20 bg-background" id="home">
        <div className="flex flex-col ml-20 text-white mt-40 mr-40 w-[40%]">
          <p className="text-2xl mb-3 text-primary">¡Hola! Bienvedin@</p>
          <p className="text-3xl mb-3"> Soy Isidoro Francisco Hilario</p>
          <h1 className="text-5xl font-bold block animate-typing overflow-hidden whitespace-nowrap">
            FULL STACK DEVELOPER
          </h1>

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
        <div>
          <img
            src="https://res.cloudinary.com/duaysiozi/image/upload/v1681150534/pick-Linux-removebg-preview_1_dlayfx.png"
            alt="image"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;

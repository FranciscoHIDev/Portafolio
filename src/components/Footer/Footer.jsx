import React from "react";
import image from "../../assets/images/icon-corazon.png";

function Footer() {
  return (
    <div className="flex flex-col py-11 ">
      <div className="flex ml-10 text-white font-bold text-xl">
        Copyright © 2023 Coded with{" "}
        <img className="mx-1" src={image} alt="corazón" />
        by FranciscoHIDev
      </div>
    </div>
  );
}

export default Footer;

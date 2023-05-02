import React, { useState, useEffect } from "react";
import { BiChevronUp } from "react-icons/bi";
import "./ButtonScroll.css";

function ButtonScroll() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <React.Fragment>
      <div className=" flex relative">
        {showButton && (
          <button
            onClick={handleClick}
            className="  icon-position  bg-primary rounded-full w-12 h-12  animate-bounce hover:bg-white"
          >
            <BiChevronUp className="text-white text-3xl text-center hover:text-black" />
          </button>
        )}
      </div>
    </React.Fragment>
  );
}

export default ButtonScroll;

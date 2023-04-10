import React from "react";
import { BiChevronUp } from "react-icons/bi";

function ButtonScroll() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <React.Fragment>
      <div className="bg-background justify-end flex pr-6 ">
        <button
          onClick={handleClick}
          className="  bg-primary w-10 h-10 flex justify-center items-center rounded-full "
        >
          <BiChevronUp className="text-[#EEEEEE] text-4xl" />
        </button>
      </div>
    </React.Fragment>
  );
}

export default ButtonScroll;

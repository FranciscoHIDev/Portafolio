import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
function TestimonialsCard({
  name,
  position,
  image,
  comment,
  github,
  linkedin,
}) {
  return (
    <>
      <div className="flex flex-col bg-cards   rounded-xl lg:w-[450px] w-[350px] p-6 items-center m-3 ">
        <img
          className="w-20 h-20 rounded-full items-center"
          src={image}
          alt="image"
        />
        <p className="mb-6 mt-5 text-justify px-2 text-colortext">{comment}</p>
        <p className="lg:text-3xl text-[20px]">{name}</p>
        <div className="flex flex-row justify-center">
          <p className="lg:text-2xl mr-4 text-colortext text-[15px]">
            {position}
          </p>

          <a
            href={linkedin}
            className="lg:mt-2 mr-2 lg:text-[20px] text-primary hover:text-secondary mt-1"
          >
            <FaLinkedin />
          </a>
          <a
            href={github}
            className="lg:mt-2 lg:text-[20px] text-primary hover:text-secondary mt-1"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
}
export default TestimonialsCard;

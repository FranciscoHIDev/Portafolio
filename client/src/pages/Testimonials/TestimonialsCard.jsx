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
        <p className="mb-6 mt-5 text-justify px-20">{comment}</p>
        <p className="text-3xl">{name}</p>
        <div className="flex flex-row justify-center">
          <p className="text-2xl mr-4">{position}</p>

          <a
            href={linkedin}
            className="mt-2 mr-2 text-[20px] text-primary hover:text-secondary"
          >
            <FaLinkedin />
          </a>
          <a
            href={github}
            className="mt-2 text-[20px] text-primary hover:text-secondary"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
}
export default TestimonialsCard;

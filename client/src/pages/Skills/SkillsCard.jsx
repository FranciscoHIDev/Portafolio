import React from "react";

function SkillsCard({ name, image }) {
  return (
    <>
      <div className=" border-solid border-2 border-primary p-3 rounded-xl m-3 md:w-44 w-28 items-center text-center animate-pulse  ">
        <img src={image} alt={name} />
        <p>{name}</p>
      </div>
    </>
  );
}

export default SkillsCard;

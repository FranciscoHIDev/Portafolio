import React from "react";

function SkillsCard({ name, image }) {
  return (
    <>
      <div className="flex flex-col border-solid border-2 border-primary md:p-3 p-4 rounded-xl m-3 md:w-44 w-28  items-center text-center animate-pulse  ">
        <img className="" src={image} alt={name} />
        <p className="md:text-[18px] text-[13px] mt-2"> {name}</p>
      </div>
    </>
  );
}

export default SkillsCard;

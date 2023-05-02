import React from "react";
import data from "./data.json";
import SkillsCard from "./SkillsCard";
import { AiOutlineLine } from "react-icons/ai";

function Skills() {
  const tech = data;
  return (
    <React.Fragment>
      <div className="flex flex-col bg-background lg:pt-28 pt-20" id="skills">
        <div className="flex flex-col text-white items-center">
          <p className="text-center text-4xl font-bold">Habilidades</p>
          <AiOutlineLine className="text-primary text-4xl" />
          <div className="flex mb-[10px] mt-5 flex-wrap md:mx-28 mx-0 justify-center ">
            {tech?.map((t) => {
              return (
                <SkillsCard
                  key={crypto.randomUUID()}
                  name={t.name}
                  image={t.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skills;

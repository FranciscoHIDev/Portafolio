import React from "react";
import data from "./data.json";
import SkillsCard from "./SkillsCard";

function Skills() {
  const tech = data;
  return (
    <React.Fragment>
      <div className="flex flex-col bg-background lg:pt-28 pt-20" id="skills">
        <div className="flex flex-col text-white items-center">
          <p className="pb-4 text-center text-4xl font-bold">Habilidades</p>
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

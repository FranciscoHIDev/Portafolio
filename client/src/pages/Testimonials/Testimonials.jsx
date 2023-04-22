import React from "react";
import data from "./data.json";
import TestimonialsCard from "./TestimonialsCard";

function Testimonials() {
  const testimonial = data;
  return (
    <React.Fragment>
      <div className="flex flex-col bg-background pt-28" id="testimonials">
        <div className="flex flex-col text-white items-center">
          <p className="pb-4 text-center text-4xl font-bold">Testimonios</p>

          <div className="flex mb-[10px] mt-5 flex-wrap mx-28 justify-center ">
            {testimonial?.map((t) => {
              return (
                <TestimonialsCard
                  key={crypto.randomUUID()}
                  name={t.name}
                  position={t.position}
                  image={t.image}
                  comment={t.comment}
                  github={t.github}
                  linkedin={t.linkedin}
                />
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Testimonials;

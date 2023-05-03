import React from "react";
import data from "./data.json";
import TestimonialsCard from "./TestimonialsCard";
import { AiOutlineLine } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Testimonials.css";

function Testimonials() {
  const testimonial = data;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <React.Fragment>
      <div
        className="flex flex-col bg-background lg:pt-28 pt-20"
        id="testimonials"
      >
        <div className="flex flex-col text-white items-center ">
          <p className="text-center text-4xl font-bold">Testimonios</p>
          <AiOutlineLine className="text-primary text-4xl" />

          {/* className="flex mb-[10px] mt-5 flex-wrap justify-center " */}

          <div className="carousel-container">
            <Slider {...settings}>
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
            </Slider>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Testimonials;

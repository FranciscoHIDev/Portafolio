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
  const isMobile = window.innerWidth < 768;

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 3000,
  // };
  const mobileSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
  };

  const desktopSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
  };

  const settings = isMobile ? mobileSettings : desktopSettings;

  return (
    <React.Fragment>
      <div
        className="flex flex-col bg-background lg:pt-28 pt-20"
        id="testimonials"
      >
        <div className="flex flex-col text-white items-center">
          <p className="text-center text-4xl font-bold">Testimonios</p>
          <AiOutlineLine className="text-primary text-4xl" />

          <div className="container  mt-8 px-8 md:px-28">
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

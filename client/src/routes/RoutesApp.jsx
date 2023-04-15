import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ButtonScroll from "../components/ButtonScroll/ButtonScroll";
import {
  Home,
  About,
  Skills,
  Projects,
  Contact,
  Testimonials,
} from "../pages/index";

function RoutesApp() {
  return (
    <>
      <NavBar />
      <Home />
      {/* <About />
      <Skills />      
      <Projects />
      <Testimonials />
      <Contact />
      <ButtonScroll />
      <Footer /> */}
    </>
  );
}

export default RoutesApp;

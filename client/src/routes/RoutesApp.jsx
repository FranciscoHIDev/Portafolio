import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ButtonScroll from "../components/ButtonScroll/ButtonScroll";
import {
  Home,
  About,
  Skills,
  Education,
  Projects,
  Contact,
  Testimonials,
} from "../pages/index";

function RoutesApp() {
  const [showButton, setShowButton] = useState(false);
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Testimonials />
      <Contact />
      <ButtonScroll />
      <Footer />
      
    </>
  );
}

export default RoutesApp;

import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import {
  Home,
  About,
  Skills,
  Education,
  Projects,
  Contact,
  NotFound,
  Testimonials,
} from "../pages/index";

function RoutesApp() {
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
      <Footer />
    </>
  );
}

export default RoutesApp;

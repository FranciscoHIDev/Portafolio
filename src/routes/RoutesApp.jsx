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
} from "../Pages/index";

function RoutesApp() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
    // <Routes>
    //   {/* <Route path="/" element={<NavBar />}> */}
    //     <Route path="home" element={<Home />} />
    //     <Route path="about" element={<About />} />
    //     <Route path="skills" element={<Skills />} />
    //     <Route path="education" element={<Education />} />
    //     <Route path="project" element={<Projects />} />
    //     <Route path="contact" element={<Contact />} />
    //     {/* <Route path="/" element={<Footer />} />
    //   </Route> */}

    //   <Route path="*" element={<NotFound />} />
    // </Routes>
  );
}

export default RoutesApp;

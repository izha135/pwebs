import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About  from "../components/About-Me";
import Projects from "../components/Projects";

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      {/* 
      
      <Experience />
      
      <Contact /> */}
    </div>
  );
}

export default Home;

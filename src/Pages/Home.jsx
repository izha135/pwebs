import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About  from "../components/About-Me";

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      {/* 
      
      <Experience />
      <Projects />
      <Contact /> */}
    </div>
  );
}

export default Home;

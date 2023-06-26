import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About-Me";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />

      <Footer />
    </div>
  );
}

export default Home;

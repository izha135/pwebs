import React from "react";
import imgas from "../img/My project.png";
import mylogo from "../img/mylogo.svg";

export default function About() {
  return (
    <section className="container place-content-center grid xl-s:grid-cols-2 md-s:grid-cols-1 mb-4 px-[4rem] py-[4rem]">
      <div className="  ">
        <img
          className=" absolute w-[14rem] ml-[10rem] xl-s:mt-[9rem] md-s:mt-7 md-s:ml-[13rem] "
          src={imgas}
          alt=""
        />
        <span className=" ">
          <img
            className="
       relative w-[20rem] ml-[7rem] xl-s:mt-[8rem] md-s:mt-[1rem] md-s:ml-[10rem] -z-10 animate-spin"
            src={mylogo}
            alt=""
          />
        </span>
      </div>
      <div className="flex-1">
        <h1 className="mt-[5rem] mb-3 text-4xl font-lobster-one text-purple-400 ">
          About me
        </h1>
        <p className="xl-s:text-left md-s:text-center  font-poppins text-xl ">
          My name is Isha Chauhan. I recently graduated with a bachelors degree
          in Computer Science with a Minor in Mathematics from the University of
          New Mexico. I'm passionate about development and learning new things
          as well as stepping out of my comfort zone. My goal is to pursue a
          successful career in the field of Computer Science. I spend my free
          time coding new projects and learning new tech stacks on the way, and
          I also enjoy weightlifting! <br />I currently hold an IT Intern
          position at the State of New Mexico. <br />
          Please do feel free to take a look at my resume if you are a recruiter
          or know of any opportunities I could potentially grab. Look forward to
          hearing from you! :)
        </p>
      </div>
    </section>
  );
}

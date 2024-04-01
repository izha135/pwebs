import React from "react";
import imgas from "../img/My project.png";
import mylogo from "../img/mylogo.svg";

export default function About() {
  return (
    <section className="container " id="about">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 px-5 py-4">
          <div className="  ">
            <h1 className="xl-s:mt-[5rem] mb-3 text-4xl font-lobster-one text-purple-400 xs-s:mt-3">
              About me
            </h1>
            <p className="xl-s:text-left md-s:text-center font-roboto text-xl ">
            As a recent graduate of the University of New Mexico (UNM) with a degree in Computer Science, I am actively seeking entry-level opportunities in software development. My professional background includes roles such as an IT Administrator at the New Mexico Administrative Office of the District Attorneys and a software developer intern at the New Mexico Corrections Department. Additionally, I gained practical experience as a software engineer during my capstone project at UNM.
            


            </p> 
          </div>
        </div>
        <div className="col mx-auto my-auto">
          <img
            className=" absolute xl-s:w-[14rem] xl-s:ml-[13em] xl-s:mt-[9rem] lg-s:ml-[15rem]  lg-s:w-[16rem] md-s:mt-[5rem] md-s:ml-[15rem] sm-s:ml-[12rem] sm-s:mt-[5rem] xs-s:ml-10 xs-s:w-[12rem] xs-s:mt-5"
            src={imgas}
            alt=""
          />
          <span className=" ">
            <img
              className="
       relative float-start float-sm-center  xl-s:w-[20rem] ml-[7rem] xl-s:mt-[8rem] md-s:mt-[1rem] md-s:ml-[10rem] sm-s:ml-[6rem] z-10 animate-spin xs-s:-ml-1  xs-s:w-[26rem]"
              src={mylogo}
              alt=""
            />
          </span>
        </div>
      </div>
    </section>

    
  );
}

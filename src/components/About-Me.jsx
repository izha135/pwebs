import React from "react";
import imgas from "../img/My project.png";
import mylogo from "../img/mylogo.svg";

export default function About() {
  return (
    <section className="container ">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 px-5 py-4">
          <div className="  ">
            <img
              className=" absolute xl-s:w-[14rem] ml-[10rem] xl-s:mt-[9rem] md-s:mt-7 md-s:ml-[13rem] xs-s:ml-1 xs-s:w-[10rem] xs-s:-mt-1"
              src={imgas}
              alt=""
            />
            <span className=" ">
              <img
                className="
       relative float-start float-sm-center  xl-s:w-[20rem] ml-[7rem] xl-s:mt-[8rem] md-s:mt-[1rem] md-s:ml-[10rem] z-10 animate-spin xs-s:-ml-1  xs-s:w-[26rem]"
                src={mylogo}
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </section>

    /* // <section>
    //   className="container-fluid place-content-center grid xl-s:grid-cols-2 md-s:grid-cols-1 mb-4  py-[4rem] "
    //   id="about"
    // >
    //   <div className="  ">
    //     <img
    //       className=" absolute xl-s:w-[14rem] ml-[10rem] xl-s:mt-[9rem] md-s:mt-7 md-s:ml-[13rem] xs-s:ml-1 xs-s:w-[10rem] xs-s:-mt-1"
    //       src={imgas}
    //       alt=""
    //     />
    //     <span className=" ">
    //       <img
    //         className="
    //    relative xl-s:w-[20rem] ml-[7rem] xl-s:mt-[8rem] md-s:mt-[1rem] md-s:ml-[10rem] z-10 animate-spin xs-s:-ml-1  xs-s:w-[26rem]"
    //         src={mylogo}
    //         alt=""
    //       />
    //     </span>
    //   </div>
    //   <div className="flex-1">
    //     <h1 className="xl-s:mt-[5rem] mb-3 text-4xl font-lobster-one text-purple-400 xs-s:mt-3">
    //       About me
    //     </h1>
    //     <p className="xl-s:text-left md-s:text-center  font-poppins text-xl ">
    //       My name is Isha Chauhan. I recently graduated with a bachelors degree
    //       in Computer Science with a Minor in Mathematics from the University of
    //       New Mexico. I'm passionate about development and learning new things
    //       as well as stepping out of my comfort zone. My goal is to pursue a
    //       successful career in the field of Computer Science. I spend my free
    //       time coding new projects and learning new tech stacks on the way, and
    //       I also enjoy weightlifting! <br />I currently hold an IT Intern
    //       position at the State of New Mexico. <br />
    //       Please do feel free to take a look at my resume if you are a recruiter
    //       or know of any opportunities I could potentially grab. Look forward to
    //       hearing from you! :)
    //     </p>
    //   </div>
    // </section>*/
  );
}

import React from "react";
import me2 from "../me2.jpg";
//import me3 from "../IMG_1.jpg";
import css from "../css-3.svg";
import html from "../html.svg";
import javascript from "../javascript.svg";
import tailwind from "../tailwind.svg";
import java from "../java.svg";
import git from "../github.svg";
import linkedin from "../LinkedIN.svg";

export default function Hero() {
  return (
    <section className="xl-s:ml-[6rem] md-s:ml-[2rem] md-s:mr-[2rem] md-s:mt-[3rem] md-s:object-center">
      <div className="container grid xl-s:grid-cols-2 md-s:grid-cols-1 rounded-xl bg-orange-300 shadow-xl shadow-orange-500/40 xl-s:px-[3rem]  flex-col-reverse lg-s:flex-row items-center xl-s:mr-[12rem]  gap-12 mt:5 lg-s:mt-10 sm-s:mt-10 lg-s:ml-16 ">
        
        <div className="flex flex-col w-full gap-0 leading-3 items-center lg:items-start">
          <h1 className="text-purple-500 inline-block font-lobster-one xl-s:ml-[1.8rem] md-s:ml-[6rem] drop-shadow-xl mt-0 mr-auto px-12 sm-s:mt-10 sm-s:ml-16 xl-s:text-6xl sm-s:text-5xl   mb-0">
            Hi, nice to meet you 👋
          </h1>
          <br />
          <h3 className="text-gray-700 inline-block xl-s:ml-[5rem] lg:text-3xl font-poppins ml-16 lg:text-left  sm:text-2xl sm:ml-12 mb-6">
            I'm Isha Chauhan, a passionate developer based in Albuqerque,
            New Mexico 📍
          </h3>
          <div className="align-center xl-s:ml-[5rem]">
            <button className="mr-7">
              <a href="https://github.com/izha135" target="_blank">
                <img className="w-12 h-auto" src={git} alt="git icon" />
              </a>
            </button>

            <button className="">
              <a
                href="https://www.linkedin.com/in/isha-chauhan-26a717155/"
                target="_blank"
                className=""
              >
                <img
                  className="w-12 h-auto"
                  src={linkedin}
                  alt="linkedin icon"
                />
              </a>
            </button>
          </div>
        </div>

        <div className=" flex-wrap xl-s:mt-[5rem]  xl-s:w-[28rem] md-s:ml-[15rem]  md-s:mr-[13rem] sm-s:w-4/12 sm-s:ml-[9rem] px-4 sm-s:mb-0 md:mb-0 lg-mb-0 ">
          <img
            className=" mx-auto h-[26rem] rounded-full scale-1.7 shadow  md-s:-ml-[4rem] max-w-lg"
            src={me2}
            alt="me"
          />
        </div>

        <div className="inline-block md-s:ml-[3rem] px-1 xl-s:ml-[4rem] w-full gap-0 xl-s:-mt-[3rem] sm-s:mt-[1rem] mb-10">
        <ul className="flex align-center md-s:w-[38rem] px-30 gap-10 ">
          <li>
            <h1 className="font-poppins  md-s:text-3xl sm-s:text-2xl xl-s:text-2xl">Tech Stack |</h1>
            <hr class="w-40  md:mb-10 " />

          </li>
          <li>
            <img
              className="w-14 ring-0 rounded shadow-lg h-auto"
              src={html}
              alt=""
            />
          </li>
          <li>
            <img
              className="w-14 ring-0 rounded shadow-lg h-auto"
              src={css}
              alt=""
            />
          </li>
          <li>
            <img
              className="w-14 ring-0 rounded shadow-lg h-auto"
              src={tailwind}
              alt=""
            />
          </li>
          <li>
            <img
              className="w-14 ring-0 rounded shadow-2xl h-auto"
              src={javascript}
              alt=""
            />
          </li>
          <li>
            <img
              className="w-14 ring-0 rounded shadow-lg h-auto"
              src={java}
              alt=""
            />
          </li>
          <li></li>
        </ul>
      </div>
      </div>
      
    </section>
  );
}
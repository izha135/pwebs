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
    <section>
      <div className="container flex flex-col-reverse lg-s:flex-row items-center sm-s:mt-0 gap-20 mt:5 lg-s:mt-10 lg-s:ml-16 ">
        <div className="flex flex-col w-full gap-0 leading-3 items-center lg:items-start">
          <h1 className="text-pink-500 inline-block font-lobster-one xl-s:ml-2 drop-shadow-sm mt-0 mr-auto px-12 sm-s:-mt-10 sm-s:ml-16 text-7xl sm:text-6xl lg:text-left  mb-0">
            Front-End Developer 👋
          </h1>
          <br />
          <h3 className="text-gray-700 inline-block lg:text-3xl font-robot-mono ml-16 lg:text-left  sm:text-2xl sm:ml-12 mb-6">
            Hi! I'm Isha Chauhan, a passionate developer based in Albuqerque,
            New Mexico 📍
          </h3>
          <div className="align-center px-12">
            <button className="mr-5">
              <a href="https://github.com/izha135" target="_blank">
                <img className="w-10 h-auto" src={git} alt="git icon" />
              </a>
            </button>

            <button className="">
              <a
                href="https://www.linkedin.com/in/isha-chauhan-26a717155/"
                target="_blank"
                className=""
              >
                <img
                  className="w-10 h-auto"
                  src={linkedin}
                  alt="linkedin icon"
                />
              </a>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center w-1/2 sm:w-4/12 sm:mt-5 px-4 sm:mb-0 md:mb-0 lg-mb-0 ">
          <img
            className="pb-2/3 h-110 w-110 rounded-full object-bottom  max-w-xs scale-1.7 shadow  ml-auto  border-none"
            src={me2}
            alt="me"
          />
        </div>
      </div>
      <div className="flex px-20 w-full gap-0 mt-0 sm-s:mt-10 mb-10">
        <ul className="flex align-center px-30 gap-10 ">
          <li>
            <h1 className="font-robot-mono xl:text-3xl ">Tech Stack |</h1>
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
    </section>
  );
}
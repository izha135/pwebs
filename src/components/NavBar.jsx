import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar() {
  return (
    <header className=" bg-white flex sticky shadow-lg shadow-violet-500/40 top-0 rounded z-10">
      <div className="ml-12  ">
        <span className="basis-5" onClick={() => scroll.scrollToTop()}>
          <button className="text-4xl text-purple-400 font-lobster-one  px-10 py-6 border-none">
            Isha.Dev
          </button>
        </span>
      </div>
      <div className=" justify-between  absolute right-0 mr-12">
        <ul className="">
          <li className="inline-block hover:cursor-pointer px-6 py-6 font-roboto-mono 	text-purple-400 text-2xl">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="inline-block hover:cursor-pointer px-6 py-6 font-roboto-mono  text-purple-400	 text-2xl">
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="inline-block hover:cursor-pointer px-6 py-6 font-roboto-mono  text-purple-400 text-2xl">
            <Link
              to="exp"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Experience
            </Link>
          </li>
          <li className="inline-block hover:cursor-pointer px-6 py-6 font-roboto-mono  text-purple-400 text-2xl">
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* <button className="block lg-s:hidden">
        <i
          icon="fa-solid fa-bars"
          onclick="onToggleMenu(this)"
          name="menu"
          class="text-3xl cursor-pointer "
        ></i>
      </button> */}
    </header>
  );
}

export default NavBar;

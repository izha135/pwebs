import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-sm w-full shadow-sm sticky-top z-10 bg-white mb-10 shadow-violet-500/40 ">
      <div class="container-fluid ">
        <span
          className="navbar-brand text-purple-400 text-4xl  "
          onClick={() => scroll.scrollToTop()}
        >
          <a className="  font-lobster-one  ">Isha.Dev</a>
        </span>
        <div className="dropdown dropleft gap-10">
          <button
            className="btn btn-secondary dropdown-toggle d-lg-none inline-block"
            type="button"
            id="#navbarNav"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-sm-right" id="navbarNav">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
      </div>

      <div className="d-none d-lg-block d-xl-block">
        <ul
          className="  inline-block justify-content-end d-flex flex-row"
          id="navbarNav"
        >
          <li className="nav-item text-purple-400">
            <Link
              className="nav-link hover:cursor-pointer px-6 py-6 font-poppins   text-xl"
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
          <li className="nav-item text-purple-400">
            <Link
              className="nav-link hover:cursor-pointer px-6 py-6 font-poppins   text-xl"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="nav-item text-purple-400">
            <Link
              className="nav-link hover:cursor-pointer px-6 py-6 font-poppins   text-xl"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item text-purple-400">
            <Link
              className="nav-link hover:cursor-pointer px-6 py-6 font-poppins   text-xl"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item text-purple-400">
            <Link
              className="nav-link hover:cursor-pointer px-6 py-6 font-poppins   text-xl"
              activeClass="active"
              to="home"
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
    </nav>

    // <header className=" bg-white flex sticky shadow-lg shadow-violet-500/40 top-0 rounded z-10">
    //   <div className="ml-12  ">
    //     <span className="basis-5" onClick={() => scroll.scrollToTop()}>
    //       <button className="text-4xl text-purple-400 font-lobster-one  px-10 py-6 border-none">
    //         Isha.Dev
    //       </button>
    //     </span>
    //   </div>
    //   <div className=" justify-between  absolute right-0 mr-12 ">
    //     <ul className="">
    //       <li className="inline-block hover:cursor-pointer px-6 py-6 font-roboto-mono 	text-purple-400 text-2xl">
    //         <Link
    //           activeClass="active"
    //           to="home"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           duration={500}
    //         >
    //           Home
    //         </Link>
    //       </li>
    //       <li className="inline-block hover:cursor-pointer px-6 py-6 font-roboto-mono  text-purple-400	 text-2xl">
    //         <Link
    //           to="about"
    //           activeClass="active"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           duration={500}
    //         >
    //           About
    //         </Link>
    //       </li>
    //       <li className="inline-block hover:cursor-pointer px-6 py-6 font-roboto-mono  text-purple-400 text-2xl">
    //         <Link
    //           to="exp"
    //           activeClass="active"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           duration={500}
    //         >
    //           Experience
    //         </Link>
    //       </li>
    //       <li className="inline-block hover:cursor-pointer px-6 py-6 font-roboto-mono  text-purple-400 text-2xl">
    //         <Link
    //           to="projects"
    //           activeClass="active"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           duration={500}
    //         >
    //           Projects
    //         </Link>
    //       </li>
    //       <li className="inline-block hover:cursor-pointer px-6 py-6 font-roboto-mono  text-purple-400 text-2xl">
    //         <Link
    //           to="contact"
    //           activeClass="active"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           duration={500}
    //         >
    //           Contact
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    //   {/* <button className="block lg-s:hidden">
    //     <i
    //       icon="fa-solid fa-bars"
    //       onclick="onToggleMenu(this)"
    //       name="menu"
    //       class="text-3xl cursor-pointer "
    //     ></i>
    //   </button> */}
    // </header>
  );
}

export default NavBar;

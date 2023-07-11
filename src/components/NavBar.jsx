import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar() {
  return (
    <nav class="navbar  navbar-expand-sm  shadow-sm fixed-top  bg-white mb-16 shadow-violet-500/40 ">
      <div class="container ">
        <span
          className="navbar-brand mx-auto text-purple-400 text-4xl  "
          onClick={() => scroll.scrollToTop()}
        >
          <a className="  font-lobster-one text-sm-center text-xs-center ">
            Isha.Dev
          </a>
        </span>

        <div className="d-none d-md-block d-lg-block d-xl-block">
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
      </div>
    </nav>
  );
}

export default NavBar;

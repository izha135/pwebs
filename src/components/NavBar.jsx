import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar() {
  return (
    <nav class="navbar  navbar-expand-sm  shadow-sm sticky-top  bg-white mb-10 shadow-violet-500/40 ">
      <div class="container ">
        <span
          className="navbar-brand float-sm-center float-md-left text-purple-400 text-4xl "
          onClick={() => scroll.scrollToTop()}
        >
          <a className="font-lobster-one hover:cursor-pointer ">Isha.Dev</a>
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
                to="about"
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
                to="exp"
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
                to="projects"
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
                to="contact"
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
{
  /* <div className="btn-group show inline-block  ">
          <button
            className="btn btn-secondary dropdown-toggle d-md-none inline-block"
            type="button"
            id="#navbarNav"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div class="dropdown-menu dropdown-menu-md-left" id="navbarNav">
            <button class="dropdown-item" type="button">
              Action
            </button>
            <button class="dropdown-item" type="button">
              Another action
            </button>
            <button class="dropdown-item" type="button">
              Something else here
            </button>
          </div>
        </div> */
}

{
  /* <div class="btn-group d-md-none inline-block gap-3">
          <Hamburger
            className="btn btn-secondary dropdown-toggle d-md-none inline-block"
            color="white"
            toggled={isOpen}
            size="28"
            rounded
            toggle={setOpen}
          ></Hamburger>

          <div class="dropdown-menu dropdown-menu-right">
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
           </div> */
}

export default NavBar;

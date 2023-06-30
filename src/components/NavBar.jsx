import React, { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className=" bg-white flex sticky shadow-lg shadow-violet-500/40 top-0 rounded z-10">
      <div className="ml-12  ">
        <span className="basis-5">
          <h1 className="text-4xl text-purple-400 font-lobster-one  px-10 py-6 ">
            Isha.Dev
          </h1>
        </span>
      </div>
      <div className=" justify-between  absolute right-0 mr-12">
        <ul className="">
          <li className="inline-block  px-6 py-6 font-roboto-mono 	text-purple-400 text-2xl">
            <a href="#home">Home</a>
          </li>
          <li className="inline-block px-6 py-6 font-roboto-mono  text-purple-400	 text-2xl">
            <a href="#about">About</a>
          </li>
          <li className="inline-block px-6 py-6 font-roboto-mono  text-purple-400 text-2xl">
            <a href="#experience">Experience</a>
          </li>
          <li className="inline-block px-6 py-6 font-roboto-mono  text-purple-400 text-2xl">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <button className="block lg-s:hidden">
        <i
          icon="fa-solid fa-bars"
          onclick="onToggleMenu(this)"
          name="menu"
          class="text-3xl cursor-pointer "
        ></i>
      </button>
    </header>
  );
}

export default NavBar;

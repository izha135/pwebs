import React from "react";

function NavBar() {
  const navLinks = document.querySelector(".nav-links");
  function onToggleMenu(e) {
    e.name = e.name === "menu" ? "close" : "menu";
    navLinks.classList.toggle("top-[9%]");
  }

  return (
    <header className=" bg-white flex sticky shadow-lg shadow-violet-500/40 top-0 rounded justify-between z-10">
      <div className=" flex flex-row  ">
        <button className="basis-5">
          <h1 className="text-4xl text-purple-400 font-lobster-one px-6 py-6 ">
            Isha.Dev
          </h1>
        </button>
        <button></button>
      </div>
      <div className=" flex-row  ">
        <ul className="text-gray justify-between">
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
      <div class="flex items-center gap-6">
        <i
          icon="fa-solid fa-bars"
          onclick="onToggleMenu(this)"
          name="menu"
          class="text-3xl cursor-pointer md:hidden"
        ></i>
      </div>
    </header>
  );
}

export default NavBar;

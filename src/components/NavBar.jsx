import React from "react";



function NavBar() {
  return (
    <header className="bg-gray-500 flex sticky top-0 justify-between shadow-lg">
      <div className=" flex flex-row  ">
        <button className="basis-5">
          <h1 className="text-4xl text-pink-400 font-lobster-one px-6 py-6 ">
            Isha.Dev 
          </h1>
        </button>
      </div>
      <div className=" flex-row  ">
        <ul className="text-gray justify-between">
          <li className="inline-block  px-6 py-6 font-roboto-mono 	text-white text-2xl">
            <a href="#home">Home</a>
          </li>
          <li className="inline-block px-6 py-6 font-roboto-mono  text-white	 text-2xl">
            <a href="#about">About</a>
          </li>
          <li className="inline-block px-6 py-6 font-roboto-mono  text-white text-2xl">
            <a href="#experience">Experience</a>
          </li>
          <li className="inline-block px-6 py-6 font-roboto-mono  text-white text-2xl">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;

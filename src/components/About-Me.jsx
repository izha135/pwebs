import React from 'react'
import imgas from "../imgas.png"
import mylogo from "../mylogo.svg"

export default function About() {
  return (
   <section className=' grid grid-cols-2  w-full px-[4rem]'>
   <div className="  ">
    <img className= " absolute w-[14rem] ml-[19rem] mt-[2rem] rounded-xl mt-35 -z-10" src={imgas} alt="" />
      <span className=' '><img className='
       absolute w-[54rem] pr-10 -mt-[10rem] z-12' src={mylogo} alt="" /></span>
   </div>
   <div className="-gap[]"> 
   <h1 className='mt-[2rem] mb-3 text-4xl font-roboto-mono  '>About me</h1>
   <p className='text-left text-xl '>Hi, I'm Isha, a recent computer science graduate with a strong background in mathematics. Equipped with a bachelor's degree in computer science and a minor in mathematics from The University of New Mexico, I bring a unique combination of technical skills and analytical thinking. Proficient in programming languages like Java and Python, I have a solid foundation in software development and problem-solving. With a keen eye for detail and a passion for learning, I am eager to contribute my skills to a dynamic team. Whether it's software development, data analysis, or algorithm design, I am ready to tackle challenges and drive innovation. Let's collaborate to create impactful solutions in the ever-evolving world of technology.




</p></div>
   </section>
  )
}
import React from 'react'
import imgas from "../My project.png"
import mylogo from "../mylogo.svg"

export default function About() {
  return (
   <section className=' grid xl-s:grid-cols-2 md-s:grid-cols-1  px-[4rem] py-[4rem]'>
   <div className="  ">
    <img className= " absolute w-[14rem] ml-[17rem] xl-s:mt-[5rem] md-s:mt-6" src={imgas} alt="" />
      <span className=' '><img className='
       relative w-[20rem] ml-[14rem] xl-s:mt-[5rem] md-s:mt-[2rem] -z-10 animate-spin' src={mylogo} alt="" /></span>
   </div>
   <div className="flex-1"> 
   <h1 className='mt-[5rem] mb-3 text-4xl font-lobster-one text-purple-400 '>About me</h1>
   <p className='xl-s:text-left md-s:text-center  font-poppins text-xl '>Hi, I'm Isha, a recent computer science graduate with a strong background in mathematics. Equipped with a bachelor's degree in computer science and a minor in mathematics from The University of New Mexico, I bring a unique combination of technical skills and analytical thinking. Proficient in programming languages like Java and Python, I have a solid foundation in software development and problem-solving. With a keen eye for detail and a passion for learning, I am eager to contribute my skills to a dynamic team. Whether it's software development, data analysis, or algorithm design, I am ready to tackle challenges and drive innovation. Let's collaborate to create impactful solutions in the ever-evolving world of technology.




</p></div>
<button className='bg-purple-400 w-[7rem] xl-s:ml-[49rem] xl-s:mt-10 md-s:ml-[18rem] md-s:mt-5 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded'>
  <h1>Resume</h1>
</button>
   </section>
  )
}

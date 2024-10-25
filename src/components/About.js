import React from 'react';
import about from '../assets/img/kask_profile.jpg';
import cv from '../assets/downloads/ALESSANDRO CASCONE CV.pdf';
function About() {
  return (
    <section id="about" className="about h-screen text-white flex flex-col justify-center items-center relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center">
        <img src={about } alt="Alessandro Cascone" className="w-40 h-40 rounded-full mb-6 shadow-lg" />
        <h2 className="text-5xl mb-6 font-bold cursor-scale">About Me</h2>
        <p className="text-lg max-w-3xl text-gray-400 cursor-scale">
          I’m Alessandro, a passionate Web Developer and Educator, committed to transforming ideas into interactive and visually captivating digital experiences.
        </p>
        <div className="flex justify-center mt-8 space-x-4">
          <a href="#skills" className="text-gray-400 border-b-2 border-transparent hover:border-gray-400 transition">My Skills</a>
          <a href="#contact" className="text-gray-400 border-b-2 border-transparent hover:border-gray-400 transition">Contact Me</a>
        </div>
        <a href={cv} download className="download-cv-btn mt-8 inline-block px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-full hover:from-teal-400 hover:to-blue-500 transition-colors duration-300">
          Download CV
        </a>
      </div>
    </section>
  );
}

export default About;

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  useEffect(() => {
    gsap.utils.toArray('.bar').forEach(bar => {
      const targetWidth = bar.closest('.skill-bar').dataset.skill + '%';
      gsap.fromTo(bar, { width: '0%' }, {
        width: targetWidth,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bar,
          start: "top 90%",
          end: "top 70%",
          scrub: true
        }
      });
    });
  }, []);

  return (
    <section id="skills" className="skills h-screen text-white flex flex-col justify-center items-center">
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h2 className="text-5xl mb-6 font-bold">My Skills</h2>
        <p className="text-gray-400 mb-8">
          Here’s a breakdown of my proficiency across various technologies and languages I specialize in:
        </p>

        {/* HTML Skill Bar */}
        <div className="skill-bar mb-4" data-skill="90">
          <div className="flex items-center justify-between mb-2">
            <label className="text-lg flex items-center space-x-2">
              <i className="fab fa-html5 text-red-500"></i>
              <span>HTML</span>
            </label>
            <span className="skill-percent text-gray-400">90%</span>
          </div>
          <div className="bar-container bg-gray-800 rounded-full h-4 w-full">
            <div className="bar html-bar h-full rounded-full"></div>
          </div>
        </div>

        {/* CSS Skill Bar */}
        <div className="skill-bar mb-4" data-skill="85">
          <div className="flex items-center justify-between mb-2">
            <label className="text-lg flex items-center space-x-2">
              <i className="fab fa-css3-alt text-blue-500"></i>
              <span>CSS</span>
            </label>
            <span className="skill-percent text-gray-400">85%</span>
          </div>
          <div className="bar-container bg-gray-800 rounded-full h-4 w-full">
            <div className="bar css-bar h-full rounded-full"></div>
          </div>
        </div>

        {/* JavaScript Skill Bar */}
        <div className="skill-bar mb-4" data-skill="85">
          <div className="flex items-center justify-between mb-2">
            <label className="text-lg flex items-center space-x-2">
              <i className="fab fa-js text-yellow-500"></i>
              <span>JavaScript</span>
            </label>
            <span className="skill-percent text-gray-400">85%</span>
          </div>
          <div className="bar-container bg-gray-800 rounded-full h-4 w-full">
            <div className="bar js-bar h-full rounded-full"></div>
          </div>
        </div>

        {/* Tailwind CSS Skill Bar */}
        <div className="skill-bar mb-4" data-skill="80">
          <div className="flex items-center justify-between mb-2">
            <label className="text-lg flex items-center space-x-2">
              <i className="fas fa-wind text-teal-400"></i>
              <span>Tailwind CSS</span>
            </label>
            <span className="skill-percent text-gray-400">80%</span>
          </div>
          <div className="bar-container bg-gray-800 rounded-full h-4 w-full">
            <div className="bar tailwind-bar h-full rounded-full"></div>
          </div>
        </div>

        {/* React.js Skill Bar */}
        <div className="skill-bar mb-4" data-skill="70">
          <div className="flex items-center justify-between mb-2">
            <label className="text-lg flex items-center space-x-2">
              <i className="fab fa-react text-blue-500"></i>
              <span>React.js</span>
            </label>
            <span className="skill-percent text-gray-400">70%</span>
          </div>
          <div className="bar-container bg-gray-800 rounded-full h-4 w-full">
            <div className="bar react-bar h-full rounded-full"></div>
          </div>
        </div>

        {/* Laravel Skill Bar */}
        <div className="skill-bar mb-4" data-skill="75">
          <div className="flex items-center justify-between mb-2">
            <label className="text-lg flex items-center space-x-2">
              <i className="fab fa-laravel text-red-600"></i>
              <span>Laravel</span>
            </label>
            <span className="skill-percent text-gray-400">75%</span>
          </div>
          <div className="bar-container bg-gray-800 rounded-full h-4 w-full">
            <div className="bar laravel-bar h-full rounded-full"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;

import React, { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Animazioni di caricamento della pagina
  gsap.fromTo('.navbar a', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.2 });
  gsap.fromTo('.hero img, .hero p, .hero a', { opacity: 0, scale: 0.9, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 });

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-3xl font-bold">KASK1</a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white focus:outline-none">
            <i className="fas fa-bars text-2xl"></i>
          </button>
          <div className={`${menuOpen ? 'block' : 'hidden'} md:flex md:space-x-8 md:items-center text-lg font-semibold`}>
            <a href="#home" className="block hover:text-gray-400 transition-colors">Home</a>
            <a href="#about" className="block hover:text-gray-400 transition-colors">About</a>
            <a href="#skills" className="block hover:text-gray-400 transition-colors">Skills</a>
            <a href="#contact" className="block hover:text-gray-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

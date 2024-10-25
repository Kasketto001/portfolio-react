import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

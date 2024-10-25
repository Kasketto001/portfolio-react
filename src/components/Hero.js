import React from 'react';
import '../styles/style.css';

function Hero() {
  return (
    <section id="home" className="hero h-screen flex items-center justify-center relative overflow-hidden cursor-scale">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="z-10 text-center">
        <img src="star.svg" alt="KASK1 Logo" className="w-48 h-48 mx-auto mb-4 cursor-scale star animated-star" />
        <p className="text-lg text-gray-400 mb-8 cursor-scale">Full-Stack Web Developer | Web Design Teacher | UI/UX Designer | Salesforce Developer | Singer | Producer</p>
        <a href="https://www.linkedin.com/in/alessandro-cascone-2162bb292/" className="uppercase tracking-wider border border-gray-400 px-8 py-2 text-gray-400 hover:text-white hover:border-white transition-colors duration-300 cursor-scale">
          Discover More
        </a>
      </div>
    </section>
  );
}

export default Hero;

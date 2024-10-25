import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import star from '../assets/img/star.svg';
import backgroundVideo from '../assets/videos/background.mp4';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  useEffect(() => {
    // Animazioni di caricamento e scroll
    gsap.fromTo('.hero img', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.5 });
    gsap.fromTo('.hero p', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.5 });

    // Esempio di animazione su ScrollTrigger
    gsap.fromTo('.about', { opacity: 0, y: 100 }, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: '.about',
        start: "top 85%",
        end: "top 50%",
        scrub: true
      }
    });
  }, []);

  return (
    <section id="home" className="hero h-screen flex items-center justify-center relative overflow-hidden cursor-scale">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="z-10 text-center">
        <img src={star} alt="KASK1 Logo" className="w-48 h-48 mx-auto mb-4 cursor-scale star animated-star" />
        <p className="text-lg text-gray-400 mb-8 cursor-scale">Full-Stack Web Developer | Web Design Teacher | UI/UX Designer | Salesforce Developer | Singer | Producer</p>
        <a href="https://www.linkedin.com/in/alessandro-cascone-2162bb292/" className="uppercase tracking-wider border border-gray-400 px-8 py-2 text-gray-400 hover:text-white hover:border-white transition-colors duration-300 cursor-scale">
          Discover More
        </a>
      </div>
    </section>
  );
}

export default Hero;

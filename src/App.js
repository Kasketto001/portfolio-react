import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const cursorRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const heroContent = heroContentRef.current;
    let mouseX = 0, mouseY = 0;

    // Effetto animazione cursore personalizzato
    if (cursor) {
      gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
          gsap.set(cursor, { css: { left: mouseX, top: mouseY } });
        }
      });

      window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
    }

    // Effetto parallasse Hero con il mouse
    function mouseParallax(event) {
      const windowCenterX = window.innerWidth / 2;
      const windowCenterY = window.innerHeight / 2;
      const offsetX = (event.clientX - windowCenterX) / windowCenterX;
      const offsetY = (event.clientY - windowCenterY) / windowCenterY;

      if (heroContent) {
        gsap.to(heroContent.querySelector('.animated-star'), { x: offsetX * 30, y: offsetY * 30, duration: 0.5, ease: "power2.out" });
        gsap.to(heroContent.querySelector('p'), { x: offsetX * 15, y: offsetY * 15, duration: 0.5, ease: "power2.out" });
        gsap.to(heroContent.querySelector('a'), { x: offsetX * 10, y: offsetY * 10, duration: 0.5, ease: "power2.out" });
      }
    }

    if (heroContent) {
      heroContent.addEventListener('mousemove', mouseParallax);
    }

    // Cleanup degli event listener per il cursore e il mousemove
    return () => {
      if (heroContent) heroContent.removeEventListener('mousemove', mouseParallax);
      window.removeEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
    };
  }, []);

  useEffect(() => {
    // Animazione per le barre di avanzamento nelle skills
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
    <div className="App">
      <div ref={cursorRef} className="cursor"></div>
      <Navbar />
      <div ref={heroContentRef}>
        <Hero />
      </div>
      <About />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;

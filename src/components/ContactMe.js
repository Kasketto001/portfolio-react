// src/components/ContactMe.js
import React from 'react';

function ContactMe() {
  return (
    <section id="contact" className="contact-me h-screen flex flex-col justify-center items-center text-white">
      <h2 className="text-5xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg text-gray-400 mb-6">Feel free to reach out for collaborations or just a friendly hello!</p>
      <a 
        href="mailto:info@kask1.it" 
        className="px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-full hover:from-teal-400 hover:to-blue-500 transition-colors duration-300">
        Email Me at info@kask1.it
      </a>
    </section>
  );
}

export default ContactMe;

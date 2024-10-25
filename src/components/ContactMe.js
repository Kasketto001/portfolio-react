import React from "react";

function ContactMe() {
  return (
    <section
      id="contact"
      className="contact-me h-screen flex flex-col justify-center items-center text-white"
    >
      <h2 className="text-5xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg text-gray-400 mb-6">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>
      <a href="mailto:info@kask1.it" className="contact-button">
        Contact Me
      </a>
    </section>
  );
}

export default ContactMe;

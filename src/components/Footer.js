import React from 'react';
import logo from '../assets/img/kask1.svg'; // Assicurati di avere il logo in questa posizione

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo */}
        <img src={logo} alt="KASK1 Logo" className="logo w-24 h-auto" />

        {/* Divider */}
        <div className="divider"></div>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://www.linkedin.com/in/alessandro-cascone-2162bb292/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Kasketto001" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/ciaosonokask1_" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Copyright */}
        <p>&copy; 2024 Alessandro Cascone - KASK1. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

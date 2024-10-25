import React from 'react';

function Footer() {
  return (
    <footer className="footer text-gray-400 py-8 bg-black">
      <div className="container-md mx-auto text-center md:text-left">
        <div className="mb-6 flex justify-center md:justify-start">
          <img src="kask1.svg" alt="KASK1 Logo" className="w-24 h-auto" />
        </div>
        <div className="w-full border-t border-gray-700 mb-6"></div>
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-6 md:space-y-0">
          <p className="text-sm">&copy; 2024 Alessandro Cascone - KASK1. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/alessandro-cascone-2162bb292/" className="hover:text-blue-500 transition-colors">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://github.com/Kasketto001" className="hover:text-gray-500 transition-colors">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/ciaosonokask1_" className="hover:text-pink-500 transition-colors">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

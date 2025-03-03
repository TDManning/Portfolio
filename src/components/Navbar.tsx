import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import SocialLinks from "./SocialLinks";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md py-3 px-5 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link to="/" className="hover:text-teal-500 dark:hover:text-teal-300 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-teal-500 dark:hover:text-teal-300 transition">About</Link></li>
          <li><Link to="/projects" className="hover:text-teal-500 dark:hover:text-teal-300 transition">Projects</Link></li>
          <li><Link to="/skills" className="hover:text-teal-500 dark:hover:text-teal-300 transition">Skills</Link></li>
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <DarkModeToggle />
          <SocialLinks />
          <a 
            href="/Terra-Manning-Resume.pdf" 
            download 
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition"
          >
            Resume
          </a>
        </div>

        <button 
          className="md:hidden text-2xl focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-center p-4 space-y-3 md:hidden flex flex-col items-center">
          <Link to="/" className="block text-lg" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="block text-lg" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/projects" className="block text-lg" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/skills" className="block text-lg" onClick={() => setMenuOpen(false)}>Skills</Link>
          
          <div className="flex items-center space-x-4 mt-3">
            <DarkModeToggle />
            <SocialLinks />
          </div>
          <a 
            href="/Terra-Manning-Resume.pdf" 
            download 
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

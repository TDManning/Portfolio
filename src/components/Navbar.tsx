import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle"; // Import Dark Mode Toggle

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Dark Mode Toggle (Only One Instance Now) */}
        <DarkModeToggle />

        {/* Navigation Links */}
        <ul className="flex gap-x-8">
          <li>
            <Link 
              to="/" 
              className="hover:text-blue-400 hover:underline transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="hover:text-blue-400 hover:underline transition-all duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className="hover:text-blue-400 hover:underline transition-all duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/tools" 
              className="hover:text-blue-400 hover:underline transition-all duration-300"
            >
              Tools
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

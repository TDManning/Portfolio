import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle: React.FC = () => {
  const getInitialTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      return true; 
    } else {
      return false;
    }
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full text-xl transition duration-300"
    >
      {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
    </button>
  );
};

export default DarkModeToggle;

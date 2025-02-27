import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4 p-4">
      <a
        href="https://github.com/TDManning"
        target="_blank"
        className="text-3xl text-gray-700 hover:text-black dark:text-white dark:hover:text-purple-300 dark:border-b-2 dark:border-transparent hover:border-b-2 hover:border-blue-500 transition duration-300"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/terra-manning/"
        target="_blank"
        className="text-3xl text-blue-700 hover:text-purple-900 dark:text-white dark:hover:text-purple-300 dark:border-b-2 dark:border-transparent hover:border-b-2 hover:border-blue-500 transition duration-300"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:terradmanning@gmail.com"
        className="text-3xl text-purple-600 hover:text-purple-900 dark:text-white dark:hover:text-purple-300 dark:border-b-2 dark:border-transparent hover:border-b-2 hover:border-blue-500 transition duration-300"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialLinks;

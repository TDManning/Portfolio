import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4 p-4">
      <a href="https://github.com/TDManning" target="_blank" className="text-2xl text-gray-700 hover:text-black">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/terra-manning/" target="_blank" className="text-2xl text-blue-700 hover:text-blue-900">
        <FaLinkedin />
      </a>
      <a href="mailto:terradmanning@gmail.com" className="text-2xl text-purple-600 hover:text-blue-900">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialLinks;

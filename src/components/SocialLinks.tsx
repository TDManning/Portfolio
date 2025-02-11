import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4 p-4">
      <a href="https://github.com/yourprofile" target="_blank" className="text-2xl text-gray-700 hover:text-black">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-2xl text-blue-700 hover:text-blue-900">
        <FaLinkedin />
      </a>
      <a href="mailto:youremail@example.com" className="text-2xl text-red-600 hover:text-red-800">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialLinks;

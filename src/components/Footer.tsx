import React from "react";
import SocialLinks from "./SocialLinks";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <SocialLinks />
    </footer>
  );
};

export default Footer;
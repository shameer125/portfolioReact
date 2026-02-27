import React from "react";
import { FaUser } from "react-icons/fa";

const AboutHeader = () => {
  return (
    <h2 className="text-4xl md:text-4xl font-bold text-center flex justify-center items-center gap-3">
      <FaUser className="text-black"/>
      <span className="text-black"> About</span>
      <span className="text-purple-800">Me</span>
    </h2>
  );
};

export default AboutHeader;

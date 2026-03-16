import React from "react";
import { FaAngleRight } from "react-icons/fa";

const ResumeButton = () => {
  return (
    <a
      href="/my_CV.pdf"
      download
      className="flex items-center inline-flex py-1.5 px-1.5 gap-1 bg-blue-800 cursor-pointer text-white px-8 py-3 rounded-xl text-lg font-medium shadow-lg hover:scale-105 transition"
    >
      Resume
      <FaAngleRight />
    </a>
  );
};

export default ResumeButton;

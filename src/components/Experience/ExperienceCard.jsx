import React from "react";
import { FaBriefcase } from "react-icons/fa";

const ExperienceCard = ({ side, title, role, date }) => {
  const isLeft = side === "left";

  return (
    <div
      className={`relative flex w-full ${
        isLeft ? "justify-start pr-16" : "justify-end pl-16"
      }`}
    >
      {/* Center Icon */}
      <div className="absolute left-1/2 top-5 -translate-x-1/2 z-20 bg-white border-4 border-orange-400 w-9 h-9 rounded-full flex items-center justify-center">
        <FaBriefcase className="text-black text-lg" />
      </div>

      {/* Card */}
      <div className="relative bg-orange-400 text-black rounded-md px-6 py-2 w-full max-w-md shadow-lg">
        {/* Arrow */}
        <span
          className={`absolute top-5 w-0 h-0 border-y-[10px] border-y-transparent ${
            isLeft
              ? "right-[-12px] border-l-[12px] border-l-orange-400"
              : "left-[-12px] border-r-[12px] border-r-orange-400"
          }`}
        />

        <h3 className="text-xl font-bold">{title}</h3>
        <p className="font-semibold mt-1">{role}</p>
        <p className="text-sm mt-1">{date}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;

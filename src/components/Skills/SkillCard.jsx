import React from "react";

const SkillCard = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-900 p-6 rounded-xl shadow-md hover:scale-105 transition-all duration-300">
      <div className="text-4xl mb-3 text-white">{icon}</div>
      <p className="text-white text-lg font-medium">{name}</p>
    </div>
  );
};

export default SkillCard;

import React from "react";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ image, title, description, live, code }) => {
  return (
    <div className="group relative overflow-hidden rounded-sm shadow-lg bg-white">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Hover Overlay */}
      <div
        className="
        absolute inset-0 bg-black/70 
        flex flex-col justify-end
        translate-y-full 
        group-hover:translate-y-0
        transition-all duration-500 ease-in-out
        p-6
      "
      >
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

        <p className="text-sm text-gray-200 mb-4">{description}</p>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition"
          >
            <ExternalLink size={16} />
            View
          </a>

          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

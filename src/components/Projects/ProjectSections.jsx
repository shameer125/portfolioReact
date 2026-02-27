import React from "react";
import { Code2 } from "lucide-react";
import ProjectCard from "./ProjectCard";
import projectsData from "./ProjectsData";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from 'framer-motion';


const cardVariants = {
  hidden: {
    opacity: 0,
    y: -60, 
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: custom * 0.2 },
  }),
};



const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-7 bg-gradient-to-r from-[#35564e] to-[#194b47]"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="flex justify-center items-center gap-3 text-3xl md:text-4xl font-bold text-white mb-12">
          <FaLaptopCode className="text-3xl md:text-4xl" />
          Projects <span className="text-yellow-300">Made</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 px-6 md:px-16 lg:px-32">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index} // delay for stagger effect
              viewport={{ once: false, amount: 0.5 }}
            >
              <ProjectCard
                title={project.title}
                image={project.image}
                // description={project.description}
                live={project.viewLink}
                code={project.codeLink}
              />
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-700 transition flex items-center gap-2">
            View All →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

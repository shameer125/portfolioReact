import React from "react";
import { FaReact } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { motion } from 'framer-motion';

import {
  SiFirebase,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCplusplus,
  SiBootstrap,
  SiGithub,
  SiNextdotjs,
  SiMysql,
  SiMaterialdesign,
  SiGit,
} from "react-icons/si";
import SkillCard from "./SkillCard";

const skills = [
  { icon: <FaReact />, name: "ReactJS" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <FaPython />, name: "Python" },
  { icon: <SiMaterialdesign />, name: "MaterialUI" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiTailwindcss />, name: "TailwindCSS" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <SiCss3 />, name: "CSS3" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiGit />, name: "Git" },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-12 bg-gradient-to-r from-[#35564e] to-[#194b47]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-40">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center flex flex-wrap justify-center items-center gap-3 text-white mb-10">
          <span className="flex items-center gap-3">
            <FaLaptopCode className="text-3xl md:text-4xl" />
            Skills &
          </span>
          <span className="text-yellow-300">Abilities</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} name={skill.name} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

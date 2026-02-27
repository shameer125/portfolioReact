import React from "react";
import { FaBriefcase } from "react-icons/fa";
import ExperienceCard from "./ExperienceCard";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

/* Card animation from TOP */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: -60, // from top
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-7 bg-white relative">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-16 flex justify-center items-center gap-3">
        <FaBriefcase />
        Experience
      </h2>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1.5 bg-slate-900 -translate-x-1/2" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-4"
        >
          <motion.div variants={cardVariants}>
            <ExperienceCard
              side="right"
              title="Self Employed"
              role="Full Frontend Developer"
              date="Dec 2025 – Present"
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <ExperienceCard
              side="left"
              title="Saylani Mass I.T Training"
              role="Web Developer | Internship"
              date="Feb 2025 – Sept 2025"
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <ExperienceCard
              side="right"
              title="Personal Projects"
              role="Frontend Developer"
              date="2024 – 2025"
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <ExperienceCard
              side="left"
              title="Mini E-Commerce App"
              role="React Developer | Project"
              date="2025"
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <ExperienceCard
              side="right"
              title="Backend Projects"
              role="Express.js & MongoDB Developer | Project"
              date="2025 – 2026"
            />
          </motion.div>

          <motion.div variants={cardVariants}>
            <ExperienceCard
              side="left"
              title="API & Database Projects"
              role="Node.js, Express & MongoDB | Project"
              date="2025 - 2026"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;

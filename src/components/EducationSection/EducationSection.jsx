import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import schoolImg from '../../assets/school.png'
import universityImg from '../../assets/university.png';
import { motion } from 'framer-motion';

const educationData = [
  {
    title: "Bs Computer Science",
    institute: "The University of Agriculture, Peshawar | Pakistan",
    duration: "2023 - 2027 | Pursuing",
    image: universityImg,
  },
  {
    title: "F.Sc",
    institute:"Government Postgraduate College | Kohat",
    duration: "2021 - 2023 | Completed",
    image: schoolImg,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // delay between each card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: -50 }, // negative y = from top
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


const EducationSection = () => {
  return (
    <section id="education" className="py-2 bg-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 flex justify-center items-center gap-2">
          <FaGraduationCap className="w-11 h-11 text-black" />
          My <span className="text-purple-800">Education</span>
        </h2>

        <p className="text-center text-black text-base mb-8">
          Education Is Not The Learning Of Facts, But The Training Of The Mind
          To Think.
        </p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl mb-6 shadow-lg px-6 py-4 flex flex-col md:flex-row gap-4 md:gap-6 items-center mx-auto max-w-md sm:max-w-lg md:max-w-4xl"
            >
              {/* Image */}
              <img
                src={edu.image}
                alt={edu.title}
                className="w-32 h-24 md:w-40 m-0 p-0 md:h-32 object-cover rounded-lg"
              />

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                  {edu.title}
                </h3>

                <p className="text-gray-700 text-sm md:text-lg mb-2">
                  {edu.institute}
                </p>

                <p className="text-green-600 font-semibold text-sm md:text-lg">
                  {edu.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;

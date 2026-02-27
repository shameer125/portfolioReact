import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";
import { motion } from "framer-motion";

const SocialIcons = () => {
  const icons = [
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/shameer-ali-8420a6322",
    },
    { icon: <FaGithub />, link: "https://github.com/shameer125" },
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/shameer.ali.348734",
    },
    { icon: <FaInstagram />, link: "https://instagram.com/shameerali5580" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="flex gap-4 mt-6"
    >
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-white text-2xl p-2.5 border rounded-full
           bg-black hover:bg-blue-400 transition-colors duration-300"
        >
          {item.icon}
        </a>
      ))}
    </motion.div>
  );
};

export default SocialIcons;

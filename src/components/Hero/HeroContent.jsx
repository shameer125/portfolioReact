import React from "react";
import AnimatedRoles from "./AnimatedRoles";
import SocialIcons from "./SocialIcons";
import { LuArrowDown } from "react-icons/lu";
import { motion } from 'framer-motion';

const HeroContent = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-[#0b2c5f] leading-tight">
        I'm Shameer
      </h1>

      <h2 className="text-5xl font-extrabold text-orange-500 mt-3">Ali</h2>
      <motion.div
        initial={{ opacity: 0, y: -70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p className="mt-4 text-2xl font-semibold">
          I Am Into <AnimatedRoles />
        </p>
        <button className="mt-6 bg-indigo-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-800 transition flex items-center gap-2">
          About Me
          <span className="text-lg border rounded-2xl text-blue-800 bg-white font-extrabold">
            <LuArrowDown />
          </span>
        </button>
      </motion.div>

      {/* Social Icons Below Button */}
      <SocialIcons />
    </div>
  );
};

export default HeroContent;

import React from "react";
import profileImg from "../../assets/profile_1.png";
import { motion } from "framer-motion"; 

const HeroImage = () => {
  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: -70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-[320px] h-[420px] rounded-[45%] overflow-hidden shadow-xs grayscale"
      >
        <img
          src={profileImg}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default HeroImage;

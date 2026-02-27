import ResumeButton from "./ResumeButton";
import { motion } from 'framer-motion';

const AboutDetails = () => {
  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: -70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl font-bold text-gray-900"
      >
        I'm <span className="font-bold">Shameer Ali</span>
      </motion.h3>

      <p className="text-lg font-semibold text-black mt-2">
        Front-End Developer
      </p>

      <motion.p
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-4 text-gray-950 text-sm font-semibold leading-relaxed max-w-md"
      >
        I am a Frontend React developer based in Peshawar, Pakistan, and an
        undergraduate student in Computer Science at the Agricultural University
        of Peshawar. I am passionate about building modern, responsive, and
        user-friendly web interfaces using React, HTML, CSS, and JavaScript, and
        I love turning designs into fully functional web applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: -70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-6 space-y-3 text-lg"
      >
        <p className="text-sm font-semibold">
          <span className="text-blue-700 text-sm font-semibold">Email :</span>{" "}
          alishameer251@gmail.com
        </p>
        <p className="text-sm font-semibold">
          <span className="text-blue-700 text-sm font-semibold">Place :</span>{" "}
          Peshawar, Pakistan
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-8"
      >
        <ResumeButton />
      </motion.div>
    </div>
  );
};

export default AboutDetails;

import React from "react";
import { useState } from "react";
import { FaHeadset } from "react-icons/fa";
import contactImg from "../../assets/contactImg.jpeg";
import { motion } from 'framer-motion';

import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";


const GetInTouch = () => {
  // for form submition

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xnjqqeld", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSuccess(true);
      form.reset();
    }
  };
  // form submition end

  return (
    <>
      <section
        id="contact"
        className="bg-[#e0e6f3] py-10 px-4 sm:px-6 lg:px-10"
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold flex items-center justify-center gap-3">
            <FaHeadset /> Get In <span className="text-purple-800">Touch</span>
          </h2>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* Left Illustration */}
          <div className="flex justify-center">
            <img
              src={contactImg}
              alt="Contact illustration"
              className="w-full max-w-sm lg:max-w-full h-auto"
            />
          </div>

          {/* Right Form */}
          <motion.form
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-5 w-full"
          >
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800" />
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="w-full pl-12 pr-4 py-3 rounded-md bg-[#eef3ff] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800" />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full pl-12 pr-4 py-3 rounded-md bg-[#eef3ff] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800" />
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                className="w-full pl-12 pr-4 py-3 rounded-md bg-[#eef3ff] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <FaCommentDots className="absolute left-4 top-4 text-gray-800" />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                className="w-full pl-12 pr-4 py-3 rounded-md bg-[#eef3ff] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg transition"
              >
                Submit <FaPaperPlane />
              </button>
            </div>
          </motion.form>
        </motion.div>
      </section>

      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 text-center w-80 shadow-xl">
            <h3 className="text-xl font-bold text-green-600">
              ✅ Submitted Successfully
            </h3>
            <p className="mt-2 text-gray-600">
              Your message was sent successfully!
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-4 bg-indigo-700 text-white px-5 py-2 rounded-lg"
            >
              Send Again
            </button>
          </div>
        </div>
      )}
    </>
  );
};


export default GetInTouch;

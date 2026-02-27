import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaArrowRight,
  FaAngleRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#020024] to-[#020024] text-white pt-7 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Shameer Ali <br /> Portfolio
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>

          <p className="mt-4 text-gray-300">
            Keep Rising 🚀 . Connect with me over live chat!
          </p>
        </div>

        {/* MIDDLE */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-1">
            {["Home", "About", "Skills", "Education", "Work", "Experience"].map(
              (item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 hover:text-amber-200 transition-colors text-gray-300 cursor-pointer"
                >
                  <FaAngleRight className="text-xl hover:bg-amber-200 transition-all text-black p-0.5 border rounded-full bg-white" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              <span>03333823012</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              <span>alishameer251@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>Peshawar, Pakistan</span>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            <SocialIcon
              icon={<FaLinkedinIn />}
              link="https://www.linkedin.com/in/shameer-ali-8420a6322"
            />

            <SocialIcon
              icon={<FaGithub />}
              link="https://github.com/shameer125"
            />

            <SocialIcon
              icon={<FaEnvelope />}
              link="mailto:alishameer251@gmail.com"
            />

            <SocialIcon
              icon={<FaFacebook />}
              link="https://www.facebook.com/shameer.ali.348734"
            />

            <SocialIcon
              icon={<FaInstagram />}
              link="https://instagram.com/shameerali5580"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/20 mt-12 py-4 text-center text-gray-300">
        Designed With ❤️ By{" "}
        <span className="text-yellow-400 font-semibold">Shameer ALi</span>
      </div>
    </footer>
  );
};


const SocialIcon = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#090979] hover:scale-110 hover:bg-yellow-400 hover:text-black transition duration-300"
  >
    {icon}
  </a>
);

export default Footer;

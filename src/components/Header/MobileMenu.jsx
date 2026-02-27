import React from "react";
import NavLink from "./NavLink";

const MobileMenu = ({ open, closeMenu }) => {
  return (
    <div
      className={`md:hidden transition-all duration-500 ease-in-out
    ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
    >
      <nav className="flex flex-col gap-4 px-6 py-6 bg-white shadow-lg text-gray-700 font-medium">
        <NavLink title="Home" href="#home" onClick={closeMenu} />
        <NavLink title="About" href="#about" onClick={closeMenu} />
        <NavLink title="Skills" href="#skills" onClick={closeMenu} />
        <NavLink title="Education" href="#education" onClick={closeMenu} />
        <NavLink title="Work" href="#projects" onClick={closeMenu} />
        <NavLink title="Experience" href="#experience" onClick={closeMenu} />
        <NavLink title="Contact" href="#contact" onClick={closeMenu} />
      </nav>
    </div>
  );
};

export default MobileMenu;

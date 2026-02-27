import React from "react";
import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header id="home" className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Logo />

        {/* Desktop Menu */}
        <NavLinks />

        {/* Hamburger */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Pass `open` prop to MobileMenu */}
      <MobileMenu open={open} closeMenu={() => setOpen(false)} />
    </header>
  );
};

export default Header;

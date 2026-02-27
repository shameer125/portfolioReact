import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";

const links = [
  { title: "Home", id: "home" },
  { title: "About", id: "about" },
  { title: "Skills", id: "skills" },
  { title: "Education", id: "education" },
  { title: "Work", id: "projects" },
  { title: "Experience", id: "experience" },
  { title: "Contact", id: "contact" },
];

const NavLinks = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      let current = "home";

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop - 120;
          if (window.scrollY >= sectionTop) {
            current = link.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="hidden md:flex gap-8 font-medium text-gray-700">
      {links.map((link) => (
        <NavLink
          key={link.id}
          title={link.title}
          href={`#${link.id}`}
          active={active === link.id}
        />
      ))}
    </nav>
  );
};

export default NavLinks;

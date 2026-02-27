import React from "react";

const NavLink = ({ title, href, active }) => {
  const handleClick = (e) => {
    if (href === "#home") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`cursor-pointer transition ${
        active ? "text-indigo-600" : "hover:text-indigo-600"
      }`}
    >
      {title}
    </a>
  );
};

export default NavLink;

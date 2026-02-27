import { useEffect, useState } from "react";

const roles = [
  "Web Designing",
  "Front-End Developer",
  "UI/UX Designer",
  "React Developer",
];

const AnimatedRoles = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blinking
  useEffect(() => {
    const blink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  // Typing effect
  useEffect(() => {
    if (charIndex < roles[index].length) {
      const typeTimeout = setTimeout(() => {
        setDisplayText((prev) => prev + roles[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(typeTimeout);
    } else {
      // Word finished → pause before next word
      const pauseTimeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 1000); // 1-second pause before next word
      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, index]);

  return (
    <span className="inline-flex items-center text-red-600 font-bold tracking-wide">
      {displayText}
      <span className="ml-1">{showCursor && "|"}</span>
    </span>
  );
};

export default AnimatedRoles;

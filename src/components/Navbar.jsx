import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Stack", path: "#stack" },
  { title: "Contact", path: "#contact" },
];

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((prev) => !prev);
  const closeNav = () => setNavOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center text-white font-bold">
      {/* Desktop Navbar */}
      <div className="hidden md:flex border border-white/20 mt-6 backdrop-blur-3xl rounded-3xl p-3 max-w-[450px] mx-auto">
        <ul className="flex space-x-8">
          {navLinks.map(({ title, path }) => (
            <li key={title}>
              <a
                href={path}
                className="hover:text-white/50 transition-all duration-300 ease-in-out"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-6 border border-white/70 rounded-lg p-2 text-white/70 transition-all hover:bg-white/10"
        aria-label={navOpen ? "Close menu" : "Open menu"}
      >
        {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>

      {/* Mobile Navbar */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-md transition-transform duration-300 ${
          navOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-8 h-full">
          {navLinks.map(({ title, path }) => (
            <li key={title}>
              <a
                href={path}
                onClick={closeNav}
                className="text-4xl hover:text-gray-400 transition-all"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

import React from "react";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="py-8" id="contact">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div>
            <h2 className="md:text-7xl text-4xl font-bold mb-10 text-white/50">
              Get in touch
            </h2>
            <a
              className="md:text-7xl text-4xl font-semibold text-white underline decoration-gray-400 decoration-2
                                    underline-offset-4 hover:decoration-gray-200 transition duration-300"
              href="mailto:krishnamehta0310@gmail.com"
            >
              krishnamehta0310@gmail.com
            </a>
          </div>
        </div>

        <div className="relative z-10 text-center mt-8 py-12">
          <h1 className="hidden md:block text-[10rem] md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10">
            KRISHNA
          </h1>

          <h1 className="md:hidden relative text-9xl md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10">
            KRISHNA
            <br />
            MEHTA
          </h1>
        </div>

        <div className="relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          <p className="text-gray-200 caption text-n-4 lg:block">
            Made by Krishna {"<3"}
          </p>

          <ul className="flex gap-5 flex-wrap">
            <a
              href="https://github.com/KrishnaM0310"
              aria-label="GitHub"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiFillGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-mehta-lnkdin/"
              aria-label="Linkedin"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiOutlineLinkedin size={30} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiFillInstagram size={30} />
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};
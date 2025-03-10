import React from "react";
import { motion } from "framer-motion";
import profilepic from "../assets/images/memojipfp.png";

export const Hero = () => {
  const handleResumeClick = () => {
    window.open("/Krishna_Software_Engineer_Resume_Website (1).pdf", "_blank");
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#000,#1e0717_35%,#8A2065_67%,#f26d9e_85%)]">
      {/* Background Glow */}
      <div
        className="absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 
                      bg-[radial-gradient(closest-side,#000_85%,#f26d9e)] top-[450px]
                      border-[1px] border-[#8CD6DE]/30"
      />
      
      {/* Content */}
      <div className="container relative mx-auto px-4 pt-12 pb-24">
        <div className="flex flex-col items-center justify-center text-center z-10">
          
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8 mt-24"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#f26d9e]/20 to-transparent rounded-full blur-3xl"></div>
            <img 
              src={profilepic}
              alt="Krishna Mehta"
              className="w-[250px] relative z-10"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">
              Hi, I am <br /> Krishna <span className="text-[#f26d9e]">Mehta</span>
            </h1>
            <p className="text-lg text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
              I'm a Systems Design Engineering student at the University of Waterloo! Besides learning software development, my interests include dance, music, art, and traveling. Feel free to reach out to chat or discuss opportunities!
            </p>

            {/* Buttons */}
            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handleResumeClick}
                className="relative z-10 inline-flex items-center justify-center px-6 py-3 bg-[#f26d9e] rounded-full font-medium hover:bg-pink-600 transition-colors"
              >
                My Resume
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handleContactClick}
                className="relative z-10 inline-flex items-center justify-center px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Blur Effect */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#f26d9e]/10 rounded-full blur-xl"
      />
    </div>
  );
};

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import proj1 from "../assets/images/neuralnetwork.jpg";
import proj2 from "../assets/images/neurative.webp";
import proj3 from "../assets/images/walmart.png";
import proj4 from "../assets/images/switchhealth.jpg";
import proj5 from "../assets/images/websitepic.png";

import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";


const projects = [
  {
    title: "Neural Network Projects",
    desc: "These are a collection of Neural Network projects that I have completed, or am currently working on! Feel free to check them out!",
    devstack: "Python",
    link: "https://github.com/KrishnaM0310/Neural-Network-Projects",
    git: "https://github.com/KrishnaM0310/Neural-Network-Projects",
    src: proj1,
    type: "Backend",
  },
  {
    title: "Neurative",
    desc: "Neurative is a research project I completed with 2 other students, focusing on the lack of medical treatments for Epilepsy, and use of acoustic hologram treatment to improve patient care and treatments.",
    git:"https://github.com/KrishnaM0310",
    link: "https://medium.com/@krishnamehta0310/neurative-curing-epilepsy-using-acoustic-holograms-c75a5acfda85",
    src: proj2,
    type: "Research",
  },
  {
    title: "Walmart Consulting",
    desc: "I, alongside other students, consulted with executives at Walmart BlueLabs, to discuss possible ways that Walmart could improve their customer's digital experience.",
    devstack: "Figma",
    link: "https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2F30JR89knvxYxn4UAMINwFtXNMyt2%2FWalmart%20.pptx%20.pdf?alt=media&token=7c740450-c1f1-419f-8233-2ea5b4d248e9",
    git: "#",
    src: proj3,
    type: "Project Management/Consulting",
  },
  {
    title: "Switchhealth Consulting",
    desc: "I, alongisde four other students, consulted with executives at SwitchHealth Canada about at-home prostate cancer testing kits.",
    devstack: "Figma",
    link: "https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2FEqgODVr2eNTjKcO81i2jHW1g1Ni1%2FSwitch%20Health%20TKS%20Challenge.pdf?alt=media&token=c36797ca-f12e-48d0-91bc-28d05f7820b4",
    git: "#",
    src: proj4,
    type: "Project Management/Consulting",
  },
  {
    title: "Portfolio Website",
    desc: "The website you are on right now!",
    devstack: "React, Tailwind CSS, Javascript, Framer Motion",
    link: "#",
    git: "https://github.com/KrishnaM0310/Krishna-Portfolio/tree/main",
    src: proj5,
    type: "frontend",
  },
];

export const Portfolio = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="text-white py-24 md:py-64" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16">
          My <span className="text-pink-300">Projects</span>
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div
                className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-4xl font-semibold">{project.title}</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-light text-pink-300">
                    0{index + 1}
                  </span>
                  <FiChevronDown 
                    className={`w-6 h-6 transform transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6  bg-black/20 border border-white/10"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="text-white/70 mb-4">{project.desc}</p>
                        <p className="text-pink-300 font-medium mb-2">
                          Stack: {project.devstack}
                        </p>
                        <p className="text-pink-400/60 font-medium mb-4 capitalize">
                          Type: {project.type}
                        </p>
                        <div className="flex justify-start items-center space-x-4">
                          <a
                            href={project.link}
                            className="text-pink-400 hover:text-blue-300 transition-colors"
                          >
                            <HiOutlineExternalLink />
                          </a>
                          <a
                            href={project.git}
                            className="text-gray-400 hover:text-gray-300 transition-colors"
                          >
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
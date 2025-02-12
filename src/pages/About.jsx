import React from "react";

import waterlooLogo from "../assets/images/waterloologo.png";
import krishnaImage from "../assets/images/krishna.png";
import codingpicture from "../assets/images/coding.jpeg";

export const About = () => {
    return (
        <section id="about" className="text-white p-8">
            <h2 className="text-6xl font-bold mb-8">
                About <span className="text-pink-300">Me</span>
            </h2>
            
            {/* Background, Expertise, and Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Background Section */}
                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">01. Background</h3>
                    <p className="text-white/50 mb-6">
                        I'm a passionate developer with a love for creating innovative solutions 
                        and learning new technologies. My journey in tech started through a robotics competition 
                        in sixth grade, and ever since then, I have continued to love learning and building with tech!
                    </p>

                    <div className="mt-4 relative border border-white/20 rounded-lg p-4 h-[400px] overflow-hidden">
                        <img
                            src={krishnaImage}
                            alt="Picture of me"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Expertise Section */}
                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
                    <p className="text-3xl text-white/50">
                        System Design Engineering @ UWaterloo ~ <span className="text-2xl">Bachelor of Applied Science</span>
                    </p>
                    <div className="mt-4 relative rounded-lg p-4 h-[400px] overflow-hidden">
                        <img
                            src={waterlooLogo}
                            alt="University of Waterloo Logo"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Skills Section */}
                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
                    <p className="text-white/50 mb-4">
                        I love to learn new technologies, and am constantly expanding
                         my skill set to explore and find what I love! Skills I currently know are:
                    </p>
                    <div className="grid grid-cols-1 text-center gap-4">
                        <div className="border border-white/20 rounded-lg p-3">
                            <h4 className="text-pink-300 font-medium mb-2">Frontend</h4>
                            <ul className="text-white/50 space-y-1 text-sm">
                                <li>React.js</li>
                                <li>Next.js</li>
                                <li>JavaScript</li>
                                <li>Tailwind CSS</li>
                                <li>Framer Motion</li>
                            </ul>
                        </div>
                        <div className="border border-white/20 rounded-lg p-3">
                            <h4 className="text-pink-300 font-medium mb-2">Backend</h4>
                            <ul className="text-white/50 space-y-1 text-sm">
                                <li>Node.js</li>
                                <li>Python</li>
                                <li>C++</li>
                                <li>Java</li>
                                <li>SQL</li>
                                <li>AWS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Approach and Goals Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {/* Approach Section */}
                <div className="border border-white/20 rounded-lg p-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Front-end
                            </label>
                            <div className="w-full bg-white/10 rounded-full h-2">
                                <div
                                    className="bg-pink-300 h-2 rounded-full"
                                    style={{ width: "50%" }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Back-end</label>
                            <div className="w-full bg-white/10 rounded-full h-2">
                                <div
                                    className="bg-pink-300 h-2 rounded-full"
                                    style={{ width: "45%" }}
                                ></div>
                            </div>
                        </div>  
                    </div>
                    <h3 className="text-2xl font-bold mt-4 mb-2">04. Approach</h3>
                    <p className="text-white/50">
                    I love learning, whether it be through my Co-op experience, School or through online courses. Currently, I'm learning:
                        <ol className="text-white/50 ">
                            <li>~ Accesibilty in web development through my current co-op</li>
                            <li>~ Deepening my Python knowledge through online courses</li>
                            <li>~ Learning Swift to explore app development</li>
                            <li>~ Back-end development through Hackathons & Personal Projects</li>
                            <li>~ and more!</li>
                        </ol>
                    </p>
                </div>

                {/* Goals Section */}
                <div className="border border-white/20 rounded-lg p-6 flex flex-col justify-between">
                    <div className="relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden">
                        <img
                            src={codingpicture}
                            alt="Personal Project"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">05. Goals</h3>
                        <p className="text-white/50">
                            My goal is to continuously grow as a developer, tackling
                            challenging projects, and contributing to the tech community. I'm
                            always excited to learn new technologies and push the boundaries
                            of what's possible with technology!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

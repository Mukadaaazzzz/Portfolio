import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaGit } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiMui, SiChakraui, SiSupabase } from 'react-icons/si';

const skills = {
  frontend: [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
    { name: "React Native", icon: FaReact, color: "text-blue-500" },
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-500" },
    { name: "Python", icon: FaPython, color: "text-yellow-300" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  ],
  other: [
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
    { name: "Material UI", icon: SiMui, color: "text-blue-600" },
    { name: "Chakra UI", icon: SiChakraui, color: "text-teal-500" },
    { name: "Supabase", icon: SiSupabase, color: "text-green-500" },
    { name: "Git", icon: FaGit, color: "text-green-300" },
    { name: "Problem Solving", icon: "🧠", color: "text-yellow-400" },
    { name: "Collaboration", icon: "👥", color: "text-blue-300" },
  ]
};

const SkillCard = ({ name, Icon, color }) => (
  <motion.div
    className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center justify-center"
    whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
    whileTap={{ scale: 0.95 }}
  >
    {typeof Icon === 'string' ? (
      <span className="text-4xl mb-3">{Icon}</span>
    ) : (
      <Icon className={`text-5xl mb-3 ${color}`} />
    )}
    <span className="text-sm font-medium text-white">{name}</span>
  </motion.div>
);

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id ="about">
      <div className="bg-gradient-to-br from-green-700 via-purple-900 to-pink-800 min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center"
        >
          {/* Left Side with Text and Button */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h2 className="text-5xl font-bold text-center lg:text-left mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">About Me</h2>
            <p className="text-xl text-center lg:text-left mb-8 leading-relaxed">
              I'm Mukadaz Taofeeq, a passionate Fullstack Developer on a mission to transform ideas into digital reality. With a robust toolkit spanning frontend and backend technologies, I craft innovative solutions that push the boundaries of web development.
            </p>
            <p className="text-xl text-center lg:text-left mb-12 leading-relaxed">
              Leveraging experience in e-commerce platforms, VR, and AI-based projects, I bring a wealth of expertise in solving complex problems and delivering exceptional user experiences.
            </p>
            <div className="text-center lg:text-left">
              <motion.a
                href="#contact"
                className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
            </div>
          </div>

          {/* Right Side with Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <motion.img
              src="/image.jpg"  // Replace with your actual image path
              alt="Inspiring representation"
              className="w-full max-w-md rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-purple-400">My Tech Arsenal</h3>
          <div className="flex justify-center space-x-4 mb-12">
            {Object.keys(skills).map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-full text-lg font-bold transition-colors duration-300 ${
                  activeTab === category
                    ? 'bg-white text-blue-900'
                    : 'bg-blue-800 bg-opacity-50 hover:bg-opacity-75'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
            >
              {skills[activeTab].map(({ name, icon, color }) => (
                <SkillCard key={name} name={name} Icon={icon} color={color} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

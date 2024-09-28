import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    title: "Frontend Developer",
    company: "Anal Horology",
    duration: "2023 - 2024",
    techStack: ["Next.js", "React", "Material UI"],
    description: "Built the company's website, focusing on design and performance.",
    liveDemo: "https://analhorology.com.ng",
  },
  {
    title: "Fullstack Developer",
    company: "Calmpus (E-commerce startup)",
    duration: "2024 - Present",
    techStack: ["React", "Chakra UI", "Supabase", "Postgres"],
    description: "Led the development of the platform from frontend to backend.",
    liveDemo: "https://calmpus.netlify.app",
  },
  {
    title: "Frontend Developer",
    company: "Yemidyn Fashion Brand",
    duration: "2024",
    techStack: ["React", "Material UI"],
    description: "Developed the fashion website, creating an appealing UI/UX.",
    liveDemo: "https://yemidyn.com",
  },
];

const projects = [
  {
    title: "Medverse24",
    description: "AI-powered platform revolutionizing medicine.",
    techStack: ["React", "Node.js", "Gemini API"],
    liveDemo: "https://medverseproject.netlify.app",
    githubLink: "https://github.com/Mukadaaazzzz/medverseproject",
  },
];

const ExperienceCard = ({ experience }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:-translate-y-2">
    <h3 className="text-xl font-bold text-gray-800">{experience.title}</h3>
    <p className="text-gray-600">{experience.company} • {experience.duration}</p>
    <p className="mt-4 text-gray-700">{experience.description}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {experience.techStack.map((tech, index) => (
        <span key={index} className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
          {tech}
        </span>
      ))}
    </div>
    <a
      href={experience.liveDemo}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
    >
      View Project
    </a>
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:-translate-y-2">
    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
    <p className="mt-2 text-gray-700">{project.description}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {project.techStack.map((tech, index) => (
        <span key={index} className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
          {tech}
        </span>
      ))}
    </div>
    <div className="mt-6 flex justify-between">
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors"
      >
        GitHub
      </a>
      <a
        href={project.liveDemo}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Live Demo
      </a>
    </div>
  </div>
);

const ContactSection = () => (
  <div className="mt-12 text-center">
    <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
    <div className="flex justify-center space-x-4">
      {['GitHub'].map((platform) => (
        <a
          key={platform}
          href={`https://${platform.toLowerCase()}.com/Mukadaaazzzz`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
        >
          <span className="sr-only">{platform}</span>
          <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
      ))}
    </div>
  </div>
);

const EnhancedExperienceProjectSection = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {['Experience', 'Projects'].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === tab.toLowerCase()
                    ? 'bg-white text-gray-900'
                    : 'bg-transparent text-white hover:bg-white/10'
                } ${tab === 'Experience' ? 'rounded-l-lg' : 'rounded-r-lg'} focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "experience" && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {experiences.map((exp, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                    <ExperienceCard experience={exp} />
                  </motion.div>
                ))}
              </div>
            )}
            {activeTab === "projects" && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <ContactSection />

        <div className="mt-12 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-4 text-white">
          <h3 className="text-lg font-semibold mb-2">Stay Updated!</h3>
          <p>New projects and experiences are constantly being added. Check back often to see what's new!</p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedExperienceProjectSection;
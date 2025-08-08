import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
} from "react-icons/si";
import "./Projects.css";
import proyecta from "../assets/ProyectaMinds.png";
import scamshield from "../assets/scam.png";
import portfolio from "../assets/portfolio.png";
import task from "../assets/task.png";
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Proyecta Minds",
      description:
        "- Developed Proyecta Minds, a web-based project management platform for college students combining features of Trello and Jira to facilitate collaboration. using the MERN stack and Docker, featuring task management and collaboration tools.",
      image: proyecta,
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Docker"],
      icons: [<FaReact />, <FaNodeJs />, <FaDatabase />],
      category: "fullstack",
      github: "https://github.com/07Mkmohan/ProyectaMinds",
      live: "https://example.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: task,
      technologies: ["React", "TypeScript", "Node.js", "Socket.io"],
      icons: [<FaReact />, <SiTypescript />, <FaNodeJs />],
      category: "fullstack",
      github: "https://github.com/07Mkmohan/Task-Management",
      live: "https://example.com",
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and Framer Motion for smooth animations and interactions.",
      image: portfolio,
      technologies: ["React", "Framer Motion", "CSS3"],
      icons: [<FaReact />],
      category: "frontend",
      github: "hhttps://github.com/07Mkmohan/MyPortfolio.git",
      live: "https://example.com",
      featured: false,
    },
    {
      id: 4,
      title: "ScamShield",
      description:
        "Created and maintained websites using HTML, CSS, and JavaScript. The website which provides the cyber attack related Information. In this i Worked with real time cyber-attack to understand threats and deliver custom solutions to that problem.",
      image: scamshield,
      technologies: ["HTML", "JavaScript", "CSS3"],
      icons: [<FaReact />],
      category: "frontend",
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and learning experience.
          </p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${
                activeFilter === filter.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? "featured" : ""}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  {project.featured && (
                    <span className="featured-badge">Featured</span>
                  )}
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    <div className="tech-icons">
                      {project.icons.map((icon, iconIndex) => (
                        <span key={iconIndex} className="tech-icon">
                          {icon}
                        </span>
                      ))}
                    </div>
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

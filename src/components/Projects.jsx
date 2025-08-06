import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiNextdotjs } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration using Stripe.",
      image: "https://picsum.photos/400/250?random=1",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      icons: [<FaReact />, <FaNodeJs />, <FaDatabase />],
      category: "fullstack",
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://picsum.photos/400/250?random=2",
      technologies: ["React", "TypeScript", "Node.js", "Socket.io"],
      icons: [<FaReact />, <SiTypescript />, <FaNodeJs />],
      category: "fullstack",
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Framer Motion for smooth animations and interactions.",
      image: "https://picsum.photos/400/250?random=3",
      technologies: ["React", "Framer Motion", "CSS3"],
      icons: [<FaReact />],
      category: "frontend",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful UI.",
      image: "https://picsum.photos/400/250?random=4",
      technologies: ["React", "JavaScript", "CSS3"],
      icons: [<FaReact />],
      category: "frontend",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      id: 5,
      title: "Blog API",
      description: "A RESTful API for a blog platform with user authentication, CRUD operations, and image upload functionality.",
      image: "https://picsum.photos/400/250?random=5",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      icons: [<FaNodeJs />, <SiPostgresql />],
      category: "backend",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      id: 6,
      title: "Social Media Clone",
      description: "A social media platform with features like posts, comments, likes, user profiles, and real-time notifications.",
      image: "https://picsum.photos/400/250?random=6",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      icons: [<SiNextdotjs />, <SiTypescript />, <SiMongodb />],
      category: "fullstack",
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
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
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  {project.featured && <span className="featured-badge">Featured</span>}
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
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
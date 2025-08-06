import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaDocker, FaAws, FaPython, FaJava, FaPhp
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiMysql, SiRedux, SiNextdotjs } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "#1572B6" },
        { name: "JavaScript", icon: <FaJs />, level: 88, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, level: 85, color: "#3178C6" },
        { name: "React", icon: <FaReact />, level: 92, color: "#61DAFB" },
        { name: "Redux", icon: <SiRedux />, level: 80, color: "#764ABC" },
        { name: "Next.js", icon: <SiNextdotjs />, level: 85, color: "#000000" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 88, color: "#339933" },
        { name: "Python", icon: <FaPython />, level: 85, color: "#3776AB" },
        { name: "Java", icon: <FaJava />, level: 80, color: "#ED8B00" },
        { name: "PHP", icon: <FaPhp />, level: 75, color: "#777BB4" }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 85, color: "#47A248" },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 80, color: "#336791" },
        { name: "MySQL", icon: <SiMysql />, level: 82, color: "#4479A1" },
        { name: "Git", icon: <FaGitAlt />, level: 90, color: "#F05032" },
        { name: "Docker", icon: <FaDocker />, level: 75, color: "#2496ED" },
        { name: "AWS", icon: <FaAws />, level: 70, color: "#FF9900" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            My technical expertise and proficiency in various technologies
          </p>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-bar"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color
                        }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="additional-skills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Additional Skills</h3>
          <div className="skills-tags">
            <span className="skill-tag">RESTful APIs</span>
            <span className="skill-tag">GraphQL</span>
            <span className="skill-tag">Jest</span>
            <span className="skill-tag">Cypress</span>
            <span className="skill-tag">Webpack</span>
            <span className="skill-tag">Babel</span>
            <span className="skill-tag">Sass/SCSS</span>
            <span className="skill-tag">Tailwind CSS</span>
            <span className="skill-tag">Material-UI</span>
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">Agile/Scrum</span>
            <span className="skill-tag">CI/CD</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 
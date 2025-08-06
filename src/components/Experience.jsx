import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Experience.css";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");

  const workExperience = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description:
        "Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led a team of 5 developers on a major project",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
      ],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      Project: "Proyecta Minds",
      period: "2020 - 2022",
      location: "New York, NY",
      description:
        "- Developed Proyecta Minds, a web-based project management platform for college students combining features of Trello and Jira to facilitate collaboration. using the MERN stack and Docker, featuring task management and collaboration tools. Integrated an in-browser code editor supporting multiple languages (C, C++, Java, Python, PHP, JavaScript) and a collaboration request feature to enhance teamwork and productivity.",
      technologies: ["React", "Node.js", "Mongodb", "Express.js", "Docker"],
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "WebTech Solutions",
      period: "2019 - 2020",
      location: "Austin, TX",
      description:
        "Created and maintained websites using HTML, CSS, and JavaScript. The website which provides the cyber attack related Information. In this i Worked with real time cyber-attack to understand threats and deliver custom solutions to that problem.",
      technologies: ["HTML", "JavaScript", "CSS3", "HTML5"],
      achievements: [
        "Developed 10+ responsive websites",
        "Improved user experience scores by 25%",
        "Optimized website performance and accessibility",
      ],
    },
  ];

  const education = [
    {
      id: 1,
      degree: "12th",
      school: "BRPU Athani",
      period: "2018 - 2020",
      location: "Athani , Karnataka",

      achievements: ["Pecentage: 87%"],
    },
    {
      id: 2,
      degree: "Bachelor of Computer Science",
      school:
        "D.Y.Patil College Of Engineering And Technology, Kasaba Bawada Kolhapur",
      period: "2021 - 2025",
      location: "Kolhapur, Maharashtra",
      description:
        "Major in Computer Science with focus on Software Engineering and Database Systems.",
      achievements: ["GPA: 8.9/10"],
    },
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and academic background
          </p>
        </motion.div>

        <motion.div
          className="experience-tabs"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <button
            className={`tab-btn ${activeTab === "work" ? "active" : ""}`}
            onClick={() => setActiveTab("work")}
          >
            <FaBriefcase /> Work Experience
          </button>
          <button
            className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            <FaGraduationCap /> Education
          </button>
        </motion.div>

        <div className="timeline-container">
          {activeTab === "work" ? (
            <div className="timeline">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="timeline-item"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3 className="timeline-title">{job.title}</h3>
                      <div className="timeline-meta">
                        <span className="company">{job.company}</span>
                        <div className="timeline-details">
                          <span>
                            <FaCalendarAlt /> {job.period}
                          </span>
                          <span>
                            <FaMapMarkerAlt /> {job.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="timeline-description">{job.description}</p>

                    <div className="timeline-technologies">
                      {job.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="timeline-achievements">
                      <h4>Key Achievements:</h4>
                      <ul>
                        {job.achievements.map(
                          (achievement, achievementIndex) => (
                            <li key={achievementIndex}>{achievement}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="timeline-item"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3 className="timeline-title">{edu.degree}</h3>
                      <div className="timeline-meta">
                        <span className="company">{edu.school}</span>
                        <div className="timeline-details">
                          <span>
                            <FaCalendarAlt /> {edu.period}
                          </span>
                          <span>
                            <FaMapMarkerAlt /> {edu.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="timeline-description">{edu.description}</p>

                    <div className="timeline-achievements">
                      <h4>Key Achievements:</h4>
                      <ul>
                        {edu.achievements.map(
                          (achievement, achievementIndex) => (
                            <li key={achievementIndex}>{achievement}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;

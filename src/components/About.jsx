import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import "./About.css";

const About = () => {
  const downloadResume = () => {
    // Add your resume download link here
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Add your resume file
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me better and understand my journey in software
            development
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Who I Am</h3>
            <p>
              I'm a passionate Full Stack Developer with a strong foundation in
              modern web technologies. I love creating applications that not
              only look great but also provide exceptional user experiences.
            </p>

            <p>
              I've worked on various projects in college, ranging from small
              business websites to complex enterprise applications. I'm always
              eager to learn new technologies and best practices to stay current
              in this ever-evolving field.
            </p>

            <h3>My Approach</h3>
            <p>
              I believe in writing clean, maintainable code and following
              industry best practices. My development process involves thorough
              planning, testing, and continuous improvement to deliver
              high-quality solutions that meet client needs and exceed
              expectations.
            </p>

            {/* <button className="btn btn-primary" onClick={downloadResume}>
              <FaDownload /> Download Resume
            </button> */}
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="about-card">
              <div className="card-header">
                <h4>Personal Info</h4>
              </div>
              <div className="card-content">
                <div className="info-item">
                  <strong>Name:</strong>
                  <span>Mohan Chhapari</span>
                </div>
                <div className="info-item">
                  <strong>Email:</strong>
                  <span>chhaparimk162511@gmail.com</span>
                </div>
                <div className="info-item">
                  <strong>Location:</strong>
                  <span>Kolhapur, Maharstra</span>
                </div>
                <div className="info-item">
                  <strong>Experience:</strong>
                  <span>Fresher</span>
                </div>
                <div className="info-item">
                  <strong>Education:</strong>
                  <span>Bachelor's in Computer Science</span>
                </div>
                <div className="info-item">
                  <strong>Languages:</strong>
                  <span>English , Hindi , Marathi</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

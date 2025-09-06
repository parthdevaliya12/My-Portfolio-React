import React from "react";
import { motion } from "framer-motion";
import "../App.css"
import p1 from "../assert/p1.png"
import p2 from "../assert/p2.png"
import p3 from "../assert/p3.png"

const projects = [
  {
    title: "Online Air Conditioner Shopping System",
    description: "An e-commerce website for air conditioners with product details and cart features.",
    image:p1
  },
  {
    title: "Online Television Shopping System",
    description: "An e-commerce website for television with product details and cart features.",
    image: p2
  },
  {
    title: "Online Men Perfumes Selling System",
    description: "An e-commerce website for mens perfume with product details and cart features.",
    image: p3
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} style={{ width: "100%", borderRadius: "8px" }} />
            <h3 style={{color:"transparent",background:"linear-gradient(45deg, #ff6600, #1405e8)",backgroundClip:"text"
}}>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
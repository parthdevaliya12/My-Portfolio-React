import React from "react";
import { motion } from "framer-motion";
import "../App.css"
import c1 from "../assert/stackdot.png"
import c2 from "../assert/cc.png"
import c3 from "../assert/cs.png"
import c4 from "../assert/mern.png"
import { image } from "framer-motion/client";

const certificate = [
 
  {
    image: c2
  },
  {
    image: c3
  },
  {
    image:c4
  }
];

const Certificate = () => {
  return (
    <section id="certificate">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Certificate
      </motion.h2>

      <div className="projects-grid">
        {certificate.map((project, index) => (
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
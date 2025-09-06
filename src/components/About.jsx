import React from "react";
import { motion } from "framer-motion";
import "../App.css"

const About = () => {
  return (
    <section id="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Hi,I'm Parth, a passionate web developer with experience in building
        responsive and user-friendly web applications.I specialize in HTML/CSS
        , JavaScript, React, PHP Java, Node and to create modern and interactive websites.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        I love learning new technologies and improving my skills to deliver
        high-quality projects that provide great user experiences.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        My focus is on creating efficient, scalable, and maintainable code while
        ensuring beautiful UI/UX designs.
      </motion.p>
    </section>
  );
};

export default About;
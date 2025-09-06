// import React from "react";
// import { motion } from "framer-motion";
// import "../App.css"

// const skills = [
//   { name: "HTML", level: 80 },
//   { name: "CSS", level: 80},
//   { name: "JavaScript", level: 60 },
//   { name: "React", level: 50 },
//   { name: "Node", level: 50 },
//   { name: "PHP", level: 70 },
//   { name: "MySql", level: 60 },
// ];

// const Skills = () => {
//   return (
//     <section id="skills">
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}>
//           My Skills
//       </motion.h2>

//       {skills.map((skill, index) => (
//         <motion.div
//           key={index}
//           style={{ marginBottom: "20px", textAlign: "left" }}
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: index * 0.2 }}>
//           <strong>{skill.name}</strong>
//           <div className="skill-bar">
//             <motion.div
//               className="skill-fill"
//               initial={{ width: 0 }}
//               whileInView={`{ width: ${skill.level}%  }`}
//               transition={{ duration: 1 }}></motion.div>
//           </div>
//           <span>{skill.level}%</span>
//         </motion.div>
//       ))}
//     </section>
//   );
// };

// export default Skills;
import React from "react";
import { motion } from "framer-motion";
import "../App.css"


const sk = [
  {
    title:"Frontend",
    data:"HTML/CSS | Javascript | React | Tailwind",

  },
  {
    title:"Backend",
    data:"PHP | Java | Node",
  },
  {
    title:"Database",
    data:"MySql | MongoDB | SQLite",
  },
  {
    title:"Version Control",
    data:"Github | Git ",
  },
   {
    title:"Deployment",
    data:"Netlify | Vercel",
  },
   {
    title:"Others",
    data:"Problem Solving | Debugging | Communication",
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>

      <div className="projects-grid">
        {sk.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* <img src={project.image} alt={project.title} style={{ width: "100%", borderRadius: "8px" }} /> */}
            <h3 style={{color:"transparent",background:"linear-gradient(45deg, #ff6600, #1405e8)",backgroundClip:"text"
}}>{project.title}</h3>
              <p>{project.data}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
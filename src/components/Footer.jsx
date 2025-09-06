import React from "react";
import { motion } from "framer-motion";
import "../App.css"

const Footer = () => {
  return (
    <motion.footer
      style={{ padding: "20px", textAlign: "center", borderTop: "1px solid gray" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p>© {new Date().getFullYear()} All right reserved | Parth Devaliya</p>
    </motion.footer>
  );
};

export default Footer;
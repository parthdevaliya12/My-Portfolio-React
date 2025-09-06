import React from 'react'
import { motion, transform } from "framer-motion";
import "../App.css"
import profile from "../assert/me.jpg"

const LazyImg = () => {
  return (
    <div>
       <motion.img
        src={profile}
        alt="Profile"
        style={{ border:"solid 2px #1405e8", borderRadius: "50%", width: "150px",padding:"5px 5px"}}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
  
      />
    </div>
  )
}

export default LazyImg

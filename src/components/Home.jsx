import React, { Suspense } from "react";
import { motion, transform } from "framer-motion";
import "../App.css"
import profile from "../assert/me.jpg"
import {ReactTyped,Typed} from "react-typed"

const Home = () => {
  const ProfileImg = React.lazy(()=>import("./LazyImg"))
  return (
    <section id="home">
      <Suspense fallback={<p></p>}>
        <ProfileImg/>
      </Suspense>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
       Hi,There I'm Parth Devaliya
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
         <h4 style={{background:"linear-gradient(45deg, #ff6600, #1405e8)",color:"transparent",backgroundClip:"text"}}>
        <ReactTyped 
              strings={['Web Developer','Full Stack Developer']}
              typeSpeed={60}
              backSpeed={40}
              loop
              />
          </h4>

      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        I build modern, responsive, and user-friendly websites.
      </motion.p>

      <motion.a
        className="cv"
        href="/Resume.pdf "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{height:"10px",width:"200px",background:"linear-gradient(45deg, #ff6600, #1405e8)",textDecoration:"none",color:"white",padding:"10px 20px",borderRadius:"6px",position:"relative",bottom:"-30px"
        }}
      download>
        Download Resume
      </motion.a>
    
    </section>
  );
};

export default Home;
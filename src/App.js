
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import {Toaster} from "react-hot-toast"
import Certificate from "./components/Certificate";


function App() {
  const [darkMode,setDarkMode] = useState(true)
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Toaster position="top-center" reverseOrder={false}/>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certificate/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

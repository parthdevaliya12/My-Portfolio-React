import React from 'react';
import "../App.css"

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <h2>My Resume</h2>
      <p>Download my latest resume below:</p>
      <a href="/resume.pdf" className="resume-button" download>
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
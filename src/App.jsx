import React from 'react';
import './index.css';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Workexperiences from './components/Workexperiences';
import Educations from './components/Educations';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="container nav-container">
            <a href="#about" className="nav-logo">
              <span>Tracy Thanda Aye</span>
            </a>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section id="about">
          <Aboutme />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Workexperiences />
        </section>

        <section id="education">
          <Educations />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;

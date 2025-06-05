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
        <title>Thanda Aye @ Tracy| Portfolio</title>
        <nav class="navbar">
          <div class="container nav-container">
            {/* <div class="logo">Thanda Aye @ Tracy</div> */}
            <ul class="nav-links">
              <li><a href="#about">ME</a></li>
              <li><a href="#skills">SKILLS</a></li>
              <li><a href="#workexperiences">WORK EXPERIENCES</a></li>
              <li><a href="#educations">EDUCATIONS</a></li>
              <li><a href="#contact">CONTACT</a></li>
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

        <section id="workexperiences">
          <Workexperiences />
        </section>

        <section id="educations">
          <Educations />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App

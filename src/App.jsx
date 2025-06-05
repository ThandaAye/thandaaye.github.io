import React from 'react';
import './index.css';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Aboutme from './components/Aboutme';

function App() {
  return (
    <div>
      <header>
        <title>Thanda Aye | Portfolio</title>
        <nav class="navbar">
          <div class="container nav-container">
            <div class="logo">Thanda Aye</div>
            <ul class="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact" class="contact-btn">Contact</a></li>
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

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App

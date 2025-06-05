import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:thanda.aye03@gmail.com">thanda.aye03@gmail.com</a>
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/thandaaye/" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
          </a>
          <a href="https://github.com/ThandaAye" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
          </a>
          <a href="https://medium.com/@thanda.aye" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/medium.svg" alt="Medium" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

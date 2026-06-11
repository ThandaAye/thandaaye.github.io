import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <p className="section-label">// contact</p>
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-divider" style={{ margin: '0 auto 3rem' }} />

        <div className="contact-cards">
          <a href="mailto:tracy.thandaaye@gmail.com" className="contact-card">
            <span className="contact-card-icon">✉️</span>
            <span className="contact-card-label">Email</span>
            <span className="contact-card-value">tracy.thandaaye@gmail.com</span>
          </a>

          <a
            href="https://linkedin.com/in/thandaaye"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-card-icon">💼</span>
            <span className="contact-card-label">LinkedIn</span>
            <span className="contact-card-value">in/thandaaye</span>
          </a>

          <a
            href="https://github.com/ThandaAye"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-card-icon">🐙</span>
            <span className="contact-card-label">GitHub</span>
            <span className="contact-card-value">ThandaAye</span>
          </a>
        </div>

        <p className="contact-footer">
          Based in Toronto, ON · Open to opportunities in Canada ·{' '}
          <a href="mailto:tracy.thandaaye@gmail.com">Let's build something together</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;

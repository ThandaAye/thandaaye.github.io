import React from 'react';

const Aboutme = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <span className="hero-label">// hello world</span>
        <h1 className="hero-name">Tracy Thanda Aye</h1>
        <p className="hero-title">
          <strong>Software Engineer</strong> &amp; Technical Lead
        </p>
        <p className="hero-bio">
          8+ years building fintech and financial services platforms across Singapore and Canada.
          I embed with operations teams to surface painful workflows and ship end-to-end automation
          across trade finance, ESG compliance, and data engineering. Currently based in Toronto, ON.
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">8+</span>
            <span className="stat-label">Years experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5</span>
            <span className="stat-label">Companies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">8</span>
            <span className="stat-label">Engineers led</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Uptime delivered</span>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Get in touch →</a>
          <a
            href="https://linkedin.com/in/thandaaye"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/ThandaAye"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;

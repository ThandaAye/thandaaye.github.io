import React from 'react';

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Data & Analytics</h3>
            <ul>
              <li>Python, Google OR-Tools</li>
              <li>Optimization (scheduling, planning, inventory)</li>
              <li>Machine Learning, Statistics, Probability</li>
              <li>Data Modeling, Wrangling, Profiling</li>
              <li>Predictive & Prescriptive Analysis</li>
              <li>Data Warehousing (Redshift), ETL</li>
              <li>Visualization: Excel, Tableau, Power BI</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Software Engineering</h3>
            <ul>
              <li>Java, Spring Boot, Maven, Hibernate</li>
              <li>JavaScript, ReactJS, Ant Design</li>
              <li>REST API, Springdoc-openapi, Postman</li>
              <li>JUnit, Mockito, Selenium, SonarQube</li>
              <li>MySQL, MongoDB</li>
              <li>SDLC, Agile, CI/CD</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Cloud & DevOps</h3>
            <ul>
              <li>AWS, Docker, Kubernetes, Microservices</li>
              <li>BitBucket, Git, JIRA, Confluence</li>
              <li>Stripe Payment, Fiuu (Razer Payment)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';

const degrees = [
  {
    degree: 'Master of Data Analytics',
    school: 'University of Niagara Falls (UNF), Canada',
    period: '2024 – 2026',
  },
  {
    degree: 'Post Graduate Diploma in Systems Analysis',
    school: 'National University of Singapore (NUS), Singapore',
    period: '2015 – 2016',
  },
  {
    degree: 'Bachelor of Engineering in Electronics',
    school: 'Mandalay Technological University, Myanmar',
    period: '2008 – 2013',
  },
];

const Education = () => {
  return (
    <section className="education-section">
      <div className="container">
        <p className="section-label">// education</p>
        <h2 className="section-title">Education</h2>
        <div className="section-divider" />

        <div className="edu-grid">
          {degrees.map((edu) => (
            <div className="edu-card" key={edu.degree}>
              <p className="edu-degree">{edu.degree}</p>
              <p className="edu-school">{edu.school}</p>
              <p className="edu-period">{edu.period}</p>
            </div>
          ))}
        </div>

        <div className="additional-card">
          <span className="additional-card-icon">🏅</span>
          <div>
            <h3>Mentor — SGInnovate PowerX Program</h3>
            <p>
              Mentored aspiring technologists in software engineering fundamentals and career
              development through Singapore's national deep-tech talent initiative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

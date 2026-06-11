import React from 'react';

const experiences = [
  {
    role: 'Data Engineer',
    company: 'TechInsights Inc. · Toronto, ON',
    period: 'Sep 2025 – Dec 2025',
    bullets: [
      'Architected governed ETL pipelines using MuleSoft Anypoint and AWS Zero-ETL with DataWeave 2.0 transformation logic, automating Salesforce-to-PostgreSQL ingestion with full Datadog observability.',
      'Operationalized an Enterprise Data Catalog via AWS DataZone and PostLineageEvent API, achieving 100% audit readiness and metadata discoverability for downstream analytics teams.',
      'Engineered an automated Data Quality framework with Great Expectations, implementing schema-level and row-level validations with a JIRA-integrated escalation workflow for real-time issue routing.',
      'Standardized lineage mapping across MuleSoft, Composer, and AWS managed services, reducing cross-team troubleshooting time by ~30%.',
    ],
  },
  {
    role: 'Technical Lead / Lead Software Engineer',
    company: 'ESGpedia Pte. Ltd. · Singapore',
    period: 'Apr 2020 – Oct 2024',
    bullets: [
      'Led a team of 8 engineers through full SDLC to deliver a cloud-native ESG analytics platform using microservices architecture, serving enterprise financial services clients including GIC, Eastspring Investments, and CSOP Asset Management.',
      'Architected secure REST APIs using Java (Spring Boot), React, TypeScript, and OAuth2 (AWS Cognito, SSO), handling daily transactions at 99.9% uptime.',
      'Designed and provisioned AWS infrastructure (VPC, IAM, API Gateway, ECS/EKS, RDS, DynamoDB), improving deployment reliability by 40% and cutting infrastructure costs by 25% through right-sizing.',
      'Mentored junior and mid-level engineers through structured onboarding and pair programming, growing 3 junior developers into independent contributors within 6 months.',
      'Partnered directly with compliance and operations stakeholders to surface workflow gaps, translating domain-specific requirements into automated reporting pipelines and audit-ready data flows.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'StarHub Ltd. · Singapore',
    period: 'Nov 2019 – Apr 2020',
    bullets: [
      'Owned end-to-end development lifecycle for StarHub GO video streaming platform serving 500,000+ subscribers across iOS, Android, Web, and Set-Top Box (STB) applications.',
      'Managed VM infrastructure on Blade Servers with Hyper-V and EqualLogic storage, maintaining 99.5% uptime for live TV channel streaming services.',
      'Integrated Singapore Exchange (SGX) stock market data feeds into StarHub IPTV, enabling real-time financial content delivery to 200,000+ IPTV households.',
      'Coordinated with cross-functional stakeholders to prioritize sprint backlogs and manage BAU operations, consistently delivering milestones on schedule.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'CCRManager Pte. Ltd. · Singapore',
    period: 'Feb 2018 – Nov 2019',
    bullets: [
      'Developed a Trade Asset Management platform for institutional banks, automating trade finance transaction workflows across correspondent banking networks, including reconciliation and secure settlement flows for 50+ institutional users.',
      'Built full-stack features using React.js with Redux (Ant Design) on the frontend and Java Spring Boot with Hibernate on the backend, backed by MySQL.',
      'Implemented JWT-based authentication with AWS KMS key validation and 2FA, meeting compliance-grade security requirements with full audit logging and access control traceability.',
      'Designed and deployed microservices architecture using Spring Boot Eureka, Netflix Zuul, and Spring Cloud Config, hosted on AWS (CloudFormation, Cognito, S3, Elastic Beanstalk, RDS).',
      'Maintained CI/CD pipelines with Jenkins, Fortify, and SonarQube; achieved comprehensive test coverage using Jest, Mockito, JUnit, Cucumber, and Selenium (TDD/BDD).',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'JOS Pte. Ltd. · Singapore',
    period: 'Mar 2016 – Feb 2018',
    bullets: [
      'Developed an enterprise e-signature platform (E-Sign!) for GIC (Government of Singapore Investment Corporation), integrating DocuSign APIs with the existing e-Flow workflow built on C#, ASP.NET MVC5.',
      'Integrated K2 workflow engine, SharePoint EDMS, SMTP, and Active Directory services, with Centera WORM storage for compliance-grade document security and retention.',
      'Delivered an HRM web and mobile application for Shanda Group using Xamarin, K2 Smartforms, RESTful APIs, and advanced MSSQL stored procedures.',
      'Gathered business requirements directly from stakeholders and translated them into technical designs, reducing requirement-to-delivery cycle time through proactive communication.',
    ],
  },
];

const Workexperiences = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <p className="section-label">// work experience</p>
        <h2 className="section-title">Where I've Worked</h2>
        <div className="section-divider" />

        <div className="exp-timeline">
          {experiences.map((exp) => (
            <div className="exp-item" key={exp.period}>
              <div className="exp-dot" />
              <div className="exp-card">
                <div className="exp-card-top">
                  <span className="exp-role">{exp.role}</span>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <p className="exp-company">{exp.company}</p>
                <ul className="exp-details">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workexperiences;

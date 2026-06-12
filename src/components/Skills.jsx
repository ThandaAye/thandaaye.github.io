import React from 'react';

const skillGroups = [
  {
    icon: '🤖',
    title: 'AI & LLM',
    badges: ['LLMs', 'RAG', 'Spring AI', 'GitHub Copilot', 'Cursor', 'Claude Code', 'MCP Integrations'],
  },
  {
    icon: '💻',
    title: 'Languages',
    badges: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    icon: '🎨',
    title: 'Frontend',
    badges: ['React.js', 'Redux', 'HTML5', 'CSS3'],
  },
  {
    icon: '⚙️',
    title: 'Backend & Frameworks',
    badges: ['Spring Boot', 'Hibernate', 'Maven', 'Gradle', 'Node.js', 'NestJS', 'Express.js', 'FastAPI', 'REST APIs'],
  },
  {
    icon: '☁️',
    title: 'Cloud & Infrastructure',
    badges: ['AWS', 'GCP', 'Cloudflare', 'IAM', 'VPC', 'Cognito', 'KMS', 'API Gateway', 'ECS', 'EKS', 'ECR', 'RDS', 'S3', 'Lambda', 'Step Functions', 'EventBridge'],
  },
  {
    icon: '📊',
    title: 'Data Engineering',
    badges: ['Apache Spark', 'PySpark', 'Databricks', 'Snowflake', 'AWS Redshift', 'AWS Glue'],
  },
  {
    icon: '📨',
    title: 'Streaming & Messaging',
    badges: ['Apache Kafka', 'Kinesis', 'RabbitMQ', 'Memcached', 'AWS SQS', 'AWS SNS'],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    badges: ['MySQL', 'NoSQL', 'PostgreSQL', 'Redis', 'MongoDB', 'DynamoDB', 'Elasticsearch'],
  },
  {
    icon: '🚀',
    title: 'DevOps & CI/CD',
    badges: ['Docker', 'Kubernetes', 'Helm Charts', 'Terraform', 'Jenkins', 'Bitbucket Pipelines', 'SonarQube'],
  },
  {
    icon: '📡',
    title: 'Monitoring',
    badges: ['Datadog', 'Grafana', 'Prometheus'],
  },
  {
    icon: '🧪',
    title: 'Testing & QA',
    badges: ['Jest', 'JUnit', 'Mockito', 'Selenium', 'Cucumber', 'TDD', 'BDD'],
  },
  {
    icon: '🛠️',
    title: 'Methodologies & Tools',
    badges: ['Agile', 'Scrum', 'SDLC', 'JIRA', 'Confluence', 'Git', 'Postman', 'Stripe Payments'],
  },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <p className="section-label">// skills</p>
        <h2 className="section-title">Technical Skills</h2>
        <div className="section-divider" />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <span className="skill-card-icon">{group.icon}</span>
              <h3>{group.title}</h3>
              <div className="skill-badges">
                {group.badges.map((badge) => (
                  <span className="badge" key={badge}>{badge}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

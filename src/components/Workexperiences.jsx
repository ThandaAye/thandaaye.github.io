import React from 'react';

const Workexperiences = () => {
  return (
    <section class="experience-timeline">
        <div class="timeline-title">Work Experiences</div>
        <div class="timeline">

        <div class="timeline-item">
          <div class="timeline-dot"></div>
            <div class="experience-header">
                <h3>Teachnical Lead / Lead Software Engineer</h3>
                <span class="company">ESGPedia Pte Ltd</span>
            </div>
            <div class="experience-duration">Apr 2020 – Oct 2024 · Singapore</div>
            <ul class="experience-details">
                <li>Led the team of junior and senior software engineers to build the finance platform RESTful web services (microservice architecture) using ReactJS, redux, hooks, TypeScript, Spring Boot Java, Hibernate, Maven, OAuth2 authentication with Cognito and SSO, AWS services on ESGpedia Platform.</li>
                <li>Introduced the team to use react.js, microservice architecture for web development, kubernetes (AWS EKS) deployment for microservices and blockchain.</li>
                <li>Experience in setting up and using AWS services - VPC, VPC peering, IAM, Cognito, API Gateway, WAF, Route53, LB, ECS, EC2, S3, EBS, RDS, Lambda, DynamoDB, KMS, Secret Manager, Systems Manager, SNS, SES, CloudWatch, AWS Transfer Family, EventBridge, EKS (Kubernetes), ECR (docker container images), CICD codepipeline etc.</li>
            </ul>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-dot"></div>
            <div class="experience-header">
                <h3>Senior Software Engineer</h3>
                <span class="company">StarHub Ltd</span>
            </div>
            <div class="experience-duration">Nov 2019 – Apr 2020 · Singapore</div>
            <ul class="experience-details">
                <li>Responsible in all phases of product development life cycle including design, development, testing, debugging, and customer support for 'StarHub GO' video streaming and LIVE TV channels service platform in iOS, Android, Web and STB.</li>
                <li>Manage VMs on Blade Servers with HyperV OS and EqualLogic storage.</li>
                <li>Manage individual project priorities, estimates, schedule deadlines and deliverable.</li>
                <li>Provide Tier 3 support on escalated customer issues.</li>
                <li>Collaborate with external and internal stakeholders to project manage and carry out BAU activities</li>
                <li>Responsible for the deployment, enhancement and daily maintenance of the StarHub IPTV applications to ensure the normal operation and emergency response of the business system.</li>
            </ul>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
            <div class="experience-header">
                <h3>Software Engineer</h3>
                <span class="company">CCRManager Pte Ltd</span>
            </div>
            <div class="experience-duration">Feb 2018 – Nov 2019 · Singapore</div>
            <ul class="experience-details">
                <li>Validate JWT tokens using keys stored in the AWS Key Management Service (KMS).</li>
                <li>Using 2FA authentication based on Google Authenticator or sending to registered email.</li>
                <li>The application platform is based on Microservices architecture using Spring Boot Euraka service discovery, Netflix Zuul API gateway, Spring Cloud Config server, Application server and Auth server.</li>
                <li>Development in React.js and Redux.js (Ant design UI library) for frontend, RestAPI Java using Spring Boot and Hibernate for backend and MySQL for database.</li>
                <li>Git repository for version-control system.</li>
                <li>CI/CD implementations (Fortify, Jenkins, SonarQube).</li>
                <li>Using Jest and Enzyme for React, Mockito with JUnit, Cucumber, Selenium for testing (TDD, BDD).</li>
                <li>Deployed on AWS cloud platform (Cloudformation, Cognito, S3, Elastic Beanstalk, RDS, API Gateway etc).</li>
                <li>Generate and analysis report using AWS QuickSight.</li>
            </ul>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
            <div class="experience-header">
                <h3>Software Engineer</h3>
                <span class="company">JOS Pte Ltd</span>
            </div>
            <div class="experience-duration">Mar 2016 – Feb 2018 · Singapore</div>
            <ul class="experience-details">
            </ul>
        </div>

        </div>
        </section>
  );
};

export default Workexperiences;

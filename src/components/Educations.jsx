import React from 'react';

const Education = () => {
  return (
    <section class="education-timeline">
      <div class="timeline-title">Education</div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">2024 - 2026</div>
          <div class="timeline-content">
            <h3>Master of Data Analytics</h3>
            <p>University of Niagara Falls Canada (UNF)</p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">2015 - 2016</div>
          <div class="timeline-content">
            <h3>Post Graduate Diploma in System Analysis</h3>
            <p>National niversity of Singapore (NUS)</p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">2008 - 2013</div>
          <div class="timeline-content">
            <h3>Bachelor in Electronic Engineering</h3>
            <p>Mandalay Technological University (MTU)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

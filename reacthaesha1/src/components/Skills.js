import React from 'react';

function Skills() {
  const skillsData = [
    {
      category: "Frontend",
      skills: "React.js, HTML5, CSS3, JavaScript (ES6+), Responsive Design"
    },
    {
      category: "Backend",
      skills: "Node.js, Express.js, REST APIs, Database Design"
    },
    {
      category: "Databases",
      skills: "MongoDB, MySQL, Firebase, PostgreSQL"
    },
    {
      category: "Tools & Version Control",
      skills: "Git, GitHub, VS Code, Webpack, npm, Docker (basics)"
    },
    {
      category: "UI/UX",
      skills: "Figma, Responsive Design, Accessibility, Performance Optimization"
    },
    {
      category: "Other Skills",
      skills: "Problem Solving, Team Collaboration, Agile Methodology, Technical Documentation"
    }
  ];

  return (
    <section className="container">
      <h2>Skills & Expertise</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.category}</h3>
            <p>{skill.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

import React from 'react';

function Projects() {
  const projectsData = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React.js and Node.js. Features include product catalog, shopping cart, payment integration, and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with user authentication, real-time updates, and data persistence. Built with React and Firebase.",
      tags: ["React", "Firebase", "CSS3", "JavaScript"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that fetches real-time weather data from an API and displays it with beautiful charts and visualizations.",
      tags: ["React", "API Integration", "Chart.js", "Responsive Design"],
      link: "#"
    },
    {
      title: "Social Media Feed",
      description: "A social media feed clone with features like posting, liking, commenting, and user profiles. Real-time updates using Socket.io.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills. Built with React and featuring smooth animations and interactions.",
      tags: ["React", "CSS Animations", "Responsive", "SEO Optimized"],
      link: "#"
    },
    {
      title: "Blog Platform",
      description: "A content management system for creating and managing blog posts. Features include markdown support, categories, and search functionality.",
      tags: ["React", "Express", "PostgreSQL", "Markdown"],
      link: "#"
    }
  ];

  return (
    <section className="container">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="project-tag">{tag}</span>
              ))}
            </div>
            <a href={project.link} className="cta-button">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

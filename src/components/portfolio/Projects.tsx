
import { useState } from 'react';
import './portfolio.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, .NET Core backend, and SQL Server database. Features include user authentication, payment integration, inventory management, and admin dashboard.",
      techStack: ["React", "Redux", ".NET Core", "SQL Server", "Stripe API"],
      category: "fullstack",
      githubUrl: "https://github.com/manikandan",
      liveUrl: "https://demo-ecommerce.com",
      featured: true,
      stats: { stars: 42, views: 1200 }
    },
    {
      title: "Task Management Mobile App",
      description: "Cross-platform mobile application built with React Native for team task management. Includes real-time notifications, file sharing, and progress tracking.",
      techStack: ["React Native", "FastAPI", "MongoDB", "Redux"],
      category: "mobile",
      githubUrl: "https://github.com/manikandan",
      liveUrl: null,
      featured: true,
      stats: { stars: 28, views: 890 }
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard for business intelligence with interactive charts, data visualization, and automated reporting features.",
      techStack: ["Angular", "Python", "PostgreSQL", "Chart.js"],
      category: "frontend",
      githubUrl: "https://github.com/manikandan",
      liveUrl: "https://demo-analytics.com",
      featured: false,
      stats: { stars: 35, views: 750 }
    },
    {
      title: "Microservices API Gateway",
      description: "Scalable API gateway solution for microservices architecture with load balancing, authentication, and rate limiting.",
      techStack: [".NET Core", "Docker", "Redis", "Azure"],
      category: "backend",
      githubUrl: "https://github.com/manikandan",
      liveUrl: null,
      featured: true,
      stats: { stars: 56, views: 1500 }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="projects-bg-pattern"></div>
      
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my recent work and technical expertise
        </p>

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              {project.featured && (
                <div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 20 }}>
                  <span style={{ 
                    background: 'linear-gradient(45deg, #0891b2, #3b82f6)', 
                    color: 'white', 
                    padding: '4px 12px', 
                    borderRadius: '16px', 
                    fontSize: '12px',
                    animation: 'pulse 2s infinite'
                  }}>
                    Featured
                  </span>
                </div>
              )}

              <div className="project-image">
                <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', gap: '12px' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '4px', 
                    background: 'rgba(0, 0, 0, 0.7)', 
                    color: 'white', 
                    padding: '4px 8px', 
                    borderRadius: '16px', 
                    fontSize: '12px' 
                  }}>
                    ⭐ {project.stats.stars}
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '4px', 
                    background: 'rgba(0, 0, 0, 0.7)', 
                    color: 'white', 
                    padding: '4px 8px', 
                    borderRadius: '16px', 
                    fontSize: '12px' 
                  }}>
                    👁 {project.stats.views}
                  </div>
                </div>
                {project.title.charAt(0)}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div>
                  <h4 style={{ fontWeight: '600', fontSize: '14px', color: '#374151', marginBottom: '8px' }}>
                    Tech Stack:
                  </h4>
                  <div className="project-tech">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link secondary"
                  >
                    🐙 Code
                  </a>
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link primary"
                    >
                      🚀 Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <p style={{ color: '#64748b', marginBottom: '24px' }}>Want to see more of my work?</p>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ color: '#0f172a', borderColor: '#0891b2' }}
          >
            🐙 View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

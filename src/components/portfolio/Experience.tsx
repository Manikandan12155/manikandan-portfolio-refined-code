
import './portfolio.css';

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      role: "Fullstack Developer Team Lead",
      duration: "Jan 2022 - Present",
      location: "Coimbatore, India",
      type: "Full-time",
      responsibilities: [
        "Lead a team of 6 developers in designing and implementing scalable web applications",
        "Architected microservices-based solutions using .NET Core and React",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted technical interviews",
        "Collaborated with product managers to define technical requirements"
      ],
      technologies: ["React", "Angular", ".NET Core", "SQL Server", "Azure", "Docker"]
    },
    {
      company: "Digital Innovations Ltd",
      role: "Senior Full Stack Developer",
      duration: "Mar 2020 - Dec 2021",
      location: "Chennai, India",
      type: "Full-time",
      responsibilities: [
        "Developed and maintained 15+ client applications using React and Node.js",
        "Optimized database queries resulting in 40% performance improvement",
        "Integrated third-party APIs and payment gateways",
        "Led code reviews and established development best practices",
        "Worked closely with UX/UI designers to implement pixel-perfect designs"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "AWS"]
    },
    {
      company: "StartupXYZ",
      role: "Full Stack Developer",
      duration: "Jun 2019 - Feb 2020",
      location: "Bangalore, India",
      type: "Full-time",
      responsibilities: [
        "Built MVP for a fintech startup from ground up using React and Python",
        "Developed RESTful APIs with FastAPI and PostgreSQL",
        "Implemented responsive web design for mobile-first approach",
        "Collaborated in an agile development environment",
        "Participated in product planning and technical decision making"
      ],
      technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Redux"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          My journey in building innovative software solutions
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.role}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <span className="experience-badge">{exp.type}</span>
                </div>
                
                <div className="experience-meta">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    📅 {exp.duration}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    📍 {exp.location}
                  </div>
                </div>
                
                <div className="experience-responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul className="experience-list">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 style={{ fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Technologies:</h4>
                  <div className="experience-technologies">
                    {exp.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="experience-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

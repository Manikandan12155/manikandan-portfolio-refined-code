
import './portfolio.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🌐",
      skills: ["React", "Angular", "Next.js", "React Native", "Redux", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [".NET Core", "FastAPI", "Python", "Node.js", "RESTful APIs", "GraphQL", "Microservices"]
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "Entity Framework", "Prisma"]
    },
    {
      title: "Tools & Others",
      icon: "🔧",
      skills: ["Git", "Docker", "Azure", "AWS", "Jenkins", "Postman", "VS Code", "Figma"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-bg-pattern"></div>
      
      <div className="container">
        <h2 className="section-title skills-title">Technical Skills</h2>
        <p className="section-subtitle" style={{ color: 'rgba(147, 197, 253, 0.8)' }}>
          A comprehensive toolkit for building modern, scalable applications
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-icon">
                {category.icon}
              </div>
              <h3 className="skill-card-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '64px' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', textAlign: 'center', marginBottom: '32px', color: 'white' }}>
            Expertise Level
          </h3>
          <div style={{ maxWidth: '768px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { skill: "React & Frontend", level: 95 },
              { skill: "Backend Development", level: 90 },
              { skill: "Database Design", level: 85 },
              { skill: "Team Leadership", level: 88 }
            ].map((item, index) => (
              <div key={index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontWeight: '500', color: 'rgba(196, 181, 253, 0.8)' }}>{item.skill}</span>
                  <span style={{ color: '#93c5fd', fontWeight: '600' }}>{item.level}%</span>
                </div>
                <div style={{ width: '100%', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '12px', height: '12px', overflow: 'hidden' }}>
                  <div 
                    style={{
                      height: '100%',
                      background: 'linear-gradient(45deg, #60a5fa, #a855f7)',
                      borderRadius: '12px',
                      width: `${item.level}%`,
                      transition: 'width 1s ease-out'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


import './portfolio.css';

const About = () => {
  const highlights = [
    {
      icon: "📈",
      title: "Team Leadership",
      description: "Leading cross-functional development teams to deliver high-quality software solutions"
    },
    {
      icon: "🏆",
      title: "Technical Excellence",
      description: "Expertise in modern web technologies and scalable architecture design"
    },
    {
      icon: "🚀",
      title: "Innovation Focus",
      description: "Driving digital transformation through cutting-edge technology solutions"
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Working closely with stakeholders to translate business needs into technical solutions"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-bg-pattern"></div>
      
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate fullstack developer with extensive experience in building scalable web applications and leading development teams
        </p>

        <div className="about-grid">
          {highlights.map((highlight, index) => (
            <div key={index} className="about-card">
              <div className="about-card-icon">
                {highlight.icon}
              </div>
              <h3 className="about-card-title">{highlight.title}</h3>
              <p className="about-card-description">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ fontSize: '1.125rem', color: '#64748b', marginBottom: '24px' }}>
            With over 5 years of experience in software development, I specialize in creating robust, 
            user-friendly applications using modern technologies like React, .NET Core, and cloud platforms.
          </p>
          <a href="#experience" className="btn btn-primary">
            View My Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

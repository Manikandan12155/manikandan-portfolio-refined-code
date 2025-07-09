
import './portfolio.css';

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Azure Developer Associate",
      provider: "Microsoft",
      issueDate: "March 2023",
      validity: "March 2026",
      credentialId: "AZ-204-2023-001",
      description: "Demonstrates expertise in developing cloud solutions on Microsoft Azure platform",
      skills: ["Azure Services", "Cloud Development", "DevOps", "API Management"],
      verificationUrl: "https://docs.microsoft.com/en-us/learn/certifications/"
    },
    {
      title: "AWS Certified Solutions Architect",
      provider: "Amazon Web Services",
      issueDate: "January 2023",
      validity: "January 2026",
      credentialId: "SAA-C03-2023-002",
      description: "Validates expertise in designing distributed systems on AWS",
      skills: ["AWS Architecture", "Cloud Security", "Scalability", "Cost Optimization"],
      verificationUrl: "https://aws.amazon.com/certification/"
    },
    {
      title: "React Developer Certification",
      provider: "Meta (Facebook)",
      issueDate: "November 2022",
      validity: "Lifetime",
      credentialId: "META-REACT-2022-003",
      description: "Professional certification for React development skills",
      skills: ["React", "JSX", "Redux", "Testing", "Performance"],
      verificationUrl: "https://developers.facebook.com/docs/"
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      provider: "Cloud Native Computing Foundation",
      issueDate: "September 2022",
      validity: "September 2025",
      credentialId: "CKA-2022-004",
      description: "Demonstrates skills in Kubernetes administration and management",
      skills: ["Kubernetes", "Container Orchestration", "DevOps", "Monitoring"],
      verificationUrl: "https://www.cncf.io/certification/cka/"
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Professional certifications that validate my technical expertise
        </p>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-header">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flex: 1 }}>
                  <div className="certification-icon">
                    🏆
                  </div>
                  <div className="certification-info">
                    <h3 className="certification-title">{cert.title}</h3>
                    <p className="certification-provider">{cert.provider}</p>
                  </div>
                </div>
                <span className={`certification-badge ${cert.validity === "Lifetime" ? 'lifetime' : ''}`}>
                  {cert.validity === "Lifetime" ? "Lifetime" : "Valid"}
                </span>
              </div>
              
              <p className="certification-description">{cert.description}</p>
              
              <div className="certification-details">
                <div className="certification-detail">
                  <h5>Issued:</h5>
                  <p>{cert.issueDate}</p>
                </div>
                <div className="certification-detail">
                  <h5>Valid Until:</h5>
                  <p>{cert.validity}</p>
                </div>
              </div>
              
              <div style={{ marginBottom: '16px' }}>
                <h5 style={{ fontWeight: '600', color: '#374151', fontSize: '14px', marginBottom: '4px' }}>
                  Credential ID:
                </h5>
                <p style={{ color: '#64748b', fontSize: '14px', fontFamily: 'monospace' }}>
                  {cert.credentialId}
                </p>
              </div>
              
              <div className="certification-skills">
                <h5>Skills Covered:</h5>
                <div className="certification-skill-tags">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="certification-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <a 
                href={cert.verificationUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="certification-verify"
              >
                🔗 Verify Certification
              </a>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '64px', textAlign: 'center' }}>
          <div style={{ 
            maxWidth: '512px', 
            margin: '0 auto', 
            background: 'rgba(255, 255, 255, 0.8)', 
            borderRadius: '16px', 
            padding: '32px',
            border: '1px solid rgba(245, 158, 11, 0.2)' 
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
              Download My Resume
            </h3>
            <p style={{ color: '#64748b', marginBottom: '24px' }}>
              Get a comprehensive overview of my skills, experience, and achievements
            </p>
            <button className="btn btn-primary" style={{ background: 'linear-gradient(45deg, #f59e0b, #d97706)' }}>
              🏆 Download Resume (PDF)
            </button>
            <p style={{ fontSize: '14px', color: '#64748b', marginTop: '16px' }}>
              Last updated: January 2024 | File size: 1.2 MB
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

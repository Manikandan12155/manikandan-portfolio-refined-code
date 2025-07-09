
import { useState, useEffect } from 'react';
import './portfolio.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Building scalable solutions with modern technologies";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg-pattern"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-avatar">
            <div className="hero-avatar-inner">
              ✨
            </div>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Manikandan</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Fullstack Developer Team Lead
          </h2>
          
          <p className="hero-description">
            {displayText}
            <span style={{ animation: 'blink 1s infinite' }}>|</span>
          </p>
          
          <div className="hero-social">
            <a href="mailto:manianuram2312@gmail.com" className="social-btn">
              ✉
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn">
              🐙
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn">
              💼
            </a>
          </div>
          
          <div className="hero-buttons">
            <button onClick={scrollToAbout} className="btn btn-primary">
              ✨ View My Work
            </button>
            <a href="#contact" className="btn btn-outline">
              📞 Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

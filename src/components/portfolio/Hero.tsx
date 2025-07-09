
import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Hi, I'm <span className="text-primary">Manikandan</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-4">
            Fullstack Developer Team Lead
          </h2>
          
          <div className="h-16 flex items-center justify-center">
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mt-8 mb-12">
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full hover:scale-110 transition-transform"
              asChild
            >
              <a href="mailto:manianuram2312@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full hover:scale-110 transition-transform"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full hover:scale-110 transition-transform"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-4">
            <Button size="lg" onClick={scrollToAbout}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-slate-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

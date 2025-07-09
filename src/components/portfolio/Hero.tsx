
import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-animated relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/5 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <div className="stagger-animation">
          {/* Profile Image with Glow Effect */}
          <div className="mb-8 animate-scale-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <Sparkles className="h-16 w-16 text-primary animate-pulse-slow" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 animate-fade-in-up">
            Hi, I'm <span className="text-gradient animate-shimmer">Manikandan</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-4 animate-fade-in-up">
            Fullstack Developer Team Lead
          </h2>
          
          <div className="h-16 flex items-center justify-center animate-fade-in-up">
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          {/* Social Links with Magnetic Effect */}
          <div className="flex justify-center space-x-6 mt-8 mb-12 animate-fade-in-up">
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full hover-lift btn-magnetic hover-glow"
              asChild
            >
              <a href="mailto:manianuram2312@gmail.com">
                <Mail className="h-5 w-5 animate-wave" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full hover-lift btn-magnetic hover-glow"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 animate-wave" style={{animationDelay: '0.5s'}} />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full hover-lift btn-magnetic hover-glow"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 animate-wave" style={{animationDelay: '1s'}} />
              </a>
            </Button>
          </div>
          
          {/* CTA Buttons with Enhanced Animations */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
            <Button 
              size="lg" 
              onClick={scrollToAbout}
              className="btn-magnetic hover-lift bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-500"
            >
              <Sparkles className="h-5 w-5 mr-2 animate-pulse" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="hover-lift btn-magnetic border-2 hover:border-primary/50"
            >
              <a href="#contact">
                <Download className="h-5 w-5 mr-2 animate-bounce-in" />
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
        
        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover-scale" onClick={scrollToAbout}>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
            <ChevronDown className="h-6 w-6 text-primary/80 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

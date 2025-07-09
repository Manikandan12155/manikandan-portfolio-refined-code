
import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Sparkles, Zap, Rocket } from 'lucide-react';
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
    <section id="home" className="min-h-screen flex items-center justify-center hero-bg particles relative overflow-hidden">
      {/* Enhanced Floating Elements with Different Animations */}
      <div className="absolute top-20 left-10 w-24 h-24 gradient-primary rounded-full hero-float opacity-20"></div>
      <div className="absolute top-40 right-20 w-20 h-20 gradient-secondary rounded-full hero-float opacity-25" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 gradient-accent rounded-full hero-float opacity-30" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 gradient-primary rounded-full hero-float opacity-15" style={{animationDelay: '0.5s'}}></div>
      
      {/* Rotating Geometric Shapes */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 border-2 border-primary/20 rotate-45 skills-rotate"></div>
      <div className="absolute bottom-1/4 right-1/4 w-8 h-8 gradient-secondary rounded-full skills-bounce"></div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <div className="space-y-8">
          {/* Enhanced Profile Section with Glow Effects */}
          <div className="mb-12 projects-zoom">
            <div className="w-40 h-40 mx-auto rounded-full gradient-primary p-1 hero-glow shadow-primary">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 gradient-accent opacity-10 animate-pulse"></div>
                <Sparkles className="h-20 w-20 text-primary hero-pulse relative z-10" />
                <div className="absolute top-2 right-4">
                  <Zap className="h-6 w-6 text-secondary skills-bounce" />
                </div>
                <div className="absolute bottom-2 left-4">
                  <Rocket className="h-6 w-6 text-accent contact-wiggle" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Typography with 3D Effects */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-8 about-expand">
              Hi, I'm <span className="text-3d text-reveal">Manikandan</span>
            </h1>
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-semibold gradient-primary bg-clip-text text-transparent mb-6 skills-wave">
                Fullstack Developer Team Lead
              </h2>
              <div className="absolute -inset-1 gradient-primary opacity-20 blur-lg rounded-lg"></div>
            </div>
            
            <div className="h-20 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-slate-700 max-w-3xl relative">
                <span className="inline-block about-typewriter overflow-hidden">
                  {displayText}
                </span>
                <span className="animate-pulse text-primary ml-1 text-3xl">|</span>
              </p>
            </div>
          </div>
          
          {/* Enhanced Social Links with Magnetic Effects */}
          <div className="flex justify-center space-x-8 mt-12 mb-16">
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full magnetic-button glow-border w-16 h-16 interactive-card"
              asChild
            >
              <a href="mailto:manianuram2312@gmail.com">
                <Mail className="h-6 w-6 contact-wiggle text-primary" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full magnetic-button glow-border w-16 h-16 interactive-card"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 skills-rotate text-primary" style={{animationDuration: '4s'}} />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full magnetic-button glow-border w-16 h-16 interactive-card"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 skills-bounce text-primary" />
              </a>
            </Button>
          </div>
          
          {/* Enhanced CTA Buttons with Morphing Effects */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              size="lg" 
              onClick={scrollToAbout}
              className="magnetic-button gradient-primary text-white hover:shadow-primary px-8 py-4 text-lg font-semibold morph-shape"
            >
              <Sparkles className="h-6 w-6 mr-3 hero-pulse" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="magnetic-button glow-border px-8 py-4 text-lg font-semibold group"
            >
              <a href="#contact">
                <Download className="h-6 w-6 mr-3 group-hover:skills-bounce" />
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group" onClick={scrollToAbout}>
          <div className="flex flex-col items-center space-y-3">
            <div className="w-8 h-12 border-2 border-primary/60 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-2 h-4 gradient-primary rounded-full mt-2 hero-pulse"></div>
              <div className="absolute inset-0 bg-primary/10 rounded-full hero-glow"></div>
            </div>
            <ChevronDown className="h-8 w-8 text-primary/80 skills-bounce group-hover:text-primary transition-colors" />
            <span className="text-sm text-primary/70 font-medium">Scroll Down</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

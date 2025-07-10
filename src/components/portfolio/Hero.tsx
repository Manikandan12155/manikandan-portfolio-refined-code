
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-float blur-sm"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-400/30 rounded-full animate-float blur-sm" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-purple-400/25 rounded-full animate-float blur-sm" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-300/15 rounded-full animate-float blur-sm" style={{animationDelay: '0.5s'}}></div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <div className="stagger-animation">
          {/* Profile Image with Glow Effect */}
          <div className="mb-8 animate-scale-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="h-16 w-16 text-blue-300 animate-pulse-slow" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-shimmer">Manikandan</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-200 mb-4 animate-fade-in-up">
            Fullstack Developer Team Lead
          </h2>
          
          <div className="h-16 flex items-center justify-center animate-fade-in-up">
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
              {displayText}
              <span className="animate-pulse text-blue-300">|</span>
            </p>
          </div>
          
          {/* Social Links with Magnetic Effect */}
          <div className="flex justify-center space-x-6 mt-8 mb-12 animate-fade-in-up">
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full hover-lift btn-magnetic hover-glow border-blue-400/50 bg-blue-900/20 backdrop-blur-sm text-blue-200 hover:bg-blue-800/30"
              asChild
            >
              <a href="mailto:manianuram2312@gmail.com">
                <Mail className="h-5 w-5 animate-wave" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full hover-lift btn-magnetic hover-glow border-blue-400/50 bg-blue-900/20 backdrop-blur-sm text-blue-200 hover:bg-blue-800/30"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 animate-wave" style={{animationDelay: '0.5s'}} />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full hover-lift btn-magnetic hover-glow border-blue-400/50 bg-blue-900/20 backdrop-blur-sm text-blue-200 hover:bg-blue-800/30"
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
              className="btn-magnetic hover-lift bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-500 border-0"
            >
              <Sparkles className="h-5 w-5 mr-2 animate-pulse" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="hover-lift btn-magnetic border-2 border-blue-400/50 bg-blue-900/20 backdrop-blur-sm text-blue-200 hover:bg-blue-800/30"
            >
              <a href="#contact">
                <Download className="h-5 w-5 mr-2 animate-bounce-in" />
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
        
        {/* Animated Scroll Indicator - Moved to Left Side */}
        <div className="absolute bottom-8 left-8 animate-bounce cursor-pointer hover-scale" onClick={scrollToAbout}>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-blue-300/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-300 rounded-full mt-2 animate-pulse"></div>
            </div>
            <ChevronDown className="h-6 w-6 text-blue-200/80 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

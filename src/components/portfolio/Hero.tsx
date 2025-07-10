
import { useState, useEffect } from 'react';
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Mouse follower - positioned at left bottom */}
      <div 
        className="fixed w-6 h-6 bg-primary/30 rounded-full pointer-events-none z-10 transition-all duration-300 ease-out"
        style={{ 
          left: `${Math.max(50, Math.min(mousePosition.x - 12, window.innerWidth - 100))}px`,
          top: `${Math.max(mousePosition.y - 12, window.innerHeight - 100)}px`
        }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Manikandan A
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
              Fullstack Developer Team Lead
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative web solutions with modern technologies. 
              Leading teams to build scalable applications that make a difference.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            <div className="flex justify-center space-x-6 mb-12">
              <a 
                href="mailto:manianuram2312@gmail.com" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 p-3 hover:bg-blue-50 rounded-full"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 p-3 hover:bg-blue-50 rounded-full"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 p-3 hover:bg-blue-50 rounded-full"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
            >
              <ChevronDown className="h-8 w-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

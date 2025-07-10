import { useState, useEffect } from "react";
import {
  ChevronDown,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  QrCode,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";
import Navigation from "@/components/portfolio/Navigation";
import Chatbot from "@/components/portfolio/Chatbot";
import GoToTopButton from "@/components/portfolio/GoToTopButton";
import QRCodeOverlay from "@/components/portfolio/QRCodeOverlay";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isQROpen, setIsQROpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "certifications",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">Manikandan A</p>
              <p className="text-slate-400">Fullstack Developer Team Lead</p>
            </div>

            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="#home"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-slate-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="mailto:manianuram2312@gmail.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 Manikandan A. All rights reserved. | Built with React &
              TypeScript
            </p>
          </div>
        </div>
      </footer>

      {/* Fixed positioned components */}
      <div className="fixed bottom-[100px] right-6 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsQROpen(true)}
          className="h-12 w-12 rounded-full bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
        >
          <QrCode className="h-5 w-5" />
        </Button>
      </div>

      {/* QR Code Overlay */}
      <QRCodeOverlay isOpen={isQROpen} onClose={() => setIsQROpen(false)} />
      <Chatbot />
      <GoToTopButton />
    </div>
  );
};

export default Index;

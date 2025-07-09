
import { useState } from 'react';
import { ExternalLink, Github, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, .NET Core backend, and SQL Server database. Features include user authentication, payment integration, inventory management, and admin dashboard.",
      techStack: ["React", "Redux", ".NET Core", "SQL Server", "Stripe API"],
      category: "fullstack",
      githubUrl: "https://github.com/manikandan",
      liveUrl: "https://demo-ecommerce.com",
      featured: true,
      stats: { stars: 42, views: 1200 }
    },
    {
      title: "Task Management Mobile App",
      description: "Cross-platform mobile application built with React Native for team task management. Includes real-time notifications, file sharing, and progress tracking.",
      techStack: ["React Native", "FastAPI", "MongoDB", "Redux"],
      category: "mobile",
      githubUrl: "https://github.com/manikandan",
      liveUrl: null,
      featured: true,
      stats: { stars: 28, views: 890 }
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard for business intelligence with interactive charts, data visualization, and automated reporting features.",
      techStack: ["Angular", "Python", "PostgreSQL", "Chart.js"],
      category: "frontend",
      githubUrl: "https://github.com/manikandan",
      liveUrl: "https://demo-analytics.com",
      featured: false,
      stats: { stars: 35, views: 750 }
    },
    {
      title: "Microservices API Gateway",
      description: "Scalable API gateway solution for microservices architecture with load balancing, authentication, and rate limiting.",
      techStack: [".NET Core", "Docker", "Redis", "Azure"],
      category: "backend",
      githubUrl: "https://github.com/manikandan",
      liveUrl: null,
      featured: true,
      stats: { stars: 56, views: 1500 }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 projects-bg particles relative overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 gradient-primary rounded-full opacity-15 hero-float"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 gradient-secondary rounded-full opacity-20 hero-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-1/3 w-12 h-12 border-2 border-primary/20 rounded-lg transform rotate-45 skills-rotate"></div>
      <div className="absolute bottom-1/3 left-1/3 w-8 h-8 gradient-accent rounded-full skills-bounce"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 projects-zoom">
          <div className="inline-block relative">
            <h2 className="text-5xl font-bold text-slate-900 mb-6 text-3d">Featured Projects</h2>
            <div className="absolute -inset-2 gradient-primary opacity-20 blur-xl rounded-lg"></div>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-reveal">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 projects-flip">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={`magnetic-button px-6 py-3 text-lg font-semibold rounded-full transition-all duration-500 ${
                filter === category.id 
                  ? 'gradient-primary text-white shadow-primary glow-border' 
                  : 'glow-border hover:shadow-secondary'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className={`interactive-card glow-border morph-shape group relative overflow-hidden ${
                project.featured ? 'ring-2 ring-primary/30 shadow-primary' : ''
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Enhanced Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <Badge variant="secondary" className="gradient-primary text-white px-3 py-1 font-bold rounded-full hero-pulse">
                    ⭐ Featured
                  </Badge>
                </div>
              )}

              {/* Enhanced Project Image with Gradient Overlay */}
              <div className="h-56 gradient-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-bold text-white/30 group-hover:text-white/50 transition-colors duration-500 text-3d skills-wave">
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                {/* Floating Particles */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-white/40 rounded-full hero-float"></div>
                <div className="absolute bottom-4 right-4 w-1 h-1 bg-white/60 rounded-full hero-float" style={{animationDelay: '1s'}}></div>
                
                {/* Enhanced Stats Overlay */}
                <div className={`absolute top-4 left-4 flex space-x-3 transition-all duration-500 ${
                  hoveredProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}>
                  <div className="flex items-center space-x-1 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Star className="h-4 w-4 skills-bounce" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Eye className="h-4 w-4 contact-wiggle" />
                    <span>{project.stats.views}</span>
                  </div>
                </div>
              </div>

              <CardHeader className="relative z-10">
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors duration-300 text-3d">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600 line-clamp-3 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3 text-lg">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="magnetic-button glow-border px-3 py-1 font-medium projects-slide-up hover:scale-105 transition-all duration-300"
                          style={{animationDelay: `${techIndex * 0.1}s`}}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="magnetic-button glow-border flex-1 font-semibold"
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <Github className="h-4 w-4 skills-wave" />
                        <span>Code</span>
                      </a>
                    </Button>
                    
                    {project.liveUrl && (
                      <Button 
                        size="sm" 
                        asChild
                        className="magnetic-button gradient-primary text-white flex-1 font-semibold shadow-primary"
                      >
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <ExternalLink className="h-4 w-4 skills-bounce" />
                          <span>Live Demo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>

              {/* Enhanced Hover Effect Overlay */}
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none"></div>
              
              {/* Morphing Corner Elements */}
              <div className="absolute -top-3 -right-3 w-12 h-12 gradient-secondary rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 skills-rotate"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 gradient-accent rounded-full opacity-0 group-hover:opacity-30 transition-all duration-700 skills-bounce"></div>
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20 about-expand">
          <p className="text-slate-600 mb-8 text-xl">Want to see more of my work?</p>
          <Button 
            size="lg" 
            variant="outline"
            className="magnetic-button glow-border px-8 py-4 text-lg font-semibold morph-shape group"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 mr-3 group-hover:skills-rotate" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

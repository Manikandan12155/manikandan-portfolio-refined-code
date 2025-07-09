
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
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-gradient">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        {/* Filter Buttons with Enhanced Animation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={`transition-all duration-300 hover-lift ${
                filter === category.id 
                  ? 'bg-gradient-to-r from-primary to-secondary animate-glow' 
                  : 'hover-glow'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid with Staggered Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className={`card-hover group relative overflow-hidden ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <Badge variant="secondary" className="text-xs bg-gradient-to-r from-primary to-secondary text-white animate-pulse">
                    Featured
                  </Badge>
                </div>
              )}

              {/* Project Image Placeholder with Gradient */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300 animate-float">
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                {/* Stats Overlay */}
                <div className={`absolute top-4 left-4 flex space-x-3 transition-all duration-300 ${
                  hoveredProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}>
                  <div className="flex items-center space-x-1 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                    <Star className="h-3 w-3" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                    <Eye className="h-3 w-3" />
                    <span>{project.stats.views}</span>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600 line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs hover-scale hover-glow transition-all duration-300 animate-fade-in-up"
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
                      className="hover-lift hover-glow flex-1"
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <Github className="h-4 w-4 animate-wave" />
                        <span>Code</span>
                      </a>
                    </Button>
                    
                    {project.liveUrl && (
                      <Button 
                        size="sm" 
                        asChild
                        className="hover-lift bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary flex-1"
                      >
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <ExternalLink className="h-4 w-4 animate-bounce-in" />
                          <span>Live Demo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-slate-600 mb-6">Want to see more of my work?</p>
          <Button 
            size="lg" 
            variant="outline"
            className="hover-lift btn-magnetic border-2 border-primary/20 hover:border-primary/50"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;


import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, .NET Core backend, and SQL Server database. Features include user authentication, payment integration, inventory management, and admin dashboard.",
      techStack: ["React", "Redux", ".NET Core", "SQL Server", "Stripe API"],
      category: "fullstack",
      githubUrl: "https://github.com/manikandan",
      liveUrl: "https://demo-ecommerce.com",
      featured: true
    },
    {
      title: "Task Management Mobile App",
      description: "Cross-platform mobile application built with React Native for team task management. Includes real-time notifications, file sharing, and progress tracking.",
      techStack: ["React Native", "FastAPI", "MongoDB", "Redux"],
      category: "mobile",
      githubUrl: "https://github.com/manikandan",
      liveUrl: null,
      featured: true
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard for business intelligence with interactive charts, data visualization, and automated reporting features.",
      techStack: ["Angular", "Python", "PostgreSQL", "Chart.js"],
      category: "frontend",
      githubUrl: "https://github.com/manikandan",
      liveUrl: "https://demo-analytics.com",
      featured: false
    },
    {
      title: "Microservices API Gateway",
      description: "Scalable API gateway solution for microservices architecture with load balancing, authentication, and rate limiting.",
      techStack: [".NET Core", "Docker", "Redis", "Azure"],
      category: "backend",
      githubUrl: "https://github.com/manikandan",
      liveUrl: null,
      featured: true
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
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className="transition-all"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  {project.featured && (
                    <Badge variant="secondary" className="text-xs">Featured</Badge>
                  )}
                </div>
                <CardDescription className="text-slate-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </Button>
                    
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

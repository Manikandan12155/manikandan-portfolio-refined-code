
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      role: "Fullstack Developer Team Lead",
      duration: "Jan 2022 - Present",
      location: "Coimbatore, India",
      type: "Full-time",
      responsibilities: [
        "Lead a team of 6 developers in designing and implementing scalable web applications",
        "Architected microservices-based solutions using .NET Core and React",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted technical interviews",
        "Collaborated with product managers to define technical requirements"
      ],
      technologies: ["React", "Angular", ".NET Core", "SQL Server", "Azure", "Docker"]
    },
    {
      company: "Digital Innovations Ltd",
      role: "Senior Full Stack Developer",
      duration: "Mar 2020 - Dec 2021",
      location: "Chennai, India",
      type: "Full-time",
      responsibilities: [
        "Developed and maintained 15+ client applications using React and Node.js",
        "Optimized database queries resulting in 40% performance improvement",
        "Integrated third-party APIs and payment gateways",
        "Led code reviews and established development best practices",
        "Worked closely with UX/UI designers to implement pixel-perfect designs"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "AWS"]
    },
    {
      company: "StartupXYZ",
      role: "Full Stack Developer",
      duration: "Jun 2019 - Feb 2020",
      location: "Bangalore, India",
      type: "Full-time",
      responsibilities: [
        "Built MVP for a fintech startup from ground up using React and Python",
        "Developed RESTful APIs with FastAPI and PostgreSQL",
        "Implemented responsive web design for mobile-first approach",
        "Collaborated in an agile development environment",
        "Participated in product planning and technical decision making"
      ],
      technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Redux"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2314B8A6' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10-10c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
          animation: 'float 12s ease-in-out infinite'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-teal-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-teal-600 bg-clip-text text-transparent mb-4">Professional Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My journey in building innovative software solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-400 to-teal-500 opacity-30"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-1/2'}`}>
                  <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-emerald-100/50 hover-lift">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div>
                          <CardTitle className="text-xl text-slate-800">{exp.role}</CardTitle>
                          <CardDescription className="text-lg font-semibold text-emerald-600">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="w-fit border-emerald-300 text-emerald-700 bg-emerald-50">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-600">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-emerald-500" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-emerald-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-slate-700 mb-3">Key Responsibilities:</h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start text-slate-600">
                                <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-slate-700 mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIdx) => (
                              <Badge key={techIdx} variant="secondary" className="text-xs bg-emerald-100 text-emerald-800 border-emerald-200">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

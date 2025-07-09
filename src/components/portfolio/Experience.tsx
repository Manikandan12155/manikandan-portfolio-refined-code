
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
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My journey in building innovative software solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-1/2'}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div>
                          <CardTitle className="text-xl text-slate-900">{exp.role}</CardTitle>
                          <CardDescription className="text-lg font-semibold text-primary">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-600">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
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
                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-slate-700 mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIdx) => (
                              <Badge key={techIdx} variant="secondary" className="text-xs">
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

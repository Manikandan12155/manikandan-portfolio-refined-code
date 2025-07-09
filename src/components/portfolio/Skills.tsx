
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Globe, Wrench, Zap, Cpu, Layers, Rocket } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-7 w-7" />,
      skills: ["React", "Angular", "Next.js", "React Native", "Redux", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "gradient-primary",
      animation: "skills-wave"
    },
    {
      title: "Backend",
      icon: <Code className="h-7 w-7" />,
      skills: [".NET Core", "FastAPI", "Python", "Node.js", "RESTful APIs", "GraphQL", "Microservices"],
      color: "gradient-secondary",
      animation: "skills-bounce"
    },
    {
      title: "Database",
      icon: <Database className="h-7 w-7" />,
      skills: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "Entity Framework", "Prisma"],
      color: "gradient-accent",
      animation: "skills-rotate"
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="h-7 w-7" />,
      skills: ["Git", "Docker", "Azure", "AWS", "Jenkins", "Postman", "VS Code", "Figma"],
      color: "gradient-primary",
      animation: "contact-wiggle"
    }
  ];

  const decorativeIcons = [
    { Icon: Zap, position: "top-10 right-10", animation: "skills-rotate", size: "h-8 w-8" },
    { Icon: Cpu, position: "bottom-20 left-10", animation: "skills-bounce", size: "h-6 w-6" },
    { Icon: Layers, position: "top-1/3 left-1/4", animation: "contact-wiggle", size: "h-10 w-10" },
    { Icon: Rocket, position: "bottom-1/3 right-1/4", animation: "skills-wave", size: "h-7 w-7" }
  ];

  return (
    <section id="skills" className="py-24 skills-bg particles relative overflow-hidden">
      {/* Decorative Background Icons */}
      {decorativeIcons.map(({ Icon, position, animation, size }, index) => (
        <div key={index} className={`absolute ${position} opacity-10`}>
          <Icon className={`${size} text-primary ${animation}`} style={{animationDelay: `${index * 0.5}s`}} />
        </div>
      ))}
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 right-1/3 w-16 h-16 border-2 border-primary/20 rounded-full skills-rotate"></div>
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 gradient-secondary rounded-lg transform rotate-45 skills-bounce"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 projects-zoom">
          <div className="inline-block relative">
            <h2 className="text-5xl font-bold text-slate-900 mb-6 text-3d">Technical Skills</h2>
            <div className="absolute -inset-2 gradient-primary opacity-20 blur-xl rounded-lg"></div>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-reveal">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="interactive-card glow-border morph-shape group relative overflow-hidden"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
              
              {/* Floating Particles */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-primary/30 rounded-full hero-float"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-secondary/40 rounded-full hero-float" style={{animationDelay: '1s'}}></div>
              
              <CardHeader className="text-center relative z-10 pb-4">
                <div className={`mx-auto mb-6 p-4 ${category.color} rounded-2xl w-fit shadow-primary group-hover:shadow-secondary transition-all duration-500`}>
                  <div className={`text-white ${category.animation} group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 text-3d">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="magnetic-button glow-border text-sm px-3 py-1 font-medium projects-slide-up hover:scale-105 transition-all duration-300"
                      style={{animationDelay: `${skillIndex * 0.1}s`}}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {/* Morphing Corner Elements */}
              <div className="absolute -top-3 -right-3 w-12 h-12 gradient-secondary rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 skills-rotate"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 gradient-accent rounded-full opacity-0 group-hover:opacity-30 transition-all duration-700 skills-bounce"></div>
            </Card>
          ))}
        </div>

        {/* Enhanced Skill Proficiency Visualization */}
        <div className="projects-flip">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-slate-900 mb-4 text-3d">Expertise Level</h3>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              { skill: "React & Frontend", level: 95, color: "gradient-primary" },
              { skill: "Backend Development", level: 90, color: "gradient-secondary" },
              { skill: "Database Design", level: 85, color: "gradient-accent" },
              { skill: "Team Leadership", level: 88, color: "gradient-primary" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="experience-fade-in p-6 rounded-2xl bg-white/50 backdrop-blur-sm glow-border"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-slate-800 text-lg">{item.skill}</span>
                  <span className="text-primary font-bold text-xl">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden shadow-inner">
                  <div 
                    className={`h-full ${item.color} rounded-full relative overflow-hidden transition-all duration-1000 ease-out`}
                    style={{
                      width: `${item.level}%`,
                      animationDelay: `${index * 0.3}s`
                    }}
                  >
                    <div className="absolute inset-0 bg-white/30 hero-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skills-wave"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

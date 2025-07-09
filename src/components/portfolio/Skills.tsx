
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React", "Angular", "Next.js", "React Native", "Redux", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      icon: <Code className="h-6 w-6" />,
      skills: [".NET Core", "FastAPI", "Python", "Node.js", "RESTful APIs", "GraphQL", "Microservices"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "Entity Framework", "Prisma"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "Docker", "Azure", "AWS", "Jenkins", "Postman", "VS Code", "Figma"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 animate-gradient"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-gradient">Technical Skills</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover group relative overflow-hidden">
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardHeader className="text-center relative z-10">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300 hover-scale">
                  <div className="text-primary group-hover:animate-bounce">
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover-scale hover-glow animate-fade-in-up"
                      style={{animationDelay: `${skillIndex * 0.1}s`}}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/10 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-secondary/10 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </Card>
          ))}
        </div>

        {/* Skill Proficiency Visualization */}
        <div className="mt-16 animate-fade-in-up">
          <h3 className="text-2xl font-semibold text-center mb-8 text-slate-900">Expertise Level</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { skill: "React & Frontend", level: 95 },
              { skill: "Backend Development", level: 90 },
              { skill: "Database Design", level: 85 },
              { skill: "Team Leadership", level: 88 }
            ].map((item, index) => (
              <div key={index} className="animate-slide-in-left" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-700">{item.skill}</span>
                  <span className="text-primary font-semibold">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full animate-slide-in-left transition-all duration-1000 ease-out relative"
                    style={{
                      width: `${item.level}%`,
                      animationDelay: `${index * 0.3}s`
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
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

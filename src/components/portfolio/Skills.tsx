
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
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20-20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
          animation: 'float 15s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full animate-float blur-2xl" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">Technical Skills</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover group relative overflow-hidden bg-white/10 backdrop-blur-lg border-white/20">
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <CardHeader className="text-center relative z-10">
                <div className="mx-auto mb-4 p-3 bg-white/20 rounded-full w-fit group-hover:bg-white/30 transition-colors duration-300 hover-scale">
                  <div className="text-white group-hover:animate-bounce">
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors duration-300">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-white/20 text-white border-white/30 hover:bg-white/30 hover:text-white transition-all duration-300 cursor-default hover-scale hover-glow animate-fade-in-up backdrop-blur-sm"
                      style={{animationDelay: `${skillIndex * 0.1}s`}}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/10 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </Card>
          ))}
        </div>

        {/* Skill Proficiency Visualization */}
        <div className="mt-16 animate-fade-in-up">
          <h3 className="text-2xl font-semibold text-center mb-8 text-white">Expertise Level</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { skill: "React & Frontend", level: 95 },
              { skill: "Backend Development", level: 90 },
              { skill: "Database Design", level: 85 },
              { skill: "Team Leadership", level: 88 }
            ].map((item, index) => (
              <div key={index} className="animate-slide-in-left" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-purple-200">{item.skill}</span>
                  <span className="text-blue-300 font-semibold">{item.level}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-slide-in-left transition-all duration-1000 ease-out relative"
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

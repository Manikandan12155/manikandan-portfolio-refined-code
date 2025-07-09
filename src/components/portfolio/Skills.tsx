
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React", "Angular", "Next.js", "React Native", "Redux", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: <Code className="h-6 w-6" />,
      skills: [".NET Core", "FastAPI", "Python", "Node.js", "RESTful APIs", "GraphQL", "Microservices"]
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "Entity Framework", "Prisma"]
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "Docker", "Azure", "AWS", "Jenkins", "Postman", "VS Code", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <div className="text-primary">
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

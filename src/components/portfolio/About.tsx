
import { Award, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const achievements = [
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Team Leadership",
      description: "Leading cross-functional development teams to deliver high-quality software solutions"
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Full-Stack Expertise",
      description: "Proficient in modern frontend and backend technologies with 5+ years of experience"
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Solution Architecture",
      description: "Designing scalable applications using microservices and cloud-native approaches"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passionate fullstack developer and team lead with expertise in modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">My Story</h3>
            <div className="space-y-4 text-slate-700">
              <p>
                As a dedicated Fullstack Developer Team Lead based in Coimbatore, India, I bring over 5 years 
                of experience in building robust, scalable web applications. My journey in software development 
                has been driven by a passion for creating innovative solutions that make a real impact.
              </p>
              <p>
                I specialize in modern frontend frameworks like React and Angular, combined with powerful 
                backend technologies including .NET Core and FastAPI. My experience spans from mobile 
                development with React Native to database optimization with SQL Server.
              </p>
              <p>
                Currently, I lead a talented team of developers, focusing on delivering high-quality software 
                solutions while mentoring junior developers and driving technical excellence across projects.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-slate-900 mb-4">Goals & Vision</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Contribute to open-source projects and technology communities
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Build innovative products that solve real-world problems
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mentor the next generation of developers
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {achievement.icon}
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {achievement.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

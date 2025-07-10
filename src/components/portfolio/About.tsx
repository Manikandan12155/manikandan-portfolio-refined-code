
import { Award, Target, TrendingUp, Heart, Code2, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  <></>
  const achievements = [
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-400" />,
      title: "Team Leadership",
      description: "Leading cross-functional development teams to deliver high-quality software solutions",
      color: "from-blue-500 to-cyan-50"
    },
    {
      icon: <Award className="h-6 w-6 text-emerald-400" />,
      title: "Full-Stack Expertise",
      description: "Proficient in modern frontend and backend technologies with 5+ years of experience",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Target className="h-6 w-6 text-purple-400" />,
      title: "Solution Architecture",
      description: "Designing scalable applications using microservices and cloud-native approaches",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { number: "3+", label: "Years Experience", icon: <Code2 className="h-5 w-5" /> },
    { number: "10+", label: "Projects Completed", icon: <Target className="h-5 w-5" /> },
    { number: "10+", label: "Team Members Led", icon: <Users className="h-5 w-5" /> },
    { number: "100%", label: "Client Satisfaction", icon: <Heart className="h-5 w-5" /> }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23346BBF' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm15 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 rounded-full animate-float blur-xl" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passionate fullstack developer and team lead with expertise in modern web technologies
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in-up">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg hover-lift animate-scale-in border border-blue-100/50"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex justify-center mb-3">
                <div className="p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse text-blue-600">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 animate-bounce-in">
                {stat.number}
              </div>
              <div className="text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 hover:text-blue-600 transition-colors duration-300">
              My Story
            </h3>
            <div className="space-y-4 text-slate-700">
              <p className="animate-fade-in-up">
                As a dedicated Fullstack Developer Team Lead based in Coimbatore, India, I bring over 5 years 
                of experience in building robust, scalable web applications. My journey in software development 
                has been driven by a passion for creating innovative solutions that make a real impact.
              </p>
              <p className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                I specialize in modern frontend frameworks like React and Angular, combined with powerful 
                backend technologies including .NET Core and FastAPI. My experience spans from mobile 
                development with React Native to database optimization with SQL Server.
              </p>
              <p className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                Currently, I lead a talented team of developers, focusing on delivering high-quality software 
                solutions while mentoring junior developers and driving technical excellence across projects.
              </p>
            </div>

            {/* Goals Section with Animation */}
            <div className="mt-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <h4 className="text-xl font-semibold text-slate-800 mb-4">Goals & Vision</h4>
              <ul className="space-y-3 text-slate-700">
                {[
                  "Contribute to open-source projects and technology communities",
                  "Build innovative products that solve real-world problems", 
                  "Mentor the next generation of developers"
                ].map((goal, index) => (
                  <li 
                    key={index} 
                    className="flex items-start animate-slide-in-left hover-slide group"
                    style={{animationDelay: `${0.8 + index * 0.1}s`}}
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:animate-pulse"></span>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">
                      {goal}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Achievements */}
          <div className="space-y-6 animate-fade-in-right">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="card-hover group relative overflow-hidden animate-slide-in-right bg-white/70 backdrop-blur-sm border-blue-100/50"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors duration-300 animate-bounce-in">
                      {achievement.icon}
                    </div>
                    <CardTitle className="text-lg text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                      {achievement.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <CardDescription className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                    {achievement.description}
                  </CardDescription>
                </CardContent>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-blue-400/10 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-purple-400/10 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Quote Section */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 hover-glow shadow-xl">
            <blockquote className="text-xl md:text-2xl font-medium text-slate-700 italic mb-4">
              "Code is like humor. When you have to explain it, it's bad."
            </blockquote>
            <cite className="text-blue-600 font-semibold">- Cory House</cite>
            <p className="text-sm text-slate-600 mt-2">One of my favorite quotes that guides my development philosophy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

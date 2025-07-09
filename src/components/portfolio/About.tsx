
import { Award, Target, TrendingUp, Heart, Code2, Users, Zap, Brain } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const achievements = [
    {
      icon: <TrendingUp className="h-7 w-7 text-white" />,
      title: "Team Leadership",
      description: "Leading cross-functional development teams to deliver high-quality software solutions",
      color: "gradient-primary",
      animation: "skills-bounce"
    },
    {
      icon: <Award className="h-7 w-7 text-white" />,
      title: "Full-Stack Expertise",
      description: "Proficient in modern frontend and backend technologies with 5+ years of experience",
      color: "gradient-secondary",
      animation: "skills-wave"
    },
    {
      icon: <Target className="h-7 w-7 text-white" />,
      title: "Solution Architecture",
      description: "Designing scalable applications using microservices and cloud-native approaches",
      color: "gradient-accent",
      animation: "contact-wiggle"
    }
  ];

  const stats = [
    { number: "5+", label: "Years Experience", icon: <Code2 className="h-6 w-6" />, color: "text-primary", animation: "hero-pulse" },
    { number: "50+", label: "Projects Completed", icon: <Target className="h-6 w-6" />, color: "text-secondary", animation: "skills-bounce" },
    { number: "10+", label: "Team Members Led", icon: <Users className="h-6 w-6" />, color: "text-accent", animation: "skills-wave" },
    { number: "100%", label: "Client Satisfaction", icon: <Heart className="h-6 w-6" />, color: "text-primary", animation: "contact-wiggle" }
  ];

  return (
    <section id="about" className="py-24 about-bg particles relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-16 right-16 w-32 h-32 gradient-primary rounded-full opacity-10 hero-float"></div>
      <div className="absolute bottom-24 left-16 w-24 h-24 gradient-secondary rounded-full opacity-15 hero-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-primary/20 rounded-lg transform rotate-45 skills-rotate"></div>
      <div className="absolute bottom-1/3 left-1/4">
        <Zap className="h-12 w-12 text-primary/20 skills-bounce" />
      </div>
      <div className="absolute top-1/4 right-1/3">
        <Brain className="h-10 w-10 text-secondary/20 contact-wiggle" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 about-expand">
          <div className="inline-block relative">
            <h2 className="text-5xl font-bold text-slate-900 mb-6 text-3d">About Me</h2>
            <div className="absolute -inset-2 gradient-primary opacity-20 blur-xl rounded-lg"></div>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-reveal">
            Passionate fullstack developer and team lead with expertise in modern web technologies
          </p>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 gradient-primary rounded-2xl shadow-primary interactive-card glow-border morph-shape group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                  <div className={`${stat.color} ${stat.animation}`}>
                    {stat.icon}
                  </div>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2 text-3d group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-white/90 font-medium">
                {stat.label}
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hero-float"></div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Story Section */}
          <div className="experience-fade-in">
            <div className="relative">
              <h3 className="text-3xl font-semibold text-slate-900 mb-8 text-3d">
                My Story
              </h3>
              <div className="absolute -left-4 top-0 w-1 h-16 gradient-primary rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-slate-700 relative">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl -z-10"></div>
              
              <p className="projects-slide-up text-lg leading-relaxed p-6 bg-white/50 rounded-xl glow-border">
                As a dedicated Fullstack Developer Team Lead based in Coimbatore, India, I bring over 5 years 
                of experience in building robust, scalable web applications. My journey in software development 
                has been driven by a passion for creating innovative solutions that make a real impact.
              </p>
              <p className="projects-slide-up text-lg leading-relaxed p-6 bg-white/50 rounded-xl glow-border" style={{animationDelay: '0.2s'}}>
                I specialize in modern frontend frameworks like React and Angular, combined with powerful 
                backend technologies including .NET Core and FastAPI. My experience spans from mobile 
                development with React Native to database optimization with SQL Server.
              </p>
              <p className="projects-slide-up text-lg leading-relaxed p-6 bg-white/50 rounded-xl glow-border" style={{animationDelay: '0.4s'}}>
                Currently, I lead a talented team of developers, focusing on delivering high-quality software 
                solutions while mentoring junior developers and driving technical excellence across projects.
              </p>
            </div>

            {/* Enhanced Goals Section */}
            <div className="mt-12 projects-flip" style={{animationDelay: '0.6s'}}>
              <h4 className="text-2xl font-semibold text-slate-900 mb-6 text-3d">Goals & Vision</h4>
              <ul className="space-y-4">
                {[
                  "Contribute to open-source projects and technology communities",
                  "Build innovative products that solve real-world problems", 
                  "Mentor the next generation of developers"
                ].map((goal, index) => (
                  <li 
                    key={index} 
                    className="flex items-start group p-4 rounded-xl bg-white/30 glow-border interactive-card"
                    style={{animationDelay: `${0.8 + index * 0.1}s`}}
                  >
                    <span className="w-3 h-3 gradient-primary rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300 skills-bounce"></span>
                    <span className="group-hover:text-primary transition-colors duration-300 text-lg">
                      {goal}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enhanced Achievements Section */}
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="interactive-card glow-border morph-shape group relative overflow-hidden"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                
                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full hero-float"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary/40 rounded-full hero-float" style={{animationDelay: '1s'}}></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 ${achievement.color} rounded-2xl shadow-primary group-hover:shadow-secondary transition-all duration-500`}>
                      <div className={`${achievement.animation} group-hover:scale-110 transition-transform duration-300`}>
                        {achievement.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 text-3d">
                      {achievement.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <CardDescription className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300 text-lg leading-relaxed">
                    {achievement.description}
                  </CardDescription>
                </CardContent>

                {/* Morphing Corner Elements */}
                <div className="absolute -top-3 -right-3 w-12 h-12 gradient-secondary rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 skills-rotate"></div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 gradient-accent rounded-full opacity-0 group-hover:opacity-30 transition-all duration-700 skills-bounce"></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Personal Quote Section */}
        <div className="mt-20 text-center about-expand">
          <div className="max-w-5xl mx-auto p-12 gradient-primary rounded-3xl shadow-primary glow-border relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full hero-float"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-white rounded-full hero-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white rounded-full skills-bounce"></div>
              <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-white rounded-full contact-wiggle"></div>
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-medium text-white italic mb-6 text-reveal relative z-10">
              "Code is like humor. When you have to explain it, it's bad."
            </blockquote>
            <cite className="text-white/90 font-semibold text-lg">- Cory House</cite>
            <p className="text-white/80 mt-4 text-lg">One of my favorite quotes that guides my development philosophy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

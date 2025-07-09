
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Azure Developer Associate",
      provider: "Microsoft",
      issueDate: "March 2023",
      validity: "March 2026",
      credentialId: "AZ-204-2023-001",
      description: "Demonstrates expertise in developing cloud solutions on Microsoft Azure platform",
      skills: ["Azure Services", "Cloud Development", "DevOps", "API Management"],
      verificationUrl: "https://docs.microsoft.com/en-us/learn/certifications/"
    },
    {
      title: "AWS Certified Solutions Architect",
      provider: "Amazon Web Services",
      issueDate: "January 2023",
      validity: "January 2026",
      credentialId: "SAA-C03-2023-002",
      description: "Validates expertise in designing distributed systems on AWS",
      skills: ["AWS Architecture", "Cloud Security", "Scalability", "Cost Optimization"],
      verificationUrl: "https://aws.amazon.com/certification/"
    },
    {
      title: "React Developer Certification",
      provider: "Meta (Facebook)",
      issueDate: "November 2022",
      validity: "Lifetime",
      credentialId: "META-REACT-2022-003",
      description: "Professional certification for React development skills",
      skills: ["React", "JSX", "Redux", "Testing", "Performance"],
      verificationUrl: "https://developers.facebook.com/docs/"
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      provider: "Cloud Native Computing Foundation",
      issueDate: "September 2022",
      validity: "September 2025",
      credentialId: "CKA-2022-004",
      description: "Demonstrates skills in Kubernetes administration and management",
      skills: ["Kubernetes", "Container Orchestration", "DevOps", "Monitoring"],
      verificationUrl: "https://www.cncf.io/certification/cka/"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Certifications</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional certifications that validate my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                      <CardDescription className="text-primary font-semibold">
                        {cert.provider}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge 
                    variant={cert.validity === "Lifetime" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {cert.validity === "Lifetime" ? "Lifetime" : "Valid"}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-slate-600 text-sm">{cert.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-slate-700">Issued:</span>
                    <p className="text-slate-600">{cert.issueDate}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Valid Until:</span>
                    <p className="text-slate-600">{cert.validity}</p>
                  </div>
                </div>
                
                <div>
                  <span className="font-semibold text-slate-700 text-sm">Credential ID:</span>
                  <p className="text-slate-600 text-sm font-mono">{cert.credentialId}</p>
                </div>
                
                <div>
                  <span className="font-semibold text-slate-700 text-sm block mb-2">Skills Covered:</span>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4"
                  asChild
                >
                  <a 
                    href={cert.verificationUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Verify Certification</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resume Download Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900">Download My Resume</CardTitle>
              <CardDescription>
                Get a comprehensive overview of my skills, experience, and achievements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Award className="h-5 w-5 mr-2" />
                Download Resume (PDF)
              </Button>
              <p className="text-sm text-slate-600 mt-4">
                Last updated: January 2024 | File size: 1.2 MB
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

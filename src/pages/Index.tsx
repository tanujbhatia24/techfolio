import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Server, 
  Database,
  Cloud,
  Code
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sidebar-background to-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="relative">
            <Terminal className="w-16 h-16 text-[#8B5CF6] animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-transparent bg-clip-text">
            Tanuj Bhatia
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
            Application Engineer with 6+ years in production support, application development, and maintenance of business-critical software across diverse technologies.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 transition-all duration-300">
              <Mail className="mr-2 h-4 w-4" />
              tanujbhatia0001@gmail.com
            </Button>
            <Button variant="outline" className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10">
              <span className="mr-2">📍</span>
              Gurgaon, Delhi, India
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a href="https://linkedin.com/in/tanujbhatia" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-[#0EA5E9]/10 hover:text-[#0EA5E9] transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-transparent to-muted/30">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-transparent bg-clip-text">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-[#0EA5E9]/20 hover:border-[#0EA5E9]">
            <CardContent className="pt-6">
              <Cloud className="w-12 h-12 mb-4 text-[#0EA5E9] group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0EA5E9] transition-colors">Cloud & Infrastructure</h3>
              <p className="text-muted-foreground">
                Azure, Google Cloud Platform, Linux, Cloud Computing
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-[#8B5CF6]/20 hover:border-[#8B5CF6]">
            <CardContent className="pt-6">
              <Code className="w-12 h-12 mb-4 text-[#8B5CF6] group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#8B5CF6] transition-colors">Programming</h3>
              <p className="text-muted-foreground">
                Python (Proficient), SQL, Scripting
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-[#D946EF]/20 hover:border-[#D946EF]">
            <CardContent className="pt-6">
              <Server className="w-12 h-12 mb-4 text-[#D946EF] group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#D946EF] transition-colors">Monitoring</h3>
              <p className="text-muted-foreground">
                New Relic, AppDynamics, Splunk
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-[#F97316]/20 hover:border-[#F97316]">
            <CardContent className="pt-6">
              <Database className="w-12 h-12 mb-4 text-[#F97316] group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#F97316] transition-colors">Tools & Methods</h3>
              <p className="text-muted-foreground">
                Agile, Scrum, ServiceNow, Jira
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-transparent bg-clip-text">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Microsoft Certified Azure Fundamentals",
            "Google Cloud Platform - Foundation",
            "Infosys Certified Python Programmer",
            "Python Certified Python Associate",
            "SQL (Intermediate) Certificate, HackerRank",
            "Splunk + Fundamentals"
          ].map((cert, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="pt-6">
                <p className="font-medium text-primary">{cert}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
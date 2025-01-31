import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Terminal, Rocket, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sidebar-background to-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="relative">
            <Terminal className="w-16 h-16 text-primary animate-pulse" />
            <Star className="absolute -top-2 -right-2 w-6 h-6 text-[#F97316] animate-bounce" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-transparent bg-clip-text">
            TechOps Engineer
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
            Bridging the gap between development and operations with modern infrastructure solutions
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 transition-all duration-300 transform hover:scale-105">
              <Mail className="mr-2" />
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10 transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="mr-2" />
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6] transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
          Core Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-[#0EA5E9]/20 hover:border-[#0EA5E9]">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0EA5E9] transition-colors">Infrastructure</h3>
              <p className="text-muted-foreground">
                Cloud platforms, containerization, and infrastructure as code
              </p>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-[#8B5CF6]/20 hover:border-[#8B5CF6]">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#8B5CF6] transition-colors">Automation</h3>
              <p className="text-muted-foreground">
                CI/CD pipelines, scripting, and process automation
              </p>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-[#D946EF]/20 hover:border-[#D946EF]">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#D946EF] transition-colors">Monitoring</h3>
              <p className="text-muted-foreground">
                System monitoring, logging, and performance optimization
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
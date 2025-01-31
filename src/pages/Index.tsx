import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <Terminal className="w-16 h-16 text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            TechOps Engineer
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px]">
            Bridging the gap between development and operations with modern infrastructure solutions
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button>
              <Mail className="mr-2" />
              Contact Me
            </Button>
            <Button variant="outline">
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/50">
        <h2 className="text-3xl font-bold text-center mb-12">Core Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Infrastructure</h3>
              <p className="text-muted-foreground">
                Cloud platforms, containerization, and infrastructure as code
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Automation</h3>
              <p className="text-muted-foreground">
                CI/CD pipelines, scripting, and process automation
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Monitoring</h3>
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
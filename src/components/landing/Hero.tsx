import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import CodeEditor from "./CodeEditor";

/**
 * Hero Section
 * The "wow moment" - compelling headline with live product demo
 * Gradient background with grid pattern for depth
 */
const Hero = () => {
  // Floating particles configuration
  const particles = [
    { size: 5, x: '8%', y: '15%', duration: 9, delay: 0 },
    { size: 7, x: '20%', y: '55%', duration: 13, delay: 2 },
    { size: 4, x: '35%', y: '25%', duration: 11, delay: 1 },
    { size: 6, x: '55%', y: '65%', duration: 10, delay: 3 },
    { size: 5, x: '70%', y: '20%', duration: 12, delay: 0.5 },
    { size: 8, x: '82%', y: '45%', duration: 14, delay: 2.5 },
    { size: 4, x: '12%', y: '75%', duration: 8, delay: 1.5 },
    { size: 6, x: '45%', y: '10%', duration: 15, delay: 4 },
    { size: 5, x: '88%', y: '80%', duration: 11, delay: 3.5 },
    { size: 7, x: '3%', y: '40%', duration: 9, delay: 1 },
    { size: 4, x: '65%', y: '85%', duration: 10, delay: 2 },
    { size: 6, x: '92%', y: '30%', duration: 12, delay: 0 },
  ];

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(263 70% 30% / 0.3), transparent)"
        }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-primary/20 animate-float"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.x,
              top: particle.y,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
      
      {/* Floating orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }}  />
      <div 
        className="absolute w-40 h-40 rounded-full opacity-10 animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          right: '10%',
          top: '20%',
          filter: 'blur(35px)',
        }}
      />
      <div 
        className="absolute w-32 h-32 rounded-full opacity-10 animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)',
          left: '8%',
          bottom: '30%',
          filter: 'blur(30px)',
          animationDelay: '1.5s',
        }}
      />

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-sm text-muted-foreground">Now in Public Beta</span>
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Stop Guessing.
            <br />
            <span className="text-gradient-primary">Start Engineering</span> Your Prompts.
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            The first IDE for natural language. Score, debug, and optimize your LLM prompts before deployment.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" className="group" asChild>
              <Link to="/auth">
                Start Free Analysis
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="group">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof Mini */}
          <p 
            className="mt-8 text-sm text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            ⚡ 10,000+ prompts optimized this week
          </p>
        </div>

        {/* Code Editor Demo */}
        <div 
          className="animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <CodeEditor />
        </div>
      </div>
    </section>
  );
};

export default Hero;

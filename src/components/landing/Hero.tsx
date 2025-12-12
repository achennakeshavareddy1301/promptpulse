import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import CodeEditor from "./CodeEditor";

/**
 * Hero Section
 * The "wow moment" - compelling headline with live product demo
 * Gradient background with grid pattern for depth
 */
const Hero = () => {
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
      
      {/* Floating orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

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
            <Button variant="hero" size="xl" className="group">
              Start Free Analysis
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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

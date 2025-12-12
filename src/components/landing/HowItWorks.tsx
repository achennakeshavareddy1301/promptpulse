import { Upload, Cpu, Rocket } from "lucide-react";

/**
 * How It Works Section
 * 3-step horizontal process with connecting lines
 * Visual progression from input to optimized output
 */
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Input Your Prompt",
      description: "Paste your prompt or connect your API. We support all major LLM formats and providers.",
    },
    {
      number: "02",
      icon: Cpu,
      title: "AI Analysis",
      description: "Our engine scores your prompt across 12 dimensions including clarity, specificity, and safety.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Deploy Optimized",
      description: "Get actionable fixes, one-click improvements, and export directly to your application.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, hsl(263 70% 20% / 0.2), transparent)"
        }}
      />

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Three Steps to <span className="text-gradient-accent">Perfect Prompts</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From messy natural language to production-ready prompts in seconds.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Connecting Line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative text-center group"
            >
              {/* Step Number Badge */}
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-20 h-20 rounded-full glass flex items-center justify-center group-hover:border-primary/30 transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Step number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border border-white/10 flex items-center justify-center">
                  <span className="text-xs font-mono font-bold text-primary">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground max-w-xs mx-auto leading-relaxed">
                {step.description}
              </p>

              {/* Arrow (mobile only) */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-6">
                  <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

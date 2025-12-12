import { 
  Brain, 
  Gauge, 
  Layers, 
  Shield, 
  Sparkles, 
  Zap 
} from "lucide-react";

/**
 * Features Section - Bento Grid Layout
 * Each card has unique gradient hover effects
 * Icons represent the feature's purpose visually
 */
const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Hallucination Detector",
      description: "Identify prompts that encourage model hallucinations before they happen. Our AI analyzes factual grounding and response predictability.",
      gradient: "from-destructive/20 to-orange-500/20",
      iconColor: "text-destructive",
      large: true,
    },
    {
      icon: Gauge,
      title: "Token Optimizer",
      description: "Reduce token usage by up to 40% without losing meaning. Save on API costs.",
      gradient: "from-primary/20 to-purple-600/20",
      iconColor: "text-primary",
      large: false,
    },
    {
      icon: Layers,
      title: "Context Injection",
      description: "Auto-inject relevant context and system prompts based on your use case.",
      gradient: "from-accent/20 to-teal-500/20",
      iconColor: "text-accent",
      large: false,
    },
    {
      icon: Shield,
      title: "Jailbreak Prevention",
      description: "Detect and prevent prompt injection attacks. Secure your LLM applications.",
      gradient: "from-yellow-500/20 to-amber-500/20",
      iconColor: "text-yellow-500",
      large: false,
    },
    {
      icon: Sparkles,
      title: "Auto-Refinement",
      description: "One-click prompt improvements with AI-powered suggestions and rewrites.",
      gradient: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-400",
      large: false,
    },
    {
      icon: Zap,
      title: "Real-time Scoring",
      description: "Get instant feedback on clarity, specificity, and expected output quality with our proprietary scoring engine.",
      gradient: "from-accent/20 to-emerald-500/20",
      iconColor: "text-accent",
      large: true,
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      
      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Your Prompt Engineering <span className="text-gradient-primary">Toolkit</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to write prompts that actually work. No more trial and error.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`
                group relative glass rounded-2xl p-6 md:p-8
                hover:border-white/20 transition-all duration-500
                ${feature.large ? "lg:col-span-2" : ""}
              `}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Gradient hover effect */}
              <div 
                className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                  transition-opacity duration-500 bg-gradient-to-br ${feature.gradient}
                `}
              />
              
              <div className="relative">
                {/* Icon */}
                <div className={`
                  inline-flex items-center justify-center w-12 h-12 rounded-xl 
                  bg-white/5 mb-4 group-hover:scale-110 transition-transform duration-300
                  ${feature.iconColor}
                `}>
                  <feature.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

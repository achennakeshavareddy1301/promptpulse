import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Pricing Section
 * Simple two-tier comparison: Free vs Enterprise
 * Emphasis on getting started easily
 */
const Pricing = () => {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for individual developers and experimentation.",
      features: [
        "50 prompt scans/month",
        "Basic scoring engine",
        "Export to clipboard",
        "Community support",
      ],
      cta: "Get Started Free",
      variant: "outline" as const,
      popular: false,
    },
    {
      name: "Team",
      price: "$49",
      period: "/month",
      description: "For teams building production LLM applications.",
      features: [
        "Unlimited prompt scans",
        "Advanced AI analysis",
        "API access & integrations",
        "Team collaboration",
        "Priority support",
        "Custom scoring rules",
      ],
      cta: "Start 14-Day Trial",
      variant: "hero" as const,
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Simple, <span className="text-gradient-primary">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Start free. Upgrade when you need more power.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`
                relative glass rounded-2xl p-8
                ${tier.popular ? "border-primary/30" : ""}
              `}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Tier Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="text-muted-foreground">{tier.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant={tier.variant} size="lg" className="w-full">
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Enterprise callout */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Need custom deployment or volume pricing?{" "}
          <a href="#" className="text-primary hover:underline">
            Contact our sales team
          </a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;

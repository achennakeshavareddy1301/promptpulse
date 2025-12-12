/**
 * Trust Strip
 * Social proof showing company logos/names
 * Muted styling to not compete with main content
 */
const TrustStrip = () => {
  const companies = [
    "AcmeAI",
    "TensorFlow",
    "NeuralStack",
    "DataForge",
    "CloudMind",
    "SynthLabs",
  ];

  return (
    <section className="py-12 border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by engineers at industry-leading companies
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div
              key={company}
              className="text-xl md:text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors duration-300 tracking-tight"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;

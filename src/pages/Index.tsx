import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TrustStrip from "@/components/landing/TrustStrip";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";

/**
 * PromptPulse Landing Page
 * A dark-mode SaaS landing page for a "Linter for Prompts" product
 * 
 * Design Philosophy:
 * - DevTools aesthetic: high contrast, technical typography
 * - Deep zinc backgrounds with subtle grid patterns
 * - Neon purple (AI/intelligence) and emerald green (success) accents
 * - Glassmorphism cards with subtle hover glows
 * - Mobile-first, fully responsive
 */
const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Fixed navigation with glass effect */}
      <Navbar />
      
      {/* Hero: The "wow" moment with code editor demo */}
      <Hero />
      
      {/* Social proof strip */}
      <TrustStrip />
      
      {/* Feature grid in bento box layout */}
      <Features />
      
      {/* 3-step process visualization */}
      <HowItWorks />
      
      {/* Pricing comparison */}
      <Pricing />
      
      {/* Minimalist footer */}
      <Footer />
    </main>
  );
};

export default Index;

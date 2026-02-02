import { Zap, Github, Twitter, Linkedin } from "lucide-react";

/**
 * Footer Component
 * Minimalist multi-column layout
 * Contains navigation, social links, and legal
 */
const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Changelog", href: "#" },
      { name: "API Docs", href: "#" },
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
    Legal: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "Security", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  // Floating particles configuration
  const particles = [
    { size: 4, x: '10%', y: '20%', duration: 8, delay: 0 },
    { size: 6, x: '25%', y: '60%', duration: 12, delay: 2 },
    { size: 3, x: '40%', y: '30%', duration: 10, delay: 1 },
    { size: 5, x: '60%', y: '70%', duration: 9, delay: 3 },
    { size: 4, x: '75%', y: '25%', duration: 11, delay: 0.5 },
    { size: 7, x: '85%', y: '50%', duration: 13, delay: 2.5 },
    { size: 3, x: '15%', y: '80%', duration: 7, delay: 1.5 },
    { size: 5, x: '50%', y: '15%', duration: 14, delay: 4 },
    { size: 4, x: '90%', y: '85%', duration: 10, delay: 3.5 },
    { size: 6, x: '5%', y: '45%', duration: 8, delay: 1 },
  ];

  return (
    <footer id="docs" className="relative border-t border-white/5 bg-card/30 overflow-hidden">
      {/* Floating Particles Background */}
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
        
        {/* Glowing orbs */}
        <div 
          className="absolute w-32 h-32 rounded-full opacity-10 animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
            left: '20%',
            top: '30%',
            filter: 'blur(40px)',
          }}
        />
        <div 
          className="absolute w-24 h-24 rounded-full opacity-10 animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)',
            right: '15%',
            bottom: '20%',
            filter: 'blur(30px)',
            animationDelay: '1s',
          }}
        />
        <div 
          className="absolute w-20 h-20 rounded-full opacity-5 animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
            left: '60%',
            top: '60%',
            filter: 'blur(25px)',
            animationDelay: '2s',
          }}
        />
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="group flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-primary animate-[float_3s_ease-in-out_infinite] group-hover:animate-[spin_0.5s_ease-in-out]" />
              <span className="text-lg font-bold tracking-tight">
                <span className="inline-block animate-[float_2.5s_ease-in-out_infinite_0.1s] group-hover:animate-[wiggle_0.3s_ease-in-out_infinite]">P</span>
                <span className="inline-block animate-[float_2.8s_ease-in-out_infinite_0.2s] group-hover:animate-[wiggle_0.3s_ease-in-out_infinite_0.05s]">r</span>
                <span className="inline-block animate-[float_2.3s_ease-in-out_infinite_0.3s] group-hover:animate-[wiggle_0.3s_ease-in-out_infinite_0.1s]">o</span>
                <span className="inline-block animate-[float_2.6s_ease-in-out_infinite_0.4s] group-hover:animate-[wiggle_0.3s_ease-in-out_infinite_0.15s]">m</span>
                <span className="inline-block animate-[float_2.4s_ease-in-out_infinite_0.5s] group-hover:animate-[wiggle_0.3s_ease-in-out_infinite_0.2s]">p</span>
                <span className="inline-block animate-[float_2.7s_ease-in-out_infinite_0.6s] group-hover:animate-[wiggle_0.3s_ease-in-out_infinite_0.25s]">t</span>
                <span className="inline-block text-primary animate-[float_2.5s_ease-in-out_infinite_0.7s] group-hover:animate-[wiggle_0.3s_ease-in-out_infinite_0.3s]">P</span>
                <span className="inline-block text-primary animate-[float_2.9s_ease-in-out_infinite_0.8s] group-hover:animate-[wiggle_0.3s_ease-in-out_infinite_0.35s]">u</span>
                <span className="inline-block text-primary animate-[float_2.2s_ease-in-out_infinite_0.9s] group-hover:animate-[wiggle_0.3s_ease-in-out_infinite_0.4s]">l</span>
                <span className="inline-block text-primary animate-[float_2.6s_ease-in-out_infinite_1s] group-hover:animate-[wiggle_0.3s_ease-in-out_infinite_0.45s]">s</span>
                <span className="inline-block text-primary animate-[float_2.4s_ease-in-out_infinite_1.1s] group-hover:animate-[wiggle_0.3s_ease-in-out_infinite_0.5s]">e</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
              The prompt engineering platform for teams building production LLM applications.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PromptPulse. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with ⚡ for prompt engineers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

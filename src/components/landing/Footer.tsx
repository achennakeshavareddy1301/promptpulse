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

  return (
    <footer id="docs" className="border-t border-white/5 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
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

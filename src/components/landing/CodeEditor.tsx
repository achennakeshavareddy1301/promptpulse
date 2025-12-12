import { AlertCircle, CheckCircle2, Sparkles } from "lucide-react";

/**
 * CodeEditor Component
 * Visual mock-up showing before/after prompt optimization
 * This is the "wow moment" - showing the product in action
 */
const CodeEditor = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Ambient glow behind the editor */}
      <div className="absolute inset-0 bg-gradient-to-r from-destructive/20 via-transparent to-accent/20 blur-3xl opacity-40" />
      
      <div className="relative grid md:grid-cols-2 gap-4 md:gap-6">
        {/* Left Panel: Bad Prompt */}
        <div className="glass rounded-xl overflow-hidden group hover:border-destructive/30 transition-colors duration-300">
          {/* Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-muted" />
              </div>
              <span className="text-xs text-muted-foreground font-mono ml-2">prompt.txt</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-destructive" />
              <span className="text-xs font-mono text-destructive">Score: 34/100</span>
            </div>
          </div>
          
          {/* Code Content */}
          <div className="p-4 font-mono text-sm leading-relaxed">
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <span className="text-destructive/70">//</span> Original Prompt
              </p>
              <div className="bg-destructive/10 border-l-2 border-destructive px-3 py-2 rounded-r">
                <p className="text-foreground/90">
                  <span className="text-destructive underline decoration-wavy">Write me something about AI</span> 
                  <span className="text-muted-foreground"> and make it </span>
                  <span className="text-destructive underline decoration-wavy">good</span>
                  <span className="text-muted-foreground">. I need it for </span>
                  <span className="text-destructive underline decoration-wavy">stuff</span>
                  <span className="text-muted-foreground">.</span>
                </p>
              </div>
              
              {/* Issues List */}
              <div className="pt-2 space-y-2">
                <div className="flex items-start gap-2 text-xs text-destructive/80">
                  <span className="mt-0.5">⚠</span>
                  <span>Vague subject: "something about AI"</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-destructive/80">
                  <span className="mt-0.5">⚠</span>
                  <span>No format specification</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-destructive/80">
                  <span className="mt-0.5">⚠</span>
                  <span>Undefined context: "stuff"</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Arrow (centered between panels) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-card border border-white/20 rounded-full p-3 glow-primary animate-pulse-glow">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
        </div>

        {/* Right Panel: Optimized Prompt */}
        <div className="glass rounded-xl overflow-hidden group hover:border-accent/30 transition-colors duration-300">
          {/* Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-accent/80" />
                <div className="w-3 h-3 rounded-full bg-accent/50" />
                <div className="w-3 h-3 rounded-full bg-accent/30" />
              </div>
              <span className="text-xs text-muted-foreground font-mono ml-2">prompt_optimized.txt</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span className="text-xs font-mono text-accent font-semibold">Score: 98/100</span>
            </div>
          </div>
          
          {/* Code Content */}
          <div className="p-4 font-mono text-sm leading-relaxed">
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <span className="text-accent/70">//</span> Optimized Prompt
              </p>
              <div className="bg-accent/10 border-l-2 border-accent px-3 py-2 rounded-r">
                <p className="text-foreground/90">
                  <span className="text-accent">[ROLE]</span> You are a technical writer.
                </p>
                <p className="text-foreground/90 mt-2">
                  <span className="text-accent">[TASK]</span> Write a 500-word blog post explaining how transformer models process language.
                </p>
                <p className="text-foreground/90 mt-2">
                  <span className="text-accent">[AUDIENCE]</span> Software developers with basic ML knowledge.
                </p>
                <p className="text-foreground/90 mt-2">
                  <span className="text-accent">[FORMAT]</span> Use headers, code examples, and a summary.
                </p>
              </div>
              
              {/* Improvements */}
              <div className="pt-2 space-y-2">
                <div className="flex items-start gap-2 text-xs text-accent/80">
                  <span className="mt-0.5">✓</span>
                  <span>Clear role definition</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-accent/80">
                  <span className="mt-0.5">✓</span>
                  <span>Specific word count & topic</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-accent/80">
                  <span className="mt-0.5">✓</span>
                  <span>Defined audience & format</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;

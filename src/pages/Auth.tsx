import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, Github, Mail, Lock, Sparkles, Cpu, GitBranch, ArrowLeft, Eye, EyeOff, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * Auth Page: Split-screen authentication with sign in/sign up toggle
 * Left side: Clean, focused form
 * Right side: Brand experience with animated AI visualization
 */
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual auth logic
    console.log(isSignUp ? "Sign up" : "Sign in", { email, password, name });
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* LEFT SIDE - Form */}
      <div className="w-full lg:w-1/2 flex flex-col p-6 sm:p-8 lg:p-12">
        {/* Back to home */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to home</span>
        </Link>

        {/* Logo */}
        <div className="flex items-center gap-2 mb-12">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg text-foreground">PromptPulse</span>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 tracking-tight">
              {isSignUp ? "Optimize your first prompt" : "Welcome back, Engineer"}
            </h1>
            <p className="text-muted-foreground">
              {isSignUp 
                ? "Create an account to start engineering better prompts" 
                : "Sign in to continue optimizing your LLM workflows"}
            </p>
          </div>

          {/* Social Auth */}
          <Button 
            variant="outline" 
            className="w-full h-12 bg-card/50 border-border hover:bg-card hover:border-foreground/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            Continue with GitHub
          </Button>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-4 bg-background text-muted-foreground">Or continue with email</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name field - only for sign up */}
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ada Lovelace"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 h-12 bg-card/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="engineer@promptpulse.io"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 bg-card/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 bg-card/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {!isSignUp && (
              <div className="flex justify-end">
                <button type="button" className="text-sm text-primary hover:text-primary/80 transition-colors">
                  Forgot password?
                </button>
              </div>
            )}

            <Button type="submit" variant="glow" className="w-full h-12 mt-2">
              {isSignUp ? "Create Account" : "Sign In"}
            </Button>
          </form>

          {/* Toggle */}
          <p className="text-center text-muted-foreground mt-8">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </button>
          </p>
        </div>

        {/* Footer */}
        <p className="text-xs text-muted-foreground text-center mt-8">
          By continuing, you agree to our{" "}
          <a href="#" className="text-foreground hover:text-primary transition-colors">Terms of Service</a>
          {" "}and{" "}
          <a href="#" className="text-foreground hover:text-primary transition-colors">Privacy Policy</a>
        </p>
      </div>

      {/* RIGHT SIDE - Brand Experience (hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-purple-900/20">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "1s" }}></div>

        {/* Floating icons */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-12 h-12 rounded-xl bg-card/30 backdrop-blur-sm border border-border flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: "0.5s" }}>
          <div className="w-10 h-10 rounded-lg bg-card/30 backdrop-blur-sm border border-border flex items-center justify-center">
            <Cpu className="w-5 h-5 text-accent" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-10 h-10 rounded-lg bg-card/30 backdrop-blur-sm border border-border flex items-center justify-center">
            <GitBranch className="w-5 h-5 text-purple-400" />
          </div>
        </div>

        {/* Center content - The "Artifact" */}
        <div className="flex items-center justify-center w-full p-8">
          <div className="relative">
            {/* Main glassmorphism card */}
            <div className="glass-card p-6 rounded-2xl max-w-md w-full">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-auto text-xs text-muted-foreground font-mono">system_prompt.txt</span>
              </div>

              {/* Code content */}
              <div className="font-mono text-sm space-y-3 mb-6">
                <div className="text-muted-foreground">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-accent">prompt</span>{" "}
                  <span className="text-foreground">=</span>{" "}
                  <span className="text-amber-400">`</span>
                </div>
                <div className="pl-4 text-foreground/80 leading-relaxed">
                  You are an expert AI assistant.
                  <br />
                  <span className="text-primary">Analyze</span> the user's query,
                  <br />
                  provide <span className="text-accent">structured</span> responses.
                </div>
                <div className="text-amber-400">`</div>
              </div>

              {/* Analysis status */}
              <div className="border-t border-border pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Token Efficiency</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="w-[92%] h-full bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    </div>
                    <span className="text-xs text-accent font-mono">92%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Hallucination Risk</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="w-[8%] h-full bg-accent rounded-full"></div>
                    </div>
                    <span className="text-xs text-accent font-mono">Low</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Overall Score</span>
                  <span className="text-lg font-bold text-accent font-mono">98/100</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-pulse">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

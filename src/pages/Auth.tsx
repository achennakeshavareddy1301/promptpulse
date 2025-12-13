import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, Github, Mail, Lock, ArrowLeft, Eye, EyeOff, User, Terminal, Braces, CircuitBoard, Fingerprint, Shield, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * Auth Page: Split-screen authentication with sign in/sign up toggle
 * Left side: Clean, focused form with smooth transitions
 * Right side: Dynamic neural network visualization that morphs between states
 */
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isSignUp ? "Sign up" : "Sign in", { email, password, name });
  };

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="min-h-screen bg-background flex overflow-hidden">
      {/* LEFT SIDE - Form */}
      <div 
        className={`w-full lg:w-1/2 flex flex-col p-6 sm:p-8 lg:p-12 transition-all duration-700 ease-out ${
          isSignUp ? "lg:order-2" : "lg:order-1"
        }`}
      >
        {/* Back to home */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 w-fit group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm">Back to home</span>
        </Link>

        {/* Logo */}
        <div className="flex items-center gap-2 mb-12">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/25">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg text-foreground">PromptPulse</span>
        </div>

        {/* Form Container with transition */}
        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
          {/* Header with slide animation */}
          <div 
            className="mb-8 transition-all duration-500"
            key={isSignUp ? "signup-header" : "signin-header"}
          >
            <h1 
              className="text-2xl sm:text-3xl font-bold text-foreground mb-2 tracking-tight animate-fade-in"
            >
              {isSignUp ? "Optimize your first prompt" : "Welcome back, Engineer"}
            </h1>
            <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {isSignUp 
                ? "Create an account to start engineering better prompts" 
                : "Sign in to continue optimizing your LLM workflows"}
            </p>
          </div>

          {/* Social Auth */}
          <Button 
            variant="outline" 
            className="w-full h-12 bg-card/50 border-border hover:bg-card hover:border-foreground/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group"
          >
            <Github className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
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

          {/* Form with staggered animations */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name field - animates in/out */}
            <div 
              className={`space-y-2 transition-all duration-500 ease-out overflow-hidden ${
                isSignUp 
                  ? "max-h-24 opacity-100 translate-y-0" 
                  : "max-h-0 opacity-0 -translate-y-4"
              }`}
            >
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

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
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
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
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

            {/* Forgot password - slides out when signing up */}
            <div 
              className={`flex justify-end transition-all duration-300 ${
                isSignUp ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto"
              }`}
            >
              <button type="button" className="text-sm text-primary hover:text-primary/80 transition-colors">
                Forgot password?
              </button>
            </div>

            <Button 
              type="submit" 
              variant="glow" 
              className="w-full h-12 mt-2 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isSignUp ? (
                  <>
                    <Rocket className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    Create Account
                  </>
                ) : (
                  <>
                    <Fingerprint className="w-4 h-4 transition-transform group-hover:scale-110" />
                    Sign In
                  </>
                )}
              </span>
            </Button>
          </form>

          {/* Toggle with animation */}
          <div className="relative mt-8 py-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            </div>
            <p className="text-center text-muted-foreground relative">
              <span className="bg-background px-4">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                <button
                  onClick={handleToggle}
                  className="text-primary hover:text-primary/80 font-medium transition-all hover:underline underline-offset-4"
                >
                  {isSignUp ? "Sign in" : "Sign up"}
                </button>
              </span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-muted-foreground text-center mt-8">
          By continuing, you agree to our{" "}
          <a href="#" className="text-foreground hover:text-primary transition-colors hover:underline">Terms of Service</a>
          {" "}and{" "}
          <a href="#" className="text-foreground hover:text-primary transition-colors hover:underline">Privacy Policy</a>
        </p>
      </div>

      {/* RIGHT SIDE - Dynamic Neural Visualization (hidden on mobile) */}
      <div 
        className={`hidden lg:flex w-1/2 relative overflow-hidden transition-all duration-700 ease-out ${
          isSignUp ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {/* Animated gradient background that shifts based on auth state */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 ${
            isSignUp 
              ? "bg-gradient-to-bl from-accent/20 via-background to-primary/10" 
              : "bg-gradient-to-br from-primary/20 via-background to-purple-900/20"
          }`}
        />
        
        {/* Hexagonal grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <polygon 
                  points="25,0 50,14.4 50,43.4 25,43.4 0,28.9 0,14.4" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.5"
                  className="text-primary/30"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        {/* Animated connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Animated data flow lines */}
          <line 
            x1="20%" y1="30%" x2="80%" y2="70%" 
            stroke="url(#lineGradient)" 
            strokeWidth="1"
            className="animate-pulse"
          />
          <line 
            x1="80%" y1="20%" x2="20%" y2="80%" 
            stroke="url(#lineGradient2)" 
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <line 
            x1="50%" y1="10%" x2="50%" y2="90%" 
            stroke="url(#lineGradient)" 
            strokeWidth="0.5"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </svg>

        {/* Floating orbs with state-based positioning */}
        <div 
          className={`absolute w-72 h-72 rounded-full blur-[120px] transition-all duration-1000 ${
            isSignUp 
              ? "top-1/3 right-1/4 bg-accent/25" 
              : "top-1/4 left-1/4 bg-primary/25"
          }`}
        />
        <div 
          className={`absolute w-48 h-48 rounded-full blur-[100px] transition-all duration-1000 ${
            isSignUp 
              ? "bottom-1/3 left-1/4 bg-primary/20" 
              : "bottom-1/4 right-1/4 bg-purple-500/20"
          }`}
        />

        {/* Floating node elements that reposition */}
        <div 
          className={`absolute w-14 h-14 rounded-2xl glass border border-border flex items-center justify-center transition-all duration-700 ${
            isSignUp 
              ? "top-[20%] right-[30%] rotate-12" 
              : "top-[25%] left-[25%] -rotate-6"
          }`}
        >
          <Terminal className={`w-7 h-7 transition-colors duration-500 ${isSignUp ? "text-accent" : "text-primary"}`} />
        </div>
        <div 
          className={`absolute w-12 h-12 rounded-xl glass border border-border flex items-center justify-center transition-all duration-700 ${
            isSignUp 
              ? "top-[40%] left-[20%] -rotate-12" 
              : "top-[35%] right-[25%] rotate-6"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          <Braces className="w-6 h-6 text-purple-400" />
        </div>
        <div 
          className={`absolute w-10 h-10 rounded-lg glass border border-border flex items-center justify-center transition-all duration-700 ${
            isSignUp 
              ? "bottom-[30%] right-[20%] rotate-6" 
              : "bottom-[35%] left-[30%] -rotate-6"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <CircuitBoard className={`w-5 h-5 transition-colors duration-500 ${isSignUp ? "text-primary" : "text-accent"}`} />
        </div>
        <div 
          className={`absolute w-10 h-10 rounded-lg glass border border-border flex items-center justify-center transition-all duration-700 ${
            isSignUp 
              ? "top-[60%] left-[35%] -rotate-6" 
              : "top-[55%] right-[35%] rotate-12"
          }`}
          style={{ transitionDelay: "0.15s" }}
        >
          <Shield className="w-5 h-5 text-blue-400" />
        </div>

        {/* Center content - Morphing Card */}
        <div className="flex items-center justify-center w-full p-8">
          <div 
            className={`relative transition-all duration-700 ease-out ${
              isSignUp ? "translate-y-4 rotate-1" : "-translate-y-4 -rotate-1"
            }`}
          >
            {/* Glow effect behind card */}
            <div 
              className={`absolute -inset-4 rounded-3xl blur-2xl transition-all duration-700 ${
                isSignUp ? "bg-accent/20" : "bg-primary/20"
              }`}
            />
            
            {/* Main card */}
            <div className="relative glass-card p-8 rounded-2xl max-w-md w-full border border-border/50">
              {/* Window controls */}
              <div className="flex items-center gap-2 mb-6">
                <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${isSignUp ? "bg-accent" : "bg-red-500/80"}`} />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${isSignUp ? "bg-primary" : "bg-green-500/80"}`} />
                <span className="ml-auto text-xs text-muted-foreground font-mono tracking-wider">
                  {isSignUp ? "new_engineer.init" : "auth_session.lock"}
                </span>
              </div>

              {/* Dynamic content based on auth state */}
              <div className="space-y-6">
                {/* Status indicator */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card/30 border border-border/50">
                  <div className={`w-2 h-2 rounded-full animate-pulse ${isSignUp ? "bg-accent" : "bg-primary"}`} />
                  <span className="text-sm font-mono text-muted-foreground">
                    {isSignUp ? "Initializing new workspace..." : "Secure connection established"}
                  </span>
                </div>

                {/* Code visualization */}
                <div className="font-mono text-sm space-y-2 p-4 rounded-lg bg-background/50 border border-border/30">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">const</span>
                    <span className={`transition-colors duration-500 ${isSignUp ? "text-accent" : "text-primary"}`}>
                      {isSignUp ? "newEngineer" : "session"}
                    </span>
                    <span className="text-foreground/60">=</span>
                    <span className="text-amber-400">{"{"}</span>
                  </div>
                  <div className="pl-4 space-y-1 text-foreground/70">
                    <div>
                      <span className="text-blue-400">{isSignUp ? "role" : "status"}</span>
                      <span className="text-foreground/60">: </span>
                      <span className="text-green-400">"{isSignUp ? "prompt_engineer" : "authenticated"}"</span>
                      <span className="text-foreground/60">,</span>
                    </div>
                    <div>
                      <span className="text-blue-400">{isSignUp ? "tier" : "access"}</span>
                      <span className="text-foreground/60">: </span>
                      <span className="text-green-400">"{isSignUp ? "unlimited" : "full"}"</span>
                      <span className="text-foreground/60">,</span>
                    </div>
                    <div>
                      <span className="text-blue-400">{isSignUp ? "powers" : "features"}</span>
                      <span className="text-foreground/60">: </span>
                      <span className="text-amber-400">[</span>
                      <span className="text-green-400">"✨"</span>
                      <span className="text-amber-400">]</span>
                    </div>
                  </div>
                  <div className="text-amber-400">{"}"}</div>
                </div>

                {/* Progress bars that animate differently */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground font-mono">
                      {isSignUp ? "Setup Progress" : "Session Security"}
                    </span>
                    <span className={`font-mono font-bold transition-colors duration-500 ${isSignUp ? "text-accent" : "text-primary"}`}>
                      {isSignUp ? "Ready" : "Active"}
                    </span>
                  </div>
                  <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${
                        isSignUp 
                          ? "w-full bg-gradient-to-r from-accent to-green-400" 
                          : "w-[85%] bg-gradient-to-r from-primary to-purple-400"
                      }`}
                    />
                  </div>
                </div>

                {/* Feature badges */}
                <div className="flex flex-wrap gap-2">
                  {(isSignUp 
                    ? ["Free Tier", "10K Tokens", "API Access"] 
                    : ["Encrypted", "2FA Ready", "SSO"]
                  ).map((badge, i) => (
                    <span 
                      key={badge}
                      className={`px-3 py-1 rounded-full text-xs font-mono border transition-all duration-500 ${
                        isSignUp 
                          ? "bg-accent/10 border-accent/30 text-accent" 
                          : "bg-primary/10 border-primary/30 text-primary"
                      }`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div 
              className={`absolute -top-3 -right-3 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-700 ${
                isSignUp 
                  ? "bg-gradient-to-br from-accent to-green-500 rotate-12" 
                  : "bg-gradient-to-br from-primary to-purple-500 -rotate-12"
              }`}
            >
              {isSignUp ? (
                <Rocket className="w-6 h-6 text-white" />
              ) : (
                <Fingerprint className="w-6 h-6 text-white" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

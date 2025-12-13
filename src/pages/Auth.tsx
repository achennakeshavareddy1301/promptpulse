import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, Github, Mail, Lock, ArrowLeft, Eye, EyeOff, User, Terminal, Fingerprint, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 w-fit group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm">Back to home</span>
        </Link>

        <div className="flex items-center gap-2 mb-12">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/25">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg text-foreground">PromptPulse</span>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
          <div className="mb-8 transition-all duration-500" key={isSignUp ? "signup-header" : "signin-header"}>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 tracking-tight animate-fade-in">
              {isSignUp ? "Optimize your first prompt" : "Welcome back, Engineer"}
            </h1>
            <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {isSignUp 
                ? "Create an account to start engineering better prompts" 
                : "Sign in to continue optimizing your LLM workflows"}
            </p>
          </div>

          <Button 
            variant="outline" 
            className="w-full h-12 bg-card/50 border-border hover:bg-card hover:border-foreground/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group"
          >
            <Github className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
            Continue with GitHub
          </Button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-4 bg-background text-muted-foreground">Or continue with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div 
              className={`space-y-2 transition-all duration-500 ease-out overflow-hidden ${
                isSignUp ? "max-h-24 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
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

            <div className={`flex justify-end transition-all duration-300 ${isSignUp ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto"}`}>
              <button type="button" className="text-sm text-primary hover:text-primary/80 transition-colors">
                Forgot password?
              </button>
            </div>

            <Button type="submit" variant="glow" className="w-full h-12 mt-2 relative overflow-hidden group">
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

        <p className="text-xs text-muted-foreground text-center mt-8">
          By continuing, you agree to our{" "}
          <a href="#" className="text-foreground hover:text-primary transition-colors hover:underline">Terms of Service</a>
          {" "}and{" "}
          <a href="#" className="text-foreground hover:text-primary transition-colors hover:underline">Privacy Policy</a>
        </p>
      </div>

      {/* RIGHT SIDE - Elegant Geometric Visualization */}
      <div 
        className={`hidden lg:flex w-1/2 relative overflow-hidden transition-all duration-700 ease-out ${
          isSignUp ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-background to-zinc-900" />
        
        {/* Accent glow */}
        <div 
          className={`absolute w-[500px] h-[500px] rounded-full blur-[150px] transition-all duration-1000 ease-out top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            isSignUp ? "bg-accent/20" : "bg-primary/20"
          }`}
        />

        {/* Concentric rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[1, 2, 3, 4].map((ring) => (
            <div
              key={ring}
              className={`absolute rounded-full border transition-all duration-700 ${
                isSignUp ? "border-accent/15" : "border-primary/15"
              }`}
              style={{
                width: `${ring * 140}px`,
                height: `${ring * 140}px`,
              }}
            />
          ))}
        </div>

        {/* Orbiting dots */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ animation: "spin 40s linear infinite" }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full transition-colors duration-700 ${
                isSignUp ? "bg-accent/50" : "bg-primary/50"
              }`}
              style={{ transform: `rotate(${i * 45}deg) translateY(-220px)` }}
            />
          ))}
        </div>

        {/* Central card */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className={`relative transition-all duration-700 ease-out ${isSignUp ? "scale-105" : "scale-100"}`}>
            {/* Card glow */}
            <div className={`absolute -inset-6 rounded-3xl blur-3xl transition-colors duration-700 ${
              isSignUp ? "bg-accent/25" : "bg-primary/25"
            }`} />
            
            {/* Glass card */}
            <div className="relative glass-card p-8 rounded-2xl w-72 border border-border/40 backdrop-blur-xl">
              {/* Icon */}
              <div className="flex flex-col items-center text-center space-y-5">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  isSignUp 
                    ? "bg-accent/20 shadow-lg shadow-accent/25" 
                    : "bg-primary/20 shadow-lg shadow-primary/25"
                }`}>
                  {isSignUp ? (
                    <Rocket className="w-8 h-8 text-accent" />
                  ) : (
                    <Terminal className="w-8 h-8 text-primary" />
                  )}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {isSignUp ? "Start Building" : "Welcome Back"}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {isSignUp 
                      ? "Join engineers crafting perfect prompts" 
                      : "Your optimized prompts await"}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 pt-6 border-t border-border/30">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className={`text-2xl font-bold font-mono transition-colors duration-500 ${
                      isSignUp ? "text-accent" : "text-primary"
                    }`}>
                      {isSignUp ? "∞" : "98%"}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {isSignUp ? "Possibilities" : "Accuracy"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold font-mono transition-colors duration-500 ${
                      isSignUp ? "text-accent" : "text-primary"
                    }`}>
                      {isSignUp ? "0ms" : "50K+"}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {isSignUp ? "Setup Time" : "Engineers"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corner accents */}
        <div className={`absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 rounded-tl-lg transition-colors duration-500 ${
          isSignUp ? "border-accent/40" : "border-primary/40"
        }`} />
        <div className={`absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 rounded-br-lg transition-colors duration-500 ${
          isSignUp ? "border-accent/40" : "border-primary/40"
        }`} />
      </div>
    </div>
  );
};

export default Auth;

import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary-glow/25 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Next-Gen AI Technology</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Your AI{" "}
              <span className="gradient-text animate-gradient-shift">
                Companion
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the future of human-AI interaction through four revolutionary pillars: 
              Speech-to-Text, Intelligent Brain, Text-to-Speech, and Visual Avatar.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-white border-0 shadow-lg hover:shadow-primary/25 transition-all duration-300 px-8 py-6 text-lg group"
            >
              Explore the Pillars
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card border-primary/20 hover:border-primary/40 px-8 py-6 text-lg neural-glow"
            >
              <Brain className="mr-2 w-5 h-5" />
              See Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { number: "4", label: "Core Pillars" },
              { number: "∞", label: "Possibilities" },
              { number: "24/7", label: "Availability" },
              { number: "100%", label: "Privacy" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
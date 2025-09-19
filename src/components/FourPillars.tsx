import { Mic, Brain, Volume2, User } from "lucide-react";
import PillarCard from "./PillarCard";

const FourPillars = () => {
  const pillars = [
    {
      icon: Mic,
      title: "Speech-to-Text",
      description: "The AI's 'ears' that capture and convert your voice into text with incredible accuracy.",
      features: [
        "OpenAI Whisper integration for industry-leading accuracy",
        "Real-time voice recognition and processing",
        "Multi-language support and noise cancellation",
        "Local processing options for privacy"
      ],
      color: "primary" as const,
      delay: 0
    },
    {
      icon: Brain,
      title: "Intelligent Brain",
      description: "The core LLM that understands context and generates meaningful, personality-driven responses.",
      features: [
        "Advanced GPT-4 and Gemini model support",
        "Customizable personality through system prompts",
        "Context-aware conversation memory",
        "Local LLM options (Llama 3, Mistral)"
      ],
      color: "secondary" as const,
      delay: 200
    },
    {
      icon: Volume2,
      title: "Text-to-Speech",
      description: "The AI's 'voice' that converts generated text into natural, emotive speech.",
      features: [
        "ElevenLabs ultra-realistic voice synthesis",
        "Voice cloning and emotion control",
        "Multiple language and accent support",
        "Real-time audio streaming"
      ],
      color: "success" as const,
      delay: 400  
    },
    {
      icon: User,
      title: "Visual Avatar",
      description: "The AI's 'face' - an animated character that brings your companion to life.",
      features: [
        "Live2D integration for smooth animations",
        "Emotion-based facial expressions",
        "Lip-sync technology for natural speech",
        "Customizable appearance and personalities"
      ],
      color: "accent" as const,
      delay: 600
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The Four{" "}
            <span className="gradient-text">Pillars</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each pillar represents a crucial component in creating a truly lifelike AI companion.
            Together, they form the foundation of next-generation human-AI interaction.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={index}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              features={pillar.features}
              color={pillar.color}
              delay={pillar.delay}
            />
          ))}
        </div>

        {/* Integration Flow */}
        <div className="mt-24 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto neural-glow">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              How They Work Together
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              {['Voice Input', 'AI Processing', 'Speech Output', 'Visual Response'].map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold mb-3">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {step}
                  </span>
                  {index < 3 && (
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-8 -translate-y-1/2">
                      <div className="w-6 h-0.5 bg-gradient-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourPillars;
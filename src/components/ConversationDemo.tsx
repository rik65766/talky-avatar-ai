import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Volume2, User, Play, Pause } from "lucide-react";

const ConversationDemo = () => {
  const [isListening, setIsListening] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const conversationSteps = [
    {
      type: "user",
      text: "Hey AI, how are you feeling today?",
      avatar: "🧑‍💻",
      pillar: "Speech-to-Text",
      description: "Voice captured and converted to text"
    },
    {
      type: "processing",
      text: "Processing your question...",
      avatar: "🧠", 
      pillar: "AI Brain",
      description: "Understanding context and generating response"
    },
    {
      type: "ai",
      text: "I'm doing wonderfully! I've been learning so much from our conversations. How has your day been?",
      avatar: "🤖",
      pillar: "Text-to-Speech + Avatar",
      description: "Converting to speech with visual animation"
    }
  ];

  const startDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= conversationSteps.length - 1) {
          clearInterval(timer);
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 2500);
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            See It In{" "}
            <span className="gradient-text">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch how all four pillars work together seamlessly to create 
            a natural conversation experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Demo Interface */}
          <Card className="glass-card p-8 mb-8 neural-glow">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">Conversation Demo</h3>
              <Button 
                onClick={startDemo}
                disabled={isPlaying}
                className="bg-gradient-primary hover:opacity-90 text-white"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 mr-2" />
                    Running...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Start Demo
                  </>
                )}
              </Button>
            </div>

            {/* Conversation Display */}
            <div className="space-y-6 min-h-[300px]">
              {conversationSteps.slice(0, currentStep + 1).map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-500 ${
                    step.type === 'user' 
                      ? 'bg-primary/5 border-l-4 border-primary' 
                      : step.type === 'processing'
                      ? 'bg-secondary/5 border-l-4 border-secondary animate-pulse'
                      : 'bg-success/5 border-l-4 border-success'
                  }`}
                >
                  <div className="text-2xl">{step.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-sm">
                        {step.pillar}
                      </span>
                      {step.type === 'processing' && (
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      )}
                    </div>
                    <p className="text-foreground mb-2">{step.text}</p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Technical Stack Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-card p-6 neural-glow">
              <div className="flex items-center gap-3 mb-4">
                <Mic className="w-6 h-6 text-primary" />
                <h4 className="font-semibold">Voice Processing</h4>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• OpenAI Whisper</div>
                <div>• Real-time STT</div>
                <div>• Noise cancellation</div>
              </div>
            </Card>

            <Card className="glass-card p-6 neural-glow">
              <div className="flex items-center gap-3 mb-4">
                <Volume2 className="w-6 h-6 text-success" />
                <h4 className="font-semibold">Speech Synthesis</h4>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• ElevenLabs TTS</div>
                <div>• Voice cloning</div>
                <div>• Emotion control</div>
              </div>
            </Card>

            <Card className="glass-card p-6 neural-glow">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6 text-secondary" />
                <h4 className="font-semibold">Visual Avatar</h4>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• Live2D animation</div>
                <div>• Lip-sync technology</div>
                <div>• Expression mapping</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversationDemo;
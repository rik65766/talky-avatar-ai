import { Github, Twitter, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              AI Companion
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              The future of human-AI interaction through advanced speech processing, 
              intelligent conversation, and lifelike avatars.
            </p>
            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="glass-card border-primary/20">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="glass-card border-primary/20">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="glass-card border-primary/20">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Technology</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>OpenAI Whisper</div>
              <div>GPT-4 / Gemini</div>
              <div>ElevenLabs TTS</div>
              <div>Live2D Avatars</div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Documentation</div>
              <div>API Reference</div>
              <div>Community</div>
              <div>Support</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/20">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for the AI community</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2024 AI Companion. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
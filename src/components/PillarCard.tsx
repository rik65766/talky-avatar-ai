import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface PillarCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: "primary" | "secondary" | "success" | "accent";
  delay?: number;
}

const PillarCard = ({ icon: Icon, title, description, features, color, delay = 0 }: PillarCardProps) => {
  const colorVariants = {
    primary: {
      gradient: "bg-gradient-primary",
      border: "border-primary/20 hover:border-primary/40",
      iconBg: "bg-primary/10",
      iconColor: "text-primary"
    },
    secondary: {
      gradient: "bg-gradient-secondary", 
      border: "border-secondary/20 hover:border-secondary/40",
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary"
    },
    success: {
      gradient: "bg-gradient-to-br from-success to-success/70",
      border: "border-success/20 hover:border-success/40", 
      iconBg: "bg-success/10",
      iconColor: "text-success"
    },
    accent: {
      gradient: "bg-gradient-neural",
      border: "border-accent/20 hover:border-accent/40",
      iconBg: "bg-accent/10", 
      iconColor: "text-accent-foreground"
    }
  };

  const variant = colorVariants[color];

  return (
    <Card 
      className={`glass-card p-8 h-full neural-glow transition-all duration-500 hover:scale-105 ${variant.border}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="space-y-6">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl ${variant.iconBg} flex items-center justify-center mb-6`}>
          <Icon className={`w-8 h-8 ${variant.iconColor}`} />
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-2xl font-bold mb-3 text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`w-2 h-2 rounded-full ${variant.gradient} mt-2 flex-shrink-0`} />
              <span className="text-sm text-muted-foreground leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <Button 
          className={`w-full ${variant.gradient} hover:opacity-90 text-white border-0 shadow-lg transition-all duration-300`}
        >
          Learn More
        </Button>
      </div>
    </Card>
  );
};

export default PillarCard;
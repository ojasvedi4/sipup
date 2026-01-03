import { useEffect, useRef, useState } from "react";
import { Droplets, Shield, Zap, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Leak-Proof Design",
    description: "Triple-seal technology ensures zero spills, even when fully shaken.",
  },
  {
    icon: Shield,
    title: "Premium Materials",
    description: "BPA-free, food-grade stainless steel built to last a lifetime.",
  },
  {
    icon: Zap,
    title: "Vortex Mixing",
    description: "Patented mixing technology for perfectly smooth shakes every time.",
  },
  {
    icon: RefreshCw,
    title: "Easy Clean",
    description: "Wide-mouth opening and dishwasher-safe for effortless cleaning.",
  },
];

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Engineered for <span className="text-gradient">Excellence</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-8 rounded-2xl bg-card border border-border/30 transition-all duration-500 hover:border-primary/50 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

import { useEffect, useRef, useState } from "react";
import { Droplets, Shield, Zap, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Leak-Proof",
    description: "Precision-sealed engineering ensures absolute containment.",
  },
  {
    icon: Shield,
    title: "Premium Materials",
    description: "Medical-grade stainless steel with a lifetime guarantee.",
  },
  {
    icon: Zap,
    title: "Vortex Technology",
    description: "Effortless mixing for perfectly smooth consistency.",
  },
  {
    icon: RefreshCw,
    title: "Easy Maintenance",
    description: "Thoughtfully designed for effortless daily care.",
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
    <section ref={sectionRef} className="py-32 relative border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <p className="text-muted-foreground uppercase tracking-[0.4em] text-xs font-medium mb-6">
            Craftsmanship
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
            Designed with <span className="italic">Intention</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group text-center ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center border border-foreground/20 group-hover:border-foreground/40 transition-colors duration-500">
                <feature.icon className="w-6 h-6 text-foreground/70 group-hover:text-foreground transition-colors duration-500" strokeWidth={1} />
              </div>
              <h3 className="text-lg font-light mb-4 tracking-wide">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
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

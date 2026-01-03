import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroShaker from "@/assets/hero-shaker.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effect */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: "var(--gradient-glow)",
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-up">
            <div className="space-y-4">
              <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium">
                Engineered for Performance
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9]">
                SHAKE
                <br />
                <span className="text-gradient">DIFFERENT</span>
              </h1>
            </div>
            <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto lg:mx-0">
              The world's most advanced protein shaker. Precision-engineered for athletes who demand perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/shop">
                <Button variant="premium" size="xl">
                  Shop Now
                </Button>
              </Link>
              <Button variant="hero" size="xl">
                Learn More
              </Button>
            </div>
          </div>

          {/* Floating Product Image */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] animate-glow-pulse" />
            </div>
            <img
              src={heroShaker}
              alt="APEX Shaker"
              className="relative z-10 w-full max-w-lg animate-float product-shadow"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <span className="text-muted-foreground text-xs uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroShaker from "@/assets/hero-shaker.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-10 animate-fade-up">
            <div className="space-y-6">
              <p className="text-muted-foreground uppercase tracking-[0.4em] text-xs font-medium">
                Refined Performance
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight">
                The Art of
                <br />
                <span className="italic">Hydration</span>
              </h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
              Meticulously crafted for those who appreciate the finer details. Where function meets timeless elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
              <Link to="/shop">
                <Button variant="premium" size="xl">
                  Explore Collection
                </Button>
              </Link>
              <Button variant="hero" size="xl">
                Our Story
              </Button>
            </div>
          </div>

          {/* Floating Product Image */}
          <div className="relative flex items-center justify-center">
            <img
              src={heroShaker}
              alt="SIPUP Premium Shaker"
              className="relative z-10 w-full max-w-lg animate-float luxury-shadow grayscale brightness-110 contrast-125"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in">
        <span className="text-muted-foreground text-[10px] uppercase tracking-[0.3em]">
          Discover
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-foreground/40 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;

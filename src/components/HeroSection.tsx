import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroShaker from "@/assets/hero-shaker.png";
import shakerBlack from "@/assets/shaker-black.png";
import shakerSilver from "@/assets/shaker-silver.png";
import shakerWhite from "@/assets/shaker-white.png";

const shakerImages = [heroShaker, shakerBlack, shakerSilver, shakerWhite];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollProgress = scrollY / (windowHeight * 0.8);
      const imageIndex = Math.min(
        Math.floor(scrollProgress),
        shakerImages.length - 1
      );
      
      // Calculate opacity for crossfade effect
      const progressWithinImage = scrollProgress - Math.floor(scrollProgress);
      const fadeOpacity = imageIndex < shakerImages.length - 1 
        ? 1 - (progressWithinImage * 0.3) + 0.3 
        : 1;
      
      setCurrentImage(imageIndex);
      setOpacity(fadeOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[300vh] flex flex-col overflow-hidden">
      {/* Sticky Content Container */}
      <div className="sticky top-0 min-h-screen flex items-center justify-center">
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

            {/* Scroll-changing Product Image */}
            <div className="relative flex items-center justify-center">
              {shakerImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`SIPUP Premium Shaker ${index + 1}`}
                  className="absolute z-10 w-full max-w-lg animate-float luxury-shadow grayscale brightness-110 contrast-125 transition-opacity duration-500"
                  style={{
                    opacity: currentImage === index ? opacity : 0,
                  }}
                />
              ))}
              {/* Placeholder for layout */}
              <div className="w-full max-w-lg aspect-square" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in">
          <span className="text-muted-foreground text-[10px] uppercase tracking-[0.3em]">
            Scroll to explore
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-foreground/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { useEffect, useRef, useState } from "react";
import heroShaker from "@/assets/hero-shaker.png";
import shakerBlack from "@/assets/shaker-black.png";
import shakerSilver from "@/assets/shaker-silver.png";
import shakerWhite from "@/assets/shaker-white.png";

const bottles = [
  {
    image: heroShaker,
    name: "The Original",
    description: "Where it all began",
  },
  {
    image: shakerBlack,
    name: "The Noir",
    description: "Matte Black Edition",
  },
  {
    image: shakerSilver,
    name: "The Sterling",
    description: "Polished Steel",
  },
  {
    image: shakerWhite,
    name: "The Blanc",
    description: "Pearl White",
  },
];

const ScrollBottleShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate how far we've scrolled through the container
      const scrolled = -rect.top;
      const totalScrollable = containerHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      setScrollProgress(progress);

      // Determine which bottle to show based on scroll progress
      const newIndex = Math.min(
        bottles.length - 1,
        Math.floor(progress * bottles.length)
      );
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${bottles.length * 100}vh` }}
    >
      {/* Sticky container for the bottle */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content - Changes with scroll */}
            <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
              <div className="overflow-hidden">
                <p className="text-muted-foreground uppercase tracking-[0.4em] text-xs font-medium">
                  Design {String(activeIndex + 1).padStart(2, "0")} / {String(bottles.length).padStart(2, "0")}
                </p>
              </div>

              <div className="relative h-32 md:h-40">
                {bottles.map((bottle, index) => (
                  <div
                    key={bottle.name}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      index === activeIndex
                        ? "opacity-100 translate-y-0"
                        : index < activeIndex
                        ? "opacity-0 -translate-y-8"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight">
                      {bottle.name.split(" ")[0]}
                      <br />
                      <span className="italic">{bottle.name.split(" ").slice(1).join(" ")}</span>
                    </h2>
                  </div>
                ))}
              </div>

              <div className="relative h-8">
                {bottles.map((bottle, index) => (
                  <p
                    key={bottle.name}
                    className={`absolute inset-0 text-muted-foreground text-lg font-light transition-all duration-500 ${
                      index === activeIndex
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    {bottle.description}
                  </p>
                ))}
              </div>

              {/* Progress indicators */}
              <div className="flex gap-3 justify-center lg:justify-start pt-8">
                {bottles.map((_, index) => (
                  <div
                    key={index}
                    className={`h-px transition-all duration-500 ${
                      index === activeIndex
                        ? "w-12 bg-foreground"
                        : "w-6 bg-foreground/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Bottle Image - Morphs between designs */}
            <div className="relative flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-lg aspect-square">
                {bottles.map((bottle, index) => (
                  <img
                    key={bottle.name}
                    src={bottle.image}
                    alt={bottle.name}
                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-out grayscale brightness-110 contrast-125 ${
                      index === activeIndex
                        ? "opacity-100 scale-100"
                        : index < activeIndex
                        ? "opacity-0 scale-95"
                        : "opacity-0 scale-105"
                    }`}
                    style={{
                      filter: index === activeIndex 
                        ? "grayscale(100%) brightness(1.1) contrast(1.25)" 
                        : "grayscale(100%) brightness(1.1) contrast(1.25)",
                    }}
                  />
                ))}

                {/* Ambient glow effect */}
                <div 
                  className="absolute inset-0 opacity-30 blur-3xl transition-opacity duration-700"
                  style={{
                    background: "radial-gradient(circle at center, hsl(0 0% 50%) 0%, transparent 70%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint at bottom */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-muted-foreground text-[10px] uppercase tracking-[0.3em]">
            {activeIndex < bottles.length - 1 ? "Scroll to explore" : "Continue"}
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default ScrollBottleShowcase;

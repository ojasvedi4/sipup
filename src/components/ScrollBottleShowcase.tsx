import { useEffect, useRef, useState } from "react";
import sip1 from "@/assets/sip1.png";
import sip2 from "@/assets/sip2.png";
import sip3 from "@/assets/sip3.png";
import sip4 from "@/assets/sip4.png";

const bottles = [
  {
    image: sip1,
    name: "The Flow",
    description: "Abstract Gradient Edition",
  },
  {
    image: sip2,
    name: "The Hype",
    description: "Bold Statement Edition",
  },
  {
    image: sip3,
    name: "The Cosmic",
    description: "Celestial Wave Edition",
  },
  {
    image: sip4,
    name: "The Pop",
    description: "Vibrant Art Edition",
  },
];

const ScrollBottleShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionProgress, setTransitionProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    const imagePromises = bottles.map((bottle) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.src = bottle.image;
      });
    });

    Promise.all(imagePromises).then(() => setImagesLoaded(true));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = -rect.top;
      const totalScrollable = containerHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      const exactIndex = progress * (bottles.length - 1);
      const newIndex = Math.min(bottles.length - 1, Math.floor(exactIndex));
      const withinBottleProgress = exactIndex - newIndex;

      setActiveIndex(newIndex);
      setTransitionProgress(withinBottleProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity for each bottle
  const getOpacity = (index: number) => {
    if (index === activeIndex) {
      return 1 - transitionProgress;
    }
    if (index === activeIndex + 1) {
      return transitionProgress;
    }
    return 0;
  };

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${bottles.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
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
                    className="absolute inset-0 will-change-transform"
                    style={{
                      opacity: getOpacity(index),
                      transform: `translateY(${index === activeIndex 
                        ? -transitionProgress * 20 
                        : index === activeIndex + 1 
                        ? 20 - transitionProgress * 20 
                        : 20}px)`,
                    }}
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
                    className="absolute inset-0 text-muted-foreground text-lg font-light"
                    style={{ opacity: getOpacity(index) }}
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
                    className="h-px transition-all duration-300"
                    style={{
                      width: index === activeIndex 
                        ? `${48 - transitionProgress * 24}px` 
                        : index === activeIndex + 1 
                        ? `${24 + transitionProgress * 24}px` 
                        : '24px',
                      backgroundColor: index <= activeIndex 
                        ? 'hsl(var(--foreground))' 
                        : 'hsl(var(--foreground) / 0.2)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Bottle Image - Fixed size container for seamless crossfade */}
            <div className="relative flex items-center justify-center order-1 lg:order-2">
              <div 
                className="relative w-[400px] h-[500px] md:w-[450px] md:h-[560px] lg:w-[500px] lg:h-[620px]"
                style={{ opacity: imagesLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
              >
                {bottles.map((bottle, index) => (
                  <div
                    key={bottle.name}
                    className="absolute inset-0 flex items-center justify-center will-change-opacity"
                    style={{ opacity: getOpacity(index) }}
                  >
                    <img
                      src={bottle.image}
                      alt={bottle.name}
                      className="w-full h-full object-contain"
                      draggable={false}
                    />
                  </div>
                ))}

                {/* Ambient glow effect */}
                <div 
                  className="absolute inset-0 opacity-20 blur-3xl pointer-events-none -z-10"
                  style={{
                    background: "radial-gradient(circle at center, hsl(var(--foreground) / 0.3) 0%, transparent 70%)",
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

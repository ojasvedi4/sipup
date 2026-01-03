import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import shakerSilver from "@/assets/shaker-silver.png";
import shakerBlack from "@/assets/shaker-black.png";
import shakerWhite from "@/assets/shaker-white.png";

const products = [
  {
    name: "APEX Pro",
    price: "$79",
    image: shakerBlack,
    variant: "Stealth",
  },
  {
    name: "APEX Elite",
    price: "$99",
    image: shakerSilver,
    variant: "Chrome",
  },
  {
    name: "APEX Classic",
    price: "$59",
    image: shakerWhite,
    variant: "Pearl",
  },
];

const ProductShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
            The Collection
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Choose Your <span className="text-gradient">Weapon</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Three iconic designs. One legendary performance. Pick the shaker that matches your intensity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={isVisible ? "animate-fade-up" : "opacity-0"}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

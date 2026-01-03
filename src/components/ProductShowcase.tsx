import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import shakerSilver from "@/assets/shaker-silver.png";
import shakerBlack from "@/assets/shaker-black.png";
import shakerWhite from "@/assets/shaker-white.png";

const products = [
  {
    name: "The Noir",
    price: "$89",
    image: shakerBlack,
    variant: "Matte Black",
  },
  {
    name: "The Sterling",
    price: "$119",
    image: shakerSilver,
    variant: "Polished Steel",
  },
  {
    name: "The Blanc",
    price: "$79",
    image: shakerWhite,
    variant: "Pearl White",
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
    <section ref={sectionRef} className="py-32 relative border-t border-border/30">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <p className="text-muted-foreground uppercase tracking-[0.4em] text-xs font-medium mb-6">
            The Collection
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
            Three <span className="italic">Expressions</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-8 max-w-xl mx-auto font-light leading-relaxed">
            Each piece in our collection represents a distinct philosophy of form and function.
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

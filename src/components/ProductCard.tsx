import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  variant?: string;
  delay?: number;
}

const ProductCard = ({ name, price, image, variant = "Default", delay = 0 }: ProductCardProps) => {
  return (
    <div
      className="group relative bg-card rounded-2xl p-6 card-shadow border border-border/30 transition-all duration-500 hover:border-primary/50 hover:scale-[1.02]"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden rounded-xl mb-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            {variant}
          </span>
        </div>
        <p className="text-2xl font-bold text-gradient">{price}</p>
        <Button variant="outline" className="w-full mt-4 group-hover:border-primary group-hover:text-primary transition-colors">
          Add to Cart
        </Button>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(180 100% 50% / 0.05) 0%, transparent 70%)",
        }}
      />
    </div>
  );
};

export default ProductCard;

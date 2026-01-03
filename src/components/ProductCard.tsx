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
      className="group relative bg-card p-8 border border-border/30 transition-all duration-700 hover:border-foreground/30"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden mb-8">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale brightness-110 contrast-110"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-4 text-center">
        <div>
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-2">
            {variant}
          </p>
          <h3 className="text-xl font-light tracking-wide">{name}</h3>
        </div>
        <p className="text-lg font-light text-muted-foreground">{price}</p>
        <Button variant="outline" className="w-full mt-6">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

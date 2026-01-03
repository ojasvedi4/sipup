import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
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
  {
    name: "The Noir XL",
    price: "$99",
    image: shakerBlack,
    variant: "Matte Black — Large",
  },
  {
    name: "The Sterling XL",
    price: "$139",
    image: shakerSilver,
    variant: "Polished Steel — Large",
  },
  {
    name: "The Blanc XL",
    price: "$89",
    image: shakerWhite,
    variant: "Pearl White — Large",
  },
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-up">
            <p className="text-muted-foreground uppercase tracking-[0.4em] text-xs font-medium mb-6">
              The Collection
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light">
              Shop <span className="italic">SIPUP</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-8 max-w-xl mx-auto font-light leading-relaxed">
              Discover our complete range of precision-crafted vessels.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
            {["All", "Standard", "XL Size", "Limited"].map((filter, index) => (
              <button
                key={filter}
                className={`px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-500 ${
                  index === 0
                    ? "bg-foreground text-background"
                    : "border border-border/50 text-muted-foreground hover:border-foreground/50 hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={`${product.name}-${index}`}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;

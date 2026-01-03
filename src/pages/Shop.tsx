import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
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
  {
    name: "APEX Pro XL",
    price: "$89",
    image: shakerBlack,
    variant: "Stealth XL",
  },
  {
    name: "APEX Elite XL",
    price: "$109",
    image: shakerSilver,
    variant: "Chrome XL",
  },
  {
    name: "APEX Classic XL",
    price: "$69",
    image: shakerWhite,
    variant: "Pearl XL",
  },
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
              Our Collection
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Shop <span className="text-gradient">Premium</span> Shakers
            </h1>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
              Every APEX shaker is crafted with precision engineering and premium materials. 
              Choose the perfect companion for your fitness journey.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {["All", "Standard", "XL Size", "Limited Edition"].map((filter, index) => (
              <button
                key={filter}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
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

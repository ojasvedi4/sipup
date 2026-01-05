import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScrollBottleShowcase from "@/components/ScrollBottleShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import UnicornStudioEmbed from "@/components/UnicornStudioEmbed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ScrollBottleShowcase />
        <UnicornStudioEmbed />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

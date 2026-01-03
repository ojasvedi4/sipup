import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-2xl font-bold tracking-tighter">
              APEX<span className="text-gradient">SHAKE</span>
            </span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Precision-engineered protein shakers for athletes who demand perfection.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Shop
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Support</h4>
            <div className="flex flex-col gap-3">
              <span className="text-muted-foreground text-sm">FAQ</span>
              <span className="text-muted-foreground text-sm">Shipping</span>
              <span className="text-muted-foreground text-sm">Returns</span>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 APEXSHAKE. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-muted-foreground text-sm">Privacy Policy</span>
            <span className="text-muted-foreground text-sm">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

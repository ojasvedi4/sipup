import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <span className="text-xl font-light tracking-[0.2em] uppercase" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              sipup<span className="text-muted-foreground">.com</span>
            </span>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">
              Elevating the everyday ritual of hydration through thoughtful design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em]">Navigate</h4>
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-light">
                Home
              </Link>
              <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-light">
                Shop
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-light">
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em]">Support</h4>
            <div className="flex flex-col gap-4">
              <span className="text-muted-foreground text-sm font-light">FAQ</span>
              <span className="text-muted-foreground text-sm font-light">Shipping</span>
              <span className="text-muted-foreground text-sm font-light">Returns</span>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em]">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-border/50 flex items-center justify-center hover:border-foreground/50 hover:text-foreground transition-all duration-300 text-muted-foreground">
                <Instagram size={16} strokeWidth={1} />
              </a>
              <a href="#" className="w-10 h-10 border border-border/50 flex items-center justify-center hover:border-foreground/50 hover:text-foreground transition-all duration-300 text-muted-foreground">
                <Twitter size={16} strokeWidth={1} />
              </a>
              <a href="#" className="w-10 h-10 border border-border/50 flex items-center justify-center hover:border-foreground/50 hover:text-foreground transition-all duration-300 text-muted-foreground">
                <Youtube size={16} strokeWidth={1} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-xs tracking-wider font-light">
            © 2026 SIPUP. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-muted-foreground text-xs font-light tracking-wider">Privacy</span>
            <span className="text-muted-foreground text-xs font-light tracking-wider">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

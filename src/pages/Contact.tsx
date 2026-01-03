import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-up">
            <p className="text-muted-foreground uppercase tracking-[0.4em] text-xs font-medium mb-6">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light">
              Let's <span className="italic">Connect</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-8 max-w-xl mx-auto font-light leading-relaxed">
              We'd love to hear from you. Our team is here to assist with any inquiries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
              <div className="border border-border/30 p-10">
                <h2 className="text-2xl font-light mb-10 tracking-wide">Send a Message</h2>
                <form className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs text-muted-foreground uppercase tracking-[0.2em]">First Name</label>
                      <Input
                        placeholder="John"
                        className="bg-transparent border-border/50 focus:border-foreground/50 rounded-none h-12"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Last Name</label>
                      <Input
                        placeholder="Doe"
                        className="bg-transparent border-border/50 focus:border-foreground/50 rounded-none h-12"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-transparent border-border/50 focus:border-foreground/50 rounded-none h-12"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Message</label>
                    <Textarea
                      placeholder="How can we help?"
                      rows={5}
                      className="bg-transparent border-border/50 focus:border-foreground/50 rounded-none resize-none"
                    />
                  </div>
                  <Button variant="premium" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-10 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div>
                <h2 className="text-2xl font-light mb-6 tracking-wide">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Whether you have questions about our products or wish to explore a collaboration, 
                  we're here to assist.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-6 p-8 border border-border/30">
                  <div className="w-12 h-12 flex items-center justify-center border border-border/50 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-muted-foreground" strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="font-light mb-2 tracking-wide">Location</h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      123 Design District<br />
                      Los Angeles, CA 90001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-8 border border-border/30">
                  <div className="w-12 h-12 flex items-center justify-center border border-border/50 flex-shrink-0">
                    <Mail className="w-5 h-5 text-muted-foreground" strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="font-light mb-2 tracking-wide">Email</h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      hello@sipup.com<br />
                      support@sipup.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-8 border border-border/30">
                  <div className="w-12 h-12 flex items-center justify-center border border-border/50 flex-shrink-0">
                    <Phone className="w-5 h-5 text-muted-foreground" strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="font-light mb-2 tracking-wide">Phone</h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      +1 (800) SIP-UPCO<br />
                      Mon–Fri 9am – 6pm PST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

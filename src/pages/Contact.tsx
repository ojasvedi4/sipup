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
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
              Have a question about our products? We'd love to hear from you.
              Our team is here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
              <div className="bg-card rounded-2xl p-8 border border-border/30 card-shadow">
                <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground">First Name</label>
                      <Input
                        placeholder="John"
                        className="bg-secondary border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground">Last Name</label>
                      <Input
                        placeholder="Doe"
                        className="bg-secondary border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-secondary border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Subject</label>
                    <Input
                      placeholder="How can we help?"
                      className="bg-secondary border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Message</label>
                    <Textarea
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      className="bg-secondary border-border/50 focus:border-primary resize-none"
                    />
                  </div>
                  <Button variant="premium" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a question about our products, need support with an order, 
                  or want to collaborate, we're ready to answer any questions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/30">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Location</h3>
                    <p className="text-muted-foreground text-sm">
                      123 Performance Drive<br />
                      Los Angeles, CA 90001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/30">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground text-sm">
                      hello@apexshake.com<br />
                      support@apexshake.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/30">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-muted-foreground text-sm">
                      +1 (800) APEX-SHAKE<br />
                      Mon-Fri 9am - 6pm PST
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

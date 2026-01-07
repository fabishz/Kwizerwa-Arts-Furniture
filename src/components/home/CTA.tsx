import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin } from "lucide-react";

export const CTA = () => {
  return (
    <section className="section-padding bg-gradient-warm pattern-african">
      <div className="container-wide">
        <div className="bg-card rounded-3xl shadow-strong overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - CTA */}
            <div className="p-8 md:p-12 lg:p-16">
              <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
                Ready to Transform Your Space?
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Let's Create Something{" "}
                <span className="text-gradient">Beautiful Together</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Whether you need a single piece or complete home furnishing, 
                our team is ready to bring your vision to life. Contact us for 
                a free consultation and quote.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="hero" size="lg" asChild>
                  <a 
                    href="https://wa.me/250788379144?text=Hello%20Kwizerwa%20Arts%2C%20I'm%20interested%20in%20your%20furniture" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+250788379144" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground italic">
                "Nkora neza kandi biramba" – We do well and it lasts
              </p>
            </div>

            {/* Right Side - Contact Info */}
            <div className="bg-primary p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-8">
                Visit Our Showroom
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground mb-1">Address</p>
                    <p className="text-wood-light">
                      Gisozi, Kigali, Rwanda<br />
                      Near Gakinjiro ka Gisozi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground mb-1">Phone / WhatsApp</p>
                    <a 
                      href="tel:+250788379144" 
                      className="text-wood-light hover:text-gold transition-colors"
                    >
                      +250 788 379 144
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground mb-1">Email</p>
                    <a 
                      href="mailto:kwizerwaarts@gmail.com" 
                      className="text-wood-light hover:text-gold transition-colors"
                    >
                      kwizerwaarts@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-wood-light/20">
                <p className="text-sm text-wood-light/80">
                  <strong className="text-gold">Opening Hours:</strong><br />
                  Monday - Saturday: 8:00 AM - 6:00 PM<br />
                  Sunday: By Appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

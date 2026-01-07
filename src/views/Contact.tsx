"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, Youtube } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message with form data
    const whatsappMessage = `Hello Kwizerwa Arts,%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0A%0AMessage:%0A${formData.message}`;

    window.open(`https://wa.me/250788379144?text=${whatsappMessage}`, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message will be sent via WhatsApp for faster response.",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-warm pattern-african">
          <div className="container-wide section-padding py-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
                Contact Us
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Let's Create Something{" "}
                <span className="text-gradient">Beautiful</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Have a question or ready to start your furniture project?
                We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-soft">
                <h2 className="font-heading text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="+250 7XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Input
                        required
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      required
                      rows={5}
                      placeholder="Tell us about your furniture needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send via WhatsApp
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    For faster response, your message will be sent via WhatsApp
                  </p>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Quick Contact */}
                <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10">
                  <h2 className="font-heading text-2xl font-bold mb-6">Quick Contact</h2>
                  <div className="space-y-6">
                    <a
                      href="https://wa.me/250788379144"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 hover:bg-wood-dark/30 p-3 rounded-lg -m-3 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">WhatsApp (Fastest)</p>
                        <p className="text-wood-light">+250 788 379 144</p>
                      </div>
                    </a>
                    <a
                      href="tel:+250788379144"
                      className="flex items-start gap-4 hover:bg-wood-dark/30 p-3 rounded-lg -m-3 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        <p className="text-wood-light">+250 788 379 144</p>
                      </div>
                    </a>
                    <a
                      href="mailto:kwizerwaarts@gmail.com"
                      className="flex items-start gap-4 hover:bg-wood-dark/30 p-3 rounded-lg -m-3 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <p className="text-wood-light">kwizerwaarts@gmail.com</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2">Visit Our Showroom</h3>
                      <p className="text-muted-foreground">
                        Gisozi, Kigali, Rwanda<br />
                        Near Gakinjiro ka Gisozi (Musezero cell)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2">Opening Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 8:00 AM - 6:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-muted rounded-2xl p-8">
                  <h3 className="font-heading text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.instagram.com/kwizerwa_arts_furniture/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/kwizerwaartfurniture/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.youtube.com/@kwizerwaartfurnituredesign"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-muted">
          <div className="container-wide">
            <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.876762553097!2d30.0539!3d-1.9236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5e1c7fc8d33%3A0x2f5d56d5a16d67c3!2sGisozi%2C%20Kigali!5e0!3m2!1sen!2srw!4v1704500000000!5m2!1sen!2srw"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kwizerwa Arts Furniture Location"
                className="w-full"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

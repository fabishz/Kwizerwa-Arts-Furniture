"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Twitter, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/about" },
    { name: "Furniture School", href: "/about#school" },
    { name: "Careers", href: "/contact" },
  ],
  products: [
    { name: "Living Room", href: "/products" },
    { name: "Bedroom", href: "/products" },
    { name: "Dining", href: "/products" },
    { name: "Office", href: "/products" },
    { name: "Custom Designs", href: "/products" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/kwizerwa_arts_furniture/", icon: Instagram },
  { name: "Facebook", href: "https://www.facebook.com/kwizerwaartfurniture/", icon: Facebook },
  { name: "YouTube", href: "https://www.youtube.com/@kwizerwaartfurnituredesign", icon: Youtube },
  { name: "Twitter", href: "https://x.com/izerwe", icon: Twitter },
];

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    setIsSubmitting(true);

    // Simulate submission - in production, this would connect to an email service
    setTimeout(() => {
      toast({
        title: "Welcome to our newsletter! 🎉",
        description: "Thank you for subscribing. You'll receive updates on new furniture and special offers.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <footer className="bg-wood-dark text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-wood-light/20">
        <div className="container-wide section-padding py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                Stay Updated
              </h3>
              <p className="text-wood-light">
                Subscribe to get the latest furniture designs, special offers, and interior design tips.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-wood-light/10 border-wood-light/20 text-primary-foreground placeholder:text-wood-light/50 focus:border-gold focus:ring-gold"
              />
              <Button
                type="submit"
                variant="hero"
                disabled={isSubmitting}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                {isSubmitting ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="container-wide section-padding py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                <span className="font-heading text-xl font-bold text-wood-dark">KA</span>
              </div>
              <div>
                <p className="font-heading text-xl font-semibold">Kwizerwa Arts</p>
                <p className="text-sm text-wood-light">Furniture</p>
              </div>
            </div>
            <p className="text-wood-light text-sm leading-relaxed mb-6 max-w-sm">
              Home interprets heaven. Premium handcrafted furniture made in Rwanda with love,
              skill, and generations of craftsmanship expertise.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-wood-light/10 flex items-center justify-center hover:bg-gold hover:text-wood-dark transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-wood-light hover:text-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-wood-light hover:text-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-wood-light">
                  Gisozi, Kigali, Rwanda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+250788379144"
                  className="text-sm text-wood-light hover:text-gold transition-colors"
                >
                  +250 788 379 144
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:kwizerwaarts@gmail.com"
                  className="text-sm text-wood-light hover:text-gold transition-colors"
                >
                  kwizerwaarts@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-wood-light/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-wood-light">
            © {new Date().getFullYear()} Kwizerwa Arts Furniture. Made with ❤️ in Rwanda.
          </p>
          <p className="text-sm text-wood-light italic">
            "Nkora neza kandi biramba" – We do well and it lasts
          </p>
        </div>
      </div>
    </footer>
  );
};


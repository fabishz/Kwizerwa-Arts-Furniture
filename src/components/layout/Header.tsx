"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container-wide section-padding py-4" aria-label="Global">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center shadow-medium group-hover:shadow-glow transition-shadow duration-300">
              <span className="font-heading text-xl font-bold text-primary-foreground">KA</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-heading text-lg font-semibold text-foreground leading-tight">
                Kwizerwa Arts
              </p>
              <p className="text-xs text-muted-foreground tracking-wide">Furniture</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary relative
                  ${pathname === item.href ? "text-primary" : "text-muted-foreground"}
                `}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:+250788379144" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+250 788 379 144</span>
              </a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a
                href="https://wa.me/250788379144?text=Hello%20Kwizerwa%20Arts%2C%20I'm%20interested%20in%20your%20furniture"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Quote
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 transition-colors
                    ${pathname === item.href ? "text-primary" : "text-muted-foreground"}
                  `}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" asChild>
                  <a href="tel:+250788379144" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                </Button>
                <Button variant="hero" asChild>
                  <a
                    href="https://wa.me/250788379144?text=Hello%20Kwizerwa%20Arts%2C%20I'm%20interested%20in%20your%20furniture"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Quote on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};


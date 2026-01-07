import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/assets/hero-furniture.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Kwizerwa Arts Furniture Showroom"
          fill
          className="object-cover"
          priority
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 pattern-african opacity-20 z-[1]" />

      {/* Content */}
      <div className="relative z-10 container-wide section-padding pt-32 md:pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gold">Handcrafted in Rwanda</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up stagger-1">
            Home Interprets{" "}
            <span className="text-gold">Heaven</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-wood-light/90 max-w-xl mb-8 animate-fade-up stagger-2">
            Premium handcrafted furniture that transforms your space.
            Every piece tells a story of Rwandan artistry, quality, and lasting beauty.
          </p>

          {/* Tagline */}
          <p className="text-sm text-gold/80 italic mb-10 animate-fade-up stagger-2">
            "Because your space deserves better"
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up stagger-3">
            <Button variant="hero" size="lg" asChild>
              <Link href="/products" className="flex items-center gap-2">
                Explore Collection
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a
                href="https://www.youtube.com/@kwizerwaartfurnituredesign"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Our Story
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-wood-light/20 animate-fade-up stagger-4">
            <div>
              <p className="font-heading text-3xl md:text-4xl font-bold text-gold">13K+</p>
              <p className="text-sm text-wood-light/70">Instagram Followers</p>
            </div>
            <div>
              <p className="font-heading text-3xl md:text-4xl font-bold text-gold">500+</p>
              <p className="text-sm text-wood-light/70">Projects Completed</p>
            </div>
            <div>
              <p className="font-heading text-3xl md:text-4xl font-bold text-gold">100%</p>
              <p className="text-sm text-wood-light/70">Handcrafted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-wood-light/40 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

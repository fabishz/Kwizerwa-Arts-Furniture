import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import livingRoomImage from "@/assets/living-room.jpg";
import bedroomImage from "@/assets/bedroom-furniture.jpg";
import diningImage from "@/assets/dining-furniture.jpg";
import officeImage from "@/assets/office-furniture.jpg";

const categories = [
  {
    title: "Living Room",
    description: "Sofas, chairs, tables, and shelves crafted for comfort and style.",
    image: livingRoomImage,
    href: "/products",
  },
  {
    title: "Bedroom",
    description: "Elegant beds, wardrobes, and nightstands for restful spaces.",
    image: bedroomImage,
    href: "/products",
  },
  {
    title: "Kitchen & Dining",
    description: "Beautiful dining sets and kitchen furniture for family gatherings.",
    image: diningImage,
    href: "/products",
  },
  {
    title: "Office",
    description: "Professional desks, chairs, and storage for productive workspaces.",
    image: officeImage,
    href: "/products",
  },
];

export const Products = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Our Collections
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Furniture for Every Room
          </h2>
          <p className="text-muted-foreground text-lg">
            From living rooms to offices, we craft complete furniture solutions
            tailored to your lifestyle. All handmade in Kigali with premium materials.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl bg-card card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden relative">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/90 via-wood-dark/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-wood-light/80 mb-4 line-clamp-2">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-2xl p-8 border border-border card-hover">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">🎨</span>
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-semibold mb-2">Custom Interior Design</h3>
                <p className="text-muted-foreground mb-4">
                  Let our designers create a complete interior solution tailored to your home or business.
                </p>
                <Link href="/contact" className="text-primary font-medium hover:underline">
                  Book a Consultation →
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border card-hover">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">🎓</span>
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-semibold mb-2">Furniture Design School</h3>
                <p className="text-muted-foreground mb-4">
                  Learn the art of furniture making from master craftsmen. Enroll in our training programs.
                </p>
                <Link href="/about#school" className="text-primary font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <Link href="/products" className="flex items-center gap-2">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};


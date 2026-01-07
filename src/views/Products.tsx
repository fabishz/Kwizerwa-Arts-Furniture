import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import livingRoomImage from "@/assets/living-room.jpg";
import bedroomImage from "@/assets/bedroom-furniture.jpg";
import diningImage from "@/assets/dining-furniture.jpg";
import officeImage from "@/assets/office-furniture.jpg";

const products = [
  {
    category: "Living Room",
    description: "Transform your living space with our handcrafted sofas, coffee tables, TV stands, and decorative shelving. Each piece is designed for both comfort and elegance.",
    image: livingRoomImage,
    items: ["Sofas & Couches", "Coffee Tables", "TV Stands", "Bookshelves", "Side Tables", "Accent Chairs"],
  },
  {
    category: "Bedroom",
    description: "Create your personal sanctuary with our elegant bedroom collections. From stunning bed frames to spacious wardrobes, sleep in style.",
    image: bedroomImage,
    items: ["Bed Frames", "Nightstands", "Wardrobes", "Dressers", "Vanity Tables", "Storage Benches"],
  },
  {
    category: "Kitchen & Dining",
    description: "Gather around our beautifully crafted dining sets. Perfect for family meals and entertaining guests in style.",
    image: diningImage,
    items: ["Dining Tables", "Dining Chairs", "Kitchen Islands", "Bar Stools", "Buffet Tables", "Wine Racks"],
  },
  {
    category: "Office",
    description: "Boost your productivity with our professional office furniture. Designed for comfort during long work hours.",
    image: officeImage,
    items: ["Executive Desks", "Office Chairs", "Filing Cabinets", "Bookcases", "Conference Tables", "Reception Desks"],
  },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-warm pattern-african">
          <div className="container-wide section-padding py-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
                Our Products
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Handcrafted Furniture for{" "}
                <span className="text-gradient">Every Room</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover our complete collection of premium, handmade furniture.
                Each piece is crafted with care in our Kigali workshop.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding bg-background">
          <div className="container-wide space-y-24">
            {products.map((product, index) => (
              <div
                key={product.category}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-[400px]">
                    <Image
                      src={product.image}
                      alt={product.category}
                      fill
                      className="object-cover rounded-2xl shadow-strong"
                      placeholder="blur"
                    />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-2xl -z-10" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                    {product.category}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {product.items.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="default" asChild>
                    <a
                      href={`https://wa.me/250788379144?text=Hello%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(product.category)}%20furniture`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Inquire About {product.category}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Design CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-sm font-medium text-gold mb-4 tracking-wider uppercase">
                Custom Designs
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-wood-light text-lg mb-8 leading-relaxed">
                We specialize in custom furniture design. Share your vision with us,
                and our master craftsmen will bring it to life. From unique dimensions
                to specific materials, we can create exactly what you need.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a
                    href="https://wa.me/250788379144?text=Hello%2C%20I'd%20like%20to%20discuss%20a%20custom%20furniture%20design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Discuss Custom Design
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="tel:+250788379144">
                    Call +250 788 379 144
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Note */}
        <section className="section-padding bg-muted">
          <div className="container-wide">
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-4">Affordable Pricing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe quality furniture should be accessible. Our prices are competitive,
                    and we offer flexible payment options. Contact us for a personalized quote
                    based on your specific requirements.
                  </p>
                </div>
                <div className="bg-secondary rounded-xl p-6">
                  <p className="text-sm text-muted-foreground mb-2">What's included:</p>
                  <ul className="space-y-2">
                    {["Free consultation", "Custom measurements", "Quality materials", "Expert craftsmanship", "Delivery in Kigali", "Installation support"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-foreground">
                        <span className="text-gold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;

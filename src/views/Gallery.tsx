import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, ExternalLink } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/hero-furniture.jpg";
import livingRoomImage from "@/assets/living-room.jpg";
import bedroomImage from "@/assets/bedroom-furniture.jpg";
import diningImage from "@/assets/dining-furniture.jpg";
import officeImage from "@/assets/office-furniture.jpg";
import workshopImage from "@/assets/craftsman-workshop.jpg";

const galleryItems = [
  { image: heroImage, title: "Showroom Collection", category: "Showroom" },
  { image: livingRoomImage, title: "Cozy Living Room Set", category: "Living Room" },
  { image: bedroomImage, title: "Elegant Bedroom Suite", category: "Bedroom" },
  { image: diningImage, title: "Modern Dining Set", category: "Dining" },
  { image: officeImage, title: "Executive Office", category: "Office" },
  { image: workshopImage, title: "Master at Work", category: "Workshop" },
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-warm">
          <div className="container-wide section-padding py-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
                Gallery
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Work in{" "}
                <span className="text-gradient">Pictures</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Browse through our portfolio of handcrafted furniture and interior projects.
                Each piece tells a story of Rwandan artistry and dedication.
              </p>
              <p className="text-muted-foreground italic">
                "Tura heza hamwe na KWIZERWA ARTS FURNITURE" – Live well with Kwizerwa Arts Furniture
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-card card-hover aspect-[4/3]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-primary-foreground">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                See More on Social Media
              </h2>
              <p className="text-wood-light text-lg mb-8">
                Follow us on Instagram and YouTube for daily updates, behind-the-scenes
                content, and the latest furniture designs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a
                    href="https://www.instagram.com/kwizerwa_arts_furniture/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Instagram className="w-5 h-5" />
                    Follow on Instagram (13K+)
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a
                    href="https://www.youtube.com/@kwizerwaartfurnituredesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Youtube className="w-5 h-5" />
                    Watch on YouTube
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Embed Suggestion */}
        <section className="section-padding bg-muted pattern-african">
          <div className="container-wide">
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
              <h3 className="font-heading text-2xl font-bold mb-4">Latest from Instagram</h3>
              <p className="text-muted-foreground mb-6">
                Check out our latest posts featuring new furniture designs,
                customer showcases, and workshop moments.
              </p>
              <Button variant="outline" asChild>
                <a
                  href="https://www.instagram.com/kwizerwa_arts_furniture/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Instagram Feed
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;

import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Hammer, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import workshopImage from "@/assets/craftsman-workshop.jpg";

const features = [
  {
    icon: Hammer,
    title: "Handcrafted Quality",
    description: "Every piece is meticulously crafted by skilled artisans using traditional techniques.",
  },
  {
    icon: Award,
    title: "Made in Rwanda",
    description: "Proudly supporting local materials and Rwandan craftsmanship heritage.",
  },
  {
    icon: Users,
    title: "Custom Designs",
    description: "Tailored furniture solutions designed to match your unique vision and space.",
  },
  {
    icon: GraduationCap,
    title: "Furniture School",
    description: "Training the next generation of furniture designers and craftsmen.",
  },
];

export const About = () => {
  return (
    <section className="section-padding bg-gradient-warm pattern-african">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-strong h-[400px] md:h-[500px]">
              <Image
                src={workshopImage}
                alt="Craftsman at work in Kwizerwa Arts workshop"
                fill
                className="object-cover"
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/20 rounded-2xl -z-0" />

            {/* Experience Badge */}
            <div className="absolute bottom-8 left-8 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-strong z-20">
              <p className="font-heading text-3xl font-bold">10+</p>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              About Kwizerwa Arts
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Crafting Dreams Into{" "}
              <span className="text-gradient">Lasting Furniture</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Based in Gisozi, Kigali, Kwizerwa Arts Furniture is more than a furniture store —
              we're a design school and a hub for Rwandan creativity. We blend traditional
              craftsmanship with modern design to create furniture that's both beautiful and
              built to last.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" asChild>
              <Link href="/about" className="flex items-center gap-2">
                Learn Our Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};


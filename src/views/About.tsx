import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Award, Users, Hammer, GraduationCap, Heart, Target, Eye } from "lucide-react";
import Image from "next/image";
import workshopImage from "@/assets/craftsman-workshop.jpg";
import heroImage from "@/assets/hero-furniture.jpg";

const values = [
  {
    icon: Hammer,
    title: "Quality Craftsmanship",
    description: "Every piece is meticulously handcrafted using time-honored techniques passed down through generations.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our priority. We work closely with you to bring your vision to life.",
  },
  {
    icon: Award,
    title: "Local Pride",
    description: "Proudly Made in Rwanda. We support local materials, artisans, and the national economy.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Training the next generation of furniture designers through our vocational school.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt="Workshop"
              fill
              className="object-cover opacity-20"
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          </div>
          <div className="relative z-10 container-wide section-padding py-12">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
                About Us
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Crafting Dreams Into{" "}
                <span className="text-gradient">Reality</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Since our founding in Gisozi, Kigali, Kwizerwa Arts Furniture has been
                dedicated to creating furniture that transforms houses into homes.
                We blend traditional Rwandan craftsmanship with modern design sensibilities.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-gradient-warm">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src={workshopImage}
                  alt="Master craftsman at work"
                  className="rounded-2xl shadow-strong w-full h-auto"
                  placeholder="blur"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-2xl -z-10" />
              </div>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Kwizerwa Arts Furniture began with a simple belief: every home deserves
                    furniture that's beautiful, durable, and crafted with care. Founded in the
                    heart of Kigali's Gisozi neighborhood, we've grown from a small workshop
                    to a renowned furniture store and design school.
                  </p>
                  <p>
                    Our name, "Kwizerwa," reflects our core philosophy—to trust in our craft
                    and deliver excellence with every piece. We use locally-sourced materials
                    whenever possible, supporting Rwanda's economy while reducing our environmental footprint.
                  </p>
                  <p>
                    Today, with over 13,000 followers on Instagram and hundreds of satisfied
                    customers, we continue our mission: "Nkora neza kandi biramba" –
                    We do well and it lasts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
                <div className="w-16 h-16 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-wood-light leading-relaxed">
                  To provide quality furniture that enhances living spaces while fostering
                  education and skill development in furniture design, supporting Rwanda's
                  local economy and artistic heritage.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Rwanda's leading furniture brand, known for exceptional craftsmanship,
                  innovative design, and commitment to training the next generation of artisans
                  who will carry our traditions forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-muted pattern-african">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-muted-foreground text-lg">
                These principles guide everything we do at Kwizerwa Arts.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="bg-card rounded-2xl p-6 border border-border card-hover">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Furniture School */}
        <section id="school" className="section-padding bg-secondary">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Furniture Design School</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Learn the Art of Furniture Making
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Our vocational training programs teach aspiring designers and craftsmen
                  the skills they need to create beautiful, lasting furniture. From basic
                  woodworking to advanced design techniques, we cover it all.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Hands-on workshop experience", "Master craftsman instruction", "Career placement assistance", "Certification upon completion"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-gold rounded-full" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="hero" size="lg" asChild>
                  <a
                    href="https://wa.me/250788379144?text=Hello%2C%20I'm%20interested%20in%20your%20furniture%20design%20school"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inquire About Enrollment
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <p className="font-heading text-4xl font-bold text-primary mb-2">50+</p>
                  <p className="text-muted-foreground">Students Trained</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <p className="font-heading text-4xl font-bold text-primary mb-2">6</p>
                  <p className="text-muted-foreground">Month Programs</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <p className="font-heading text-4xl font-bold text-primary mb-2">5</p>
                  <p className="text-muted-foreground">Expert Instructors</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <p className="font-heading text-4xl font-bold text-primary mb-2">90%</p>
                  <p className="text-muted-foreground">Job Placement</p>
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

export default AboutPage;

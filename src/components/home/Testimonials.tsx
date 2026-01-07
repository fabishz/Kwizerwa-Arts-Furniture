import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jean-Baptiste M.",
    location: "Kigali, Rwanda",
    text: "The quality of craftsmanship is exceptional. My living room set from Kwizerwa has been a centerpiece of conversation for two years now. Truly built to last!",
    rating: 5,
  },
  {
    name: "Sarah K.",
    location: "Nyamirambo",
    text: "I enrolled in their furniture school and it changed my life. Now I run my own small workshop. The teachers are incredibly skilled and patient.",
    rating: 5,
  },
  {
    name: "Emmanuel R.",
    location: "Remera, Kigali",
    text: "Custom bedroom furniture that exceeded expectations. The attention to detail and use of quality wood is remarkable. Highly recommend!",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-gold mb-4 tracking-wider uppercase">
            Customer Stories
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-wood-light text-lg">
            Join thousands of satisfied customers who have transformed their spaces with Kwizerwa Arts furniture.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-wood-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-wood-light/10"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-wood-light/90 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-heading text-lg font-bold text-gold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-wood-light/70">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-wood-light/20">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-gold mb-2">500+</p>
              <p className="text-sm text-wood-light/70">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-gold mb-2">10+</p>
              <p className="text-sm text-wood-light/70">Years of Excellence</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-gold mb-2">100%</p>
              <p className="text-sm text-wood-light/70">Rwandan Made</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-gold mb-2">50+</p>
              <p className="text-sm text-wood-light/70">Students Trained</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

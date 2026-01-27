import { Heart, Users, Gift, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import schoolChildren from "@/assets/school-children.jpg";

const ways = [
  {
    icon: Heart,
    title: "Donate",
    description: "Your financial contribution directly supports children's education. Every dollar makes a difference.",
    cta: "Give Now",
    variant: "default" as const,
    featured: true,
  },
  {
    icon: Gift,
    title: "Sponsor a Child",
    description: "Create a lasting bond by sponsoring a child's entire educational journey from start to finish.",
    cta: "Sponsor Today",
    variant: "accent" as const,
    featured: false,
  },
  {
    icon: Users,
    title: "Volunteer",
    description: "Share your skills and time. Join our volunteer programs on the ground or remotely.",
    cta: "Join Us",
    variant: "outline" as const,
    featured: false,
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    description: "Corporate partnerships and institutional collaborations help us scale our impact.",
    cta: "Partner",
    variant: "outline" as const,
    featured: false,
  },
];

const GetInvolvedSection = () => {
  return (
    <section id="get-involved" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Make a Difference
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Get Involved Today
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            There are many ways to support our mission. Choose how you'd like to 
            contribute to changing lives.
          </p>
        </div>

        {/* Ways Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ways.map((way) => (
            <div
              key={way.title}
              className={`relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 ${
                way.featured
                  ? "bg-primary text-primary-foreground shadow-elevated"
                  : "bg-card text-foreground shadow-card hover:shadow-elevated"
              }`}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                  way.featured ? "bg-primary-foreground/20" : "bg-primary/10"
                }`}
              >
                <way.icon
                  className={`w-8 h-8 ${way.featured ? "text-primary-foreground" : "text-primary"}`}
                />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold mb-3">{way.title}</h3>

              {/* Description */}
              <p
                className={`font-body text-sm leading-relaxed mb-6 ${
                  way.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {way.description}
              </p>

              {/* CTA */}
              <Button
                variant={way.featured ? "hero-outline" : way.variant}
                size="lg"
                className="w-full"
              >
                {way.cta}
              </Button>

              {/* Featured Badge */}
              {way.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={schoolChildren}
            alt="Happy school children"
            className="w-full h-[300px] lg:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-8 lg:px-16">
              <div className="max-w-2xl">
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4">
                  Ready to Change a Child's Life?
                </h3>
                <p className="font-body text-lg text-secondary-foreground/80 mb-6">
                  Your support today can provide a lifetime of opportunities for children 
                  who need it most.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl">
                    Donate Now
                  </Button>
                  <Button variant="hero-outline" size="xl">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;

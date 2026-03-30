import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="African children in classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
            <span className="font-body text-sm font-medium text-primary-foreground/90">
              Transforming Lives Through Education
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Every Child Deserves a{" "}
            <span className="text-primary">Good Education</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We're on a mission to provide quality education to children across the world. 
            Together, we can break the cycle of poverty and unlock unlimited potential.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Start Giving Today
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              <Play className="w-5 h-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-wrap gap-8 lg:gap-12">
              <div>
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary">50,000+</p>
                <p className="font-body text-sm text-primary-foreground/70">Children Educated</p>
              </div>
              <div>
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary">120+</p>
                <p className="font-body text-sm text-primary-foreground/70">Schools Built</p>
              </div>
              <div>
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary">15</p>
                <p className="font-body text-sm text-primary-foreground/70">Countries Reached</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

import { TrendingUp, GraduationCap, School, Globe } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    number: "50,000+",
    label: "Students Educated",
    description: "Children who now have access to quality education",
  },
  {
    icon: School,
    number: "120+",
    label: "Schools Built",
    description: "Modern learning facilities across 15 countries",
  },
  {
    icon: TrendingUp,
    number: "92%",
    label: "Graduation Rate",
    description: "Of our students complete their primary education",
  },
  {
    icon: Globe,
    number: "15",
    label: "Countries",
    description: "Across Sub-Saharan Africa where we operate",
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Changing Lives, One Child at a Time
          </h2>
          <p className="font-body text-lg text-secondary-foreground/80 leading-relaxed">
            Every donation, every volunteer hour, every partnership brings us closer to a 
            world where every child has the education they deserve.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-secondary-foreground/10 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Number */}
              <p className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </p>

              {/* Label */}
              <p className="font-display text-xl font-semibold text-secondary-foreground mb-2">
                {stat.label}
              </p>

              {/* Description */}
              <p className="font-body text-sm text-secondary-foreground/70">
                {stat.description}
              </p>

              {/* Decorative gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 lg:mt-24 text-center max-w-4xl mx-auto">
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-medium italic text-secondary-foreground/90 leading-relaxed">
            "Education is the most powerful weapon which you can use to change the world."
          </blockquote>
          <cite className="block font-body text-lg text-primary mt-6 not-italic">
            — Nelson Mandela
          </cite>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

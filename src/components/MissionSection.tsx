import { Target, Heart, Users, Lightbulb } from "lucide-react";
import childReading from "@/assets/child-reading.jpg";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We believe every child deserves love, care, and the opportunity to thrive.",
  },
  {
    icon: Target,
    title: "Impact",
    description: "We focus on sustainable solutions that create lasting change in communities.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We work alongside local leaders and families to build stronger futures.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace creative approaches to overcome educational barriers.",
  },
];

const MissionSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={childReading}
                alt="Child reading a book"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-card rounded-xl p-6 shadow-card max-w-[280px]">
              <p className="font-display text-2xl font-bold text-primary mb-1">15+ Years</p>
              <p className="font-body text-sm text-muted-foreground">
                of dedicated service to African children's education
              </p>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Our Mission
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Empowering Africa's Next Generation
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              At BrightFutures, we believe that education is the most powerful tool for 
              breaking the cycle of poverty. Our mission is to ensure that every child in 
              Africa has access to quality education, regardless of their circumstances.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
              Through building schools, training teachers, and providing essential 
              resources, we're creating pathways to success for thousands of children 
              who would otherwise be left behind.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

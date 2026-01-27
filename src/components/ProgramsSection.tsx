import { BookOpen, Home, Apple, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import teacherStudents from "@/assets/teacher-students.jpg";

const programs = [
  {
    icon: Home,
    title: "School Construction",
    description:
      "We build safe, modern learning facilities in underserved communities, providing children with proper classrooms and resources.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: BookOpen,
    title: "Teacher Training",
    description:
      "Our comprehensive training programs empower local educators with modern teaching methodologies and resources.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Apple,
    title: "Nutrition Programs",
    description:
      "Healthy children learn better. We provide nutritious meals to ensure students can focus on their education.",
    color: "bg-terracotta/10 text-terracotta",
  },
  {
    icon: Laptop,
    title: "Digital Learning",
    description:
      "Bridging the digital divide by introducing technology and computer literacy to rural schools.",
    color: "bg-secondary/10 text-secondary",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Our Programs
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            We take a holistic approach to education, addressing not just learning but the 
            entire ecosystem that supports a child's development.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Programs List */}
          <div className="space-y-6">
            {programs.map((program) => (
              <div
                key={program.title}
                className="flex gap-5 p-6 rounded-xl bg-card shadow-soft hover:shadow-card transition-shadow duration-300 group"
              >
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-xl ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <program.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={teacherStudents}
                alt="Teacher helping students"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-card">
              <p className="font-display text-xl font-semibold text-foreground mb-2">
                Join Our Mission
              </p>
              <p className="font-body text-sm text-muted-foreground mb-4">
                Your support helps us expand our programs to reach more children.
              </p>
              <Button variant="default" size="default">
                Learn More About Our Work
              </Button>
            </div>
            {/* Decorative */}
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

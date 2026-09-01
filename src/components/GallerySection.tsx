import { useEffect, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import childReading from "@/assets/child-reading.jpg";
import heroChildren from "@/assets/hero-children.jpg";
import schoolChildren from "@/assets/school-children.jpg";
import teacherStudents from "@/assets/teacher-students.jpg";

const galleryImages = [
  {
    src: childReading,
    alt: "Child reading a book",
  },
  {
    src: teacherStudents,
    alt: "Teacher helping students in class",
  },
  {
    src: schoolChildren,
    alt: "Happy school children",
  },
  {
    src: heroChildren,
    alt: "African children in classroom",
  },
];

const GallerySection = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const interval = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 4500);

    return () => window.clearInterval(interval);
  }, [carouselApi]);

  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Moments From Our Work
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            A glimpse of the children, classrooms, and communities at the heart of the Dzidzo Foundation.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setCarouselApi}
          className="px-10 md:px-12"
        >
          <CarouselContent className="-ml-5">
            {galleryImages.map((image) => (
              <CarouselItem key={image.alt} className="basis-full pl-5 md:basis-1/2 lg:basis-1/3">
                <article className="overflow-hidden rounded-xl bg-background shadow-card">
                  <div className="flex h-[260px] items-center justify-center bg-warm-cream p-4 md:h-[320px] lg:h-[340px]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="max-h-full w-full object-contain"
                    />
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 top-[45%] bg-background text-foreground shadow-card hover:bg-background" />
          <CarouselNext className="right-0 top-[45%] bg-background text-foreground shadow-card hover:bg-background" />
        </Carousel>
      </div>
    </section>
  );
};

export default GallerySection;

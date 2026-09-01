import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { upcomingEvents } from "@/data/upcomingEvents";

const UpcomingEventsSection = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const interval = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 6000);

    return () => window.clearInterval(interval);
  }, [carouselApi]);

  return (
    <section id="events" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Upcoming Events
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Join Us At Our Next Event
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Connect with the Dzidzo Foundation and support work that helps children access education.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setCarouselApi}
          className="px-10 md:px-12"
        >
          <CarouselContent className="-ml-0">
            {upcomingEvents.map((event) => (
              <CarouselItem key={event.slug} className="basis-full pl-0">
                <article className="grid overflow-hidden rounded-xl bg-card shadow-card lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="flex min-h-[300px] items-center justify-center bg-warm-cream p-4 lg:min-h-[430px]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="max-h-[380px] w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
                    <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
                      {event.title}
                    </h3>
                    <div className="grid gap-3 font-body text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-3">
                        <CalendarDays className="h-5 w-5 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                      {event.excerpt}
                    </p>
                    <Button asChild size="lg" className="w-fit">
                      <RouterLink to={`/events/${event.slug}`}>Read More</RouterLink>
                    </Button>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 top-1/2 bg-background text-foreground shadow-card hover:bg-background" />
          <CarouselNext className="right-0 top-1/2 bg-background text-foreground shadow-card hover:bg-background" />
        </Carousel>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;

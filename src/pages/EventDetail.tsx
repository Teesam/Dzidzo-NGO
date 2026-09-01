import { Link as RouterLink, useParams } from "react-router-dom";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { upcomingEvents } from "@/data/upcomingEvents";

const EventDetail = () => {
  const { slug } = useParams();
  const event = upcomingEvents.find((item) => item.slug === slug);

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 lg:px-8 pt-32 pb-20">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Event Not Found
            </h1>
            <p className="font-body text-muted-foreground mb-8">
              The event you are looking for is not currently available.
            </p>
            <Button asChild>
              <RouterLink to="/#events">Back to Events</RouterLink>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-28 lg:pt-36 pb-20 lg:pb-28 bg-gradient-warm">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="overflow-hidden rounded-xl bg-warm-cream shadow-elevated p-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="max-h-[560px] w-full object-contain"
                />
              </div>
              <div>
                <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Upcoming Event
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                  {event.title}
                </h1>
                <div className="grid gap-3 font-body text-base text-muted-foreground mb-8">
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
                <div className="space-y-5 font-body text-lg text-muted-foreground leading-relaxed mb-8">
                  {event.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <Button asChild size="lg">
                  <a href="mailto:dzidzofoundation@gmail.com">Contact Us About This Event</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetail;

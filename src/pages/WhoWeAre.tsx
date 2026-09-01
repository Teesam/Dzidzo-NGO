import Header from "@/components/Header";
import Footer from "@/components/Footer";
import childReading from "@/assets/child-reading.jpg";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative overflow-hidden pt-28 lg:pt-36 pb-20 lg:pb-28 bg-gradient-warm">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
              <div className="max-w-3xl">
                <span className="inline-block font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Who We Are
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
                  Educating children, strengthening futures.
                </h1>
                <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
                  <p>
                    At the Dzidzo Foundation, we believe that children are the
                    very essence of our future. Their potential tomorrow is
                    shaped by the support and opportunities they receive today.
                    We are dedicated to ensuring that every child, regardless of
                    their background, has access to quality education and the
                    chance to succeed.
                  </p>
                  <p>
                    We are committed to providing the same educational
                    opportunities to all children, believing that basic skills
                    like reading and writing are fundamental in transforming
                    lives and communities. Our mission is to empower children
                    through education, fostering growth, self-confidence, and
                    social mobility.
                  </p>
                  <p>
                    Our programmes and initiatives are designed to break down
                    barriers to education, uplift marginalised communities, and
                    create pathways for a brighter future. By equipping children
                    with the tools they need, we strive to improve their lives
                    and help them realise their full potential.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-elevated">
                  <img
                    src={childReading}
                    alt="Child reading a book"
                    className="h-[420px] w-full object-cover lg:h-[560px]"
                  />
                </div>
                <div className="absolute -bottom-6 left-6 right-6 bg-card/95 p-6 rounded-xl shadow-card backdrop-blur-sm">
                  <p className="font-display text-2xl font-bold text-primary mb-1">
                    Quality education for every child
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Supporting growth, confidence, and opportunity through learning.
                  </p>
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

export default WhoWeAre;

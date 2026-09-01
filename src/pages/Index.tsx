import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ImpactSection from "@/components/ImpactSection";
import ProgramsSection from "@/components/ProgramsSection";
import GallerySection from "@/components/GallerySection";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        {/* <ImpactSection /> */}
        <ProgramsSection />
        <GallerySection />
        <UpcomingEventsSection />
        <GetInvolvedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

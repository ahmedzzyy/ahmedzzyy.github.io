import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen dark bg-background text-foreground">
      <main className="overflow-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Skills Section */}
        <section className="border-t border-gray-700/30">
          <SkillsSection />
        </section>

        {/* About Section */}
        <section className="border-t border-gray-700/30">
          <AboutSection />
        </section>

        {/* Contact Section */}
        <section className="border-t border-gray-700/30">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}

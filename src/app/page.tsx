import { CardSection } from "@/components/CardSection";
import Footer from "@/components/Footer";
import { HeroHighlights } from "@/components/HeroHighlight";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0]">
        <HeroSection />
        <HeroHighlights/>
        <CardSection />
        <Footer/>
      </main>
    </>
  );
}

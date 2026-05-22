import { Navbar } from "../components/Navbar";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
      </div>
    </main>
  );
}

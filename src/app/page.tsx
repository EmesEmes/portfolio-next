import { AboutSection } from "@/sections/About";
import MyApproach from "@/sections/Approach";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <MyApproach />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

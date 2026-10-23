import { BuildStory } from "@/components/BuildStory";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { Founder } from "@/components/Founder";
import { Hero } from "@/components/Hero";
import { IdeaPrompt } from "@/components/IdeaPrompt";
import { Marquee } from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <Marquee />
        <Services />
        <IdeaPrompt />
        <Projects />
        <BuildStory />
        <Process />
        <Founder />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

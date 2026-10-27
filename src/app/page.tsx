import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Career, Footer, Matches, OffThePitch, PlayerProfile, TrophyCabinet } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PlayerProfile />
        <Career />
        <Matches />
        <TrophyCabinet />
        <OffThePitch />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

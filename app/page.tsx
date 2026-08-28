import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CuratedSpecimens from "@/components/CuratedSpecimens";
import WhiteGloveConcierge from "@/components/WhiteGloveConcierge";
import Gallery from "@/components/Gallery";
import BotanicalPassports from "@/components/BotanicalPassports";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CuratedSpecimens />
      <WhiteGloveConcierge />
      <div id="gallery">
        <Gallery />
      </div>
      <div id="passports">
        <BotanicalPassports />
      </div>
      <Footer />
    </main>
  );
}

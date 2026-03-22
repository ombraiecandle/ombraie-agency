import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import LogosClients from "@/components/sections/LogosClients";
import Stats from "@/components/sections/Stats";
import PainSection from "@/components/sections/PainSection";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Founder from "@/components/sections/Founder";
import ZoneIntervention from "@/components/sections/ZoneIntervention";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050508]">
      <Navbar />
      <Hero />
      <LogosClients />      {/* Preuve sociale immédiate — avant tout le reste */}
      <Stats />             {/* Chiffres clés */}
      <PainSection />       {/* Miroir des douleurs client → bridge vers solution */}
      <Services />          {/* Ce qu'on fait, par bénéfice */}
      <Process />           {/* La Méthode Ombraie™ — étape par étape */}
      <Portfolio />         {/* Case studies — résultats concrets */}
      <Testimonials />      {/* Marquee témoignages */}
      <Founder />           {/* Humanisation — qui sommes-nous */}
      <ZoneIntervention />  {/* Zone locale */}
      <FAQ />               {/* Vraies questions clients */}
      <CTA />               {/* Appel à l'action final */}
      <Contact />           {/* Formulaire + prix */}
      <Footer />
    </main>
  );
}

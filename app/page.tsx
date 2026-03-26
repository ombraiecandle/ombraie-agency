import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import RealisationsTeaser from "@/components/sections/RealisationsTeaser";
import Testimonials from "@/components/sections/Testimonials";
import Founder from "@/components/sections/Founder";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#FAFAF9" }}>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <RealisationsTeaser />
      <Testimonials />
      <Founder />
      <Contact />
      <Footer />
    </main>
  );
}

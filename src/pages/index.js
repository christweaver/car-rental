import Experience from "@/components/Experience";
import Fleet from "@/components/Fleet";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Deals from "@/components/Deals";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Fleet />
      <Experience />
      <Deals />
      <Footer />
    </div>
  );
}

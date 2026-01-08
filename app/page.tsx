import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-right">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

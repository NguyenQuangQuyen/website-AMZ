import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import WhyUs from "@/sections/WhyUs";
import Testimonials from "@/sections/Testimonials";
import Stats from "@/sections/Stats";
import Partners from "@/sections/Partners";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <Partners />
      <Stats />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

import AboutSection from "~/components/welcome/AboutSection";
import ContactSection from "~/components/welcome/ContactSection";
import Footer from "~/components/welcome/Footer";
import GallerySection from "~/components/welcome/GallerySection";
import HeroSection from "~/components/welcome/Hero";
import Navbar from "~/components/welcome/Navbar";
import ServicesSection from "~/components/welcome/ServicesSection";
import TeamSection from "~/components/welcome/TeamSection";
import TestimonialsSection from "~/components/welcome/TestimonialSection";

export function Welcome() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

import HeroSection from "./sections/HeroSection";
import ResumeSection from "./sections/ResumeSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="bg-[#0C0C0C]" style={{ overflowX: "clip" }}>
      <HeroSection />
      <ResumeSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

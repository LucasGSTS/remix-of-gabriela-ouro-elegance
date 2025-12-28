import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainBanners from "@/components/PainBanners";
import AboutDoctor from "@/components/AboutDoctor";
import HowItWorks from "@/components/HowItWorks";
import Treatments from "@/components/Treatments";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import AppointmentForm from "@/components/AppointmentForm";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <HeroSection />
      <PainBanners />
      <AboutDoctor />
      <HowItWorks />
      <Treatments />
      <Testimonials />
      <FAQ />
      <AppointmentForm />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

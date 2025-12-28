import { Button } from "@/components/ui/button";
import { MessageCircle, Star, Award, MapPin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById("agendamento");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/5541996385712", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center py-16 md:py-32">
        <div className="animate-fade-up">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-foreground mb-4 md:mb-6 leading-tight">
            Beleza, confiança e bem-estar
            <br />
            <span className="text-primary">em cada detalhe ✨</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 mb-8 md:mb-12 max-w-3xl mx-auto px-2">
            Tratamentos com toxina botulínica em Curitiba — rugas, bruxismo e suor excessivo.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 justify-center mb-10 md:mb-16 px-2">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-gold-shimmer bg-[length:200%_100%] animate-shimmer text-primary-foreground font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 hover:scale-105 transition-transform shadow-xl w-full sm:w-auto sm:mx-auto"
            >
              Agende sua Avaliação Gratuita
            </Button>
            <Button
              onClick={openWhatsApp}
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 hover:bg-primary/10 hover:scale-105 transition-all w-full sm:w-auto sm:mx-auto"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale no WhatsApp
            </Button>
          </div>

          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-8 text-foreground/60 text-sm md:text-base">
            <div className="flex items-center gap-2 animate-float justify-center">
              <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />
              <span>Atendimento Personalizado</span>
            </div>
            <div className="flex items-center gap-2 animate-float justify-center" style={{ animationDelay: "0.2s" }}>
              <Star className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />
              <span>4.9★ Avaliações</span>
            </div>
            <div className="flex items-center gap-2 animate-float justify-center" style={{ animationDelay: "0.4s" }}>
              <Award className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />
              <span>Especialista Certificada</span>
            </div>
            <div className="flex items-center gap-2 animate-float justify-center" style={{ animationDelay: "0.6s" }}>
              <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />
              <span>Bigorrilho, Curitiba</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

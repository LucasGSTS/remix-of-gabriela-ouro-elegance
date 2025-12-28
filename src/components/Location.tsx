import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const openMaps = () => {
    window.open("https://maps.google.com/?q=Bigorrilho,Curitiba,PR", "_blank");
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 md:mb-4">
            Nossa <span className="text-primary">Localização</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/70">
            Atendimento em Curitiba, no bairro Bigorrilho
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="space-y-5 md:space-y-6 order-2 md:order-1">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">Endereço</h3>
                  <p className="text-foreground/70 text-sm md:text-base">Bigorrilho, Curitiba - PR</p>
                  <p className="text-foreground/70 text-xs md:text-sm mt-1">
                    *Endereço completo fornecido após agendamento
                  </p>
                </div>
              </div>

              <Button
                onClick={openMaps}
                className="w-full bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all py-5 md:py-4"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Ver no Google Maps
              </Button>
            </div>

            <div className="relative h-[280px] md:h-[400px] rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 backdrop-blur-sm mb-4 animate-pulse-glow">
                    <MapPin className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                  </div>
                  <p className="text-foreground font-serif text-xl md:text-2xl">Bigorrilho</p>
                  <p className="text-foreground/70 text-sm md:text-base">Curitiba - PR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

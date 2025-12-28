import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const openMaps = () => {
    window.open("https://maps.google.com/?q=Bigorrilho,Curitiba,PR", "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Nossa <span className="text-primary">Localização</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Atendimento em Curitiba, no bairro Bigorrilho
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-foreground mb-2">Endereço</h3>
                  <p className="text-foreground/70">Bigorrilho, Curitiba - PR</p>
                  <p className="text-foreground/70 text-sm mt-1">
                    *Endereço completo fornecido após agendamento
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-3">Horário de Atendimento</h4>
                <div className="space-y-2 text-foreground/70">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span className="font-medium">9h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span className="font-medium">9h - 13h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span className="font-medium">Fechado</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={openMaps}
                className="w-full bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Ver no Google Maps
              </Button>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm mb-4 animate-pulse-glow">
                    <MapPin className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-foreground font-serif text-2xl">Bigorrilho</p>
                  <p className="text-foreground/70">Curitiba - PR</p>
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

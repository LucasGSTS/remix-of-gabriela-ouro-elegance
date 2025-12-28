import { Award } from "lucide-react";
import doctorImage from "@/assets/dra-gabriela.jpeg";

const AboutDoctor = () => {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gold-shimmer blur-2xl opacity-30 animate-pulse-glow"></div>
              <div className="relative aspect-square rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img
                  src={doctorImage}
                  alt="Dra. Gabriela Tavares Leme"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-4">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Especialista em Estética Avançada</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Conheça a <span className="text-primary">Dra. Gabriela</span>
            </h2>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Biomédica especializada em estética avançada e aplicação de toxina botulínica, com foco em
              tratamentos personalizados que respeitam a naturalidade e harmonia de cada paciente.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Com anos de experiência e formação continuada, minha missão é proporcionar resultados seguros,
              eficazes e que realcem a beleza natural de cada pessoa, sempre com cuidado e atenção aos
              detalhes.
            </p>

            <div className="flex items-center gap-2 pt-8 text-foreground/70">
              <Award className="h-5 w-5 text-primary" />
              <span className="font-medium">CRBM-6 8350</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;

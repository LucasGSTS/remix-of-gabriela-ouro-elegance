import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Droplet } from "lucide-react";

const treatments = [
  {
    icon: Sparkles,
    title: "Rugas e Linhas Finas",
    description:
      "Suavização de rugas de expressão na testa, entre as sobrancelhas e ao redor dos olhos para um visual mais jovem e descansado.",
    benefits: ["Resultados naturais", "Procedimento rápido", "Sem tempo de recuperação"],
  },
  {
    icon: Shield,
    title: "Bruxismo e Dores Tensionais",
    description:
      "Alívio eficaz da tensão mandibular, dores de cabeça e desgaste dental causados pelo bruxismo.",
    benefits: ["Redução da dor", "Proteção dental", "Relaxamento muscular"],
  },
  {
    icon: Droplet,
    title: "Hiperidrose - Suor Excessivo",
    description:
      "Controle do suor excessivo nas axilas, mãos e pés, proporcionando mais conforto e confiança.",
    benefits: ["Efeito duradouro", "Mais confiança", "Procedimento seguro"],
  },
];

const Treatments = () => {
  const scrollToForm = () => {
    const element = document.getElementById("agendamento");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="tratamentos" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Nossos <span className="text-primary">Tratamentos</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Soluções personalizadas com toxina botulínica para diferentes necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gold-shimmer opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative h-full p-8 rounded-2xl bg-card/70 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <treatment.icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="font-serif text-2xl text-foreground mb-4">{treatment.title}</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">{treatment.description}</p>

                <ul className="space-y-2 mb-8">
                  {treatment.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-foreground/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToForm}
                  className="w-full bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Quero tratar isso
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;

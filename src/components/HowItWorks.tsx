import { Syringe, Clock, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Syringe,
    title: "Aplicação Precisa",
    description: "A toxina botulínica é aplicada em pontos estratégicos dos músculos faciais",
  },
  {
    icon: Clock,
    title: "Ação Progressiva",
    description: "Os resultados começam a aparecer em 3-7 dias, com efeito máximo em 2 semanas",
  },
  {
    icon: CheckCircle,
    title: "Resultados Naturais",
    description: "Duração de 4-6 meses com aparência natural e harmoniosa",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Como Funciona a <span className="text-primary">Toxina Botulínica</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Entenda o processo seguro e eficaz que proporciona resultados naturais e duradouros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center p-8 rounded-2xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

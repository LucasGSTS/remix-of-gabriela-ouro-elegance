import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertCircle } from "lucide-react";

const faqs = [
  {
    question: "A aplicação de toxina botulínica é segura?",
    answer:
      "Sim, quando realizada por profissional habilitado e experiente. A toxina botulínica é aprovada pela ANVISA e utilizada mundialmente há décadas com excelente perfil de segurança.",
  },
  {
    question: "O procedimento dói?",
    answer:
      "O desconforto é mínimo. Utilizo agulhas muito finas e, quando necessário, aplico anestésico tópico para maior conforto durante o procedimento.",
  },
  {
    question: "Quanto tempo dura o efeito?",
    answer:
      "Os resultados duram em média de 3 a 6 meses, variando de acordo com o metabolismo de cada paciente e a área tratada.",
  },
  {
    question: "Quando verei os resultados?",
    answer:
      "Os primeiros efeitos aparecem entre 3 a 7 dias após a aplicação, com resultado completo visível em até 2 semanas.",
  },
  {
    question: "Posso voltar às atividades normais após o procedimento?",
    answer:
      "Sim! O procedimento não requer tempo de recuperação. Apenas evite atividades físicas intensas nas primeiras 24 horas.",
  },
];

const contraindications = [
  "Gravidez e amamentação",
  "Infecções ativas no local da aplicação",
  "Alergia a componentes da fórmula",
  "Doenças neuromusculares",
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 md:mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/70 px-2">
            Tire suas dúvidas sobre os tratamentos com toxina botulínica
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 md:space-y-4 mb-10 md:mb-16">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-primary/20 rounded-lg px-4 md:px-6 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary text-sm md:text-base py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed text-sm md:text-base pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-background border border-primary/20 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-5 md:mb-6">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <AlertCircle className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">Contraindicações</h3>
              <p className="text-foreground/70 mb-4 text-sm md:text-base">
                O tratamento com toxina botulínica não é recomendado nos seguintes casos:
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {contraindications.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-primary/5 border border-primary/10"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                <span className="text-foreground/80 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

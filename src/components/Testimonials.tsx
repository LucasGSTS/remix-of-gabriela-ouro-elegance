import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ana Paula Silva",
    treatment: "Rugas de Expressão",
    text: "Resultado incrível! A Dra. Gabriela é extremamente cuidadosa e o resultado ficou super natural. Me sinto mais confiante e rejuvenescida.",
    rating: 5,
  },
  {
    name: "Mariana Costa",
    treatment: "Bruxismo",
    text: "Depois de anos sofrendo com dores de cabeça causadas pelo bruxismo, finalmente encontrei alívio. Procedimento rápido e resultados surpreendentes!",
    rating: 5,
  },
  {
    name: "Juliana Mendes",
    treatment: "Hiperidrose",
    text: "A qualidade de vida mudou completamente após o tratamento para suor excessivo. Profissionalismo e atenção impecáveis!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(45,65%,53%,0.05)_0%,_transparent_100%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            O Que Dizem Nossas <span className="text-primary">Pacientes</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Mais de 200 pacientes transformados com resultados naturais e seguros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/70 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="border-t border-primary/10 pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.treatment}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-foreground/60">
            <Star className="h-6 w-6 fill-primary text-primary" />
            <span className="text-2xl font-bold text-primary">4.9</span>
            <span>/ 5.0 baseado em mais de 200 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

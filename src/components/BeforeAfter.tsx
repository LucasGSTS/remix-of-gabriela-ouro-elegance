import beforeAfter1 from "@/assets/before-after-1.jpeg";
import beforeAfter2 from "@/assets/before-after-2.jpeg";

const cases = [
  {
    src: beforeAfter1,
    title: "Glabela",
    description: "Suavização das linhas de expressão entre as sobrancelhas",
  },
  {
    src: beforeAfter2,
    title: "Testa",
    description: "Redução das rugas horizontais da testa",
  },
];

const BeforeAfter = () => {
  return (
    <section id="resultados" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(45,65%,53%,0.05)_0%,_transparent_100%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 md:mb-4">
            Antes e <span className="text-primary">Depois</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto px-2">
            Resultados reais de pacientes que confiaram no trabalho da Dra. Gabriela
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 shadow-lg hover:shadow-2xl"
            >
              <img
                src={caseItem.src}
                alt={`Antes e depois - ${caseItem.title}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-4 md:p-6">
                <h3 className="font-serif text-lg md:text-xl text-primary-foreground mb-1">
                  {caseItem.title}
                </h3>
                <p className="text-primary-foreground/80 text-xs md:text-sm">
                  {caseItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <p className="text-xs md:text-sm text-foreground/60 italic">
            *Resultados podem variar de acordo com cada paciente
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

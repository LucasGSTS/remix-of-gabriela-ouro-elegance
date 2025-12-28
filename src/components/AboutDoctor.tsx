import { useEffect, useState } from "react";
import { Award } from "lucide-react";
import doctorImage from "@/assets/dra-gabriela.jpeg";

const AboutDoctor = () => {
  const [patients, setPatients] = useState(0);
  const [rating, setRating] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const animateCounter = (setValue: (val: number) => void, target: number, duration: number) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setValue(target);
          clearInterval(timer);
        } else {
          setValue(Math.floor(start));
        }
      }, 16);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounter(setPatients, 200, 2000);
          animateCounter((val) => setRating(val / 10), 49, 2000);
          animateCounter(setExperience, 5, 2000);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div id="about-section" className="grid md:grid-cols-2 gap-12 items-center">
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

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">+{patients}</div>
                <div className="text-sm text-foreground/60">Pacientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{rating.toFixed(1)}★</div>
                <div className="text-sm text-foreground/60">Avaliações</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">+{experience}</div>
                <div className="text-sm text-foreground/60">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;

import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import wrinklesImg from "@/assets/treatment-wrinkles.jpg";
import bruxismImg from "@/assets/treatment-bruxism.jpg";
import hyperhidrosisImg from "@/assets/treatment-hyperhidrosis.jpg";

const treatments = [
  {
    quote: "Suavize marcas do tempo com resultados naturais e rejuvenescedores. Tratamento eficaz para testa, glabela e região periocular.",
    name: "Rugas e Linhas de Expressão",
    designation: "Tratamento Facial Avançado",
    src: wrinklesImg,
  },
  {
    quote: "Alívio eficaz para tensão mandibular e dores de cabeça. Proteção contra desgaste dental causado pelo bruxismo com resultados duradouros.",
    name: "Bruxismo e Dores Tensionais",
    designation: "Tratamento Terapêutico",
    src: bruxismImg,
  },
  {
    quote: "Controle do suor excessivo nas axilas, mãos e pés. Mais conforto, confiança e qualidade de vida no dia a dia.",
    name: "Hiperidrose - Suor Excessivo",
    designation: "Tratamento de Bem-Estar",
    src: hyperhidrosisImg,
  },
];

const PainBanners = () => {
  return (
    <section className="py-12 md:py-20 bg-background flex items-center justify-center px-4">
      <div className="items-center justify-center relative flex w-full" style={{ maxWidth: "1456px" }}>
        <CircularTestimonials
          testimonials={treatments}
          autoplay={true}
          colors={{
            name: "#D4AF37",
            designation: "#0A0A0A",
            testimony: "#0A0A0A",
            arrowBackground: "#D4AF37",
            arrowForeground: "#FFFFFF",
            arrowHoverBackground: "#C19B2B",
          }}
          fontSizes={{
            name: "clamp(20px, 4vw, 32px)",
            designation: "clamp(14px, 2.5vw, 18px)",
            quote: "clamp(14px, 2.5vw, 18px)",
          }}
        />
      </div>
    </section>
  );
};

export default PainBanners;

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
    <section className="py-20 bg-background flex items-center justify-center">
      <div className="items-center justify-center relative flex" style={{ maxWidth: "1456px" }}>
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
            name: "32px",
            designation: "18px",
            quote: "18px",
          }}
        />
      </div>
    </section>
  );
};

export default PainBanners;

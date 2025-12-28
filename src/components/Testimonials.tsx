import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";
import testimonial4 from "@/assets/testimonial-4.png";

const testimonials = [
  { src: testimonial1, alt: "Depoimento A.A" },
  { src: testimonial2, alt: "Depoimento E.S" },
  { src: testimonial3, alt: "Depoimento I.C" },
  { src: testimonial4, alt: "Depoimento S.A" },
];

const Testimonials = () => {
  // Duplicate for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(45,65%,53%,0.05)_0%,_transparent_100%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 md:mb-4">
            O Que Dizem Nossas <span className="text-primary">Pacientes</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto px-2">
            Veja os depoimentos reais de quem já fez procedimentos com a Dra. Gabriela
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-4 md:gap-6">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96"
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.alt}
                  className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

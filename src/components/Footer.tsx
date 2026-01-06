import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <footer className="bg-card border-t-2 border-primary/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-shimmer bg-[length:200%_100%] animate-shimmer"></div>
      
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img src={logo} alt="Dra. Gabriela Tavares Leme" className="h-12 md:h-16" />
            </div>
            <p className="text-xs md:text-sm text-foreground/60 leading-relaxed">
              Especialista em estética avançada e aplicação de toxina botulínica em Curitiba.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Institucional</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("sobre")} className="text-foreground/60 hover:text-primary transition-colors text-xs md:text-sm">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("tratamentos")} className="text-foreground/60 hover:text-primary transition-colors text-xs md:text-sm">
                  Tratamentos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("depoimentos")} className="text-foreground/60 hover:text-primary transition-colors text-xs md:text-sm">
                  Depoimentos
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Serviços</h4>
            <ul className="space-y-2 text-xs md:text-sm text-foreground/60">
              <li>Rugas e Linhas de Expressão</li>
              <li>Bruxismo</li>
              <li>Hiperidrose</li>
              <li>Avaliação Gratuita</li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Contato</h4>
            <div className="space-y-2 md:space-y-3">
              <a href="tel:+5541996385712" className="flex items-center gap-2 text-xs md:text-sm text-foreground/60 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                (41) 99638-5712
              </a>
              <a href="mailto:Dra.gabrielatleme@gmail.com" className="flex items-center gap-2 text-xs md:text-sm text-foreground/60 hover:text-primary transition-colors break-all">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="break-all">Dra.gabrielatleme@gmail.com</span>
              </a>
            </div>

            <div className="flex gap-3 mt-4 md:mt-6">
              <a href="https://www.instagram.com/dra.gabrielatleme/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 active:scale-95">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-6 md:pt-8 text-center">
          <p className="text-xs md:text-sm text-foreground/60">
            © 2025 Dra. Gabriela Tavares Leme. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="text-xs text-foreground/40 hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <span className="text-foreground/40">•</span>
            <a href="#" className="text-xs text-foreground/40 hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md border-b border-primary/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gold-shimmer flex items-center justify-center text-primary-foreground font-serif text-xl animate-shimmer bg-[length:200%_100%]">
            GT
          </div>
          <span className="font-serif text-xl text-foreground">Dra. Gabriela Tavares Leme</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("tratamentos")}
            className="text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
          >
            Tratamentos
          </button>
          <button
            onClick={() => scrollToSection("depoimentos")}
            className="text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
          >
            Depoimentos
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
          >
            Contato
          </button>
        </nav>

        <Button
          onClick={() => scrollToSection("agendamento")}
          className="bg-gold-shimmer bg-[length:200%_100%] animate-shimmer text-primary-foreground font-semibold px-6 hover:scale-105 transition-transform shadow-lg"
        >
          Agende sua Avaliação
        </Button>
      </div>
    </header>
  );
};

export default Header;

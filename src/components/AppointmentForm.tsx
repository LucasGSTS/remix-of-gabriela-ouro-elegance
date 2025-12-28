import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, Sparkles } from "lucide-react";
import { toast } from "sonner";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    interest: "rugas",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.whatsapp) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast.success("Solicitação enviada com sucesso!");

    // Optional: Open WhatsApp with pre-filled message
    const message = `Olá! Meu nome é ${formData.name} e tenho interesse em tratamento para ${formData.interest}.`;
    window.open(`https://wa.me/5541996385712?text=${encodeURIComponent(message)}`, "_blank");
  };

  if (isSubmitted) {
    return (
      <section id="agendamento" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center p-12 rounded-2xl bg-card border-2 border-primary/30 shadow-2xl">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 animate-scale-in">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h3 className="font-serif text-3xl text-foreground mb-4">Solicitação Enviada!</h3>
            <p className="text-lg text-foreground/70 mb-6">
              Obrigada pelo interesse! Entraremos em contato em breve para agendar sua avaliação gratuita.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Fazer outra solicitação
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="agendamento" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Agende sua <span className="text-primary">Avaliação Gratuita</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Preencha o formulário e receba um atendimento personalizado
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 md:p-12 rounded-2xl bg-card border-2 border-primary/30 shadow-2xl"
        >
          <div className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-foreground mb-2 block">
                Nome Completo
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-primary/30 focus:border-primary"
                required
              />
            </div>

            <div>
              <Label htmlFor="whatsapp" className="text-foreground mb-2 block">
                WhatsApp
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="(00) 00000-0000"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="border-primary/30 focus:border-primary"
                required
              />
            </div>

            <div>
              <Label className="text-foreground mb-3 block">Interesse em:</Label>
              <RadioGroup
                value={formData.interest}
                onValueChange={(value) => setFormData({ ...formData, interest: value })}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                  <RadioGroupItem value="rugas" id="rugas" />
                  <Label htmlFor="rugas" className="cursor-pointer flex-1">
                    Rugas e Linhas de Expressão
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                  <RadioGroupItem value="bruxismo" id="bruxismo" />
                  <Label htmlFor="bruxismo" className="cursor-pointer flex-1">
                    Bruxismo e Dores Tensionais
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                  <RadioGroupItem value="hiperidrose" id="hiperidrose" />
                  <Label htmlFor="hiperidrose" className="cursor-pointer flex-1">
                    Hiperidrose (Suor Excessivo)
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gold-shimmer bg-[length:200%_100%] animate-shimmer text-primary-foreground font-semibold text-lg py-6 hover:scale-105 transition-transform shadow-xl"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Quero minha avaliação gratuita
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;

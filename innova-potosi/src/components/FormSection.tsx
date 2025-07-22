import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Clock, Shield } from "lucide-react";
const FormSection = () => {
  const handleFormClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe_hgQEiy-Ws6UfDtH579HXdz5ChWqEq_55uyTO-IYiTkN8NQ/viewform', '_blank');
  };
  return <section id="formulario" className="py-20 bg-gradient-section">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Comienza Tu Búsqueda Hoy -{" "}
            <span className="text-primary">
Es Gratis</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Completa este formulario y recibe propiedades seleccionadas especialmente para ti
          </p>
          <p className="text-muted-foreground">
            Nuestro equipo analizará tu perfil y te contactará con las mejores opciones disponibles en Potosí
          </p>
        </div>

        {/* Main Form Card */}
        <Card className="p-8 md:p-12 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elegant">
          <div className="text-center">
            <MessageSquare className="w-16 h-16 text-primary mx-auto mb-6" />
            
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Recibe Tu Asesoría Personalizada
            </h3>
            
            <p className="text-muted-foreground mb-8 text-lg">
              Completa un breve formulario y nuestros expertos te contactarán con opciones 
              perfectas para tus necesidades y presupuesto.
            </p>

            <Button onClick={handleFormClick} className="bg-primary text-primary-foreground hover:bg-primary-glow hover:shadow-elegant transition-all duration-300 font-semibold text-lg px-12 py-4 h-auto animate-pulse">
              Quiero Mi Asesoría Gratuita
            </Button>

            {/* Trust Badge */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Sin compromiso
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Respuesta en 24 horas
              </span>
              <span className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                Información confidencial
              </span>
            </div>
          </div>
        </Card>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card className="p-6 bg-card border-border">
            <h4 className="font-semibold text-card-foreground mb-2">
              📞 ¿Prefieres hablar directamente?
            </h4>
            <p className="text-muted-foreground text-sm">
              Llámanos y te atenderemos de inmediato para resolver todas tus dudas
            </p>
          </Card>
          
          <Card className="p-6 bg-card border-border">
            <h4 className="font-semibold text-card-foreground mb-2">
              💬 Chat en WhatsApp
            </h4>
            <p className="text-muted-foreground text-sm">
              Envíanos un WhatsApp y te responderemos al instante
            </p>
          </Card>
        </div>
      </div>
    </section>;
};
export default FormSection;
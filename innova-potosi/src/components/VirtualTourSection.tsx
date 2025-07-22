import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Video, Calendar, Eye } from "lucide-react";
import virtualTourImage from "@/assets/virtual-tour.jpg";

const VirtualTourSection = () => {
  const handleTourRequest = () => {
    // Aquí iría la lógica para solicitar el tour virtual
    window.open('https://wa.me/59112345678?text=Hola,%20me%20interesa%20solicitar%20un%20tour%20virtual', '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            También Te Puede{" "}
            <span className="text-primary">Interesar</span>
          </h2>
        </div>

        <Card className="overflow-hidden bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elegant">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-64 lg:h-auto">
              <img 
                src={virtualTourImage} 
                alt="Tour virtual de propiedades"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/30 lg:from-transparent lg:to-card/60"></div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Video className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-card-foreground">
                  Tour Virtual Gratuito
                </h3>
              </div>

              <h4 className="text-xl font-semibold text-card-foreground mb-4">
                Explora Nuestras Propiedades Desde Casa
              </h4>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Agenda tu tour virtual hoy y conoce cada detalle de las propiedades 
                sin salir de tu hogar. Una experiencia inmersiva que te permitirá 
                tomar decisiones informadas.
              </p>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">Vista 360°</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">Horario flexible</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="w-5 h-5 text-primary" />
                  <span className="text-card-foreground">HD calidad</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-primary rounded-full"></span>
                  <span className="text-card-foreground">Completamente gratis</span>
                </div>
              </div>

              <Button 
                onClick={handleTourRequest}
                className="bg-primary text-primary-foreground hover:bg-primary-glow hover:shadow-elegant transition-all duration-300 font-semibold w-fit"
                size="lg"
              >
                Solicitar Tour Virtual
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VirtualTourSection;
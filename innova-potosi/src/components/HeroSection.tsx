import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-real-estate.jpg";
import logoImage from "@/assets/innova-logo.png";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Beautiful properties in Potosí" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90 bg-[#060606]/0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-8 mx-0 px-0 my-0 py-0">
          <img src="/lovable-uploads/a3101d18-2ea9-4b5a-8609-13bae54be19b.png" alt="INNOVA Inmobiliaria" className="h-30 md:h-32 mx-auto mb-4" />
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
          Tu Hogar Ideal Te Está{" "}
          <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
            Esperando
          </span>{" "}
          en Potosí
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">Encuentra la propiedad perfecta con asesoramiento personalizado y sin complicaciones</p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Sin compromiso
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Respuesta en 24 horas
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Información confidencial
          </span>
        </div>
      </div>
    </section>;
};
export default HeroSection;
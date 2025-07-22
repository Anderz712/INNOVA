import { Check, Home, Building2, MapPin, FileText, Users, Clock } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Venta y alquiler de propiedades residenciales y comerciales",
    },
    {
      icon: MapPin,
      title: "Amplia selección de terrenos en las mejores ubicaciones",
    },
    {
      icon: FileText,
      title: "Gestión completa de trámites legales y burocráticos",
    },
    {
      icon: Users,
      title: "Asesoramiento personalizado para cada cliente",
    },
    {
      icon: Clock,
      title: "Seguimiento continuo durante todo el proceso",
    },
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            ¿Por Qué Elegir{" "}
            <span className="text-primary">INNOVA Inmobiliaria</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos tu socio de confianza en el mercado inmobiliario de Potosí
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elegant group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <h3 className="text-card-foreground font-semibold leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Description */}
        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-xl border border-border max-w-4xl mx-auto">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Especialistas en el Mercado Potosino
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Con años de experiencia en Potosí, conocemos cada rincón de la ciudad y te ayudamos 
              a encontrar la propiedad perfecta que se ajuste a tus necesidades y presupuesto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
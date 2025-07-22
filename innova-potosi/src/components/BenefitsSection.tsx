import { UserCheck, Target, ShieldCheck, Headphones } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: UserCheck,
      title: "Asesoría Gratuita",
      description: "Consulta inicial sin costo para evaluar tus necesidades",
    },
    {
      icon: Target,
      title: "Ofertas Personalizadas",
      description: "Recibe propiedades que se ajusten exactamente a tu presupuesto y preferencias",
    },
    {
      icon: ShieldCheck,
      title: "Sin Complicaciones",
      description: "Nos encargamos de todos los trámites legales y burocráticos",
    },
    {
      icon: Headphones,
      title: "Seguimiento Continuo",
      description: "Te acompañamos desde la búsqueda hasta la entrega de llaves",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Optimizamos Tu Tiempo y{" "}
            <span className="text-primary">Maximizamos Tus Resultados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestro compromiso es hacer que tu experiencia inmobiliaria sea exitosa y sin estrés
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elegant h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-card-foreground mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-section p-8 rounded-xl border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Listo para encontrar tu propiedad ideal?
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Completa nuestro formulario y recibe asesoría personalizada completamente gratis
            </p>
            <button 
              onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-glow hover:shadow-elegant transition-all duration-300"
            >
              Comenzar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
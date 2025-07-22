import { MessageCircle, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/innova-logo.png";
const FooterSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/59112345678?text=Hola,%20me%20interesa%20recibir%20información%20sobre%20propiedades', '_blank');
  };
  const handleEmail = () => {
    window.open('mailto:contacto@innovainmobiliaria.com', '_blank');
  };
  const handlePhone = () => {
    window.open('tel:+59126225678', '_blank');
  };
  return <footer className="bg-gradient-hero py-16 border-t border-border bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo y Descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6 mx-0 px-0 my-0">
              <img src="/lovable-uploads/a3101d18-2ea9-4b5a-8609-13bae54be19b.png" alt="INNOVA Inmobiliaria" className="h-24" />
              <div>
                
                
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Tu socio de confianza en el mercado inmobiliario de Potosí. 
              Especializados en venta, alquiler y gestión completa de propiedades 
              con el mejor servicio personalizado.
            </p>
            <div className="flex gap-4">
              <Button onClick={handleWhatsApp} variant="cta" size="lg" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Contacta con Nosotros
            </h4>
            <div className="space-y-4">
              <button onClick={handleWhatsApp} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group w-full text-left">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>WhatsApp Business</span>
              </button>
              
              <button onClick={handleEmail} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group w-full text-left">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Correo electrónico</span>
              </button>
              
              <button onClick={handlePhone} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group w-full text-left">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Teléfono fijo</span>
              </button>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Potosí, Bolivia</span>
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Síguenos
            </h4>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Facebook</span>
              </a>
              
              <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>
              
              <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-5 h-5 bg-current rounded group-hover:scale-110 transition-transform"></div>
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 INNOVA Inmobiliaria. Todos los derechos reservados.
            </p>
            <p className="text-muted-foreground text-sm">
              Potosí, Bolivia - Tu hogar ideal te está esperando
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default FooterSection;
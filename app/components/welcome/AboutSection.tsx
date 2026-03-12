import AnimatedSection from "./AnimatedSection";
import ParallaxImage from "./ParallaxImage";

const ABOUT_IMAGE = "public/imgs/landing/about_1.webp";
const PARALLAX_IMAGE = "public/imgs/landing/about_bg_interior.webp";

export default function AboutSection() {
  return (
    <>
      {/* Parallax divider */}
      <ParallaxImage
        src={PARALLAX_IMAGE}
        alt="Herramientas de barbería clásica"
        speed={0.5}
        className="h-[40vh] md:h-[50vh]"
      >
        <div className="h-[40vh] md:h-[50vh] flex items-center justify-center text-center px-6">
          <AnimatedSection variant="fadeUp">
            <p className="text-[#D4A853] text-sm tracking-[0.3em] uppercase mb-4">
              Desde Durango
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#F5F5F0] max-w-3xl leading-tight">
              El arte del cuidado masculino
            </h2>
          </AnimatedSection>
        </div>
      </ParallaxImage>

      {/* About content */}
      <section id="nosotros" className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection variant="fadeLeft" className="hidden md:block">
              <div className="relative">
                <img
                  src={ABOUT_IMAGE}
                  alt="Experiencia en Bigote Rojo Barbería"
                  className="lg:w-full rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C8102E] rounded-xl flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <span className="text-white text-2xl font-bold block">
                      +
                    </span>
                    <span className="text-white/80 text-[10px] tracking-wider uppercase">
                      Calidad
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeRight" delay={0.2}>
              <p className="text-[#D4A853] text-sm tracking-[0.3em] uppercase mb-4">
                Sobre nosotros
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F0] mb-6 leading-tight">
                Tradición y estilo en cada corte
              </h2>
              <p className="text-[#F5F5F0]/60 leading-relaxed mb-6">
                Bigote Rojo Barbería es un espacio desarrollado para el cuidado
                personalizado de la imagen de cada cliente, donde fusionamos el
                concepto clásico de la barbería tradicional con las tendencias
                actuales.
              </p>
              <p className="text-[#F5F5F0]/60 leading-relaxed mb-8">
                Nuestro equipo de profesionales se dedica a brindarte la mejor
                experiencia, con atención al detalle y productos de primera
                calidad. Cada visita es una experiencia única diseñada para ti.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "3", label: "Profesionales" },
                  { value: "4", label: "Servicios" },
                  { value: "∞", label: "Estilos" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-[#D4A853] text-3xl md:text-4xl font-bold">
                      {stat.value}
                    </p>
                    <p className="text-[#F5F5F0]/40 text-xs tracking-wider uppercase mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

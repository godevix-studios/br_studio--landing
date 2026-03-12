import { LuPhone, LuMail, LuMapPin, LuClock, LuInstagram } from "react-icons/lu";
import AnimatedSection from "./AnimatedSection";
import ParallaxImage from "./ParallaxImage";

const SCHEDULE = [
  { day: "Lunes - Viernes", hours: "9:00 AM - 8:30 PM" },
  { day: "Sábado", hours: "9:00 AM - 4:30 PM" },
  { day: "Domingo", hours: "Cerrado" },
];

const CONTACT_INFO = [
  { icon: LuPhone, label: "+52 618 276 3695", href: "tel:+526182763695" },
  {
    icon: LuMail,
    label: "bigoterojobarberia@gmail.com",
    href: "mailto:bigoterojobarberia@gmail.com",
  },
  {
    icon: LuMapPin,
    label: "Av. Francisco Sarabia #711, Zona Centro, 34000 Durango",
    href: "https://www.google.com/maps/search/?api=1&query=Av.+Francisco+Sarabia+%23711%2C+Zona+Centro.%2C+Durango%2C+durango%2C+34000",
  },
];

const PARALLAX_IMAGE = 'public/imgs/landing/contact_bg_interior.webp';

export default function ContactSection() {
  return (
    <>
      <ParallaxImage
        src={PARALLAX_IMAGE}
        alt="Herramientas de barbería clásica"
        speed={0.5}
        className="h-[40vh] md:h-[50vh]"
      >
        <div className="h-[40vh] md:h-[50vh] flex items-center justify-center text-center px-6">
          <AnimatedSection variant="fadeUp">
            <p className="text-[#D4A853] text-sm tracking-[0.3em] uppercase mb-4">
              ¿Listo para un cambio?
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#F5F5F0] max-w-3xl leading-tight">
              ¡Reserva ahora tu cita!
            </h2>
          </AnimatedSection>
        </div>
      </ParallaxImage>

      <section id="contacto" className="py-24 md:py-32 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <p className="text-[#D4A853] text-sm tracking-[0.3em] uppercase mb-3">
              Encuéntranos
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#F5F5F0]">
              Horario y Contacto
            </h2>
            <div className="w-16 h-0.5 bg-[#C8102E] mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Schedule */}
            <AnimatedSection variant="fadeUp" delay={0}>
              <div className="bg-[#141414] border border-white/5 rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#C8102E]/10 flex items-center justify-center">
                    <LuClock className="w-5 h-5 text-[#C8102E]" />
                  </div>
                  <h3 className="text-[#F5F5F0] font-semibold text-lg">
                    Horario
                  </h3>
                </div>
                <div className="space-y-4">
                  {SCHEDULE.map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between items-center"
                    >
                      <span className="text-[#F5F5F0]/60 text-sm">
                        {item.day}
                      </span>
                      <span
                        className={`text-sm font-medium ${item.hours === "Cerrado" ? "text-[#C8102E]" : "text-[#F5F5F0]"}`}
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Contact info */}
            <AnimatedSection variant="fadeUp" delay={0.12}>
              <div className="bg-[#141414] border border-white/5 rounded-xl p-8 h-full">
                <h3 className="text-[#F5F5F0] font-semibold text-lg mb-6">
                  Contacto
                </h3>
                <div className="space-y-5">
                  {CONTACT_INFO.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#D4A853]/10 transition-colors">
                          <Icon className="w-4 h-4 text-[#D4A853]" />
                        </div>
                        <span className="text-[#F5F5F0]/60 text-sm leading-relaxed group-hover:text-[#F5F5F0] transition-colors">
                          {item.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>

            {/* Social & CTA */}
            <AnimatedSection variant="fadeUp" delay={0.24}>
              <div className="bg-[#141414] border border-white/5 rounded-xl p-8 h-full flex flex-col">
                <h3 className="text-[#F5F5F0] font-semibold text-lg mb-6">
                  Síguenos
                </h3>
                <div className="flex gap-4 mb-8">
                  <a
                    href="https://www.instagram.com/bigote_rojo_barberia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-white/5 hover:bg-[#C8102E]/20 flex items-center justify-center transition-all duration-300 group"
                  >
                    <LuInstagram className="w-5 h-5 text-[#F5F5F0]/60 group-hover:text-[#C8102E] transition-colors" />
                  </a>
                  <a
                    href="https://facebook.com/bigoterojobarberia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-white/5 hover:bg-[#C8102E]/20 flex items-center justify-center transition-all duration-300 group"
                  >
                    <span className="text-[#F5F5F0]/60 group-hover:text-[#C8102E] font-bold text-lg transition-colors">
                      f
                    </span>
                  </a>
                </div>

                <div className="mt-auto">
                  <p className="text-[#F5F5F0]/40 text-sm mb-4">
                    ¿Listo para un nuevo look?
                  </p>
                  <a
                    href="https://bigoterojobarberia.setmore.com/book"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#C8102E] hover:bg-[#A00D24] text-white font-medium py-4 rounded text-center text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#C8102E]/25"
                  >
                    Reservar Ahora
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Map */}
          <AnimatedSection variant="fadeUp" delay={0.1} className="mt-8">
            <div className="rounded-xl overflow-hidden border border-white/5 h-75 md:h-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.7675791114486!2d-104.67269282788038!3d24.02114476355356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bc9df7e1f1319%3A0x23aa010b4170afe3!2sBigote%20Rojo%20Barber%C3%ADa%20Durango!5e0!3m2!1ses-419!2smx!4v1773340057015!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter:
                    "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)",
                }}
                allowFullScreen={true}
                loading="lazy"
                title="Ubicación de Bigote Rojo Barbería"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

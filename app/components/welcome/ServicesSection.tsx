import { LuBaby, LuFlame, LuScissors, LuSparkles } from "react-icons/lu";
import AnimatedSection from "./AnimatedSection";

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  link: string;
}

const SERVICES: Service[] = [
  {
    icon: LuScissors,
    title: "Corte Caballero",
    description: "Diseños y acabados especiales para el hombre actual.",
    link: "https://bigoterojobarberia.setmore.com/book?step=staff&products=02abcc59338d45cabf3c9739b63b3512da5d1db3&type=service",
  },
  {
    icon: LuBaby,
    title: "Corte Niño",
    description: "Porque los niños también se pueden ver muy bien.",
    link: "https://bigoterojobarberia.setmore.com/book?step=staff&products=79f722debccac327fe0168bcd7d6fc9094f2e396&type=service",
  },
  {
    icon: LuSparkles,
    title: "Barba / Afeitado",
    description:
      "Diseño, rebajado, corte y delineado de barba y bigote. Ideal para piel sensible.",
    link: "https://bigoterojobarberia.setmore.com/book?step=staff&products=9bf5cc764e881c2a5116b5b4419c942b192f82ab&type=service",
  },
  {
    icon: LuFlame,
    title: "Tradicional con Toalla Caliente",
    description:
      "Afeitado minucioso con toallas calientes. Perfecto para ocasiones especiales.",
    link: "https://bigoterojobarberia.setmore.com/book?step=staff&products=2f99c93d2248acbb4cb3906d21ade7f50e34206b&type=service",
  },
];

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <AnimatedSection variant="fadeUp" delay={index * 0.12}>
      <a
        href={service.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full bg-[#141414] hover:bg-[#1A1A1A] border border-white/5 hover:border-[#D4A853]/20 rounded-xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#D4A853]/5"
      >
        <div className="w-14 h-14 rounded-lg bg-[#C8102E]/10 flex items-center justify-center mb-6 group-hover:bg-[#C8102E]/20 transition-colors duration-500">
          <Icon className="w-6 h-6 text-[#C8102E] group-hover:text-[#D4A853] transition-colors duration-500" />
        </div>
        <h3 className="text-[#F5F5F0] text-lg font-semibold mb-3">
          {service.title}
        </h3>
        <p className="text-[#F5F5F0]/50 text-sm leading-relaxed">
          {service.description}
        </p>
        <div className="mt-6 text-[#D4A853] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-wider uppercase">
          Reservar →
        </div>
      </a>
    </AnimatedSection>
  );
}

export default function ServicesSection() {
  return (
    <section id="servicios" className="relative py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <p className="text-[#D4A853] text-sm tracking-[0.3em] uppercase mb-3">
            Lo que hacemos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F5F5F0]">
            Nuestros Servicios
          </h2>
          <div className="w-16 h-0.5 bg-[#C8102E] mx-auto mt-6" />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

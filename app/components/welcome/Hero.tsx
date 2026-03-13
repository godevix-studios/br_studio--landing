import { motion } from "framer-motion";

import { LuChevronDown } from "react-icons/lu";
import ParallaxImage from "./ParallaxImage";
import Logo from "../ui/Logo";

const HERO_IMAGE = "imgs/landing/hero_bg_interior.webp";

export default function HeroSection() {
  const scrollToServices = () => {
    const el = document.querySelector("#servicios");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen min-h-150">
      <ParallaxImage
        src={HERO_IMAGE}
        alt="Interior de Bigote Rojo Barbería"
        speed={0.4}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-[#0A0A0A]/60" />
      </ParallaxImage>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-6 max-sm:mb-3"
        >
          <Logo className="max-sm:w-11/12" paintOnHover hoverFill="#D4A853" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#D4A853] text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-medium">
            Barbería Premium en Durango
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#F5F5F0]/60 text-base md:text-lg max-w-xl mt-6 leading-relaxed font-light"
        >
          Donde lo clásico se encuentra con lo actual. Cuidado personalizado
          para tu imagen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://bigoterojobarberia.setmore.com/book"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C8102E] hover:bg-[#A00D24] text-white font-medium px-8 py-4 rounded text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-xl hover:shadow-[#C8102E]/30 hover:-translate-y-0.5"
          >
            Reservar Cita
          </a>
          <button
            onClick={scrollToServices}
            className="border border-[#F5F5F0]/20 hover:border-[#D4A853]/50 text-[#F5F5F0] px-8 py-4 rounded text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#F5F5F0]/5"
          >
            Explorar
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#F5F5F0]/40 hover:text-[#D4A853] transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <LuChevronDown size={28} />
        </motion.div>
      </motion.button>
    </section>
  );
}

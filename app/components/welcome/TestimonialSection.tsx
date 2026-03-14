import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuQuote, LuChevronLeft, LuChevronRight, LuStar } from "react-icons/lu";
import AnimatedSection from "./AnimatedSection";
import ImageWithSkeleton from "../ui/ImageWithSkeleton";

const TESTIMONIALS = [
  {
    name: "Carlos Méndez",
    text: "Excelente servicio, muy profesionales y atentos. El corte quedó perfecto y el ambiente es de primera. Totalmente recomendado.",
    rating: 5,
  },
  {
    name: "Roberto Sánchez",
    text: "La mejor barbería de Durango sin duda. El afeitado tradicional con toalla caliente es una experiencia única. Odiseo es un maestro.",
    rating: 5,
  },
  {
    name: "Miguel Torres",
    text: "Llevo más de un año viniendo y siempre salgo satisfecho. Buen precio, excelente calidad y un trato muy amable. Mi lugar favorito.",
    rating: 5,
  },
  {
    name: "Javier Ruiz",
    text: "Traigo a mi hijo desde que tiene 4 años. Muy pacientes con los niños y el resultado siempre es impecable. Gracias por su dedicación.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  /* useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []); */

  const handlePrev = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  interface Testimonial {
    name: string;
    text: string;
    rating: number;
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C8102E] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4A853] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <p className="text-[#D4A853] text-sm tracking-[0.3em] uppercase mb-3">
            Opiniones
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F5F5F0]">
            Lo que dicen nuestros clientes
          </h2>
          <div className="w-16 h-0.5 bg-[#C8102E] mx-auto mt-6" />
        </AnimatedSection>

        <div className="relative">
          <div className="absolute top-0 left-0 text-[#C8102E]/20 -translate-x-4 -translate-y-6 hidden md:block">
            <LuQuote size={80} />
          </div>

          <div className="min-h-70 flex items-center justify-center px-4 md:px-16">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                    <LuStar
                      key={i}
                      className="w-5 h-5 fill-[#D4A853] text-[#D4A853]"
                    />
                  ))}
                </div>

                <p className="text-[#F5F5F0] text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto font-light">
                  "{TESTIMONIALS[current].text}"
                </p>

                <div className="flex items-center justify-center gap-3">
                  <div>
                    <ImageWithSkeleton
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                        TESTIMONIALS[current].name,
                      )}&background=C8102E&color=FFFFFF&size=128`}
                      alt={TESTIMONIALS[current].name}
                      className="w-10 h-10 rounded-full"
                      skeletonClassName="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-[#F5F5F0] font-medium">
                      {TESTIMONIALS[current].name}
                    </p>
                    <p className="text-[#F5F5F0]/40 text-sm">Cliente</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-[#D4A853]/50 flex items-center justify-center transition-all hover:bg-white/5 text-[#F5F5F0]/60 hover:text-[#D4A853]"
              aria-label="Anterior testimonio"
            >
              <LuChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-[#C8102E]"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-[#D4A853]/50 flex items-center justify-center transition-all hover:bg-white/5 text-[#F5F5F0]/60 hover:text-[#D4A853]"
              aria-label="Siguiente testimonio"
            >
              <LuChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuX, LuZoomIn } from "react-icons/lu";
import AnimatedSection from "./AnimatedSection";
import ImageWithSkeleton from "~/components/ui/ImageWithSkeleton";

type GalleryImage = {
  url: string;
  alt: string;
};

type LightboxProps = {
  image: GalleryImage;
  onClose: () => void;
};

const GALLERY_IMAGES: GalleryImage[] = [
  {
    url: "imgs/landing/gallery_1.webp",
    alt: "Corte moderno con fade",
  },
  {
    url: "imgs/landing/gallery_2.webp",
    alt: "Afeitado clásico con navaja",
  },
  {
    url: "imgs/landing/gallery_3.webp",
    alt: "Detalles de corte profesional",
  },
  {
    url: "imgs/landing/gallery_4.webp",
    alt: "Corte para niños",
  },
  {
    url: "imgs/landing/gallery_5.webp",
    alt: "Herramientas profesionales",
  },
  {
    url: "imgs/landing/gallery_6.webp",
    alt: "Cliente satisfecho",
  },
];

function Lightbox({ image, onClose }: LightboxProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
        aria-label="Cerrar"
      >
        <LuX size={32} />
      </button>

      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        src={image.url}
        alt={image.alt}
        className="max-w-full max-h-[90vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <section id="galeria" className="py-24 md:py-32 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection variant="fadeUp" className="text-center mb-16">
            <p className="text-[#D4A853] text-sm tracking-[0.3em] uppercase mb-3">
              Nuestro trabajo
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#F5F5F0]">
              Galería
            </h2>
            <div className="w-16 h-0.5 bg-[#C8102E] mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((image, i) => (
              <AnimatedSection key={i} variant="scale" delay={i * 0.08}>
                <button
                  onClick={() => setSelectedImage(image)}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-[#141414] border border-white/5 hover:border-[#D4A853]/20 transition-all duration-500"
                >
                  <ImageWithSkeleton
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-[opacity_0.4s_ease,transform_0.7s_linear]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <LuZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection
            variant="fadeUp"
            delay={0.5}
            className="text-center mt-12"
          >
            <p className="text-[#F5F5F0]/40 text-sm mb-6">
              ¿Te gusta lo que ves?
            </p>
            <a
              href="https://bigoterojobarberia.setmore.com/book"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C8102E] hover:bg-[#A00D24] text-white font-medium px-8 py-4 rounded text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-xl hover:shadow-[#C8102E]/30 hover:-translate-y-0.5"
            >
              Agenda tu cita
            </a>
          </AnimatedSection>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuMenu, LuX } from "react-icons/lu";
import Logo from "../ui/Logo";

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el: Element | null = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => handleClick("#hero")}
            className="flex items-center gap-3"
          >
            <Logo variant="short" className="w-16 h-auto"/>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-[#F5F5F0]/70 hover:text-[#D4A853] text-sm tracking-wider uppercase transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://bigoterojobarberia.setmore.com/book"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C8102E] hover:bg-[#A00D24] text-white text-sm font-medium px-5 py-2.5 rounded transition-all duration-300 hover:shadow-lg hover:shadow-[#C8102E]/25"
            >
              Reservar
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#F5F5F0] p-2"
          >
            {mobileOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-lg pt-24 px-8"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleClick(link.href)}
                  className="text-[#F5F5F0] text-2xl font-light tracking-wider uppercase text-left"
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href="https://bigoterojobarberia.setmore.com/book"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C8102E] text-white text-lg font-medium px-6 py-4 rounded text-center mt-4"
                onClick={() => setMobileOpen(false)}
              >
                Reservar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

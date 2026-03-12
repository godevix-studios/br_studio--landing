import { LuInstagram } from "react-icons/lu";
import Logo from "../ui/Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <button
            onClick={scrollToTop}
            className="flex flex-1 items-center gap-3 group"
          >
            <Logo className="w-32 h-auto" />
          </button>

          <div className="flex-1 flex items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/bigote_rojo_barberia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5F5F0]/40 hover:text-[#D4A853] transition-colors"
            >
              <LuInstagram size={24} />
            </a>
            <a
              href="https://facebook.com/bigoterojobarberia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5F5F0]/40 hover:text-[#D4A853] transition-colors font-bold text-2xl"
            >
              f
            </a>
          </div>

          <p className="flex-1 text-[#F5F5F0]/30 text-xs tracking-wider text-end">
            © {new Date().getFullYear()} Bigote Rojo Barbería. Durango, México.
          </p>
        </div>
      </div>
    </footer>
  );
}

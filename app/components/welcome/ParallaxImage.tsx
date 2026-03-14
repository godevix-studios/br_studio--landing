import { useEffect, useRef, useState } from "react";
import cls from "~/lib/cls";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  overlay?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function ParallaxImage({
  src,
  alt,
  speed = 0.3,
  overlay = true,
  children,
  className = "",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.bottom > 0 && rect.top < windowHeight) {
        const progress =
          (windowHeight - rect.top) / (windowHeight + rect.height);
        setOffset((progress - 0.5) * speed * rect.height);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={cls("relative overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
        style={{ transform: `translateY(${offset}px) scale(1.2)` }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-linear-to-b from-[#0A0A0A]/75 via-[#0A0A0A]/55 to-[#0A0A0A]/85" />
      )}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

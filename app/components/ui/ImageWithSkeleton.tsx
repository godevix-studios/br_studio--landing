import { useState } from "react";
import cls from "~/lib/cls";

interface ImageWithSkeletonProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
}

export default function ImageWithSkeleton({
  src,
  alt,
  className = "",
  skeletonClassName = "",
  ...props
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className="relative block w-full h-full">
      {!loaded && (
        <span
          className={cls(
            "absolute inset-0 bg-[#1a1a1a] animate-pulse rounded-[inherit]",
            skeletonClassName
          )}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={cls(
          'transition-opacity duration-400 ease-in-out',
          className,
          !loaded ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </span>
  );
}

import { useEffect, useRef, useState, useCallback } from "react";

interface Props {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex, onClose }: Props) {
  const [index, setIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchStartDist = useRef(0);
  const touchStartScale = useRef(1);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    setScale(1);
  }, [index]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    setScale((s) => Math.min(4, Math.max(0.5, s - e.deltaY * 0.001)));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    }
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      touchStartDist.current = Math.sqrt(dx * dx + dy * dy);
      touchStartScale.current = scale;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches.length === 1 && scale === 1) {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const dy = e.changedTouches[0].clientY - touchStartY.current;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        dx < 0 ? next() : prev();
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const newScale = Math.min(4, Math.max(0.5, touchStartScale.current * (dist / touchStartDist.current)));
      setScale(newScale);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 z-10 text-white text-3xl w-10 h-10 flex items-center justify-center rounded-full"
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        onClick={onClose}
      >
        ×
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          onClick={(e) => { e.stopPropagation(); prev(); }}
        >
          ‹
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        style={{ touchAction: "none" }}
      >
        <img
          src={images[index]}
          alt={`Photo ${index + 1}`}
          className="max-w-[90vw] max-h-[90vh] object-contain select-none"
          style={{
            transform: `scale(${scale})`,
            transition: scale === 1 ? "transform 0.2s ease" : "none",
          }}
          draggable={false}
        />
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          onClick={(e) => { e.stopPropagation(); next(); }}
        >
          ›
        </button>
      )}

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm opacity-60">
        {index + 1} / {images.length}
      </div>

      {/* Zoom hint */}
      <div className="absolute bottom-6 right-4 text-white text-xs opacity-40 hidden md:block">
        Scroll to zoom
      </div>
    </div>
  );
}

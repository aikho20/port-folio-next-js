import { useState, useEffect } from "react";


export default function ImageGallery({images}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const open = (index) => setSelectedIndex(index);
  const close = () => setSelectedIndex(null);

  const next = () =>
    setSelectedIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            onClick={() => open(index)}
            className="cursor-pointer rounded-lg object-cover w-full h-60 hover:scale-105 transition"
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          
          <button
            onClick={close}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✕
          </button>

          <button
            onClick={prev}
            className="absolute left-5 text-white text-4xl px-3"
          >
            ‹
          </button>

          <img
            src={images[selectedIndex]}
            alt="image"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />

          <button
            onClick={next}
            className="absolute right-5 text-white text-4xl px-3"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
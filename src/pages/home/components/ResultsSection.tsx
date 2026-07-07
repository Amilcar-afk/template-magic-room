import { useState, useRef } from 'react';
import { beforeAfterResults } from '@/mocks/beforeAfter';

export default function ResultsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const activeResult = beforeAfterResults[activeIndex];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);

    const handleMove = (ev: MouseEvent) => {
      if (!sliderRef.current) return;
      const r = sliderRef.current.getBoundingClientRect();
      const px = ev.clientX - r.left;
      const p = Math.max(0, Math.min(100, (px / r.width) * 100));
      setSliderPosition(p);
    };
    const handleUp = () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
  };

  return (
    <section id="results" className="relative w-full py-20 md:py-28 bg-warm-white">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Avant / Après
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-near-black leading-tight mb-6">
              Des Résultats{' '}
              <span className="italic text-gold">Vrais</span>
            </h2>
            <p className="text-charcoal/70 text-base leading-relaxed max-w-lg mb-8">
              Chaque traitement chez Magic Room est réalisé avec des produits certifiés et une expertise médicale. Nos patients voient des résultats visibles dès la première séance.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {beforeAfterResults.map((result, idx) => (
                <button
                  key={result.id}
                  onClick={() => { setActiveIndex(idx); setSliderPosition(50); }}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? 'bg-near-black text-white'
                      : 'border border-charcoal/20 text-charcoal hover:border-gold hover:text-gold'
                  }`}
                >
                  {result.treatment}
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-10 md:gap-16">
              <div>
                <span className="font-serif text-4xl md:text-5xl text-near-black">3,500+</span>
                <p className="text-charcoal/50 text-sm mt-1">Patients Satisfaits</p>
              </div>
              <div>
                <span className="font-serif text-4xl md:text-5xl text-near-black">98%</span>
                <p className="text-charcoal/50 text-sm mt-1">Taux de Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right - Before/After Slider */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: '4/5' }}>
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-white/90 backdrop-blur-sm text-near-black text-xs font-medium px-3 py-1.5 rounded-full">
                  Résultats Cabinet
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between">
                <span className="text-white text-sm font-medium bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  {activeResult.treatment}
                </span>
                <span className="text-white text-sm font-medium bg-gold/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  {activeResult.timeframe}
                </span>
              </div>

              {/* Before/After Slider */}
              <div
                ref={sliderRef}
                className="relative w-full h-full cursor-col-resize"
                onMouseDown={handleMouseDown}
              >
                {/* After image (full width) */}
                <img
                  src={activeResult.afterImage}
                  alt="Après traitement"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Before image (clipped) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeResult.beforeImage}
                    alt="Avant traitement"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: `${100 / (sliderPosition / 100 || 1)}%` }}
                  />
                  <div className="absolute top-0 right-0 bottom-0 w-1 bg-white shadow-lg">
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <i className="ri-arrow-left-right-line text-near-black text-sm"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
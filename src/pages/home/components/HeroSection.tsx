import { useState, useEffect, useCallback, useRef } from 'react';

const slides = [
  {
    image: 'https://readdy.ai/api/search-image?query=Luxurious%20Parisian%20aesthetic%20clinic%20interior%2C%20elegant%20white%20marble%20walls%2C%20soft%20warm%20golden%20ambient%20lighting%2C%20modern%20minimalist%20treatment%20room%20with%20pristine%20furnishings%2C%20soft%20ambient%20glow%2C%20high-end%20French%20wellness%20space%2C%20editorial%20interior%20photography%2C%20sophisticated%20medical%20spa%20atmosphere&width=1600&height=900&seq=hero-slide-1&orientation=landscape',
    label: 'Clinique d\'Esthétique — Paris 16ème',
    title: 'Sublimez Votre Beauté',
    titleAccent: 'Sans Chirurgie',
    description: 'Injections d\'acide hyaluronique, toxine botulique, HIFU — des traitements non invasifs performants pour un résultat naturel et rajeuni, signé Magic Room à deux pas du Trocadéro.',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=Close-up%20professional%20aesthetic%20treatment%20in%20progress%2C%20gentle%20hands%20performing%20facial%20injection%20with%20precision%2C%20soft%20warm%20lighting%2C%20clinical%20elegance%2C%20high-end%20Parisian%20beauty%20clinic%2C%20luxury%20skincare%20session%2C%20warm%20gold%20and%20cream%20tones%2C%20editorial%20beauty%20photography&width=1600&height=900&seq=hero-slide-2&orientation=landscape',
    label: 'Nos Traitements',
    title: 'Des Résultats',
    titleAccent: 'Naturels & Durables',
    description: 'Des milliers de patients satisfaits. Découvrez nos avant/après et laissez-vous convaincre par des techniques d\'avant-garde en médecine esthétique.',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=Elegant%20Parisian%20woman%20portrait%20after%20aesthetic%20treatment%2C%20natural%20radiant%20glowing%20skin%2C%20soft%20warm%20studio%20lighting%2C%20confident%20serene%20expression%2C%20minimalist%20background%20with%20warm%20golden%20undertones%2C%20luxury%20beauty%20photography%2C%20refined%20and%20sophisticated%20mood&width=1600&height=900&seq=hero-slide-3&orientation=landscape',
    label: 'L\'Excellence Parisienne',
    title: 'Votre Beauté,',
    titleAccent: 'Notre Expertise',
    description: 'Magic Room allie savoir-faire médical rigoureux et approche personnalisée pour des résultats harmonieux qui subliment sans dénaturer.',
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    if (isTransitioning || index === active) return;
    setIsTransitioning(true);
    setActive(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning, active]);

  const next = useCallback(() => {
    goTo((active + 1) % slides.length);
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + slides.length) % slides.length);
  }, [active, goTo]);

  useEffect(() => {
    intervalRef.current = setInterval(next, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-[580px] md:h-[720px] lg:h-[800px] w-full overflow-hidden bg-near-black">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative min-w-full h-full flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />
          </div>
        ))}
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20">
        <div className="max-w-3xl">
          <p className="text-gold text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-5 animate-fade-in">
            {slides[active].label}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-5 transition-all duration-700">
            {slides[active].title}{' '}
            <span className="italic text-gold">{slides[active].titleAccent}</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed mb-8 transition-all duration-700">
            {slides[active].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('#booking')}
              className="px-8 py-4 bg-gold text-near-black rounded-full text-sm font-semibold hover:bg-gold-light transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Prendre RDV en Ligne
            </button>
            <button
              onClick={() => scrollTo('#treatments')}
              className="px-8 py-4 border border-white/50 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Découvrir nos Soins
            </button>
          </div>
        </div>
      </div>

      {/* Arrow nav */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition cursor-pointer"
        aria-label="Slide précédent"
      >
        <i className="ri-arrow-left-s-line text-xl" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition cursor-pointer"
        aria-label="Slide suivant"
      >
        <i className="ri-arrow-right-s-line text-xl" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
              i === active ? 'w-8 bg-gold' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Aller au slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Trust badges */}
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-20 right-6 md:right-12 lg:right-20 z-20">
        <div className="flex flex-wrap items-center gap-6 md:gap-10 text-white/70 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <i className="ri-shield-check-line text-gold"></i>
            <span>Produits Certifiés CE</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-heart-pulse-line text-gold"></i>
            <span>Traitements Non Invasifs</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-map-pin-line text-gold"></i>
            <span>Paris 16ème — Trocadéro</span>
          </div>
        </div>
      </div>
    </section>
  );
}
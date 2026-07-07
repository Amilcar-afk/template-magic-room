import { treatments } from '@/mocks/treatments';
import { useState } from 'react';

type Category = 'Tous' | 'Visage' | 'Corps' | 'Homme';

export default function TreatmentsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('Tous');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const categories: Category[] = ['Tous', 'Visage', 'Corps', 'Homme'];

  const filteredTreatments = activeCategory === 'Tous'
    ? treatments
    : treatments.filter((t) => t.category === activeCategory);

  return (
    <section id="treatments" className="relative w-full py-20 md:py-28 bg-beige">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Nos Prestations
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-near-black leading-tight max-w-2xl mx-auto">
            Soins Esthétiques{' '}
            <span className="italic text-gold">Sur Mesure</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 md:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-near-black text-white'
                  : 'border border-charcoal/20 text-charcoal hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured large card + two smaller cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">
          {/* Left large card */}
          <div
            className="relative group overflow-hidden rounded-2xl cursor-pointer row-span-2"
            style={{ minHeight: '500px' }}
            onMouseEnter={() => setHoveredId(filteredTreatments[0]?.id ?? null)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={filteredTreatments[0]?.image}
              alt={filteredTreatments[0]?.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="text-gold text-xs font-medium tracking-wider uppercase">{filteredTreatments[0]?.duration}</span>
              <h3 className="font-serif text-xl md:text-2xl text-white mt-1">{filteredTreatments[0]?.name}</h3>
              <p className="text-white/70 text-sm mt-2 line-clamp-2 max-w-md">{filteredTreatments[0]?.description}</p>
              <div className={`flex items-center gap-2 mt-4 transition-all duration-300 ${hoveredId === filteredTreatments[0]?.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                <span className="text-gold text-sm font-medium">{filteredTreatments[0]?.price}</span>
                <span className="text-white/50 text-xs">|</span>
                <div className="flex gap-1">
                  {filteredTreatments[0]?.benefits.slice(0, 2).map((b) => (
                    <span key={b} className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right column - two cards */}
          <div className="flex flex-col gap-4 md:gap-5">
            {filteredTreatments.slice(1, 3).map((treatment) => (
              <div
                key={treatment.id}
                className="relative group overflow-hidden rounded-2xl cursor-pointer flex-1"
                style={{ minHeight: '240px' }}
                onMouseEnter={() => setHoveredId(treatment.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <span className="text-gold text-xs font-medium tracking-wider uppercase">{treatment.duration}</span>
                  <h3 className="font-serif text-lg md:text-xl text-white mt-1">{treatment.name}</h3>
                  <p className="text-white/70 text-sm mt-1 line-clamp-1">{treatment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row - remaining cards */}
        {filteredTreatments.length > 3 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {filteredTreatments.slice(3).map((treatment) => (
              <div
                key={treatment.id}
                className="relative group overflow-hidden rounded-2xl cursor-pointer"
                style={{ minHeight: '280px' }}
                onMouseEnter={() => setHoveredId(treatment.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <span className="text-gold text-xs font-medium tracking-wider uppercase">{treatment.duration}</span>
                  <h3 className="font-serif text-lg text-white mt-1">{treatment.name}</h3>
                  <p className="text-white/70 text-sm mt-1 line-clamp-2">{treatment.description}</p>
                  <span className="inline-block text-gold text-sm font-medium mt-3">{treatment.price}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
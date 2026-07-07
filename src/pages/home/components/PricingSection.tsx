import { pricing } from '@/mocks/pricing';
import { useState } from 'react';

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activePricing = pricing[activeTab];

  return (
    <section id="pricing" className="relative w-full py-20 md:py-28 bg-cream">
      <div className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Tarifs
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-near-black leading-tight">
            Des Soins{' '}
            <span className="italic text-gold">Accessibles</span>
          </h2>
          <p className="text-charcoal/60 text-base mt-4 max-w-lg mx-auto">
            Des tarifs transparents pour des traitements de qualité premium. Consultation gratuite avant chaque première séance.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 md:mb-14 bg-white/60 backdrop-blur-sm rounded-full p-1.5 border border-stone-warm/30 w-fit mx-auto">
          {pricing.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeTab === idx
                  ? 'bg-near-black text-white'
                  : 'text-charcoal hover:text-gold'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Pricing Table */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-warm/30 overflow-hidden">
          {activePricing.items.map((item, idx) => (
            <div
              key={item.name}
              className={`flex items-center justify-between px-6 md:px-10 py-5 ${
                idx !== activePricing.items.length - 1 ? 'border-b border-stone-warm/20' : ''
              } hover:bg-white/80 transition-colors`}
            >
              <span className="text-near-black text-sm md:text-base font-medium">{item.name}</span>
              <span className="text-gold text-sm md:text-base font-semibold whitespace-nowrap ml-4">{item.price}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button
            onClick={() => {
              const el = document.getElementById('booking');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 bg-near-black text-white rounded-full text-sm font-medium hover:bg-gold hover:text-near-black transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Réserver une Consultation Gratuite
          </button>
          <p className="text-charcoal/40 text-xs mt-3">
            Les tarifs sont indicatifs et peuvent varier selon le protocole personnalisé.
          </p>
        </div>
      </div>
    </section>
  );
}
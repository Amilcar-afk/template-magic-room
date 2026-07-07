import { useState } from 'react';
import { faqs } from '@/mocks/faq';

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative w-full py-20 md:py-28 bg-beige">
      <div className="px-6 md:px-12 lg:px-20 max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Questions Fréquentes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-near-black leading-tight">
            Tout Ce Que Vous Devez{' '}
            <span className="italic text-gold">Savoir</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white/60 backdrop-blur-sm rounded-xl border transition-all duration-300 ${
                  isOpen ? 'border-gold/30 shadow-sm' : 'border-stone-warm/30'
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
                >
                  <span className="font-serif text-base md:text-lg text-near-black pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-gold text-white rotate-180' : 'bg-gold/10 text-gold'
                    }`}
                  >
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-charcoal/60 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-12">
          <p className="text-charcoal/50 text-sm mb-3">Vous avez encore des questions ?</p>
          <button
            onClick={() => {
              const el = document.getElementById('booking');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-gold text-sm font-medium hover:underline cursor-pointer"
          >
            Contactez-nous pour une consultation gratuite
          </button>
        </div>
      </div>
    </section>
  );
}
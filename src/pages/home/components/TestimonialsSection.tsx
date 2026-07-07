import { useState } from 'react';
import { testimonials } from '@/mocks/testimonials';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="relative w-full py-20 md:py-28 bg-warm-white">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Témoignages
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-near-black leading-tight">
            Ce Qu'ils Disent{' '}
            <span className="italic text-gold">de Nous</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          {/* Rating + Treatment Badge */}
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 bg-near-black text-white px-4 py-2 rounded-full">
              <i className="ri-star-fill text-gold"></i>
              <span className="text-sm font-medium">{testimonial.rating}.0</span>
            </div>
            <span className="text-gold text-xs font-medium tracking-wider uppercase bg-gold/10 px-3 py-1.5 rounded-full">
              {testimonial.treatment}
            </span>
          </div>

          {/* Quote */}
          <blockquote className="relative mb-10">
            <span className="absolute -top-4 -left-2 text-gold text-6xl font-serif leading-none opacity-30">"</span>
            <p className="font-serif text-xl md:text-2xl text-charcoal leading-relaxed pl-6">
              {testimonial.text}
            </p>
          </blockquote>

          {/* User Info */}
          <div className="flex items-center gap-4 mb-10">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="font-serif text-base text-near-black font-medium">{testimonial.name}</p>
              <p className="text-charcoal/50 text-sm">{testimonial.role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex ? 'bg-gold w-6' : 'bg-stone-warm'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 flex items-center justify-center rounded-lg border border-gold/30 text-gold hover:bg-gold hover:text-white transition-all duration-300 cursor-pointer"
              >
                <i className="ri-arrow-left-line"></i>
              </button>
              <button
                onClick={next}
                className="w-11 h-11 flex items-center justify-center rounded-lg bg-near-black text-white hover:bg-gold transition-all duration-300 cursor-pointer"
              >
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
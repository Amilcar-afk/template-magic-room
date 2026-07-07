import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Soins', href: '#treatments' },
  { label: 'Résultats', href: '#results' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'Comment ça marche', href: '#how-it-works' },
  { label: 'Avis', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 cursor-pointer" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gold/10">
            <i className="ri-sparkling-line text-gold text-lg"></i>
          </div>
          <span className={`font-serif text-xl tracking-wide transition-colors duration-300 ${scrolled ? 'text-near-black' : 'text-white'}`}>
            Magic Room
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${scrolled ? 'text-charcoal hover:text-gold' : 'text-white/80 hover:text-white'}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollTo('#booking')}
            className={`px-6 py-2.5 border rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
              scrolled
                ? 'border-near-black text-near-black hover:bg-near-black hover:text-white'
                : 'border-white/50 text-white hover:bg-white hover:text-near-black'
            }`}
          >
            Prendre RDV
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer"
        >
          <i className={`ri-${mobileOpen ? 'close' : 'menu'}-line text-2xl ${scrolled ? 'text-near-black' : 'text-white'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream/98 backdrop-blur-lg border-t border-stone-warm/30">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left text-base font-medium text-charcoal hover:text-gold transition-colors py-2 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#booking')}
              className="mt-2 px-6 py-3 bg-near-black text-white rounded-full text-sm font-medium cursor-pointer"
            >
              Prendre RDV
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
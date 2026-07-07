export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-dark-emerald overflow-hidden">
      {/* Decorative subtle watermark */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="none">
          <path d="M100,200 Q200,100 300,200 T500,200 T700,200" stroke="white" strokeWidth="1" fill="none" />
          <path d="M150,250 Q250,150 350,250 T550,250" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column - Brand + Address + Newsletter */}
          <div className="lg:col-span-5">
            <a href="#" className="flex items-center gap-3 mb-6" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gold/20">
                <i className="ri-sparkling-line text-gold text-lg"></i>
              </div>
              <span className="font-serif text-xl text-white tracking-wide">Magic Room</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-4">
              Clinique d'esthétique non-invasive à Paris 16ème. Injections, HIFU, PDRN — des soins premium pour sublimer votre beauté naturelle.
            </p>

            {/* Address */}
            <div className="mb-6">
              <p className="text-white/80 text-sm font-medium mb-1">
                <i className="ri-map-pin-line text-gold mr-2"></i>
                123 Avenue Raymond Poincaré, 75016 Paris
              </p>
              <p className="text-white/50 text-xs ml-6">À deux pas du Trocadéro</p>
              <p className="text-white/60 text-sm mt-2 ml-6">
                <i className="ri-phone-line text-gold mr-1.5"></i>
                01 45 00 20 16
              </p>
            </div>

            {/* Newsletter */}
            <form
              data-readdy-form
              action="https://readdy.ai/api/form/d7ph3rml0bai2p3ha0j0"
              method="POST"
              className="flex gap-2 mb-8"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Votre email pour recevoir nos offres"
                className="flex-1 px-4 py-3 rounded-full border border-white/20 bg-transparent text-sm text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-gold hover:border-gold hover:text-near-black transition-all duration-300 cursor-pointer flex-shrink-0"
              >
                <i className="ri-send-plane-line"></i>
              </button>
            </form>

            <p className="font-serif text-lg md:text-xl text-white/90 italic leading-relaxed max-w-sm">
              La beauté réside dans la subtilité du résultat naturel.
            </p>
          </div>

          {/* Right Column - Navigation Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {/* Soins */}
              <div>
                <h4 className="text-white text-xs font-semibold tracking-wider uppercase mb-4">Soins</h4>
                <ul className="space-y-3">
                  {['Acide Hyaluronique', 'Toxine Botulique', 'HIFU', 'PDRN', 'Médecine Homme'].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => scrollTo('#treatments')}
                        className="text-white/50 text-sm hover:text-gold transition-colors cursor-pointer"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* À propos */}
              <div>
                <h4 className="text-white text-xs font-semibold tracking-wider uppercase mb-4">À Propos</h4>
                <ul className="space-y-3">
                  {['Notre Équipe', 'Notre Cabinet', 'Technologies', 'Sécurité', 'Carrières'].map((item) => (
                    <li key={item}>
                      <span className="text-white/50 text-sm cursor-default">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Le Cabinet */}
              <div>
                <h4 className="text-white text-xs font-semibold tracking-wider uppercase mb-4">Le Cabinet</h4>
                <ul className="space-y-3">
                  {['Prendre RDV', 'Tarifs', 'Cartes Cadeaux', 'Forfaits', 'Blog'].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => {
                          if (item === 'Prendre RDV') scrollTo('#booking');
                          if (item === 'Tarifs') scrollTo('#pricing');
                        }}
                        className="text-white/50 text-sm hover:text-gold transition-colors cursor-pointer"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Légal */}
              <div>
                <h4 className="text-white text-xs font-semibold tracking-wider uppercase mb-4">Légal</h4>
                <ul className="space-y-3">
                  {['Politique de Confidentialité', 'Mentions Légales', 'Conditions Générales', 'Accessibilité'].map((item) => (
                    <li key={item}>
                      <span className="text-white/50 text-sm cursor-default">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Magic Room — Clinique d'Esthétique Paris. Tous droits réservés.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: 'ri-instagram-line', label: 'Instagram' },
              { icon: 'ri-facebook-line', label: 'Facebook' },
              { icon: 'ri-tiktok-line', label: 'TikTok' },
              { icon: 'ri-pinterest-line', label: 'Pinterest' },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/20 text-white/60 hover:text-gold hover:border-gold transition-all duration-300"
                rel="nofollow"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          <a href="#" className="text-white/40 text-xs hover:text-gold transition-colors" rel="nofollow">
            Politique de Confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}
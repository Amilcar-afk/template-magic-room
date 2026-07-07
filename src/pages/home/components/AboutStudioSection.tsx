export default function AboutStudioSection() {
  return (
    <section id="about" className="relative w-full py-20 md:py-28 bg-cream">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20aesthetic%20doctor%20performing%20elegant%20non-invasive%20facial%20injection%20treatment%20on%20relaxed%20woman%20client%2C%20pristine%20modern%20Parisian%20clinic%20interior%2C%20warm%20soft%20golden%20lighting%2C%20clean%20white%20marble%20environment%2C%20editorial%20beauty%20photography%2C%20luxurious%20wellness%20atmosphere%2C%20French%20medical%20spa&width=600&height=750&seq=about-magic&orientation=portrait"
                alt="Soin en cours au cabinet Magic Room"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 bg-white rounded-xl p-5 shadow-lg border border-stone-warm/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/10">
                  <i className="ri-award-line text-gold text-xl"></i>
                </div>
                <div>
                  <p className="font-serif text-lg text-near-black">8+ Ans</p>
                  <p className="text-charcoal/50 text-xs">d'Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Le Cabinet
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-near-black leading-tight mb-6">
              Là Où{' '}
              <span className="italic text-gold">l'Expertise</span>{' '}
              Rencontre l'Art
            </h2>
            <div className="space-y-4 text-charcoal/70 text-base leading-relaxed">
              <p>
                Fondé sur la conviction que la beauté ne devrait jamais exiger de compromis, Magic Room allie technologies médicales de pointe et approche personnalisée pour des résultats naturels et sublimes.
              </p>
              <p>
                Chaque traitement est réalisé par des praticiens diplômés et formés aux dernières techniques internationales. Nous utilisons exclusivement des produits certifiés CE et FDA — votre sécurité est notre priorité absolue.
              </p>
              <p>
                Situé à deux pas du Trocadéro dans le 16ème arrondissement de Paris, notre cabinet est conçu comme un sanctuaire de bien-être. Dès votre arrivée, vous entrez dans un espace où science, sérénité et luxe se rencontrent pour créer une expérience unique.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: 'ri-shield-check-line', title: 'Produits Certifiés', desc: 'CE & FDA' },
                { icon: 'ri-heart-pulse-line', title: 'Non Invasif', desc: 'Zéro cicatrice' },
                { icon: 'ri-user-star-line', title: 'Équipe Diplômée', desc: 'Spécialistes experts' },
                { icon: 'ri-map-pin-line', title: 'Paris 16ème', desc: 'Près du Trocadéro' },
              ].map((value) => (
                <div key={value.title} className="flex items-start gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gold/10 flex-shrink-0 mt-0.5">
                    <i className={`${value.icon} text-gold text-sm`}></i>
                  </div>
                  <div>
                    <p className="font-medium text-near-black text-sm">{value.title}</p>
                    <p className="text-charcoal/50 text-xs">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
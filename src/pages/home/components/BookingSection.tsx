export default function BookingSection() {
  return (
    <section id="booking" className="relative w-full py-20 md:py-28 bg-cream">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Top visual */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-16">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '21/9' }}>
            <img
              src="https://readdy.ai/api/search-image?query=Serene%20elegant%20aesthetic%20clinic%20reception%20desk%2C%20white%20marble%20interior%2C%20warm%20amber%20lighting%2C%20pristine%20modern%20medical%20spa%20environment%2C%20soft%20golden%20ambient%20glow%2C%20luxury%20French%20wellness%20space%2C%20editorial%20photography&width=1200&height=500&seq=booking-bg-magic&orientation=landscape"
              alt="Accueil Magic Room Paris"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cream/60"></div>
          </div>
        </div>

        {/* Copy area */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-near-black leading-tight mb-6">
            Votre Transformation{' '}
            <span className="italic text-gold">Commence</span>{' '}
            Ici
          </h2>
          <p className="text-charcoal/60 text-base md:text-lg leading-relaxed mb-10">
            Réservez votre consultation gratuite à notre cabinet du 16ème arrondissement. Notre équipe élaborera un protocole personnalisé adapté à vos objectifs de beauté.
          </p>

          <button
            onClick={() => {
              const form = document.getElementById('booking-form');
              if (form) form.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-4 bg-near-black text-white rounded-full text-sm font-medium hover:bg-gold hover:text-near-black transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Réserver Mon Rendez-Vous
          </button>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-charcoal/50 text-sm">
            <span className="flex items-center gap-1.5">
              <i className="ri-calendar-check-line text-gold"></i>
              RDV sous 48h
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-time-line text-gold"></i>
              Consultation 20 min
            </span>
            <span className="flex items-center gap-1.5">
              <i className="ri-map-pin-line text-gold"></i>
              Paris 16ème
            </span>
          </div>
        </div>

        {/* Booking Form */}
        <div id="booking-form" className="max-w-xl mx-auto mt-16 md:mt-20">
          <form
            data-readdy-form
            action="https://readdy.ai/api/form/d7ph3rml0bai2p3ha0ig"
            method="POST"
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-stone-warm/40 shadow-sm"
          >
            <h3 className="font-serif text-xl text-near-black text-center mb-6">
              Demande de Rendez-Vous
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Prénom</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-warm bg-cream/50 text-sm text-near-black placeholder-charcoal/40 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Nom</label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-warm bg-cream/50 text-sm text-near-black placeholder-charcoal/40 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-warm bg-cream/50 text-sm text-near-black placeholder-charcoal/40 focus:outline-none focus:border-gold transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-stone-warm bg-cream/50 text-sm text-near-black placeholder-charcoal/40 focus:outline-none focus:border-gold transition-colors"
                  placeholder="06 00 00 00 00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Soin Souhaité</label>
                <select
                  name="treatment"
                  className="w-full px-4 py-3 rounded-lg border border-stone-warm bg-cream/50 text-sm text-near-black focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="">Sélectionnez un soin</option>
                  <option value="acide-hyaluronique">Injection Acide Hyaluronique</option>
                  <option value="toxine-botulique">Toxine Botulique</option>
                  <option value="hifu">HIFU Ultrasons Focalisés</option>
                  <option value="pdrn">PDRN & Booster de Peau</option>
                  <option value="medecine-homme">Médecine Esthétique Homme</option>
                  <option value="harmonisation-fessiers">Harmonisation Fessiers</option>
                  <option value="drainage">Drainage Lymphatique</option>
                  <option value="not-sure">Je ne sais pas — Aidez-moi</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Message (Optionnel)</label>
                <textarea
                  name="message"
                  maxLength={500}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-stone-warm bg-cream/50 text-sm text-near-black placeholder-charcoal/40 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Décrivez vos objectifs ou posez vos questions..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-near-black text-white rounded-full text-sm font-semibold hover:bg-gold hover:text-near-black transition-all duration-300 cursor-pointer mt-2"
              >
                Envoyer ma Demande
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
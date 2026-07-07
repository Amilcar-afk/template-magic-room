const steps = [
  {
    number: '01',
    title: 'Consultation Gratuite',
    description: 'Rendez-vous avec notre équipe pour évaluer vos besoins, discuter de vos objectifs et élaborer un protocole personnalisé adapté à votre morphologie et à votre peau.',
    icon: 'ri-chat-heart-line',
  },
  {
    number: '02',
    title: 'Traitement Personnalisé',
    description: 'Détendez-vous dans notre cabinet design du 16ème arrondissement pendant que nos spécialistes diplômés réalisent votre soin avec des produits certifiés CE.',
    icon: 'ri-sparkling-2-line',
  },
  {
    number: '03',
    title: 'Résultat Visible',
    description: "Observez les premières améliorations dès la fin de la séance. Peau plus lisse, contours redéfinis, éclat naturel — les résultats s'amplifient au fil des semaines.",
    icon: 'ri-sun-line',
  },
  {
    number: '04',
    title: 'Suivi Expert',
    description: "Nous assurons un suivi post-traitement pour optimiser et maintenir vos résultats. Nos forfaits de maintenance vous permettent de préserver votre capital jeunesse.",
    icon: 'ri-heart-pulse-line',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative w-full py-20 md:py-28 bg-beige">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Votre Parcours
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-near-black leading-tight">
            Comment ça{' '}
            <span className="italic text-gold">Marche</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-stone-warm">
                  <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-gold"></div>
                </div>
              )}

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-stone-warm/30 hover:border-gold/30 transition-all duration-500 hover:shadow-sm h-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl text-gold/30 group-hover:text-gold/50 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/10 text-gold">
                    <i className={`${step.icon} text-xl`}></i>
                  </div>
                </div>
                <h3 className="font-serif text-lg md:text-xl text-near-black mb-3">
                  {step.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
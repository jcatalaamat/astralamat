const WhySection = () => {
  const requirements = [
    'intelligent systems',
    'personalized learning flows',
    'AI-powered guidance',
    'seamless operations',
    'beautifully integrated platforms',
    'tools that grow with you',
    'support systems that work',
    'room to scale globally',
  ];

  return (
    <section id="why" className="relative py-24 md:py-32 bg-soft-sand overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('/images/why-bg.jpg')`,
        }}
      />

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-astral-violet uppercase tracking-wider mb-3">
            Why Astral Integration Exists
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-space-dark mb-6">
            Your work transforms people.
            <br />
            <span className="text-astral-violet">Your systems should too.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            You carry a profound mission — a lineage, a philosophy, a teaching, a modality, a curriculum, a school.
          </p>
        </div>

        {/* Main Message */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <p className="text-xl text-space-dark leading-relaxed text-center mb-8">
              But transformation at scale requires more than content.
            </p>

            <p className="text-center text-gray-600 mb-6">It requires:</p>

            {/* Requirements Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {requirements.map((req) => (
                <div
                  key={req}
                  className="px-4 py-3 bg-gradient-to-br from-astral-violet/5 to-electric-cyan/5 rounded-xl text-center"
                >
                  <span className="text-sm text-gray-700 font-medium">{req}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-8">
              <p className="text-lg text-gray-600 text-center mb-4">
                This is where most teachers and schools struggle.
              </p>
              <p className="text-xl text-space-dark text-center font-medium">
                Your teachings are powerful, but your systems are fragile.
              </p>
            </div>
          </div>
        </div>

        {/* Core Value Prop */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl md:text-2xl text-space-dark leading-relaxed">
            We build the intelligent architecture that carries your work to the world — with{' '}
            <span className="text-astral-violet font-semibold">clarity</span>,{' '}
            <span className="text-astral-violet font-semibold">beauty</span>, and{' '}
            <span className="text-astral-violet font-semibold">precision</span>.
          </p>
        </div>

        {/* Closing Statement */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-deep-space via-space-dark to-deep-space rounded-2xl p-8 text-center">
            <p className="text-xl text-white mb-2">
              Transformation is your domain.
            </p>
            <p className="text-xl text-electric-cyan font-medium">
              The systems that deliver it are ours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;

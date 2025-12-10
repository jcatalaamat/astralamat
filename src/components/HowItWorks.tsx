const steps = [
  {
    number: '01',
    title: 'Vision Immersion',
    description: 'We dive into your teachings, mission, content, audience, and desired outcomes.',
  },
  {
    number: '02',
    title: 'Systems Blueprint',
    description: 'A complete architecture of your future digital ecosystem.',
  },
  {
    number: '03',
    title: 'Engineering & Assembly',
    description: 'We curate and manage a global team to build the system.',
  },
  {
    number: '04',
    title: 'Integration & Testing',
    description: 'Everything is aligned with your pedagogy, voice, values, and transmission.',
  },
  {
    number: '05',
    title: 'Launch & Evolution',
    description: 'Your platform evolves with your work — not against it.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-soft-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-astral-violet uppercase tracking-wider mb-3">
              The Process
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-space-dark mb-4">
              How It Works
            </h2>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group flex items-start gap-6 bg-white rounded-2xl p-6 border border-gray-200 hover:border-astral-violet/30 hover:shadow-lg transition-all"
              >
                {/* Step Number */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-astral-violet to-electric-cyan rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-space-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

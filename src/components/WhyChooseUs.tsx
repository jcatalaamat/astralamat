import { Heart, Layers, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    title: 'Deep understanding of transformational work',
    description: 'We speak your language. We understand the nuances of coaching, healing, and conscious education.',
  },
  {
    icon: Layers,
    title: 'Full custom builds, no templates',
    description: 'Every system is designed from scratch for your unique methodology and client journey.',
  },
  {
    icon: Sparkles,
    title: 'Clarity, precision, flow — without tech overwhelm',
    description: 'You get powerful systems that feel effortless to use. No complexity, just results.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-soft-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-astral-violet uppercase tracking-wider mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-space-dark">
              Why People Choose{' '}
              <span className="bg-gradient-to-r from-astral-violet to-electric-cyan bg-clip-text text-transparent">
                Astral Integration
              </span>
            </h2>
          </div>

          {/* Reasons */}
          <div className="space-y-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-astral-violet/30 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-astral-violet to-electric-cyan rounded-xl flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-space-dark mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
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

export default WhyChooseUs;

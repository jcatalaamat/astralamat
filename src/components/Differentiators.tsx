import { Code2, Building2, Sparkles, Heart, Zap, Globe } from 'lucide-react';

const differentiators = [
  {
    icon: Code2,
    text: 'We speak both the language of education and the language of code',
  },
  {
    icon: Building2,
    text: 'We design systems like learning journeys',
  },
  {
    icon: Sparkles,
    text: 'We build ecosystems that can hold transformational work',
  },
  {
    icon: Heart,
    text: 'We preserve the teacher\'s wisdom with integrity',
  },
  {
    icon: Zap,
    text: 'We create technology that feels alive and intentional',
  },
  {
    icon: Globe,
    text: 'We architect the future of human development',
  },
];

const Differentiators = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-soft-sand to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-electric-cyan uppercase tracking-wider mb-3">
              What Makes Us Different
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-space-dark mb-6">
              Why Astral Integration Is Unique
            </h2>
          </div>

          {/* Differentiators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-astral-violet/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-astral-violet/20 to-electric-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-astral-violet" />
                </div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Visual Storytelling Block */}
          <div className="bg-gradient-to-br from-deep-space via-space-dark to-deep-space rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Gradient orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-astral-violet/20 rounded-full filter blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-electric-cyan/15 rounded-full filter blur-[60px]"></div>

            <div className="relative z-10 text-center">
              <p className="text-sm font-medium text-electric-cyan uppercase tracking-wider mb-6">
                Imagine This
              </p>
              <div className="space-y-4 max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-white leading-relaxed">
                  Imagine your students receiving personalized learning guidance aligned with your curriculum.
                </p>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Imagine your courses flowing effortlessly with adaptive pathways.
                </p>
                <p className="text-xl md:text-2xl text-white leading-relaxed">
                  Imagine your teachings living inside a beautiful{' '}
                  <span className="bg-gradient-to-r from-astral-violet to-electric-cyan bg-clip-text text-transparent font-semibold">
                    intelligent learning ecosystem
                  </span>{' '}
                  that scales with you, deepens transformation, and evolves.
                </p>
              </div>
              <p className="text-gray-400 mt-8 italic">
                This is what we build.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;

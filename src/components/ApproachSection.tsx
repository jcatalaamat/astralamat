import { Ear, Brain, Sparkles, Target } from 'lucide-react';

const approaches = [
  {
    icon: Ear,
    title: 'Deep Listening',
    description: 'We begin with your philosophy, your mission, your teaching style, and the transformation you facilitate.',
  },
  {
    icon: Brain,
    title: 'Systems Thinking',
    description: 'We design complete intelligent ecosystems — not isolated tools but unified, scalable, intuitive architecture.',
  },
  {
    icon: Sparkles,
    title: 'Embodied Technology',
    description: 'Technology that feels alive, meaningful, spacious. AI that supports your message without disrupting your energy.',
  },
  {
    icon: Target,
    title: 'Transformation-Aware Design',
    description: 'We combine learning science, spiritual wisdom, and AI personalization to deepen student experience and accelerate growth.',
  },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 bg-gradient-to-b from-deep-space via-space-dark to-deep-space relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-astral-violet/15 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-electric-cyan/10 rounded-full filter blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-electric-cyan uppercase tracking-wider mb-3">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              How We Work
            </h2>
          </div>

          {/* Approach Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {approaches.map((approach) => (
              <div
                key={approach.title}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-astral-violet/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-astral-violet to-electric-cyan rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <approach.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {approach.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;

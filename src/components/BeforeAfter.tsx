import { X, Check } from 'lucide-react';

const beforeItems = [
  'Scattered tools',
  'Tech overwhelm',
  'Manual operations',
  'Inconsistent delivery',
  'Limited scalability',
];

const afterItems = [
  'Intelligent automation',
  'Unified learning ecosystem',
  'Personalized growth pathways',
  'Seamless experience',
  'Global scalability',
  'Deeper student transformation',
];

const BeforeAfter = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-deep-space via-space-dark to-deep-space relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-astral-violet/10 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-electric-cyan/10 rounded-full filter blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-electric-cyan uppercase tracking-wider mb-3">
              The Transformation
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What Changes for You
            </h2>
          </div>

          {/* Before / After Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Before */}
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-gray-400 mb-6 text-center">Before</h3>
              <div className="space-y-4">
                {beforeItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-red-400" />
                    </div>
                    <span className="text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="p-8 bg-gradient-to-br from-astral-violet/20 to-electric-cyan/20 rounded-2xl border border-astral-violet/30">
              <h3 className="text-xl font-bold text-electric-cyan mb-6 text-center">After</h3>
              <div className="space-y-4">
                {afterItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-astral-violet to-electric-cyan rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center space-y-2">
            <p className="text-xl text-gray-300">Your mission expands.</p>
            <p className="text-xl text-gray-300">Your teachings deepen.</p>
            <p className="text-xl text-gray-300">Your students grow.</p>
            <p className="text-xl text-electric-cyan font-medium mt-4">You stay in your genius.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

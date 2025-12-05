import { X, Check } from 'lucide-react';

const beforeItems = [
  'Confusing tech',
  'Scattered ideas',
  'No time',
  'No team',
  'Stuck in planning',
  'No product to sell',
];

const afterItems = [
  'A clear plan',
  'A product built for you',
  'Automation doing the boring work',
  'New income streams',
  'Ease & flow',
  'A business that feels aligned',
];

const BeforeAfter = () => {
  return (
    <section className="py-24 bg-warm-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-space-dark mb-4">
              What Changes for You
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From overwhelm to clarity, from ideas to products
            </p>
          </div>

          {/* Before / After Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="p-8 bg-gray-100 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-500 mb-6 text-center">Before</h3>
              <div className="space-y-4">
                {beforeItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="p-8 bg-gradient-to-br from-astral-violet/10 to-electric-cyan/10 rounded-2xl border border-astral-violet/20">
              <h3 className="text-xl font-bold text-astral-violet mb-6 text-center">After</h3>
              <div className="space-y-4">
                {afterItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-astral-violet to-electric-cyan rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-space-dark font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

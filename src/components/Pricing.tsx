import { Sparkles, Layers, Package, Heart } from 'lucide-react';

const packages = [
  {
    icon: Sparkles,
    name: 'Clarity Session',
    price: '€150',
    description: 'Your idea becomes a structured plan.',
    details: 'Features, flows, timeline, tools — the most elegant path forward.',
    accent: 'violet',
  },
  {
    icon: Layers,
    name: 'Systems Package',
    price: 'from €800',
    description: 'For creators and businesses who need foundations that feel effortless.',
    details: '',
    includes: [
      'Booking & scheduling',
      'CRM & client journeys',
      'Automations',
      'Operational dashboards',
      'Internal tools',
    ],
    note: 'A solid architecture for the parts of your work that should flow smoothly.',
    accent: 'cyan',
  },
  {
    icon: Package,
    name: 'Product Package',
    price: 'from €3,500',
    description: 'Your full digital product — thoughtfully designed, built, and delivered.',
    includes: [
      'MVPs',
      'Platforms',
      'Membership ecosystems',
      'Course portals',
      'Creator suites',
      'AI-enhanced experiences',
    ],
    note: 'You stay in your vision. We take care of the build.',
    accent: 'pink',
    featured: true,
  },
  {
    icon: Heart,
    name: 'Support Package',
    price: '€350–€1,200/month',
    description: 'A gentle, ongoing partnership as your product evolves.',
    includes: [
      'Updates',
      'Improvements',
      'Maintenance',
      'New features',
      'Content + system changes',
    ],
    note: 'A steady container for long-term growth.',
    accent: 'amber',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-deep-space via-space-dark to-deep-space relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-astral-violet/15 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-electric-cyan/10 rounded-full filter blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Studio Packages
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Clear, simple, and designed around how people naturally create
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden ${
                  pkg.featured
                    ? 'border-astral-violet/50 bg-white/10'
                    : 'border-white/10 hover:border-astral-violet/30 hover:bg-white/10'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-astral-violet via-electric-cyan to-astral-violet" />
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-astral-violet to-electric-cyan rounded-xl flex items-center justify-center">
                        <pkg.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-electric-cyan">{pkg.price}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4">{pkg.description}</p>

                  {pkg.details && (
                    <p className="text-gray-400 text-sm mb-4">{pkg.details}</p>
                  )}

                  {/* Includes List */}
                  {pkg.includes && (
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {pkg.includes.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                            <span className="w-1.5 h-1.5 bg-electric-cyan rounded-full flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Note */}
                  {pkg.note && (
                    <p className="text-gray-500 text-sm italic border-t border-white/10 pt-4 mt-4">
                      {pkg.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Not sure which fits? Begin with a clarity session.
            </p>
            <a
              href="https://wa.me/34611144170?text=Hi!%20I'd%20like%20to%20learn%20more%20about%20your%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

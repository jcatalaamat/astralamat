import { Sparkles, Layers, Building2, Cpu, Heart } from 'lucide-react';

const packages = [
  {
    icon: Sparkles,
    name: 'Clarity Architecture Session',
    price: '€250',
    description: 'Your vision becomes a complete systems blueprint.',
    details: 'Features, flows, timeline, tools, integrations, cost.',
    note: 'The perfect starting point for any project.',
  },
  {
    icon: Layers,
    name: 'Systems Foundation Package',
    price: 'from €1,500',
    description: 'For studios, teachers, retreat centers, and small institutions.',
    includes: [
      'Booking & scheduling',
      'CRM & automations',
      'Onboarding flows',
      'Dashboards',
      'AI-powered support',
      'Internal tools',
    ],
    note: 'A solid foundation for your organization.',
  },
  {
    icon: Building2,
    name: 'Institutional Platform Package',
    price: 'from €5,000',
    description: 'For RA MA-style academies, yoga schools, spiritual temples, and visionary groups.',
    includes: [
      'Teaching portal',
      'Member ecosystem',
      'Practice library',
      'AI guides',
      'Community architecture',
      'Operational backend',
      'Automations',
      'Revenue systems',
    ],
    note: 'Everything a modern spiritual institution needs.',
    featured: true,
  },
  {
    icon: Cpu,
    name: 'AI Experience Package',
    price: 'from €3,500',
    description: 'Custom AI assistants, guides, lineage tools, content engines.',
    includes: [
      'Personalized AI assistants',
      'Wisdom guides',
      'Content engines',
      'Learning companions',
    ],
    note: 'Perfect for teachers, creators, coaches, schools, academies.',
  },
  {
    icon: Heart,
    name: 'Ongoing Support',
    price: '€350–€1,200/month',
    description: 'Maintenance, updates, improvements, expansions.',
    includes: [
      'System maintenance',
      'Regular updates',
      'New features',
      'Priority support',
    ],
    note: 'A gentle long-term partnership.',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-deep-space via-space-dark to-deep-space relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-astral-violet/15 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-electric-cyan/10 rounded-full filter blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-electric-cyan uppercase tracking-wider mb-3">
              Packages
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Investment & Packages
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Clear, simple pricing designed for spiritual institutions and visionary organizations
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden ${
                  pkg.featured
                    ? 'border-astral-violet/50 bg-white/10 lg:scale-105 lg:-my-2'
                    : 'border-white/10 hover:border-astral-violet/30 hover:bg-white/10'
                }`}
              >
                {pkg.featured && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-astral-violet via-electric-cyan to-astral-violet" />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-astral-violet/20 rounded-full text-xs text-electric-cyan font-medium">
                      Most Popular
                    </div>
                  </>
                )}

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-astral-violet to-electric-cyan rounded-xl flex items-center justify-center">
                      <pkg.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                    </div>
                  </div>

                  {/* Price */}
                  <p className="text-2xl font-bold text-electric-cyan mb-4">{pkg.price}</p>

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
              Not sure which fits? Begin with a Clarity Architecture Session.
            </p>
            <a
              href="https://wa.me/34611144170?text=Hi!%20I'd%20like%20to%20learn%20more%20about%20your%20packages%20for%20spiritual%20institutions."
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

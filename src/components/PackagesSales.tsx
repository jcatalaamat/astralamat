import { Compass, Rocket, RefreshCw, MessageCircle } from 'lucide-react';

const packages = [
  {
    icon: Compass,
    name: 'Systems Blueprint Session',
    tagline: 'Entry Point',
    description: 'A deep diagnostic + architecture map. You understand exactly what your business needs.',
    features: [
      'Complete systems audit',
      'Custom architecture design',
      'Tool & integration recommendations',
      'Implementation roadmap',
      'Cost & timeline clarity',
    ],
    cta: 'Book a Blueprint Session',
    ctaMessage: "Hi! I'd like to book an AI Systems Blueprint session to map out my business needs.",
  },
  {
    icon: Rocket,
    name: 'Done-For-You AI System Build',
    tagline: 'Full Implementation',
    description: 'We build your custom ecosystem. Everything is handled for you.',
    features: [
      'Complete platform development',
      'AI assistant integration',
      'Automation setup',
      'Client portal configuration',
      'Training & handoff',
    ],
    featured: true,
    cta: 'Request Build Pricing',
    ctaMessage: "Hi! I'm interested in a Done-For-You AI System Build. Can we discuss my project?",
  },
  {
    icon: RefreshCw,
    name: 'Evolution Partnership',
    tagline: 'Ongoing Support',
    description: 'Ongoing collaboration to grow your platform, your content, and your impact.',
    features: [
      'Continuous improvements',
      'New feature development',
      'Priority support',
      'Strategic guidance',
      'System maintenance',
    ],
    cta: 'Explore Partnership',
    ctaMessage: "Hi! I'm interested in an ongoing Evolution Partnership for my platform.",
  },
];

const PackagesSales = () => {
  return (
    <section id="packages" className="py-24 bg-soft-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-astral-violet uppercase tracking-wider mb-3">
              Work With Us
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-space-dark mb-4">
              How We Can{' '}
              <span className="bg-gradient-to-r from-astral-violet to-electric-cyan bg-clip-text text-transparent">
                Help You
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your path. Every engagement starts with understanding your unique vision.
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`group relative bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  pkg.featured
                    ? 'border-astral-violet/50 shadow-lg shadow-astral-violet/10 lg:scale-105'
                    : 'border-gray-200 hover:border-astral-violet/30 hover:shadow-lg'
                }`}
              >
                {pkg.featured && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-astral-violet via-electric-cyan to-astral-violet" />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-astral-violet/10 rounded-full text-xs text-astral-violet font-medium">
                      Most Popular
                    </div>
                  </>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-astral-violet to-electric-cyan rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <pkg.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-astral-violet font-medium">{pkg.tagline}</p>
                      <h3 className="text-xl font-bold text-space-dark">{pkg.name}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{pkg.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-700 text-sm">
                        <span className="w-1.5 h-1.5 bg-electric-cyan rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={`https://wa.me/34611144170?text=${encodeURIComponent(pkg.ctaMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-xl transition-all ${
                      pkg.featured
                        ? 'bg-astral-violet text-white hover:bg-astral-violet/90 hover:shadow-lg'
                        : 'bg-gray-100 text-space-dark hover:bg-astral-violet hover:text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    {pkg.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-12">
            <p className="text-gray-500">
              Not sure which fits? Start with a Blueprint Session.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSales;

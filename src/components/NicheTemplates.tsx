import { Flower2, Mountain, Users, Sparkles, Briefcase } from 'lucide-react';

const niches = [
  {
    icon: Flower2,
    title: 'Yoga Studios',
    description: 'Class schedules, memberships, teacher profiles, and online booking.',
    features: ['Class scheduling', 'Membership management', 'Teacher bios', 'Online payments'],
  },
  {
    icon: Mountain,
    title: 'Retreat Centers',
    description: 'Retreat listings, booking flows, testimonials, and immersive experiences.',
    features: ['Retreat pages', 'Booking system', 'Photo galleries', 'Testimonials'],
  },
  {
    icon: Users,
    title: 'Coaching Practices',
    description: 'Service offerings, client portals, scheduling, and program delivery.',
    features: ['Service packages', 'Client portal', 'Scheduling', 'Program delivery'],
  },
  {
    icon: Sparkles,
    title: 'Healers & Therapists',
    description: 'Practice pages, session booking, intake forms, and client management.',
    features: ['Session booking', 'Intake forms', 'Payment processing', 'Client notes'],
  },
  {
    icon: Briefcase,
    title: 'Small Businesses',
    description: 'Professional presence, lead generation, automation, and growth tools.',
    features: ['Lead capture', 'Email automation', 'CRM integration', 'Analytics'],
  },
];

const NicheTemplates = () => {
  return (
    <section id="niches" className="py-24 bg-soft-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-astral-violet uppercase tracking-wider mb-3">
              Niche Solutions
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-space-dark mb-4">
              Tailored for{' '}
              <span className="bg-gradient-to-r from-astral-violet to-electric-cyan bg-clip-text text-transparent">
                Your Industry
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We understand the unique needs of transformational businesses.
              Every solution is customized to your specific niche.
            </p>
          </div>

          {/* Niches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {niches.map((niche) => (
              <div
                key={niche.title}
                className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-astral-violet/30 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-astral-violet to-electric-cyan rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <niche.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-space-dark mb-2">
                    {niche.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {niche.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {niche.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see your niche? We build custom solutions for any transformational business.
            </p>
            <a
              href="https://wa.me/34611144170?text=Hi!%20I'd%20like%20to%20discuss%20a%20custom%20solution%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="text-astral-violet font-medium hover:text-electric-cyan transition-colors"
            >
              Let's talk about your needs →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NicheTemplates;

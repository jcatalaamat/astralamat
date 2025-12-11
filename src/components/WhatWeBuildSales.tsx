import { Users, Bot, Settings, Globe, BookOpen } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Client Portals & Coaching Platforms',
    description: 'Your personalized version of a modern coaching OS.',
    features: [
      'Client management & session tracking',
      'AI-generated session summaries',
      'Program & homework tracking',
      'Messaging & scheduling integration',
      'Progress insights & notes',
    ],
    gradient: 'from-astral-violet to-electric-cyan',
  },
  {
    icon: Bot,
    title: 'AI Assistants & Companions',
    description: 'Custom AI built from your teachings and methodology.',
    features: [
      'WhatsApp AI companion',
      'Personalized client guidance',
      'Content creation assistant',
      'Session follow-up automation',
      'Support bot for your practice',
    ],
    gradient: 'from-electric-cyan to-astral-violet',
  },
  {
    icon: Settings,
    title: 'Business Systems & Automation',
    description: 'Replace your entire tech mess with one smooth flow.',
    features: [
      'Automated onboarding',
      'Payment processing',
      'Email sequences',
      'Scheduling & reminders',
      'CRM & client journey',
    ],
    gradient: 'from-emerald-500 to-electric-cyan',
  },
  {
    icon: Globe,
    title: 'Branded Websites for Your Niche',
    description: 'Beautiful, conversion-focused sites for your practice.',
    features: [
      'Coaching & therapy practices',
      'Yoga studios & teachers',
      'Retreat centers',
      'Healers & energy practitioners',
      'Small transformational businesses',
    ],
    gradient: 'from-amber-500 to-astral-violet',
  },
  {
    icon: BookOpen,
    title: 'Digital Courses & Membership Platforms',
    description: 'A complete digital home for your teachings.',
    features: [
      'Course & lesson delivery',
      'Membership management',
      'Community features',
      'Progress tracking',
      'Interactive learning tools',
    ],
    gradient: 'from-pink-500 to-electric-cyan',
  },
];

const WhatWeBuildSales = () => {
  return (
    <section id="what-we-build" className="py-24 bg-gradient-to-b from-soft-sand to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-astral-violet uppercase tracking-wider mb-3">
              What We Build
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-space-dark mb-4">
              Custom AI Ecosystems for{' '}
              <span className="bg-gradient-to-r from-astral-violet to-electric-cyan bg-clip-text text-transparent">
                Transformational Work
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine AI engineering, learning design, automation, and conscious technology to build systems tailored to YOU.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-astral-violet/30 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-space-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-astral-violet font-medium mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-gray-600 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-electric-cyan rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuildSales;

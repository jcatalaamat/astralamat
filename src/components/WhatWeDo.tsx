import { Bot, Globe, Users, Settings, Sparkles } from 'lucide-react';

const categories = [
  {
    icon: Bot,
    title: 'AI Learning & Transformation Engines',
    subtitle: 'Built for Mindvalley-style platforms, teachers, and schools.',
    items: [
      'Personalized learning companions',
      'Adaptive practice plans',
      'AI-based curriculum guidance',
      'Embodied wisdom assistants',
      'Behavioral insights & transformation tracking',
    ],
    gradient: 'from-astral-violet to-electric-cyan',
  },
  {
    icon: Globe,
    title: 'Digital Teaching Platforms',
    subtitle: 'Your digital temple — designed to evolve.',
    items: [
      'Course portals',
      'Membership ecosystems',
      'Teaching archives',
      'Practice libraries',
      'Certification systems',
      'Quest-style learning structures',
    ],
    gradient: 'from-electric-cyan to-astral-violet',
  },
  {
    icon: Users,
    title: 'Community & Engagement Systems',
    subtitle: 'Spaces that hold collective growth.',
    items: [
      'Community hubs',
      'Event ecosystems',
      'Group intelligence tools',
      'Ambassador networks',
    ],
    gradient: 'from-emerald-500 to-electric-cyan',
  },
  {
    icon: Settings,
    title: 'Institutional Automations',
    subtitle: 'The backend that supports your mission.',
    items: [
      'CRM flows',
      'Onboarding pathways',
      'Booking systems',
      'Automated operations',
      'Dashboards & internal tools',
    ],
    gradient: 'from-amber-500 to-astral-violet',
  },
  {
    icon: Sparkles,
    title: 'Teacher-to-AI Transmission Systems',
    subtitle: 'A new paradigm: your wisdom, encoded intelligently.',
    items: [
      'AI co-teachers',
      'Lineage-preserving knowledge engines',
      'Personalized content generators',
      'Guided integration tools',
    ],
    gradient: 'from-pink-500 to-electric-cyan',
  },
];

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-24 bg-soft-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-astral-violet uppercase tracking-wider mb-3">
              What We Build
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-space-dark mb-4">
              Intelligent Infrastructure for the{' '}
              <span className="bg-gradient-to-r from-astral-violet to-electric-cyan bg-clip-text text-transparent">
                Transformation Industry
              </span>
            </h2>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.title}
                className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-astral-violet/30 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-space-dark mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-astral-violet font-medium mb-4">
                    {category.subtitle}
                  </p>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="text-gray-600 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-electric-cyan rounded-full flex-shrink-0" />
                        {item}
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

export default WhatWeDo;

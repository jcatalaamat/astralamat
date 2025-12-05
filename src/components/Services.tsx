import { Package, Settings, Cpu, Zap, Lightbulb, Users } from 'lucide-react';

const services = [
  {
    icon: Package,
    title: 'Full Product Build',
    subtitle: 'MVP / App / Platform',
    description: 'We turn your idea into a working product — from UX to implementation to launch.',
    ideal: 'For creators, founders, and businesses ready to scale.',
    accent: 'violet',
    gradient: 'from-astral-violet/10 to-astral-violet/5',
  },
  {
    icon: Settings,
    title: 'Custom Systems & Workflows',
    subtitle: 'Operations & Automation',
    description: 'Booking systems, CRM flows, onboarding sequences, internal tools, client management.',
    ideal: 'For local businesses + service providers.',
    accent: 'cyan',
    gradient: 'from-electric-cyan/10 to-electric-cyan/5',
  },
  {
    icon: Cpu,
    title: 'AI-Enhanced Offerings',
    subtitle: 'Smart Tools & Experiences',
    description: 'AI assistants, personalized guides, content engines, teaching tools.',
    ideal: 'For creators, coaches, spiritual leaders.',
    accent: 'pink',
    gradient: 'from-pink-500/10 to-pink-500/5',
  },
  {
    icon: Zap,
    title: 'Business Automation',
    subtitle: 'Time Freedom',
    description: 'Email replies, reminders, admin, sales funnels, scheduling, customer support.',
    ideal: 'For anyone wanting more time freedom.',
    accent: 'amber',
    gradient: 'from-amber-500/10 to-amber-500/5',
  },
  {
    icon: Lightbulb,
    title: 'Idea-to-Reality Sessions',
    subtitle: 'Strategy & Planning',
    description: 'We clarify your idea, map it, scope it, and turn it into a buildable plan.',
    ideal: 'Your idea becomes a blueprint.',
    accent: 'green',
    gradient: 'from-green-500/10 to-green-500/5',
  },
  {
    icon: Users,
    title: 'Product Management',
    subtitle: 'Outsourced Delivery',
    description: 'We find the right specialists, manage the team, and ensure high-quality execution.',
    ideal: 'Zero stress, fast delivery.',
    accent: 'blue',
    gradient: 'from-blue-500/10 to-blue-500/5',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-soft-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-space-dark mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to go from idea to launched product
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl border border-gray-200 hover:border-astral-violet/30 hover:shadow-lg hover:shadow-astral-violet/10 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle gradient accent at top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-astral-violet to-electric-cyan rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-space-dark mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-astral-violet font-medium mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    {service.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

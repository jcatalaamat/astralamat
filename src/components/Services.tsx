import { Cpu, Globe, Bot, Settings, Lightbulb, Infinity } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    number: '01',
    title: 'AI Systems Engineering',
    description: 'Complete intelligent architecture for your digital ecosystem.',
  },
  {
    icon: Globe,
    number: '02',
    title: 'Learning Platform Design',
    description: 'Teaching, learning, community, and practice — unified.',
  },
  {
    icon: Bot,
    number: '03',
    title: 'Transformation Engines',
    description: 'AI-powered companions that adapt to each student\'s journey.',
  },
  {
    icon: Settings,
    number: '04',
    title: 'Business Systems & Automations',
    description: 'Operational clarity. Zero overwhelm. Maximum flow.',
  },
  {
    icon: Lightbulb,
    number: '05',
    title: 'Vision → Blueprint Sessions',
    description: 'Your mission becomes a structured, actionable, beautifully coherent systems map.',
  },
  {
    icon: Infinity,
    number: '06',
    title: 'Ongoing Evolution Partnerships',
    description: 'Long-term architectural leadership for institutions committed to global impact.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-soft-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-astral-violet uppercase tracking-wider mb-3">
              Our Services
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-space-dark mb-4">
              How We Serve You
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl border border-gray-200 hover:border-astral-violet/30 hover:shadow-lg hover:shadow-astral-violet/10 transition-all duration-300 overflow-hidden"
              >
                {/* Number badge */}
                <div className="absolute top-4 right-4 text-4xl font-bold text-gray-100 group-hover:text-astral-violet/10 transition-colors">
                  {service.number}
                </div>

                <div className="p-6 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-astral-violet to-electric-cyan rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-space-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
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

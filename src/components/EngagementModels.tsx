import { Map, Hammer, Infinity, Compass, MessageCircle } from 'lucide-react';

const engagements = [
  {
    icon: Map,
    title: 'Architecture Engagement',
    description: 'We design your entire digital nervous system.',
  },
  {
    icon: Hammer,
    title: 'Full Buildout',
    description: 'We assemble & manage the team to build your platform or ecosystem.',
  },
  {
    icon: Infinity,
    title: 'Evolution Partnership',
    description: 'Fractional CTO / AI Architect for transformational institutions.',
  },
  {
    icon: Compass,
    title: 'Advisory & Future Vision',
    description: 'AI + pedagogy + spiritual wisdom → next-generation learning models.',
  },
];

const EngagementModels = () => {
  return (
    <section id="engagement" className="py-24 bg-gradient-to-b from-deep-space via-space-dark to-deep-space relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-astral-violet/10 rounded-full filter blur-[150px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-electric-cyan/10 rounded-full filter blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-electric-cyan uppercase tracking-wider mb-3">
              How We Work Together
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Engagement Models
            </h2>
            <p className="text-gray-400">
              Premium, custom, global-ready.
            </p>
          </div>

          {/* Engagement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {engagements.map((engagement) => (
              <div
                key={engagement.title}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-astral-violet/50 hover:bg-white/10 transition-all duration-300 p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-astral-violet to-electric-cyan rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <engagement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {engagement.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {engagement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <a
              href="https://wa.me/34611144170?text=Hi!%20I'd%20like%20to%20explore%20collaboration%20on%20AI%20systems%20for%20our%20transformational%20platform."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-astral-violet text-white font-bold rounded-xl hover:bg-astral-violet/90 hover:shadow-lg hover:shadow-astral-violet/50 transform hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Explore Collaboration</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;

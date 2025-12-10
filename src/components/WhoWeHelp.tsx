import { BookOpen, Sparkles, Globe, Home, Heart } from 'lucide-react';

const audiences = [
  {
    icon: BookOpen,
    title: 'Transformational Educators & Global Teachers',
    description: 'Authors, guides, mystics, facilitators, mentors, thought leaders, modality creators.',
  },
  {
    icon: Sparkles,
    title: 'Spiritual & Consciousness Schools',
    description: 'Yoga, tantra, meditation, breathwork, esoteric, mystery traditions, wisdom academies.',
  },
  {
    icon: Globe,
    title: 'Transformational Education Platforms',
    description: 'Mindvalley, Gaia, coaching platforms, online academies, retreat-lineage schools.',
  },
  {
    icon: Home,
    title: 'Retreat Centers & Hybrid Learning Spaces',
    description: 'Where in-person work merges with digital transformation.',
  },
  {
    icon: Heart,
    title: 'Coaches, Healers & Visionary Creators',
    description: 'Those bringing powerful teachings to an expanding global audience.',
  },
];

const WhoWeHelp = () => {
  return (
    <section id="who-we-help" className="py-24 bg-gradient-to-b from-deep-space via-space-dark to-deep-space relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-astral-violet/15 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-electric-cyan/10 rounded-full filter blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-electric-cyan uppercase tracking-wider mb-3">
              Who We Serve
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Who We Help
            </h2>
          </div>

          {/* Audience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-astral-violet/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-astral-violet to-electric-cyan rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <audience.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {audience.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="text-center">
            <p className="text-xl text-gray-300">
              Whether you guide 10 people or 10 million,
            </p>
            <p className="text-xl text-electric-cyan font-medium">
              we build the systems that support your evolution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;

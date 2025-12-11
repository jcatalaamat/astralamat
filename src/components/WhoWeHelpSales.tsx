import { Heart, Sparkles, Users, Mountain, GraduationCap, Lightbulb } from 'lucide-react';

const audiences = [
  {
    icon: Heart,
    title: 'Coaches & Therapists',
    description: 'Life coaches, executive coaches, relationship coaches, therapists, and counselors.',
  },
  {
    icon: Sparkles,
    title: 'Healers & Energy Practitioners',
    description: 'Reiki masters, energy healers, sound therapists, and holistic practitioners.',
  },
  {
    icon: Users,
    title: 'Teachers, Guides & Facilitators',
    description: 'Workshop leaders, group facilitators, spiritual teachers, and mentors.',
  },
  {
    icon: Mountain,
    title: 'Retreat Leaders & Yoga Studios',
    description: 'Retreat organizers, yoga teachers, studio owners, and wellness center directors.',
  },
  {
    icon: GraduationCap,
    title: 'Small Transformational Schools',
    description: 'Training programs, certification courses, and educational communities.',
  },
  {
    icon: Lightbulb,
    title: 'Founders with Conscious Tech Visions',
    description: 'Entrepreneurs building purpose-driven digital products and platforms.',
  },
];

const WhoWeHelpSales = () => {
  return (
    <section id="who-we-help" className="py-24 bg-gradient-to-b from-deep-space via-space-dark to-deep-space relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-astral-violet/15 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-electric-cyan/10 rounded-full filter blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-electric-cyan uppercase tracking-wider mb-3">
              Who We Help
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Designed for People Who{' '}
              <span className="bg-gradient-to-r from-astral-violet to-electric-cyan bg-clip-text text-transparent">
                Transform Others
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              If your work helps people grow — our systems help you scale.
            </p>
          </div>

          {/* Audiences Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-astral-violet/50 hover:bg-white/10 transition-all duration-300 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-astral-violet to-electric-cyan rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <audience.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {audience.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="text-center mt-16">
            <p className="text-xl text-gray-300">
              You bring the <span className="text-electric-cyan font-medium">wisdom</span>.
            </p>
            <p className="text-xl text-gray-300">
              We build the <span className="text-astral-violet font-medium">infrastructure</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSales;

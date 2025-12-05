import { Leaf, Wine, Mic, FlaskConical } from 'lucide-react';

const examples = [
  {
    icon: Leaf,
    title: 'For a Yoga Teacher',
    items: ['Booking system', 'Client journey', 'Course portal', 'Personalized AI practice guide'],
    color: 'green',
  },
  {
    icon: Wine,
    title: 'For a Winery or Restaurant',
    items: ['Reservation engine', 'Menu system', 'Automated customer replies', 'Loyalty program'],
    color: 'purple',
  },
  {
    icon: Mic,
    title: 'For a Creator',
    items: ['Membership platform', 'AI content engine', 'Digital product suite', 'Funnel + onboarding automation'],
    color: 'cyan',
  },
  {
    icon: FlaskConical,
    title: 'For a Startup Founder',
    items: ['Full MVP', 'UX + architecture', 'Dev team coordination', 'Launch support'],
    color: 'pink',
  },
];

const Examples = () => {
  return (
    <section id="examples" className="py-24 bg-gradient-to-b from-deep-space via-space-dark to-deep-space relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-electric-cyan/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-astral-violet/10 rounded-full filter blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Examples of What We Build
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real scenarios, real solutions
            </p>
          </div>

          {/* Examples Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examples.map((example) => (
              <div
                key={example.title}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-astral-violet/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-astral-violet to-electric-cyan rounded-xl flex items-center justify-center flex-shrink-0">
                    <example.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {example.title}
                    </h3>
                    <ul className="space-y-2">
                      {example.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                          <span className="text-electric-cyan">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;

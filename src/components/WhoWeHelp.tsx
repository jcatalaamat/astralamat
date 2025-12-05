import { Mic, Leaf, Store, Rocket, ImageIcon } from 'lucide-react';

const audiences = [
  {
    icon: Mic,
    title: 'Creators & Entrepreneurs',
    description: 'Memberships, apps, AI tools, content engines, funnels, digital offerings.',
    image: '/images/audience-creators.jpg',
    imageAlt: 'Creator working on digital products',
  },
  {
    icon: Leaf,
    title: 'Wellness & Holistic Leaders',
    description: 'Teaching portals, booking flows, personalized AI guides, community spaces.',
    image: '/images/audience-wellness.jpg',
    imageAlt: 'Wellness practitioner in their space',
  },
  {
    icon: Store,
    title: 'Local Businesses & Shops',
    description: 'Booking systems, automations, customer flows, operational tools.',
    image: '/images/audience-business.jpg',
    imageAlt: 'Local business owner',
  },
  {
    icon: Rocket,
    title: 'Startups & Small Teams',
    description: 'MVPs, product direction, fast execution, fractional product leadership.',
    image: '/images/audience-startup.jpg',
    imageAlt: 'Startup team collaborating',
  },
];

const WhoWeHelp = () => {
  return (
    <section id="who-we-help" className="py-24 bg-gradient-to-b from-deep-space via-space-dark to-deep-space relative overflow-hidden">
      {/* Subtle gradient orbs - clean, no animated stars */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-astral-violet/15 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-electric-cyan/10 rounded-full filter blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Who We Help
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From solo creators to growing teams — we build products for people ready to bring their ideas to life
            </p>
          </div>

          {/* Audience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="group overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-astral-violet/50 hover:bg-white/10 transition-all duration-300"
              >
                {/* Image Area */}
                <div className="relative h-48 bg-gradient-to-br from-space-dark to-deep-space overflow-hidden">
                  <img
                    src={audience.image}
                    alt={audience.imageAlt}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback placeholder when image not found */}
                  <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-astral-violet/20 to-electric-cyan/20">
                    <ImageIcon className="w-12 h-12 text-white/30" />
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-astral-violet to-electric-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                      <audience.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {audience.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {audience.description}
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

export default WhoWeHelp;

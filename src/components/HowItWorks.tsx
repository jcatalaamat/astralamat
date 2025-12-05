import { MessageCircle, Map, Users, ClipboardCheck, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Share Your Idea',
    description: 'No tech skills needed. Just tell us what you want to create.',
  },
  {
    number: '02',
    icon: Map,
    title: 'We Map It Out',
    description: 'A simple plan showing features, flow, tools, timeline, and costs.',
  },
  {
    number: '03',
    icon: Users,
    title: 'We Assemble the Team',
    description: 'Top freelancers + specialists (design, dev, AI, automation).',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'We Manage Everything',
    description: 'We handle the meetings, tasks, timelines, and QA.',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'You Get Your Product',
    description: 'Delivered fast. Fully documented. Supported as you grow.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-deep-space via-space-dark to-deep-space relative overflow-hidden">
      {/* Subtle gradient orbs - no animated stars */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-astral-violet/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-electric-cyan/10 rounded-full filter blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From idea to launched product in 5 simple steps
            </p>
          </div>

          {/* Steps - Vertical on mobile, horizontal on desktop */}
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-5 md:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-astral-violet to-electric-cyan opacity-30" />
                )}

                <div className="text-center">
                  {/* Icon */}
                  <div className="relative z-10 mx-auto mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-astral-violet to-electric-cyan rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-astral-violet/20">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Step Number */}
                  <span className="text-xs font-bold text-electric-cyan mb-2 block">
                    STEP {step.number}
                  </span>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-astral-violet to-electric-cyan rounded-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

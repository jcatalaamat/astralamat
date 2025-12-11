import { Zap, Clock, Heart, Globe, Sparkles, Shield } from 'lucide-react';

const benefits = [
  { icon: Zap, text: 'Run your business on autopilot' },
  { icon: Heart, text: 'Deliver deeper client experiences' },
  { icon: Globe, text: 'Scale your reach without burnout' },
  { icon: Clock, text: 'Save hours every week' },
  { icon: Sparkles, text: 'Offer a premium, modern digital experience' },
  { icon: Shield, text: 'Focus on your genius — not tech' },
];

const ValueProposition = () => {
  return (
    <section className="py-20 bg-soft-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Message */}
          <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
            You already guide people through powerful transformation.
          </p>
          <p className="text-xl md:text-2xl text-space-dark font-medium mb-12 leading-relaxed">
            Now you need systems that{' '}
            <span className="text-astral-violet">amplify your impact</span>, not drain your energy.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit) => (
              <div
                key={benefit.text}
                className="flex flex-col items-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-astral-violet/30 transition-all"
              >
                <benefit.icon className="w-8 h-8 text-astral-violet mb-3" />
                <p className="text-sm md:text-base text-gray-700 text-center">{benefit.text}</p>
              </div>
            ))}
          </div>

          {/* Intro Statement */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <span className="font-bold text-space-dark">Astral Integration</span> builds custom AI-powered ecosystems so you can focus on what matters most —
              <span className="text-astral-violet font-medium"> your clients and your mission</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

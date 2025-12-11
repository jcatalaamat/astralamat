import { useState } from 'react';
import { Cpu, Brain, Sparkles, Heart, Settings, Zap } from 'lucide-react';

const expertise = [
  { icon: Cpu, text: 'AI architecture' },
  { icon: Brain, text: 'Learning design' },
  { icon: Sparkles, text: 'Automation' },
  { icon: Heart, text: 'Human development' },
  { icon: Settings, text: 'Business systems' },
  { icon: Zap, text: 'Intentional tech' },
];

const FounderSales = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-24 bg-soft-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-astral-violet uppercase tracking-wider mb-3">
              About
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-space-dark mb-4">
              About the Founder
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Photo - with fallback to initials */}
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg shadow-astral-violet/20">
                  {!imageError ? (
                    <img
                      src="/images/founder-jordi.jpg"
                      alt="Jordi Amat - AI Systems Engineer"
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-astral-violet via-electric-cyan to-astral-violet flex items-center justify-center">
                      <span className="text-4xl md:text-5xl font-bold text-white">JA</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bio */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-space-dark mb-2">
                  Jordi Amat
                </h3>
                <p className="text-astral-violet font-medium mb-4">
                  AI Systems Engineer & Transformation Architect
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  I design intelligent systems for coaches, healers, teachers, and transformational creators who want to scale their work with clarity, precision, and integrity.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  My mission is simple: <span className="text-astral-violet font-medium">Let you stay in your genius while your systems do the heavy lifting.</span>
                </p>
              </div>
            </div>

            {/* What I Combine */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-center text-gray-500 text-sm mb-6">My work bridges</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {expertise.map((item) => (
                  <div key={item.text} className="text-center p-3">
                    <item.icon className="w-5 h-5 text-astral-violet mx-auto mb-2" />
                    <p className="text-xs text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSales;

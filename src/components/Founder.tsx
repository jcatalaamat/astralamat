import { useState } from 'react';
import { Sparkles, Code2, Users, Brain } from 'lucide-react';

const Founder = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-24 bg-soft-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-space-dark mb-4">
              About Astral Integration
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
                      alt="Jordi Amat - Founder"
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
                <p className="text-sm text-astral-violet font-medium mb-2">Founded by</p>
                <h3 className="text-2xl md:text-3xl font-bold text-space-dark mb-2">
                  Jordi Amat
                </h3>
                <p className="text-astral-violet font-medium mb-4">
                  Integration Architect
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  I help people bring their ideas into the world — not through complexity, but through clarity, structure, and care.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  You don't need to manage a team or learn the technology. You just need someone who can see what you're building — and bring it into form. That's what I do.
                </p>
              </div>
            </div>

            {/* What I Combine */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-center text-gray-500 text-sm mb-6">What I bring to every project</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4">
                  <Code2 className="w-6 h-6 text-electric-cyan mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Modern Product Strategy</p>
                </div>
                <div className="text-center p-4">
                  <Users className="w-6 h-6 text-astral-violet mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Global Talent Networks</p>
                </div>
                <div className="text-center p-4">
                  <Brain className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">AI-Powered Possibilities</p>
                </div>
                <div className="text-center p-4">
                  <Sparkles className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Human-Centered Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;

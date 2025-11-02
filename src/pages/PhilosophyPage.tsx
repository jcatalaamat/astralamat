import { useState, useEffect } from 'react';
import SacredMandala from '../components/SacredMandala';
import enTranslations from '../translations/en.json';
import esTranslations from '../translations/es.json';
import caTranslations from '../translations/ca.json';

export default function PhilosophyPage() {
  const [language, setLanguage] = useState<'en' | 'es' | 'ca'>('en');

  const t = language === 'es' ? esTranslations : language === 'ca' ? caTranslations : enTranslations;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-breathe"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Page Header */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Philosophy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Where code meets consciousness - a methodology for the new era
            </p>
          </div>
        </section>

        {/* Sacred Mandala */}
        <section className="py-16">
          <SacredMandala language={language} translations={t} />
        </section>

        {/* Philosophy Deep Dive */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Integration Philosophy */}
            <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                The Integration Principle
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                True innovation emerges at the intersection of seemingly opposite forces. Technology and consciousness,
                logic and intuition, structure and flow - these are not contradictions but complementary forces that,
                when integrated, create solutions far more powerful than either could achieve alone.
              </p>
              <p className="text-gray-300 text-lg">
                This philosophy guides every project, every line of code, every strategic decision. It's not about
                choosing between technical excellence and human-centered design - it's about achieving both through
                conscious integration.
              </p>
            </div>

            {/* Dual Nature Methodology */}
            <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dual Nature Methodology
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-3">Technical Excellence</h3>
                  <p className="text-gray-300 text-lg">
                    Mastery of cutting-edge technologies, architectural best practices, and scalable solutions.
                    Every system is built on solid foundations of clean code, robust testing, and performance optimization.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-purple-400 mb-3">Conscious Leadership</h3>
                  <p className="text-gray-300 text-lg">
                    Understanding that technology serves humanity. Leading with awareness, empathy, and purpose.
                    Creating solutions that honor both user needs and the broader impact on communities and ecosystems.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-gradient-to-r from-pink-500/10 via-cyan-500/10 to-purple-500/10 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Core Values
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">Innovation with Purpose</h3>
                  <p className="text-gray-300">Technology that serves a meaningful vision, not innovation for its own sake.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">Holistic Design</h3>
                  <p className="text-gray-300">Solutions that consider the full spectrum of technical, human, and environmental impact.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pink-400 mb-2">Continuous Evolution</h3>
                  <p className="text-gray-300">Embracing growth, learning, and adaptation as fundamental to excellence.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">Authentic Collaboration</h3>
                  <p className="text-gray-300">Building with integrity, transparency, and genuine partnership at the core.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

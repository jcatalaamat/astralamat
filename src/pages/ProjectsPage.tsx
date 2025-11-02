import { useState, useEffect } from 'react';
import ProjectsShowcase from '../components/ProjectsShowcase';
import FourEcosystems from '../components/ThreeEcosystems';
import enTranslations from '../translations/en.json';
import esTranslations from '../translations/es.json';
import caTranslations from '../translations/ca.json';

export default function ProjectsPage() {
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
                Projects
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              A portfolio of transformative projects spanning blockchain, web3, SaaS, and mobile innovation
            </p>
          </div>
        </section>

        {/* Projects Showcase */}
        <section id="projects" className="py-16">
          <ProjectsShowcase language={language} translations={t} />
        </section>

        {/* Ecosystems */}
        <section id="ecosystems" className="py-16">
          <FourEcosystems language={language} />
        </section>

        {/* Additional Context */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Building the Future
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Each project represents a unique intersection of technical innovation and conscious design.
                From decentralized platforms to mobile experiences, every solution is crafted with attention
                to both functionality and user experience.
              </p>
              <p className="text-gray-300 text-lg">
                Interested in collaborating on your next project? Let's create something extraordinary together.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

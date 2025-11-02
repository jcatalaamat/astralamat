import { useEffect } from 'react';
import DualTimeline from '../components/DualTimeline';
import QuadrantMastery from '../components/QuadrantMastery';
import SacredMandala from '../components/SacredMandala';
import enTranslations from '../translations/en.json';
import esTranslations from '../translations/es.json';
import caTranslations from '../translations/ca.json';

interface AboutPageProps {
  language?: 'en' | 'es' | 'ca';
}

export default function AboutPage({ language = 'en' }: AboutPageProps) {
  const t = language === 'es' ? esTranslations : language === 'ca' ? caTranslations : enTranslations;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
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
              <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {language === 'en' && 'About Me'}
                {language === 'es' && 'Sobre Mi'}
                {language === 'ca' && 'Sobre Mi'}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto">
              {language === 'en' && 'A journey through code and consciousness, technical excellence and holistic awareness'}
              {language === 'es' && 'Un viaje a través del código y la conciencia, excelencia técnica y conciencia holística'}
              {language === 'ca' && 'Un viatge a través del codi i la consciència, excel·lència tècnica i consciència holística'}
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-16">
          <DualTimeline language={language} translations={t} />
        </section>

        {/* Skills */}
        <section id="skills" className="py-16">
          <QuadrantMastery language={language} translations={t} />
        </section>

        {/* Philosophy */}
        <section id="philosophy" className="py-16">
          <SacredMandala language={language} translations={t} />
        </section>
      </div>
    </div>
  );
}

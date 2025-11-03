import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DualTimeline from '../components/DualTimeline';
import QuadrantMastery from '../components/QuadrantMastery';
import SacredMandala from '../components/SacredMandala';
import enTranslations from '../translations/en.json';
import esTranslations from '../translations/es.json';
import caTranslations from '../translations/ca.json';
import { trackCTAClick } from '../utils/analytics';

interface AboutPageProps {
  language?: 'en' | 'es' | 'ca';
}

export default function AboutPage({ language = 'en' }: AboutPageProps) {
  const navigate = useNavigate();
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

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-100/30 via-purple-100/30 to-pink-100/30 rounded-2xl p-12 backdrop-blur-sm border border-black/10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                {language === 'en' && 'Ready to Work Together?'}
                {language === 'es' && '¿Listo para Trabajar Juntos?'}
                {language === 'ca' && 'Preparat per Treballar Junts?'}
              </h2>
              <p className="text-zinc-700 text-lg mb-8 max-w-2xl mx-auto">
                {language === 'en' && "Let's transform your vision into reality with technical excellence and conscious design."}
                {language === 'es' && 'Transformemos tu visión en realidad con excelencia técnica y diseño consciente.'}
                {language === 'ca' && 'Transformem la teva visió en realitat amb excel·lència tècnica i disseny conscient.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const buttonLabel = language === 'en' ? 'Get in Touch' : language === 'es' ? 'Contactar' : 'Contacta';
                    trackCTAClick(buttonLabel, '/about', '/contact');
                    navigate('/contact');
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300 transform hover:scale-105"
                >
                  {language === 'en' && 'Get in Touch'}
                  {language === 'es' && 'Contactar'}
                  {language === 'ca' && 'Contacta'}
                </button>
                <button
                  onClick={() => {
                    const buttonLabel = language === 'en' ? 'View My Work' : language === 'es' ? 'Ver Mi Trabajo' : 'Veure el Meu Treball';
                    trackCTAClick(buttonLabel, '/about', '/projects');
                    navigate('/projects');
                  }}
                  className="px-8 py-4 bg-white border-2 border-purple-600 rounded-full font-semibold text-purple-600 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
                >
                  {language === 'en' && 'View My Work'}
                  {language === 'es' && 'Ver Mi Trabajo'}
                  {language === 'ca' && 'Veure el Meu Treball'}
                </button>
                <a
                  href="/Jordi-Amat-CV.pdf"
                  download
                  onClick={() => {
                    const buttonLabel = language === 'en' ? 'Download CV' : language === 'es' ? 'Descargar CV' : 'Descarregar CV';
                    trackCTAClick(buttonLabel, '/about', '/Jordi-Amat-CV.pdf');
                  }}
                  className="px-8 py-4 bg-white border-2 border-cyan-600 rounded-full font-semibold text-cyan-600 hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105 inline-block"
                >
                  {language === 'en' && 'Download CV'}
                  {language === 'es' && 'Descargar CV'}
                  {language === 'ca' && 'Descarregar CV'}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

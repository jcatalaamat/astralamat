import { useState, useEffect } from 'react';
import { ChevronDown, Code2, Sparkles } from 'lucide-react';
import { colors } from '../styles/colors';

interface IntegratedHeroProps {
  language: 'en' | 'es' | 'ca';
  translations: any;
}

const IntegratedHero = ({ language, translations }: IntegratedHeroProps) => {
  const t = translations.hero;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById('experience');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Sacred Geometry Background */}
      <div className="absolute inset-0 opacity-30">
        {/* Animated mesh gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '7s'}}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '9s', animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '11s', animationDelay: '4s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '13s', animationDelay: '6s'}}></div>
      </div>

      {/* Purple spotlight following mouse */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`
        }}
      />

      {/* Sacred geometry grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sacred-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="currentColor" className="text-purple-400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sacred-grid)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className={`relative z-10 container mx-auto px-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">

          {/* Dual Identity Header */}
          <div className="text-center mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-6">
              {/* Technical Identity */}
              <div className="flex items-center gap-3 group">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${colors.tech.gradients.main} opacity-90 group-hover:opacity-100 transition-opacity`}>
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h1 className={`text-4xl md:text-6xl font-bold bg-gradient-to-r ${colors.tech.gradients.light} bg-clip-text text-transparent`}>
                  JORDI AMAT
                </h1>
              </div>

              {/* Divider */}
              <div className="hidden md:block">
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"></div>
              </div>

              {/* Spiritual Identity */}
              <div className="flex items-center gap-3 group">
                <h1 className={`text-4xl md:text-6xl font-bold bg-gradient-to-r ${colors.spirit.gradients.light} bg-clip-text text-transparent`}>
                  ASTRAL AMAT
                </h1>
                <div className={`p-3 rounded-xl bg-gradient-to-r ${colors.spirit.gradients.main} opacity-90 group-hover:opacity-100 transition-opacity`}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Main Tagline */}
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              {language === 'en' && 'Where Code Meets Consciousness'}
              {language === 'es' && 'Donde el Código Encuentra la Consciencia'}
              {language === 'ca' && 'On el Codi Troba la Consciència'}
            </h2>

            {/* Subtitle with dual nature */}
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                {t.tagline}
              </p>
            </div>
          </div>

          {/* Dual Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Technical Mastery Card */}
            <div className="relative group">
              <div className={`absolute -inset-1 bg-gradient-to-r ${colors.tech.gradients.main} rounded-2xl blur opacity-20 group-hover:opacity-30 transition`}></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">
                    {language === 'en' && 'Technical Excellence'}
                    {language === 'es' && 'Excelencia Técnica'}
                    {language === 'ca' && 'Excel·lència Tècnica'}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {language === 'en' && '10+ years architecting scalable systems. From React Native to blockchain DAOs. CTO-level technical leadership with a track record of shipping products that scale.'}
                  {language === 'es' && '10+ años arquitectando sistemas escalables. De React Native a DAOs blockchain. Liderazgo técnico nivel CTO con historial de productos que escalan.'}
                  {language === 'ca' && '10+ anys arquitectant sistemes escalables. De React Native a DAOs blockchain. Lideratge tècnic nivell CTO amb historial de productes que escalen.'}
                </p>
              </div>
            </div>

            {/* Conscious Integration Card */}
            <div className="relative group">
              <div className={`absolute -inset-1 bg-gradient-to-r ${colors.spirit.gradients.main} rounded-2xl blur opacity-20 group-hover:opacity-30 transition`}></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">
                    {language === 'en' && 'Holistic Awareness'}
                    {language === 'es' && 'Consciencia Holística'}
                    {language === 'ca' && 'Consciència Holística'}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {language === 'en' && '5+ years of deep inner work. Systems thinking meets spiritual practice. I build technology that serves human flourishing, not just business metrics.'}
                  {language === 'es' && '5+ años de trabajo interior profundo. Pensamiento sistémico encuentra práctica espiritual. Construyo tecnología que sirve al florecimiento humano, no solo métricas.'}
                  {language === 'ca' && '5+ anys de treball interior profund. Pensament sistèmic troba pràctica espiritual. Construeixo tecnologia que serveix el florixement humà, no només mètriques.'}
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button
              onClick={scrollToContent}
              className={`group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${colors.integrated.gradients.fullSpectrum} text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all`}
            >
              <span>
                {language === 'en' && 'Explore the Journey'}
                {language === 'es' && 'Explora el Viaje'}
                {language === 'ca' && 'Explora el Viatge'}
              </span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-purple-400 opacity-50" />
      </div>
    </section>
  );
};

export default IntegratedHero;

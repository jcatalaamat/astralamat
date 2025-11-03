import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectsShowcase from '../components/ProjectsShowcase';
import FourEcosystems from '../components/ThreeEcosystems';
import enTranslations from '../translations/en.json';
import esTranslations from '../translations/es.json';
import caTranslations from '../translations/ca.json';

interface ProjectsPageProps {
  language?: 'en' | 'es' | 'ca';
  onLanguageChange?: (lang: 'en' | 'es' | 'ca') => void;
}

export default function ProjectsPage({ language = 'en', onLanguageChange: _onLanguageChange }: ProjectsPageProps = {}) {
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
                Projects
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto">
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
            <div className="bg-gradient-to-r from-cyan-100/30 via-purple-100/30 to-pink-100/30 rounded-2xl p-12 backdrop-blur-sm border border-black/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                {language === 'en' && 'Building the Future'}
                {language === 'es' && 'Construyendo el Futuro'}
                {language === 'ca' && 'Construint el Futur'}
              </h2>
              <p className="text-zinc-700 text-lg mb-6">
                {language === 'en' && 'Each project represents a unique intersection of technical innovation and conscious design. From decentralized platforms to mobile experiences, every solution is crafted with attention to both functionality and user experience.'}
                {language === 'es' && 'Cada proyecto representa una intersección única de innovación técnica y diseño consciente. Desde plataformas descentralizadas hasta experiencias móviles, cada solución se elabora con atención tanto a la funcionalidad como a la experiencia del usuario.'}
                {language === 'ca' && 'Cada projecte representa una intersecció única d\'innovació tècnica i disseny conscient. Des de plataformes descentralitzades fins a experiències mòbils, cada solució s\'elabora amb atenció tant a la funcionalitat com a l\'experiència de l\'usuari.'}
              </p>
              <p className="text-zinc-700 text-lg mb-8">
                {language === 'en' && "Interested in collaborating on your next project? Let's create something extraordinary together."}
                {language === 'es' && '¿Interesado en colaborar en tu próximo proyecto? Creemos algo extraordinario juntos.'}
                {language === 'ca' && 'Interessat en col·laborar en el teu proper projecte? Creem alguna cosa extraordinària junts.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300 transform hover:scale-105"
                >
                  {language === 'en' && 'Start Your Project'}
                  {language === 'es' && 'Inicia Tu Proyecto'}
                  {language === 'ca' && 'Inicia el Teu Projecte'}
                </button>
                <button
                  onClick={() => navigate('/services')}
                  className="px-8 py-4 bg-white border-2 border-purple-600 rounded-full font-semibold text-purple-600 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
                >
                  {language === 'en' && 'View Services'}
                  {language === 'es' && 'Ver Servicios'}
                  {language === 'ca' && 'Veure Serveis'}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

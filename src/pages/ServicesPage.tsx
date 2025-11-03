import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, Zap, Rocket, Database, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import enTranslations from '../translations/en.json';
import esTranslations from '../translations/es.json';
import caTranslations from '../translations/ca.json';
import { trackCTAClick } from '../utils/analytics';

interface ServicesPageProps {
  language?: 'en' | 'es' | 'ca';
  onLanguageChange?: (language: 'en' | 'es' | 'ca') => void;
}

export default function ServicesPage({ language = 'en', onLanguageChange: _onLanguageChange }: ServicesPageProps) {
  const navigate = useNavigate();

  const t = language === 'es' ? esTranslations : language === 'ca' ? caTranslations : enTranslations;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceIcons = [<Code2 className="w-8 h-8" />, <Zap className="w-8 h-8" />, <TrendingUp className="w-8 h-8" />, <Database className="w-8 h-8" />, <Users className="w-8 h-8" />];

  const productGradients = [
    { gradient: 'from-cyan-500/10 to-blue-500/10', borderColor: 'border-cyan-500/20 hover:border-cyan-500/40' },
    { gradient: 'from-purple-500/10 to-pink-500/10', borderColor: 'border-purple-500/20 hover:border-purple-500/40' },
    { gradient: 'from-pink-500/10 to-cyan-500/10', borderColor: 'border-pink-500/20 hover:border-pink-500/40' },
    { gradient: 'from-blue-500/10 to-purple-500/10', borderColor: 'border-blue-500/20 hover:border-blue-500/40' },
    { gradient: 'from-cyan-500/10 to-purple-500/10', borderColor: 'border-cyan-500/20 hover:border-cyan-500/40' }
  ];

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
                {t.servicesPage.header.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto mb-8">
              {t.servicesPage.header.subtitle}
            </p>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
              {t.servicesPage.header.description}
            </p>
          </div>
        </section>

        {/* Small Business Services */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  {t.servicesPage.smallBusiness.title}
                </span>
              </h2>
              <p className="text-zinc-600 text-lg max-w-2xl mx-auto mb-4">
                {t.servicesPage.smallBusiness.subtitle}
              </p>
              <div className="inline-block bg-cyan-100 border border-cyan-500/30 rounded-full px-6 py-2">
                <span className="text-cyan-700 font-semibold text-lg">
                  {t.servicesPage.smallBusiness.priceRange}
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.servicesPage.smallBusiness.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-100/50 to-blue-100/50 rounded-2xl p-6 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 flex flex-col"
                >
                  <div className="text-cyan-600 mb-4">{serviceIcons[index]}</div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{service.title}</h3>
                  <p className="text-zinc-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4 flex-grow">
                    {service.examples.map((example, exIndex) => (
                      <div key={exIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
                        <span className="text-sm text-zinc-500">{example}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => navigate('/projects')}
                    className="mt-auto text-cyan-600 hover:text-cyan-700 text-sm font-semibold flex items-center gap-1 group"
                  >
                    {language === 'en' && 'View Related Projects'}
                    {language === 'es' && 'Ver Proyectos Relacionados'}
                    {language === 'ca' && 'Veure Projectes Relacionats'}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standalone Products */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-100/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {t.servicesPage.standaloneProducts.title}
                </span>
              </h2>
              <p className="text-zinc-600 text-lg max-w-2xl mx-auto mb-4">
                {t.servicesPage.standaloneProducts.subtitle}
              </p>
              <div className="inline-block bg-purple-100 border border-purple-500/30 rounded-full px-6 py-2">
                <span className="text-purple-700 font-semibold text-lg">
                  {t.servicesPage.standaloneProducts.priceRange}
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.servicesPage.standaloneProducts.products.map((product, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${productGradients[index].gradient} rounded-2xl p-6 backdrop-blur-sm border ${productGradients[index].borderColor} transition-all duration-300 transform hover:scale-105 flex flex-col`}
                >
                  <div className="text-4xl mb-4">
                    <Rocket className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{product.title}</h3>
                  <p className="text-zinc-600 mb-4 flex-grow">{product.description}</p>
                  <button
                    onClick={() => navigate('/projects')}
                    className="mt-auto text-purple-600 hover:text-purple-700 text-sm font-semibold flex items-center gap-1 group"
                  >
                    {language === 'en' && 'View Examples'}
                    {language === 'es' && 'Ver Ejemplos'}
                    {language === 'ca' && 'Veure Exemples'}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Capabilities */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {t.servicesPage.capabilities.title}
                </span>
              </h2>
              <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                {t.servicesPage.capabilities.subtitle}
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-100/30 via-purple-100/30 to-pink-100/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-300/30">
              <div className="grid md:grid-cols-2 gap-4">
                {t.servicesPage.capabilities.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                    <span className="text-zinc-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Skip */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-100/50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-100/50 to-gray-200/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-400/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                <span className="text-zinc-600">{t.servicesPage.skip.title}</span>
              </h3>
              <p className="text-zinc-600 text-center mb-6">
                {t.servicesPage.skip.subtitle}
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-zinc-500">
                {t.servicesPage.skip.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-red-600">✗</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                  {t.servicesPage.process.title}
                </span>
              </h2>
              <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                {t.servicesPage.process.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.servicesPage.process.steps.map((step, index) => {
                const gradients = [
                  'from-cyan-600 to-blue-600',
                  'from-purple-600 to-pink-600',
                  'from-pink-600 to-cyan-600'
                ];
                return (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${gradients[index]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">{step.title}</h3>
                    <p className="text-zinc-600">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-100/30 via-purple-100/30 to-pink-100/30 rounded-2xl p-12 backdrop-blur-sm border border-gray-300/30 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                {t.servicesPage.cta.title}
              </h2>
              <p className="text-zinc-600 text-lg mb-8">
                {t.servicesPage.cta.description}
              </p>
              <button
                onClick={() => {
                  trackCTAClick(t.servicesPage.cta.button, '/services', '/contact');
                  navigate('/contact');
                }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300 transform hover:scale-105"
              >
                {t.servicesPage.cta.button}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

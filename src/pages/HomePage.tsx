import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import IntegratedHero from '../components/IntegratedHero';
import AboutPreview from '../components/AboutPreview';
import ServicesPreview from '../components/ServicesPreview';
import ProjectsPreview from '../components/ProjectsPreview';
import InvestmentCTA from '../components/InvestmentCTA';
import ContactSection from '../components/ContactSection';
import enTranslations from '../translations/en.json';
import esTranslations from '../translations/es.json';
import caTranslations from '../translations/ca.json';

export default function HomePage() {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState<'en' | 'es' | 'ca'>('en');

  const t = language === 'es' ? esTranslations : language === 'ca' ? caTranslations : enTranslations;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated mesh background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '7s'}}></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '9s', animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '11s', animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '13s', animationDelay: '6s'}}></div>
      </div>

      {/* Mouse spotlight effect */}
      <div className="fixed inset-0 pointer-events-none" style={spotlightStyle}></div>

      {/* Grid overlay */}
      <div className="fixed inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <IntegratedHero language={language} translations={t} />

        {/* About Preview */}
        <AboutPreview />

        {/* Services Preview */}
        <ServicesPreview />

        {/* Projects Preview */}
        <ProjectsPreview />

        {/* Philosophy CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  A Philosophy of Integration
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Discover the methodology that unites technical excellence with conscious awareness,
                creating solutions that honor both innovation and humanity.
              </p>
              <button
                onClick={() => navigate('/philosophy')}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Explore the Philosophy
              </button>
            </div>
          </div>
        </section>

        {/* Investment CTA */}
        <InvestmentCTA language={language} translations={t} />

        {/* Contact Section */}
        <ContactSection language={language} translations={t} />
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import { Code2, Globe, ArrowRight, Briefcase, Rocket, TrendingUp, Menu, X } from 'lucide-react';
import enTranslations from './translations/en.json';
import esTranslations from './translations/es.json';
import caTranslations from './translations/ca.json';
import EventPreview from './components/EventPreview';
import PlacePreview from './components/PlacePreview';
import SupportPage from './components/SupportPage';
import PrivacyPage from './components/PrivacyPage';
import SkillsSection from './components/SkillsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsShowcase from './components/ProjectsShowcase';
import ServicesSection from './components/ServicesSection';
import InvestmentCTA from './components/InvestmentCTA';
import ContactSection from './components/ContactSection';
import PhilosophySection from './components/PhilosophySection';
import IntegratedHero from './components/IntegratedHero';
import DualTimeline from './components/DualTimeline';
import QuadrantMastery from './components/QuadrantMastery';
import SacredMandala from './components/SacredMandala';
import ThreeEcosystems from './components/ThreeEcosystems';

// Main Landing Page Component
function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState<'en' | 'es' | 'ca'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Code2 className="w-8 h-8 text-cyan-400" />
                  <div className="absolute -top-1 -right-1 w-3 h-3">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-sm opacity-70"></div>
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Astral Amat
                </span>
              </div>

              {/* Nav Links - Hidden on mobile */}
              <div className="hidden md:flex items-center gap-6">
                <button onClick={() => scrollToSection('experience')} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t.navigation.experience}
                </button>
                <button onClick={() => scrollToSection('skills')} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t.navigation.skills}
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t.navigation.projects}
                </button>
                <button onClick={() => scrollToSection('philosophy')} className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Philosophy
                </button>
                <button onClick={() => scrollToSection('ecosystems')} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Ecosystem
                </button>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t.navigation.services}
                </button>
                <button onClick={() => scrollToSection('contact')} className="px-5 py-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm">
                  {t.navigation.contact}
                </button>
              </div>

              {/* Right side controls - Language + Mobile Menu */}
              <div className="flex items-center gap-4">
                {/* Language Toggle */}
                <button
                  onClick={() => setLanguage(language === 'en' ? 'es' : language === 'es' ? 'ca' : 'en')}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{language === 'en' ? 'EN' : language === 'es' ? 'ES' : 'CA'}</span>
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 space-y-3 border-t border-white/10">
                <button
                  onClick={() => {
                    scrollToSection('experience');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors"
                >
                  {t.navigation.experience}
                </button>
                <button
                  onClick={() => {
                    scrollToSection('skills');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors"
                >
                  {t.navigation.skills}
                </button>
                <button
                  onClick={() => {
                    scrollToSection('projects');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors"
                >
                  {t.navigation.projects}
                </button>
                <button
                  onClick={() => {
                    scrollToSection('philosophy');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Philosophy
                </button>
                <button
                  onClick={() => {
                    scrollToSection('ecosystems');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Ecosystem
                </button>
                <button
                  onClick={() => {
                    scrollToSection('services');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors"
                >
                  {t.navigation.services}
                </button>
                <button
                  onClick={() => {
                    scrollToSection('contact');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold"
                >
                  {t.navigation.contact}
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section - New Integrated Hero */}
        <IntegratedHero language={language} translations={t} />

        {/* All Sections - New Dual-Nature Design */}
        <DualTimeline language={language} translations={t} />
        <QuadrantMastery language={language} translations={t} />
        <ProjectsShowcase language={language} translations={t} />
        <SacredMandala language={language} translations={t} />
        <ThreeEcosystems language={language} />
        <ServicesSection language={language} translations={t} />
        <InvestmentCTA language={language} translations={t} />
        <ContactSection language={language} translations={t} />

        {/* Footer */}
        <footer className="container mx-auto px-4 py-16 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-8">
              {/* Logo */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <Code2 className="w-8 h-8 text-cyan-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Astral Amat
                </span>
              </div>

              {/* Tagline */}
              <p className="text-gray-500 text-lg">
                {t.footer.tagline}
              </p>

              {/* Connection - Other Projects */}
              {t.footer.thisSite && (
                <div className="space-y-3 text-sm text-gray-600">
                  <p>{t.footer.thisSite}</p>
                  {t.footer.also && (
                    <div className="space-y-2">
                      <p className="text-gray-600">{t.footer.also}</p>
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        <a href="https://mazunteconnect.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all">
                          Mazunte Connect
                        </a>
                        <a href="https://inner-ascend.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg text-purple-400 hover:text-purple-300 hover:border-purple-400/50 transition-all">
                          Inner Ascend
                        </a>
                        <a href="https://proyectosalvaje.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg text-green-400 hover:text-green-300 hover:border-green-400/50 transition-all">
                          Proyecto Salvaje
                        </a>
                        <a href="https://hostology.co.uk" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg text-orange-400 hover:text-orange-300 hover:border-orange-400/50 transition-all">
                          Hostology
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Links */}
            <div className="flex items-center justify-center gap-6 text-sm mb-8">
              <Link to="/support" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Support
              </Link>
              <span className="text-gray-700">•</span>
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                {t.footer.made}
              </p>
              <p className="text-xs text-gray-700">
                {t.footer.rights}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Event Route Component
function EventRoute() {
  const { id } = useParams<{ id: string }>();
  const [language] = useState<'en' | 'es'>('en');

  return <EventPreview eventId={id || ''} language={language} />;
}

// Place Route Component
function PlaceRoute() {
  const { id } = useParams<{ id: string }>();
  const [language] = useState<'en' | 'es'>('en');

  return <PlacePreview placeId={id || ''} language={language} />;
}

// Main App with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/event/:id" element={<EventRoute />} />
        <Route path="/place/:id" element={<PlaceRoute />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        {/* Catch all other routes and redirect to home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

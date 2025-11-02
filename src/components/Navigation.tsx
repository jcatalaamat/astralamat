import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Code2, Globe, Menu, X, Download } from 'lucide-react';
import enTranslations from '../translations/en.json';
import esTranslations from '../translations/es.json';
import caTranslations from '../translations/ca.json';

interface NavigationProps {
  language?: 'en' | 'es' | 'ca';
  onLanguageChange?: (lang: 'en' | 'es' | 'ca') => void;
}

export default function Navigation({ language: propLanguage, onLanguageChange }: NavigationProps) {
  const [internalLanguage, setInternalLanguage] = useState<'en' | 'es' | 'ca'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const language = propLanguage || internalLanguage;
  const t = language === 'es' ? esTranslations : language === 'ca' ? caTranslations : enTranslations;

  const handleLanguageChange = () => {
    const newLang = language === 'en' ? 'es' : language === 'es' ? 'ca' : 'en';
    if (onLanguageChange) {
      onLanguageChange(newLang);
    } else {
      setInternalLanguage(newLang);
    }
  };

  const navItems = [
    { path: '/', label: 'Home', translationKey: null },
    { path: '/about', label: 'About', translationKey: 'navigation.about' },
    { path: '/services', label: 'Services', translationKey: 'navigation.services' },
    { path: '/projects', label: 'Projects', translationKey: 'navigation.projects' },
    { path: '/philosophy', label: 'Philosophy', translationKey: null },
    { path: '/contact', label: 'Contact', translationKey: 'navigation.contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
    setMobileMenuOpen(false);
  };

  const getLabel = (item: typeof navItems[0]) => {
    if (item.translationKey) {
      const keys = item.translationKey.split('.');
      let value: any = t;
      for (const key of keys) {
        value = value[key];
      }
      return value || item.label;
    }
    return item.label;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="relative">
              <Code2 className="w-8 h-8 text-cyan-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-sm opacity-70"></div>
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Jordi Amat
            </span>
          </Link>

          {/* Nav Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? 'text-zinc-900 bg-gradient-to-r from-cyan-50 via-purple-50 to-pink-50 border border-purple-200/50'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-gray-50'
                }`}
              >
                {getLabel(item)}
              </button>
            ))}
            <a
              href="/Jordi-Amat-CV.pdf"
              download="Jordi-Amat-CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-600/30 transition-all ml-2"
            >
              <Download className="w-4 h-4" />
              CV
            </a>
          </div>

          {/* Right side controls - Language + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={handleLanguageChange}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 backdrop-blur-xl border border-black/20 hover:bg-black/10 transition-all"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'EN' : language === 'es' ? 'ES' : 'CA'}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 space-y-2 border-t border-black/10 bg-white/95 backdrop-blur-xl">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                  isActive(item.path)
                    ? 'text-zinc-900 font-semibold bg-gradient-to-r from-cyan-50 via-purple-50 to-pink-50 border border-purple-200/50'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-gray-50'
                }`}
              >
                {getLabel(item)}
              </button>
            ))}
            <a
              href="/Jordi-Amat-CV.pdf"
              download="Jordi-Amat-CV.pdf"
              className="flex items-center gap-2 px-4 py-3 mt-4 rounded-lg bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-purple-600/30 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download className="w-4 h-4" />
              {language === 'en' && 'Download CV'}
              {language === 'es' && 'Descargar CV'}
              {language === 'ca' && 'Descarregar CV'}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

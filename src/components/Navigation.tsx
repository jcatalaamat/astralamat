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
    { path: '/about', label: 'About', translationKey: 'navigation.experience' },
    { path: '/services', label: 'Services', translationKey: 'navigation.services' },
    { path: '/projects', label: 'Projects', translationKey: 'navigation.projects' },
    { path: '/philosophy', label: 'Philosophy', translationKey: null },
    { path: '/contact', label: 'Contact', translationKey: 'navigation.contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

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
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="relative">
              <Code2 className="w-8 h-8 text-cyan-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-sm opacity-70"></div>
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Jordi Amat
            </span>
          </Link>

          {/* Nav Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors text-sm ${
                  isActive(item.path)
                    ? 'text-white font-semibold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {getLabel(item)}
              </Link>
            ))}
            <a
              href="/Jordi-Amat-CV.pdf"
              download="Jordi-Amat-CV.pdf"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
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
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'EN' : language === 'es' ? 'ES' : 'CA'}
              </span>
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
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left py-2 transition-colors ${
                  isActive(item.path)
                    ? 'text-white font-semibold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {getLabel(item)}
              </Link>
            ))}
            <a
              href="/Jordi-Amat-CV.pdf"
              download="Jordi-Amat-CV.pdf"
              className="inline-flex items-center gap-2 py-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
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

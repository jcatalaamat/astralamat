import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';
import enTranslations from '../translations/en.json';
import esTranslations from '../translations/es.json';
import caTranslations from '../translations/ca.json';

interface FooterProps {
  language?: 'en' | 'es' | 'ca';
}

export default function Footer({ language = 'en' }: FooterProps) {
  const t = language === 'es' ? esTranslations : language === 'ca' ? caTranslations : enTranslations;

  return (
    <footer className="container mx-auto px-4 py-16 border-t border-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-8">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="w-8 h-8 text-cyan-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Jordi Amat
            </span>
          </div>

          {/* Tagline */}
          <p className="text-zinc-500 text-lg">
            {t.footer.tagline}
          </p>

          {/* Connection - Other Projects */}
          {t.footer.thisSite && (
            <div className="space-y-3 text-sm text-zinc-600">
              <p>{t.footer.thisSite}</p>
              {t.footer.also && (
                <div className="space-y-2">
                  <p className="text-zinc-600">{t.footer.also}</p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a href="https://astral-integration.com/links" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/30 rounded-lg text-violet-600 hover:text-violet-700 hover:border-violet-500/50 transition-all">
                      All Projects
                    </a>
                    <a href="https://mazunteconnect.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg text-cyan-600 hover:text-cyan-700 hover:border-cyan-500/50 transition-all">
                      Mazunte Connect
                    </a>
                    <a href="https://inner-ascend.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg text-purple-600 hover:text-purple-700 hover:border-purple-500/50 transition-all">
                      Inner Ascend
                    </a>
                    <a href="https://proyectosalvaje.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg text-green-600 hover:text-green-700 hover:border-green-500/50 transition-all">
                      Proyecto Salvaje
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-center gap-6 text-sm mb-8">
          <Link to="/support" className="text-zinc-600 hover:text-cyan-600 transition-colors">
            Support
          </Link>
          <span className="text-zinc-300">•</span>
          <Link to="/privacy" className="text-zinc-600 hover:text-cyan-600 transition-colors">
            Privacy
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center space-y-2">
          <p className="text-sm text-zinc-600">
            {t.footer.made}
          </p>
          <p className="text-xs text-zinc-500">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

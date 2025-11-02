import { useEffect } from 'react';
import ContactSection from '../components/ContactSection';
import enTranslations from '../translations/en.json';
import esTranslations from '../translations/es.json';
import caTranslations from '../translations/ca.json';

interface ContactPageProps {
  language?: 'en' | 'es' | 'ca';
  onLanguageChange?: (lang: 'en' | 'es' | 'ca') => void;
}

export default function ContactPage({
  language = 'en',
  onLanguageChange: _onLanguageChange
}: ContactPageProps) {
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
                {t.contact.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <ContactSection language={language} translations={t} />
        </section>

        {/* Additional Contact Info */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Email */}
              <div className="bg-gradient-to-r from-cyan-100/50 to-purple-100/50 rounded-2xl p-8 backdrop-blur-sm border border-black/5 text-center">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-semibold text-cyan-600 mb-2">Email</h3>
                <p className="text-zinc-500">Quick responses via email</p>
              </div>

              {/* Projects */}
              <div className="bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-2xl p-8 backdrop-blur-sm border border-black/5 text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold text-purple-600 mb-2">Projects</h3>
                <p className="text-zinc-500">Discuss your next venture</p>
              </div>

              {/* Collaboration */}
              <div className="bg-gradient-to-r from-pink-100/50 to-cyan-100/50 rounded-2xl p-8 backdrop-blur-sm border border-black/5 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-pink-600 mb-2">Collaborate</h3>
                <p className="text-zinc-500">Partnership opportunities</p>
              </div>
            </div>

            {/* What to Expect */}
            <div className="mt-12 bg-gradient-to-r from-cyan-100/30 via-purple-100/30 to-pink-100/30 rounded-2xl p-12 backdrop-blur-sm border border-black/5">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                What to Expect
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-700 mb-1">Quick Response</h3>
                    <p className="text-zinc-500">I typically respond within 24-48 hours on business days.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-700 mb-1">Discovery Call</h3>
                    <p className="text-zinc-500">We'll schedule a call to understand your needs and explore alignment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🚀</div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-700 mb-1">Tailored Proposal</h3>
                    <p className="text-zinc-500">If we're a good fit, I'll create a customized proposal for your project.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

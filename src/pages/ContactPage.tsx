import { useEffect, useState } from 'react';
import { Mail, Briefcase, Users, Copy, Check, Linkedin, Calendar } from 'lucide-react';
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
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t.contact.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

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
              <div className="bg-gradient-to-r from-cyan-100/50 to-purple-100/50 rounded-2xl p-8 backdrop-blur-sm border border-black/5 text-center hover:shadow-lg transition-shadow">
                <Mail className="w-12 h-12 mx-auto mb-4 text-cyan-600" />
                <h3 className="text-xl font-semibold text-cyan-600 mb-2">{t.contact.infoCards.email.title}</h3>
                <p className="text-zinc-500 mb-4">{t.contact.infoCards.email.description}</p>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="inline-block px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-sm font-medium"
                >
                  {t.contact.infoCards.email.button}
                </a>
                <p className="text-sm text-cyan-700 mt-3 font-medium">{t.contact.email}</p>
              </div>

              {/* Projects */}
              <div className="bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-2xl p-8 backdrop-blur-sm border border-black/5 text-center hover:shadow-lg transition-shadow">
                <Briefcase className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold text-purple-600 mb-2">{t.contact.infoCards.projects.title}</h3>
                <p className="text-zinc-500 mb-4">{t.contact.infoCards.projects.description}</p>
                <a
                  href={`mailto:${t.contact.email}?subject=Project Discussion`}
                  className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                >
                  {t.contact.infoCards.projects.button}
                </a>
              </div>

              {/* Collaboration */}
              <div className="bg-gradient-to-r from-pink-100/50 to-cyan-100/50 rounded-2xl p-8 backdrop-blur-sm border border-black/5 text-center hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 mx-auto mb-4 text-pink-600" />
                <h3 className="text-xl font-semibold text-pink-600 mb-2">{t.contact.infoCards.collaboration.title}</h3>
                <p className="text-zinc-500 mb-4">{t.contact.infoCards.collaboration.description}</p>
                <a
                  href={`https://${t.contact.social.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors text-sm font-medium"
                >
                  {t.contact.infoCards.collaboration.button}
                </a>
              </div>
            </div>

            {/* Alternative Contact Methods */}
            <div className="mt-16">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {t.contact.alternativeMethods.title}
                </h2>
                <p className="text-zinc-500 text-lg">{t.contact.alternativeMethods.subtitle}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Direct Email with Copy */}
                <div className="bg-white rounded-2xl p-6 border border-zinc-200 hover:border-cyan-300 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-800">{t.contact.alternativeMethods.directEmail.title}</h3>
                  </div>
                  <p className="text-zinc-600 text-sm mb-4">{t.contact.alternativeMethods.directEmail.description}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <code className="flex-1 text-sm bg-zinc-100 px-3 py-2 rounded text-zinc-700 font-mono">
                      {t.contact.email}
                    </code>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-sm font-medium"
                  >
                    {emailCopied ? (
                      <>
                        <Check className="w-4 h-4" />
                        {t.contact.alternativeMethods.directEmail.copied}
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        {t.contact.alternativeMethods.directEmail.button}
                      </>
                    )}
                  </button>
                </div>

                {/* LinkedIn */}
                <div className="bg-white rounded-2xl p-6 border border-zinc-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-800">{t.contact.alternativeMethods.linkedin.title}</h3>
                  </div>
                  <p className="text-zinc-600 text-sm mb-4">{t.contact.alternativeMethods.linkedin.description}</p>
                  <a
                    href={`https://${t.contact.social.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <Linkedin className="w-4 h-4" />
                    {t.contact.alternativeMethods.linkedin.button}
                  </a>
                </div>

                {/* Calendar Booking */}
                <div className="bg-white rounded-2xl p-6 border border-zinc-200 hover:border-purple-300 hover:shadow-lg transition-all relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-800">{t.contact.alternativeMethods.calendar.title}</h3>
                  </div>
                  <p className="text-zinc-600 text-sm mb-4">{t.contact.alternativeMethods.calendar.description}</p>
                  <button
                    disabled
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-zinc-300 text-zinc-500 rounded-lg cursor-not-allowed text-sm font-medium"
                  >
                    <Calendar className="w-4 h-4" />
                    {t.contact.alternativeMethods.calendar.comingSoon}
                  </button>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="mt-16 bg-gradient-to-r from-cyan-100/30 via-purple-100/30 to-pink-100/30 rounded-2xl p-12 backdrop-blur-sm border border-black/5">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                {t.contact.whatToExpect.title}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-700 mb-1">{t.contact.whatToExpect.quickResponse.title}</h3>
                    <p className="text-zinc-500">{t.contact.whatToExpect.quickResponse.description}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-700 mb-1">{t.contact.whatToExpect.discoveryCall.title}</h3>
                    <p className="text-zinc-500">{t.contact.whatToExpect.discoveryCall.description}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🚀</div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-700 mb-1">{t.contact.whatToExpect.tailoredProposal.title}</h3>
                    <p className="text-zinc-500">{t.contact.whatToExpect.tailoredProposal.description}</p>
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

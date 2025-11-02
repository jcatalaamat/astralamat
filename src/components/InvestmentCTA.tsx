import { TrendingUp, ArrowRight, Zap } from 'lucide-react';

interface InvestmentCTAProps {
  language: 'en' | 'es' | 'ca';
  translations: any;
}

const InvestmentCTA = ({ translations }: InvestmentCTAProps) => {
  const t = translations.investment;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="investment" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="relative">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 rounded-3xl blur-3xl"></div>

          {/* Main Card */}
          <div className="relative bg-gradient-to-r from-purple-50/80 via-pink-50/80 to-cyan-50/80 backdrop-blur-xl rounded-3xl border border-purple-200/50 p-12 md:p-16 overflow-hidden">
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}
            ></div>

            {/* Floating elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Icon */}
              <div className="mb-6 inline-flex">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-lg opacity-50"></div>
                  <div className="relative p-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full">
                    <TrendingUp className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                {t.title}
              </h2>

              {/* Subtitle */}
              <p className="text-2xl text-zinc-800 mb-8">{t.subtitle}</p>

              {/* Description */}
              <p className="text-lg text-zinc-700 max-w-3xl mx-auto mb-10 leading-relaxed">
                {t.description}
              </p>

              {/* Interests */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {t.interests.map((interest: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-xl border border-purple-200 rounded-full"
                  >
                    <Zap className="w-4 h-4 text-cyan-600" />
                    <span className="text-zinc-800 font-medium">{interest}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-600/40 transform hover:scale-105 transition-all"
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCTA;

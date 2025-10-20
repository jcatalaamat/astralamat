import { Lightbulb, Users, Zap, TrendingUp, Heart, Sprout } from 'lucide-react';

interface PhilosophySectionProps {
  language: 'en' | 'es' | 'ca';
  translations: any;
}

const iconMap: { [key: number]: any } = {
  0: Lightbulb,
  1: Heart,
  2: Users,
  3: Zap,
  4: Sprout,
  5: TrendingUp,
};

export default function PhilosophySection({ language, translations }: PhilosophySectionProps) {
  const t = translations.philosophy;

  return (
    <section id="philosophy" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.principles.map((principle: any, index: number) => {
              const Icon = iconMap[index] || Lightbulb;

              return (
                <div key={index} className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                  {/* Card */}
                  <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-white/10 p-8 h-full hover:border-purple-500/50 transition-all duration-300">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {principle.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Accent */}
          <div className="mt-20 text-center">
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
              <p className="text-sm text-purple-300 font-medium">
                {language === 'en' && 'These principles guide every decision, every line of code, every team interaction'}
                {language === 'es' && 'Estos principios guían cada decisión, cada línea de código, cada interacción de equipo'}
                {language === 'ca' && 'Aquests principis guien cada decisió, cada línia de codi, cada interacció d\'equip'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

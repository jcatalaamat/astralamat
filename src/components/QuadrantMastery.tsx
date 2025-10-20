import { Code2, Database, Blocks, Cloud, Sparkles, Heart, Brain, Zap } from 'lucide-react';
import { colors } from '../styles/colors';

interface QuadrantMasteryProps {
  language: 'en' | 'es' | 'ca';
  translations: any;
}

const QuadrantMastery = ({ language, translations }: QuadrantMasteryProps) => {
  const t = translations.skills;

  // Quadrant configuration
  const quadrants = [
    {
      key: 'frontend',
      title: t.categories.frontend?.title || 'Frontend & Mobile',
      icon: Code2,
      gradient: colors.tech.gradients.main,
      position: 'top-left',
      items: t.categories.frontend?.items || [],
    },
    {
      key: 'backend',
      title: t.categories.backend?.title || 'Backend & Cloud',
      icon: Database,
      gradient: 'from-green-500 to-emerald-500',
      position: 'top-right',
      items: t.categories.backend?.items || [],
    },
    {
      key: 'emerging',
      title: t.categories.emerging?.title || 'Blockchain & AI',
      icon: Sparkles,
      gradient: colors.emerging.gradients.main,
      position: 'bottom-left',
      items: t.categories.emerging?.items || [],
    },
    {
      key: 'leadership',
      title: t.categories.leadership?.title || 'Conscious Leadership',
      icon: Heart,
      gradient: colors.leadership.gradients.main,
      position: 'bottom-right',
      items: t.categories.leadership?.items || [],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${colors.integrated.gradients.fullSpectrum} bg-clip-text text-transparent`}>
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {language === 'en' && 'Four domains of mastery, integrated into one holistic approach'}
            {language === 'es' && 'Cuatro dominios de maestría, integrados en un enfoque holístico'}
            {language === 'ca' && 'Quatre dominis de mestria, integrats en un enfocament holístic'}
          </p>
        </div>

        {/* Quadrant Grid */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center Integration Symbol */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              {/* Outer glow */}
              <div className={`absolute -inset-8 bg-gradient-to-r ${colors.integrated.gradients.fullSpectrum} rounded-full blur-xl opacity-30 animate-pulse`} style={{animationDuration: '3s'}}></div>

              {/* Integration circle */}
              <div className="relative w-20 h-20 rounded-full bg-zinc-950 border-4 border-transparent bg-clip-padding">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${colors.integrated.gradients.fullSpectrum} opacity-50`}></div>
                <div className="absolute inset-2 rounded-full bg-zinc-950 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Grid of Quadrants */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {quadrants.map((quadrant, index) => {
              const Icon = quadrant.icon;
              const isLeadership = quadrant.key === 'leadership';

              return (
                <div key={quadrant.key} className="relative group">
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${quadrant.gradient} rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500`}></div>

                  {/* Card */}
                  <div className={`relative h-full ${isLeadership ? 'bg-gradient-to-br from-zinc-900/95 to-purple-900/20' : 'bg-zinc-900/80'} backdrop-blur-xl rounded-2xl border ${isLeadership ? 'border-purple-500/30' : 'border-white/10'} p-8`}>
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${quadrant.gradient}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{quadrant.title}</h3>
                    </div>

                    {/* Skills Grid */}
                    {isLeadership ? (
                      // Leadership principles - special layout
                      <div className="space-y-3">
                        {quadrant.items.map((principle: string, itemIndex: number) => (
                          <div
                            key={itemIndex}
                            className="px-4 py-3 bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-xl text-gray-200 hover:bg-purple-500/10 hover:border-purple-400/40 transition-all group/item"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                              <span className="leading-relaxed text-sm">{principle}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Technical skills - pill layout
                      <div className="flex flex-wrap gap-3">
                        {quadrant.items.map((skill: string, itemIndex: number) => (
                          <div
                            key={itemIndex}
                            className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all text-sm"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Architecture & DevOps - Full Width Bottom Section */}
          <div className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Architecture */}
            {t.categories.architecture && (
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                      <Blocks className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{t.categories.architecture.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {t.categories.architecture.items.map((skill: string, index: number) => (
                      <div
                        key={index}
                        className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* DevOps */}
            {t.categories.devops && (
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500">
                      <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{t.categories.devops.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {t.categories.devops.items.map((skill: string, index: number) => (
                      <div
                        key={index}
                        className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Integration Statement */}
          <div className="mt-12 text-center">
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
              <p className="text-sm text-purple-300 font-medium flex items-center gap-2">
                <Brain className="w-4 h-4" />
                <span>
                  {language === 'en' && 'Technical excellence meets conscious leadership'}
                  {language === 'es' && 'Excelencia técnica encuentra liderazgo consciente'}
                  {language === 'ca' && 'Excel·lència tècnica troba lideratge conscient'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuadrantMastery;

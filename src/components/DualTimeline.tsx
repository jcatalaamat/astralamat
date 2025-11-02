import { Code2, Sparkles, Briefcase, Heart } from 'lucide-react';
import { colors } from '../styles/colors';

interface DualTimelineProps {
  language: 'en' | 'es' | 'ca';
  translations: any;
}

const DualTimeline = ({ language, translations }: DualTimelineProps) => {
  const t = translations.experience;

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${colors.integrated.gradients.fullSpectrum} bg-clip-text text-transparent`}>
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle || (language === 'en' && 'Two parallel journeys, one integrated path') || (language === 'es' && 'Dos caminos paralelos, un sendero integrado') || (language === 'ca' && 'Dos camins paral·lels, un camí integrat')}
          </p>
        </div>

        {/* Dual Timeline Structure */}
        <div className="relative">
          {/* Center Dividing Line with Integration Points */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5">
            <div className={`absolute inset-0 bg-gradient-to-b ${colors.integrated.gradients.fullSpectrum} opacity-15`}></div>

            {/* Integration markers */}
            {t.roles && t.roles.map((_: any, index: number) => (
              <div
                key={index}
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top: `${(index / (t.roles.length - 1)) * 100}%` }}
              >
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${colors.integrated.gradients.dualNature} border-2 border-gray-100`}></div>
              </div>
            ))}
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {t.roles && t.roles.map((item: any, index: number) => {
              const isLeft = index % 2 === 0;
              const isTech = item.type === 'technical' || !item.type;
              const gradient = isTech ? colors.tech.gradients.main : colors.spirit.gradients.main;
              const Icon = isTech ? Code2 : Sparkles;

              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="relative group">
                      {/* Glow effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-20 group-hover:opacity-30 transition`}></div>

                      {/* Card */}
                      <div className={`relative ${isTech ? 'bg-white/50' : 'bg-gradient-to-br from-white/60 to-purple-50/40'} backdrop-blur-xl rounded-2xl border ${isTech ? 'border-gray-200/30' : 'border-purple-200/40'} p-8`}>
                        {/* Icon & Date */}
                        <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'lg:flex-row-reverse lg:justify-end' : ''}`}>
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${gradient}`}>
                            <Icon className="w-6 h-6 text-white" fill="currentColor" />
                          </div>
                          <span className={`text-sm font-semibold ${isTech ? 'text-cyan-600' : 'text-purple-600'}`}>
                            {item.period}
                          </span>
                        </div>

                        {/* Title & Company */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className={`font-semibold mb-2 ${isTech ? 'text-cyan-700' : 'text-purple-700'}`}>
                          {item.company}
                        </p>

                        {/* Company Context */}
                        {item.companyContext && (
                          <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                            {item.companyContext}
                          </p>
                        )}

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Technologies/Skills */}
                        {item.technologies && item.technologies.length > 0 && (
                          <div className={`flex flex-wrap gap-2 ${isLeft ? 'lg:justify-end' : ''}`}>
                            {item.technologies.map((tech: string, techIndex: number) => (
                              <span
                                key={techIndex}
                                className={`px-3 py-1 bg-gray-100/50 border ${isTech ? 'border-cyan-200/60 text-cyan-700' : 'border-purple-200/60 text-purple-700'} rounded-lg text-sm`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for center line on desktop */}
                  <div className="hidden lg:block w-8"></div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block flex-1"></div>
                </div>
              );
            })}
          </div>

          {/* Integration Note */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative group">
              <div className={`absolute -inset-1 bg-gradient-to-r ${colors.integrated.gradients.sacredTech} rounded-2xl blur opacity-20 group-hover:opacity-30 transition`}></div>
              <div className="relative bg-gradient-to-br from-purple-50/40 to-cyan-50/40 backdrop-blur-xl rounded-2xl border border-purple-200/40 p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Briefcase className="w-6 h-6 text-cyan-600" />
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t.integration || (language === 'en' && 'This parallel journey has shaped a unique perspective: technical systems built with human consciousness at the core. Every project benefits from both mastery of code and depth of presence.') || (language === 'es' && 'Este camino paralelo ha formado una perspectiva única: sistemas técnicos construidos con consciencia humana en el núcleo. Cada proyecto se beneficia tanto de la maestría del código como de la profundidad de la presencia.') || (language === 'ca' && 'Aquest camí paral·lel ha format una perspectiva única: sistemes tècnics construïts amb consciència humana al nucli. Cada projecte es beneficia tant de la mestria del codi com de la profunditat de la presència.')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualTimeline;

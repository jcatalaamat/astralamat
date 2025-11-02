import { Lightbulb, Users, Zap, TrendingUp, Heart, Sprout, Circle } from 'lucide-react';
import { colors } from '../styles/colors';

interface SacredMandalaProps {
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

const SacredMandala = ({ language, translations }: SacredMandalaProps) => {
  const t = translations.philosophy;

  return (
    <section id="philosophy" className="py-32 px-4 relative overflow-hidden">
      {/* Sacred Geometry Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Flower of Life Pattern */}
            <pattern id="flower-of-life" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-400" />
              <circle cx="100" cy="60" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-400" />
              <circle cx="100" cy="140" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-400" />
              <circle cx="65" cy="80" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-400" />
              <circle cx="65" cy="120" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-400" />
              <circle cx="135" cy="80" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-400" />
              <circle cx="135" cy="120" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#flower-of-life)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${colors.integrated.gradients.fullSpectrum} bg-clip-text text-transparent`}>
              {t.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Mandala Structure - Circular Layout */}
          <div className="relative">
            {/* Desktop: Circular mandala layout */}
            <div className="hidden lg:block relative w-full" style={{ aspectRatio: '1 / 1', maxWidth: '900px', margin: '0 auto' }}>
              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  {/* Pulsing glow */}
                  <div className={`absolute -inset-12 bg-gradient-to-r ${colors.integrated.gradients.fullSpectrum} rounded-full blur-2xl opacity-30 animate-pulse`} style={{animationDuration: '4s'}}></div>

                  {/* Center symbol */}
                  <div className="relative w-32 h-32 rounded-full bg-white border-4 border-transparent">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${colors.integrated.gradients.fullSpectrum} opacity-50`}></div>
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-50 to-purple-100/30 backdrop-blur-xl border border-purple-400/30 flex flex-col items-center justify-center">
                      <Circle className="w-8 h-8 text-purple-600 mb-1" />
                      <span className="text-xs text-purple-700 font-semibold">
                        {t.centerLabel || (language === 'en' && 'Integration') || (language === 'es' && 'Integración') || (language === 'ca' && 'Integració')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Principles arranged in circle */}
              {t.principles.map((principle: any, index: number) => {
                const Icon = iconMap[index] || Lightbulb;
                const angle = (index / t.principles.length) * 360;
                const radius = 340; // Distance from center

                // Calculate position
                const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                const y = Math.sin((angle - 90) * Math.PI / 180) * radius;

                return (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    {/* Connection line to center */}
                    <div
                      className="absolute top-1/2 left-1/2 w-px h-full origin-left opacity-20"
                      style={{
                        transform: `rotate(${angle + 90}deg)`,
                        background: `linear-gradient(to bottom, rgba(147, 102, 234, 0.4), transparent)`,
                        height: `${radius - 60}px`,
                        marginLeft: '-1px',
                      }}
                    ></div>

                    {/* Principle card */}
                    <div className="relative group w-64">
                      {/* Glow */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${colors.spirit.gradients.main} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>

                      {/* Card */}
                      <div className="relative bg-gradient-to-br from-gray-50 to-purple-100/30 backdrop-blur-xl rounded-2xl border border-purple-400/30 p-6 hover:border-purple-300/50 transition-all duration-300">
                        {/* Icon */}
                        <div className="mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colors.spirit.gradients.glow} border border-purple-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-6 h-6 text-purple-600 group-hover:text-cyan-600 transition-colors" />
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                          {principle.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile & Tablet: Grid layout */}
            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.principles.map((principle: any, index: number) => {
                const Icon = iconMap[index] || Lightbulb;

                return (
                  <div key={index} className="relative group">
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${colors.spirit.gradients.main} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>

                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-gray-50 to-purple-100/30 backdrop-blur-xl rounded-2xl border border-purple-400/30 p-8 h-full hover:border-purple-300/50 transition-all duration-300">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.spirit.gradients.glow} border border-purple-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-7 h-7 text-purple-600 group-hover:text-cyan-600 transition-colors" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                        {principle.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Accent */}
            <div className="mt-20 text-center">
              <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-400/10 to-cyan-400/10 border border-purple-400/20">
                <p className="text-sm text-purple-700 font-medium">
                  {t.closing || (language === 'en' && 'These principles guide every decision, every line of code, every team interaction') || (language === 'es' && 'Estos principios guían cada decisión, cada línea de código, cada interacción de equipo') || (language === 'ca' && 'Aquests principis guien cada decisió, cada línia de codi, cada interacció d\'equip')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SacredMandala;

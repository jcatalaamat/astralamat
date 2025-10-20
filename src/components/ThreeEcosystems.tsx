import { ExternalLink, Waves, Mountain, Sunrise, Sparkles } from 'lucide-react';
import { colors } from '../styles/colors';

interface ThreeEcosystemsProps {
  language: 'en' | 'es' | 'ca';
}

const ThreeEcosystems = ({ language }: ThreeEcosystemsProps) => {
  const ecosystems = [
    {
      name: 'Proyecto Salvaje',
      tagline: {
        en: 'Wild Transformation & Sacred Ceremonies',
        es: 'Transformación Salvaje y Ceremonias Sagradas',
        ca: 'Transformació Salvatge i Cerimònies Sagrades',
      },
      description: {
        en: 'Deep inner work through plant medicine ceremonies, masculine integration, and returning to wild authenticity. For those ready to remember who they truly are.',
        es: 'Trabajo interior profundo a través de ceremonias de medicina vegetal, integración masculina, y retorno a la autenticidad salvaje. Para quienes están listos para recordar quiénes son realmente.',
        ca: 'Treball interior profund a través de cerimònies de medicina vegetal, integració masculina, i retorn a l\'autenticitat salvatge. Per als qui estan preparats per recordar qui són realment.',
      },
      url: 'https://proyectosalvaje.com',
      icon: Mountain,
      gradient: 'from-green-500 to-emerald-500',
      glowColor: 'green-500',
    },
    {
      name: 'Inner Ascend',
      tagline: {
        en: 'Conscious Leadership & Spiritual Integration',
        es: 'Liderazgo Consciente e Integración Espiritual',
        ca: 'Lideratge Conscient i Integració Espiritual',
      },
      description: {
        en: 'Bridging spirituality and practical life. Community platform, DAO governance, and tools for new-paradigm leaders building the future with consciousness.',
        es: 'Uniendo espiritualidad y vida práctica. Plataforma comunitaria, gobernanza DAO, y herramientas para líderes de nuevo paradigma construyendo el futuro con consciencia.',
        ca: 'Unint espiritualitat i vida pràctica. Plataforma comunitària, governança DAO, i eines per a líders de nou paradigma construint el futur amb consciència.',
      },
      url: 'https://inner-ascend.com',
      icon: Sunrise,
      gradient: 'from-purple-500 to-pink-500',
      glowColor: 'purple-500',
    },
    {
      name: 'Mazunte Connect',
      tagline: {
        en: 'Digital Infrastructure for Conscious Communities',
        es: 'Infraestructura Digital para Comunidades Conscientes',
        ca: 'Infraestructura Digital per a Comunitats Conscients',
      },
      description: {
        en: 'Tech platform connecting regenerative communities. Built with modern stack, designed for humans. Where my technical expertise serves conscious collaboration.',
        es: 'Plataforma tecnológica conectando comunidades regenerativas. Construida con stack moderno, diseñada para humanos. Donde mi experiencia técnica sirve a la colaboración consciente.',
        ca: 'Plataforma tecnològica connectant comunitats regeneratives. Construïda amb stack modern, dissenyada per a humans. On la meva experiència tècnica serveix a la col·laboració conscient.',
      },
      url: 'https://mazunteconnect.com',
      icon: Waves,
      gradient: 'from-cyan-500 to-blue-500',
      glowColor: 'cyan-500',
    },
  ];

  return (
    <section id="ecosystems" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${colors.integrated.gradients.fullSpectrum} bg-clip-text text-transparent`}>
            {language === 'en' && 'The Ecosystem'}
            {language === 'es' && 'El Ecosistema'}
            {language === 'ca' && 'L\'Ecosistema'}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            {language === 'en' && 'Three interconnected projects weaving technology, consciousness, and community'}
            {language === 'es' && 'Tres proyectos interconectados tejiendo tecnología, consciencia y comunidad'}
            {language === 'ca' && 'Tres projectes interconnectats teixint tecnologia, consciència i comunitat'}
          </p>
        </div>

        {/* Ecosystems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {ecosystems.map((ecosystem, index) => {
            const Icon = ecosystem.icon;

            return (
              <a
                key={index}
                href={ecosystem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${ecosystem.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>

                {/* Card */}
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 h-full flex flex-col hover:border-white/30 transition-all transform group-hover:scale-[1.02] duration-300">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${ecosystem.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text" style={{
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  }}>
                    {ecosystem.name}
                  </h3>

                  {/* Tagline */}
                  <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${ecosystem.gradient} bg-clip-text text-transparent`}>
                    {ecosystem.tagline[language]}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                    {ecosystem.description[language]}
                  </p>

                  {/* Link */}
                  <div className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${ecosystem.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
                    <span>
                      {language === 'en' && 'Explore'}
                      {language === 'es' && 'Explorar'}
                      {language === 'ca' && 'Explorar'}
                    </span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Integration Statement */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className={`absolute -inset-1 bg-gradient-to-r ${colors.integrated.gradients.sacredTech} rounded-2xl blur opacity-20 group-hover:opacity-30 transition`}></div>
            <div className="relative bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  {language === 'en' && 'Connected by Intention'}
                  {language === 'es' && 'Conectados por Intención'}
                  {language === 'ca' && 'Connectats per Intenció'}
                </h3>
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                {language === 'en' && 'Each project serves a different aspect of the transformation: Salvaje for deep inner work, Ascend for integrating spirituality into life, Mazunte for conscious community infrastructure. Together, they form a complete ecosystem for human evolution.'}
                {language === 'es' && 'Cada proyecto sirve a un aspecto diferente de la transformación: Salvaje para el trabajo interior profundo, Ascend para integrar la espiritualidad en la vida, Mazunte para infraestructura comunitaria consciente. Juntos, forman un ecosistema completo para la evolución humana.'}
                {language === 'ca' && 'Cada projecte serveix a un aspecte diferent de la transformació: Salvaje per al treball interior profund, Ascend per integrar l\'espiritualitat a la vida, Mazunte per a infraestructura comunitària conscient. Junts, formen un ecosistema complet per a l\'evolució humana.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeEcosystems;

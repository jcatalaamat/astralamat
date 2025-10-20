import { ExternalLink, Mountain, Sunrise, Sparkles } from 'lucide-react';
import { colors } from '../styles/colors';

interface ThreeEcosystemsProps {
  language: 'en' | 'es' | 'ca';
}

const ThreeEcosystems = ({ language }: ThreeEcosystemsProps) => {
  const ecosystems = [
    {
      name: 'Proyecto Salvaje',
      tagline: {
        en: 'Regenerative Village & Living School',
        es: 'Pueblo Regenerativo y Escuela Viviente',
        ca: 'Poble Regeneratiu i Escola Vivent',
      },
      description: {
        en: 'Intentional regenerative community in Mexico dedicated to protecting freedom, bodily autonomy, and living in harmony with nature. A healing village and educational center for sovereign living.',
        es: 'Comunidad regenerativa intencional en México dedicada a proteger la libertad, autonomía corporal, y vivir en armonía con la naturaleza. Un pueblo sanador y centro educativo para vida soberana.',
        ca: 'Comunitat regenerativa intencional a Mèxic dedicada a protegir la llibertat, autonomia corporal, i viure en harmonia amb la natura. Un poble sanador i centre educatiu per a vida sobirana.',
      },
      url: 'https://proyectosalvaje.com',
      icon: Mountain,
      gradient: 'from-green-500 to-emerald-500',
      glowColor: 'green-500',
    },
    {
      name: 'Inner Ascend',
      tagline: {
        en: 'Daily Spiritual Practice & Shadow Work',
        es: 'Práctica Espiritual Diaria y Trabajo de Sombra',
        ca: 'Pràctica Espiritual Diària i Treball d\'Ombra',
      },
      description: {
        en: '90-day journey from wounded to wise. Mobile app combining daily cosmic guidance, structured curriculum, guided meditations, and shadow work focus. Your path from spiritual seeking to embodied wisdom.',
        es: 'Viaje de 90 días de herido a sabio. App móvil que combina guía cósmica diaria, currículum estructurado, meditaciones guiadas, y enfoque en trabajo de sombra. Tu camino de búsqueda espiritual a sabiduría encarnada.',
        ca: 'Viatge de 90 dies de ferit a savi. App mòbil que combina guia còsmica diària, currículum estructurat, meditacions guiades, i enfocament en treball d\'ombra. El teu camí de cerca espiritual a saviesa encarnada.',
      },
      url: 'https://inner-ascend.com',
      icon: Sunrise,
      gradient: 'from-purple-500 to-pink-500',
      glowColor: 'purple-500',
    },
    {
      name: 'Astral Integration',
      tagline: {
        en: 'Soul Work & Medicine Integration',
        es: 'Trabajo del Alma e Integración de Medicina',
        ca: 'Treball de l\'Ànima i Integració de Medicina',
      },
      description: {
        en: '1:1 mentorship for soul realignment and timeline shifting. Shamanic presence healing, medicine integration (Bufo, Ayahuasca), ancestral liberation, and spiritual business alchemy. For initiates ready to transcend.',
        es: 'Mentoría 1:1 para realineación del alma y cambio de línea temporal. Sanación chamánica, integración de medicina (Bufo, Ayahuasca), liberación ancestral, y alquimia de negocio espiritual. Para iniciados listos a trascender.',
        ca: 'Mentoria 1:1 per a realineació de l\'ànima i canvi de línia temporal. Sanació xamànica, integració de medicina (Bufo, Ayahuasca), alliberament ancestral, i alquímia de negoci espiritual. Per a iniciats preparats per transcendir.',
      },
      url: 'https://astral-integration.com',
      icon: Sparkles,
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      glowColor: 'purple-500',
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
                {language === 'en' && 'Each project serves a different aspect of transformation: Salvaje for regenerative community living, Ascend for daily spiritual practice and shadow work, Astral for deep 1:1 soul work and medicine integration. Together, they form a complete ecosystem for conscious evolution.'}
                {language === 'es' && 'Cada proyecto sirve a un aspecto diferente de la transformación: Salvaje para vida comunitaria regenerativa, Ascend para práctica espiritual diaria y trabajo de sombra, Astral para trabajo del alma 1:1 profundo e integración de medicina. Juntos, forman un ecosistema completo para evolución consciente.'}
                {language === 'ca' && 'Cada projecte serveix a un aspecte diferent de la transformació: Salvaje per a vida comunitària regenerativa, Ascend per a pràctica espiritual diària i treball d\'ombra, Astral per a treball de l\'ànima 1:1 profund i integració de medicina. Junts, formen un ecosistema complet per a evolució conscient.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeEcosystems;

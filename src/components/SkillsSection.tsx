import { Code2, Database, Blocks, Cloud, Heart, Sparkles } from 'lucide-react';

interface SkillsSectionProps {
  language: 'en' | 'es' | 'ca';
  translations: any;
}

const SkillsSection = ({ translations }: SkillsSectionProps) => {
  const t = translations.skills;

  const iconMap: { [key: string]: any } = {
    frontend: Code2,
    backend: Database,
    architecture: Blocks,
    devops: Cloud,
    emerging: Sparkles,
    leadership: Heart
  };

  const colorMap: { [key: string]: string } = {
    frontend: 'from-blue-500 to-cyan-500',
    backend: 'from-green-500 to-emerald-500',
    architecture: 'from-purple-500 to-pink-500',
    devops: 'from-orange-500 to-red-500',
    emerging: 'from-violet-500 via-fuchsia-500 to-pink-500',
    leadership: 'from-indigo-500 via-purple-500 to-pink-500'
  };

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {Object.entries(t.categories)
            .filter(([key]) => key !== 'leadership')
            .map(([key, category]: [string, any]) => {
              const Icon = iconMap[key];
              const colorClass = colorMap[key];

              return (
                <div key={key} className="relative group">
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${colorClass} rounded-2xl blur opacity-20 group-hover:opacity-30 transition`}></div>

                  {/* Card */}
                  <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 h-full">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClass}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    </div>

                    {/* Skills List */}
                    <div className="flex flex-wrap gap-3">
                      {category.items.map((skill: string, index: number) => (
                        <div
                          key={index}
                          className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Leadership Section - Full Width */}
        {t.categories.leadership && (
          <div className="relative group mt-8">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition"></div>

            {/* Card */}
            <div className="relative bg-gradient-to-br from-zinc-900/95 to-purple-900/20 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-10">
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  {t.categories.leadership.title}
                </h3>
              </div>

              {/* Leadership Principles */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {t.categories.leadership.items.map((principle: string, index: number) => (
                  <div
                    key={index}
                    className="px-5 py-4 bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-xl text-gray-200 hover:bg-purple-500/10 hover:border-purple-400/40 transition-all group/item"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                      <span className="leading-relaxed">{principle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;

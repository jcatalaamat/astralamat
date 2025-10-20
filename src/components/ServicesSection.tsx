import { Laptop, Rocket, Blocks, Check } from 'lucide-react';

interface ServicesSectionProps {
  language: 'en' | 'es' | 'ca';
  translations: any;
}

const ServicesSection = ({ translations }: ServicesSectionProps) => {
  const t = translations.services;

  const iconMap = [Rocket, Laptop, Blocks];
  const gradients = [
    'from-orange-500 to-pink-500',
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500'
  ];

  return (
    <section id="services" className="py-24 px-4 bg-zinc-950/50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            {t.subtitle}
          </p>
        </div>

        {/* Description & What Makes Me Different */}
        {t.description && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-8">
              <div className="prose prose-invert max-w-none">
                {t.description.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-300 leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((service: any, index: number) => {
            const Icon = iconMap[index];
            const gradient = gradients[index];

            return (
              <div key={index} className="relative group">
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-20 group-hover:opacity-30 transition`}></div>

                {/* Card */}
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`mb-6 inline-flex p-4 rounded-xl bg-gradient-to-r ${gradient} w-fit`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mt-auto">
                    {service.features.map((feature: string, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className={`mt-0.5 p-1 rounded-full bg-gradient-to-r ${gradient}`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ideal Collaborations */}
        {t.idealFor && t.idealDescription && (
          <div className="max-w-4xl mx-auto mt-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-6">
                  {t.idealFor}
                </h3>
                <div className="space-y-3 text-gray-300 leading-relaxed whitespace-pre-line">
                  {t.idealDescription}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;

import { useNavigate } from 'react-router-dom';
import { trackCTAClick } from '../utils/analytics';

interface ServicesPreviewProps {
  language?: 'en' | 'es' | 'ca';
  translations?: any;
}

export default function ServicesPreview({ language: _language = 'en', translations: _translations }: ServicesPreviewProps) {
  const navigate = useNavigate();

  const services = [
    {
      icon: '🏗️',
      title: 'Technical Architecture',
      description: 'End-to-end solutions from concept to deployment',
      gradient: 'from-cyan-500/10 to-blue-500/10',
      borderColor: 'border-cyan-500/20 hover:border-cyan-500/40',
      textColor: 'text-cyan-600'
    },
    {
      icon: '🌐',
      title: 'Web3 & Blockchain',
      description: 'Decentralized applications and smart contracts',
      gradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/20 hover:border-purple-500/40',
      textColor: 'text-purple-600'
    },
    {
      icon: '🧭',
      title: 'Conscious Leadership',
      description: 'Strategic guidance with holistic awareness',
      gradient: 'from-pink-500/10 to-cyan-500/10',
      borderColor: 'border-pink-500/20 hover:border-pink-500/40',
      textColor: 'text-pink-600'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              What I Offer
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Transformative solutions that blend technical excellence with conscious design
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate('/services')}
              className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-8 backdrop-blur-sm border ${service.borderColor} transition-all duration-300 transform hover:scale-105 cursor-pointer`}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className={`text-xl font-bold ${service.textColor} mb-3`}>
                {service.title}
              </h3>
              <p className="text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              trackCTAClick('View All Services', '/home', '/services');
              navigate('/services');
            }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300 transform hover:scale-105"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}

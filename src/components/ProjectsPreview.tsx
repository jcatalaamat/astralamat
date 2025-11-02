import { useNavigate } from 'react-router-dom';

interface ProjectsPreviewProps {
  language?: 'en' | 'es' | 'ca';
  translations?: any;
}

export default function ProjectsPreview({ language: _language = 'en', translations: _translations }: ProjectsPreviewProps) {
  const navigate = useNavigate();

  const featuredProjects = [
    {
      title: 'Web3 Innovation',
      description: 'Decentralized platforms and blockchain solutions',
      tags: ['Blockchain', 'Smart Contracts', 'DeFi'],
      gradient: 'from-cyan-500/10 to-blue-500/10',
      borderColor: 'border-cyan-500/20'
    },
    {
      title: 'Mobile Excellence',
      description: 'Cross-platform apps with native performance',
      tags: ['React Native', 'iOS', 'Android'],
      gradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      title: 'SaaS Platforms',
      description: 'Scalable cloud-based solutions',
      tags: ['Cloud', 'Microservices', 'API'],
      gradient: 'from-pink-500/10 to-cyan-500/10',
      borderColor: 'border-pink-500/20'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A glimpse into innovative solutions spanning multiple domains
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${project.gradient} rounded-2xl p-8 backdrop-blur-sm border ${project.borderColor} hover:border-opacity-60 transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-200 rounded-full text-gray-900 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-100 via-purple-100 to-pink-100 rounded-2xl p-8 backdrop-blur-sm border border-gray-300 text-center">
          <p className="text-gray-700 text-lg mb-6">
            Explore the full portfolio of 50+ projects across blockchain, mobile, web, and AI
          </p>
          <button
            onClick={() => navigate('/projects')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

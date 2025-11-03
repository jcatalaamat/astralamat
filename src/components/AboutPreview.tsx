import { useNavigate } from 'react-router-dom';
import { trackCTAClick } from '../utils/analytics';

interface AboutPreviewProps {
  language?: 'en' | 'es' | 'ca';
  translations?: any;
}

export default function AboutPreview(_props: AboutPreviewProps) {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Journey
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            A unique path through technology and consciousness
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Experience Preview */}
          <div
            onClick={() => navigate('/about')}
            className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl p-8 backdrop-blur-sm border border-cyan-400 hover:border-cyan-600 transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-cyan-600 mb-3">Experience</h3>
            <p className="text-gray-700 mb-4">
              Over a decade navigating the intersection of cutting-edge technology and transformative leadership.
              From blockchain to mobile, from startups to conscious communities.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-200 rounded-full text-cyan-600 text-sm">10+ Years</span>
              <span className="px-3 py-1 bg-cyan-200 rounded-full text-cyan-600 text-sm">50+ Projects</span>
              <span className="px-3 py-1 bg-cyan-200 rounded-full text-cyan-600 text-sm">Global Teams</span>
            </div>
          </div>

          {/* Skills Preview */}
          <div
            onClick={() => navigate('/about')}
            className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 backdrop-blur-sm border border-purple-400 hover:border-purple-600 transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-purple-600 mb-3">Expertise</h3>
            <p className="text-gray-700 mb-4">
              Full-stack mastery across frontend, backend, blockchain, and AI. Combined with conscious leadership
              and holistic design thinking for truly transformative solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-200 rounded-full text-purple-600 text-sm">React & React Native</span>
              <span className="px-3 py-1 bg-purple-200 rounded-full text-purple-600 text-sm">Web3 & Blockchain</span>
              <span className="px-3 py-1 bg-purple-200 rounded-full text-purple-600 text-sm">AI Integration</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              trackCTAClick('Explore My Journey', '/home', '/about');
              navigate('/about');
            }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-400/50 transition-all duration-300 transform hover:scale-105"
          >
            Explore My Journey
          </button>
        </div>
      </div>
    </section>
  );
}

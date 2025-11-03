import { useNavigate, useLocation } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { trackCTAClick } from '../utils/analytics';

export default function FloatingContactButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show on contact page or links page
  if (location.pathname === '/contact' || location.pathname === '/links') {
    return null;
  }

  return (
    <button
      onClick={() => {
        trackCTAClick('Floating Contact Button', location.pathname, '/contact');
        navigate('/contact');
      }}
      className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-full text-white shadow-lg hover:shadow-2xl hover:shadow-purple-600/50 transition-all duration-300 transform hover:scale-110 group"
      aria-label="Contact"
    >
      <Mail className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-zinc-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Get in Touch
      </span>
    </button>
  );
}

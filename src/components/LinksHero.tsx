import { Instagram, Linkedin, Github, Mail, MessageCircle } from 'lucide-react';
import { socialLinks } from '../data/linksData';

export default function LinksHero() {
  return (
    <div className="relative">
      {/* Warm gradient background header */}
      <div
        className="w-full h-64 md:h-80"
        style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #ffc371 100%)',
          backgroundSize: '200% 200%',
          animation: 'gradient 15s ease infinite'
        }}
      />

      {/* Content section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 pb-12">
          {/* Profile photo - overlapping the gradient */}
          <div className="flex justify-center -mt-20 md:-mt-24">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white p-1 shadow-lg">
                <img
                  src="/profile-photo.jpg"
                  alt="Jordi Amat"
                  className="w-full h-full rounded-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23f5f5f5" width="200" height="200"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="60" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EJA%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Name and tagline */}
          <div className="text-center mt-6 space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              Jordi Amat
            </h1>

            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Building Technology That Serves Human Consciousness
            </p>

            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">
              CTO • Soul Guide • Community Builder
            </p>
          </div>

          {/* Social media icons */}
          <div className="flex justify-center items-center gap-4 md:gap-6 mt-8">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 md:w-6 md:h-6" />
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </a>

            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            </a>

            <a
              href={socialLinks.email}
              className="text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

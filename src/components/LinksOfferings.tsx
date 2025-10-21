import { offerings } from '../data/linksData';
import { ExternalLink } from 'lucide-react';

export default function LinksOfferings() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Offerings list */}
          <div className="space-y-0">
            {offerings.map((offering, index) => (
              <a
                key={offering.id}
                href={offering.url}
                target={offering.external ? '_blank' : '_self'}
                rel={offering.external ? 'noopener noreferrer' : undefined}
                className="block group"
              >
                <div className={`
                  flex items-center justify-between py-6
                  border-gray-200
                  ${index === 0 ? 'border-t' : ''}
                  border-b
                  transition-all duration-200
                  hover:bg-gray-50
                  px-4 md:px-6
                  -mx-4 md:-mx-6
                `}>
                  {/* Left side: Title and description */}
                  <div className="flex-1 pr-4">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 uppercase tracking-wide group-hover:text-gray-700 transition-colors">
                        {offering.title}
                      </h3>
                      {offering.external && (
                        <ExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0" />
                      )}
                    </div>
                    {offering.description && (
                      <p className="text-xs md:text-sm text-gray-500 mt-1 leading-relaxed">
                        {offering.description}
                      </p>
                    )}
                  </div>

                  {/* Right side: Number */}
                  <div className="flex-shrink-0">
                    <span className="text-xs md:text-sm font-mono text-gray-400 group-hover:text-gray-600 transition-colors">
                      {String(offering.id).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Optional CTA at the bottom */}
          <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-block px-8 py-3 bg-black text-white text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors rounded-full"
            >
              View Full Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

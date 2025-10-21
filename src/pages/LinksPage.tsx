import LinksHero from '../components/LinksHero';
import LinksOfferings from '../components/LinksOfferings';

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with gradient, photo, and social icons */}
      <LinksHero />

      {/* Offerings list */}
      <LinksOfferings />

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Jordi Amat
            </p>
            <p className="text-xs text-gray-400">
              Building conscious technology · Holding space for transformation
            </p>
            <div className="flex justify-center items-center gap-4 text-xs">
              <a href="/privacy" className="text-gray-500 hover:text-gray-700 transition-colors">
                Privacy
              </a>
              <span className="text-gray-300">•</span>
              <a href="/support" className="text-gray-500 hover:text-gray-700 transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

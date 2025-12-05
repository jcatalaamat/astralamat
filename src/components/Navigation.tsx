import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '#what-we-do', label: 'What We Do' },
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#examples', label: 'Examples' },
  { href: '#about', label: 'About' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'backdrop-blur-xl bg-deep-space/90 border-b border-white/10'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-lg font-bold text-white">
              Astral Integration
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/34611144170?text=Hi!%20I'd%20like%20to%20start%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-astral-violet text-white text-sm font-medium rounded-lg hover:bg-astral-violet/90 hover:shadow-lg hover:shadow-astral-violet/30 transition-all"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-1 border-t border-white/10 bg-deep-space/95 backdrop-blur-xl">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/34611144170?text=Hi!%20I'd%20like%20to%20start%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 px-4 py-3 bg-astral-violet text-white font-medium rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a Project
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

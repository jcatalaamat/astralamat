import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  isVisionPage?: boolean;
}

const salesNavItems = [
  { href: '#what-we-build', label: 'What We Build' },
  { href: '#who-we-help', label: 'Who We Help' },
  { href: '#packages', label: 'Packages' },
  { href: '#demo', label: 'Demo' },
  { href: '#about', label: 'About' },
];

const visionNavItems = [
  { href: '#why', label: 'Why Us' },
  { href: '#what-we-do', label: 'What We Build' },
  { href: '#who-we-help', label: 'Who We Help' },
  { href: '#services', label: 'Services' },
  { href: '#engagement', label: 'How We Work' },
  { href: '#about', label: 'About' },
];

export default function Navigation({ isVisionPage = false }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = isVisionPage ? visionNavItems : salesNavItems;

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
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === '/') {
                scrollToTop();
              }
            }}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-lg font-bold text-white">
              Astral Integration
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}

            {/* Vision/Home Link */}
            {isVisionPage ? (
              <Link
                to="/"
                className="px-3 py-2 text-sm font-medium text-electric-cyan hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                Home
              </Link>
            ) : (
              <Link
                to="/vision"
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                Vision
              </Link>
            )}

            <a
              href="https://wa.me/34611144170?text=Hi!%20I'd%20like%20to%20book%20an%20AI%20Blueprint%20session%20for%20my%20practice."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-astral-violet text-white text-sm font-medium rounded-lg hover:bg-astral-violet/90 hover:shadow-lg hover:shadow-astral-violet/30 transition-all"
            >
              Request a Call
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

            {/* Vision/Home Link Mobile */}
            {isVisionPage ? (
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-electric-cyan hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                Home
              </Link>
            ) : (
              <Link
                to="/vision"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                Vision
              </Link>
            )}

            <a
              href="https://wa.me/34611144170?text=Hi!%20I'd%20like%20to%20book%20an%20AI%20Blueprint%20session%20for%20my%20practice."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 px-4 py-3 bg-astral-violet text-white font-medium rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request a Call
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

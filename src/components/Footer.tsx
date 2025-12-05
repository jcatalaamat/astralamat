import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-space border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Logo & Tagline */}
          <div className="text-center mb-8">
            <span className="text-lg font-bold text-white mb-3 block">
              Astral Integration
            </span>
            <p className="text-gray-400">
              Where vision finds its form.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Technology with intention.
            </p>
          </div>

          {/* Contact */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href="mailto:hello@jordiamat.com"
              className="flex items-center gap-2 text-gray-400 hover:text-electric-cyan transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">hello@jordiamat.com</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Astral Integration. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  currentPage: string;
  language: 'en' | 'es' | 'ca';
}

const translations = {
  home: {
    en: 'Home',
    es: 'Inicio',
    ca: 'Inici'
  }
};

export default function Breadcrumb({ currentPage, language }: BreadcrumbProps) {
  const homeText = translations.home[language];

  return (
    <nav
      className="relative z-20 px-6 pt-24 pb-4 hidden sm:block"
      aria-label="Breadcrumb"
    >
      <div className="max-w-6xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-zinc-500 hover:text-cyan-600 transition-colors duration-200 font-medium"
            >
              {homeText}
            </Link>
          </li>
          <li>
            <ChevronRight className="w-4 h-4 text-zinc-400" />
          </li>
          <li>
            <span className="text-transparent bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text font-semibold">
              {currentPage}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}

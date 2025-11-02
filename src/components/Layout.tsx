import { useState, ReactNode, cloneElement, isValidElement } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [language, setLanguage] = useState<'en' | 'es' | 'ca'>('en');

  // Clone children and pass language prop to them
  const childrenWithLanguage = isValidElement(children)
    ? cloneElement(children, { language, onLanguageChange: setLanguage } as any)
    : children;

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <main>{childrenWithLanguage}</main>
      <Footer language={language} />
    </div>
  );
}

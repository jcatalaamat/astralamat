import { useState, ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [language, setLanguage] = useState<'en' | 'es' | 'ca'>('en');

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <main>{children}</main>
      <Footer language={language} />
    </div>
  );
}

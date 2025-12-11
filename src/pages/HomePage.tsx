import HeroSales from '../components/HeroSales';
import ValueProposition from '../components/ValueProposition';
import WhatWeBuildSales from '../components/WhatWeBuildSales';
import WhoWeHelpSales from '../components/WhoWeHelpSales';
import PackagesSales from '../components/PackagesSales';
import DemoSection from '../components/DemoSection';
import NicheTemplates from '../components/NicheTemplates';
import HowItWorks from '../components/HowItWorks';
import FounderSales from '../components/FounderSales';
import FinalCTASales from '../components/FinalCTASales';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navigation />
      <main>
        <HeroSales />
        <ValueProposition />
        <WhatWeBuildSales />
        <WhoWeHelpSales />
        <PackagesSales />
        <DemoSection />
        <NicheTemplates />
        <HowItWorks />
        <FounderSales />
        <FinalCTASales />
      </main>
      <Footer />
    </div>
  );
}

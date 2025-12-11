import HeroSales from '../components/HeroSales';
import ValueProposition from '../components/ValueProposition';
import WhatWeBuildSales from '../components/WhatWeBuildSales';
import WhoWeHelpSales from '../components/WhoWeHelpSales';
import WhyChooseUs from '../components/WhyChooseUs';
import DemoSection from '../components/DemoSection';
import PackagesSales from '../components/PackagesSales';
import NicheTemplates from '../components/NicheTemplates';
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
        <WhyChooseUs />
        <DemoSection />
        <PackagesSales />
        <NicheTemplates />
        <FounderSales />
        <FinalCTASales />
      </main>
      <Footer />
    </div>
  );
}

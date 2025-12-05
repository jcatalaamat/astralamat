import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import WhoWeHelp from '../components/WhoWeHelp';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import BeforeAfter from '../components/BeforeAfter';
import Examples from '../components/Examples';
import Founder from '../components/Founder';
import FinalCTA from '../components/FinalCTA';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navigation />
      <main>
        <Hero />
        <WhatWeDo />
        <WhoWeHelp />
        <Services />
        <HowItWorks />
        <BeforeAfter />
        <Examples />
        <Founder />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

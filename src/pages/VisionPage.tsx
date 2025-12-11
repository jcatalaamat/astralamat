import Hero from '../components/Hero';
import WhySection from '../components/WhySection';
import ApproachSection from '../components/ApproachSection';
import WhatWeDo from '../components/WhatWeDo';
import WhoWeHelp from '../components/WhoWeHelp';
import Services from '../components/Services';
import EngagementModels from '../components/EngagementModels';
import HowItWorks from '../components/HowItWorks';
import BeforeAfter from '../components/BeforeAfter';
import Founder from '../components/Founder';
import FinalCTA from '../components/FinalCTA';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navigation isVisionPage />
      <main>
        <Hero />
        <WhySection />
        <ApproachSection />
        <WhatWeDo />
        <WhoWeHelp />
        <Services />
        <EngagementModels />
        <HowItWorks />
        <BeforeAfter />
        <Founder />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

import { useState, useEffect } from 'react';
import { ChevronDown, MessageCircle, Play } from 'lucide-react';

const HeroSales = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById('what-we-build');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-bg.jpg')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space/90 via-space-dark/80 to-deep-space/95" />

      {/* Subtle Mesh Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-astral-violet/20 rounded-full filter blur-[120px]"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-electric-cyan/15 rounded-full filter blur-[100px]"></div>
      </div>

      {/* Content Container */}
      <div className={`relative z-10 container mx-auto px-4 py-12 md:py-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">

          {/* Brand */}
          <p className="text-lg md:text-xl font-medium text-electric-cyan mb-6 tracking-wide uppercase">
            Astral Integration Systems Engineering
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            AI Systems That{' '}
            <span className="bg-gradient-to-r from-astral-violet via-electric-cyan to-astral-violet bg-clip-text text-transparent">
              Scale Your Transformation Work
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Built for coaches, healers, teachers & conscious creators.
          </p>

          {/* Mystique Line */}
          <p className="text-lg text-electric-cyan/80 italic mb-6 max-w-2xl mx-auto">
            Technology that honors your transmission.
          </p>

          {/* Value Props */}
          <div className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto space-y-1">
            <p>Custom platforms, automations, and AI assistants.</p>
            <p>Systems engineered with awareness.</p>
            <p className="text-electric-cyan font-medium">AI that expands your impact without diluting your essence.</p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://wa.me/34611144170?text=Hi!%20I'd%20like%20to%20book%20an%20AI%20Blueprint%20session%20for%20my%20practice."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-astral-violet text-white font-bold rounded-xl hover:bg-astral-violet/90 hover:shadow-lg hover:shadow-astral-violet/50 transform hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Request an AI Blueprint Call</span>
            </a>

            <button
              onClick={scrollToDemo}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-electric-cyan text-electric-cyan font-bold rounded-xl hover:bg-electric-cyan/20 transform hover:scale-105 transition-all"
            >
              <Play className="w-5 h-5" />
              <span>See Demo</span>
            </button>
          </div>

          {/* Social Proof */}
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Trusted by transformational coaches, retreat leaders, healers, and educators across the world.
          </p>

          {/* Scroll prompt */}
          <button
            onClick={scrollToContent}
            className="mt-12 text-gray-500 hover:text-electric-cyan transition-colors"
          >
            <span className="text-sm block mb-2">See what we build</span>
            <ChevronDown className="w-5 h-5 mx-auto animate-bounce" />
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-soft-sand to-transparent"></div>
    </section>
  );
};

export default HeroSales;

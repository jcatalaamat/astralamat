import { Rocket, Sparkles, ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-deep-space via-space-dark to-deep-space relative overflow-hidden">
      {/* Subtle gradient orbs - clean, premium look */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-electric-cyan/15 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-astral-violet/20 rounded-full filter blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to bring your vision to life?
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Start with a free 20-minute clarity session. No pressure — just direction.
          </p>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Tell us what you're creating, and we'll show you exactly how it could take shape.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://wa.me/34611144170?text=Hi!%20I'd%20like%20a%20free%20idea-to-product%20audit."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-astral-violet text-white font-bold rounded-xl hover:bg-astral-violet/90 hover:shadow-lg hover:shadow-astral-violet/50 transform hover:scale-105 transition-all"
            >
              <Sparkles className="w-5 h-5" />
              <span>Get Your Free Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://wa.me/34611144170?text=Hi!%20I'd%20like%20to%20start%20a%20project%20with%20Astral%20Integration."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-electric-cyan text-electric-cyan font-bold rounded-xl hover:bg-electric-cyan/10 transform hover:scale-105 transition-all"
            >
              <Rocket className="w-5 h-5" />
              <span>Start Your Project</span>
            </a>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Quick Response: 24-48h</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-electric-cyan rounded-full"></div>
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-astral-violet rounded-full"></div>
              <span>Clear pricing upfront</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

import { MessageCircle, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-soft-sand to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <p className="text-sm font-medium text-astral-violet uppercase tracking-wider mb-4">
            Ready to Begin?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-space-dark mb-6">
            Let's build the next era of transformational learning.
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Tell us where your mission is going.
          </p>
          <p className="text-xl text-astral-violet font-medium mb-10">
            We'll architect the systems that carry it forward.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/34611144170?text=Hi!%20I'd%20like%20to%20request%20a%20strategy%20call%20about%20AI%20systems%20for%20our%20transformational%20platform."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-astral-violet text-white font-bold rounded-xl hover:bg-astral-violet/90 hover:shadow-lg hover:shadow-astral-violet/50 transform hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Request a Strategy Call</span>
            </a>

            <a
              href="https://wa.me/34611144170?text=Hi!%20I'd%20like%20to%20explore%20collaboration%20on%20AI%20systems%20for%20our%20transformational%20platform."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-electric-cyan text-electric-cyan font-bold rounded-xl hover:bg-electric-cyan/10 transform hover:scale-105 transition-all"
            >
              <Sparkles className="w-5 h-5" />
              <span>Explore Collaboration</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

import { MessageCircle, Sparkles } from 'lucide-react';

const FinalCTASales = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-soft-sand to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <p className="text-sm font-medium text-astral-violet uppercase tracking-wider mb-4">
            Let's Build Together
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-space-dark mb-6">
            Ready to Build Your{' '}
            <span className="bg-gradient-to-r from-astral-violet to-electric-cyan bg-clip-text text-transparent">
              AI-Powered Ecosystem?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Tell me where your mission is going.
          </p>
          <p className="text-xl text-astral-violet font-medium mb-10">
            I'll architect the systems that carry it there.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/34611144170?text=Hi!%20I'd%20like%20to%20book%20an%20AI%20Blueprint%20session%20for%20my%20practice."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-astral-violet text-white font-bold rounded-xl hover:bg-astral-violet/90 hover:shadow-lg hover:shadow-astral-violet/50 transform hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Request an AI Blueprint Call</span>
            </a>

            <a
              href="https://wa.me/34611144170?text=Hi!%20I'd%20like%20to%20explore%20how%20you%20can%20help%20build%20AI%20systems%20for%20my%20business."
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

export default FinalCTASales;

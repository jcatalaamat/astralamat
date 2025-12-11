import { Users, Calendar, FileText, Bot, Zap, BarChart3, MessageCircle, ExternalLink } from 'lucide-react';

const features = [
  { icon: Users, text: 'Client management' },
  { icon: Calendar, text: 'Session scheduling' },
  { icon: FileText, text: 'Notes & summaries' },
  { icon: Bot, text: 'AI assistance' },
  { icon: Zap, text: 'Automations' },
  { icon: BarChart3, text: 'Progress insights' },
];

const DemoSection = () => {
  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-deep-space via-space-dark to-deep-space relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-astral-violet/15 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-electric-cyan/10 rounded-full filter blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-electric-cyan uppercase tracking-wider mb-3">
              See It In Action
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Coaching OS —{' '}
              <span className="bg-gradient-to-r from-astral-violet to-electric-cyan bg-clip-text text-transparent">
                Your Client System, Reimagined
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A modern, elegant, intelligent platform for managing your practice.
            </p>
          </div>

          {/* Demo Preview Area */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Description */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Everything you need to run your coaching practice
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Stop juggling spreadsheets, calendars, and messaging apps.
                  Coaching OS brings everything together in one beautiful,
                  intelligent platform that grows with your practice.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {features.map((feature) => (
                    <div
                      key={feature.text}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <feature.icon className="w-4 h-4 text-electric-cyan flex-shrink-0" />
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Customization Note */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-sm text-gray-400">
                    <span className="text-electric-cyan font-medium">Fully customizable</span> to your practice.
                    Integrates with AI, WhatsApp, and your existing tools.
                  </p>
                </div>
              </div>

              {/* Right: Mockup Placeholder */}
              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 aspect-[4/3] flex items-center justify-center">
                  {/* Placeholder for actual demo screenshot */}
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-astral-violet to-electric-cyan rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-white font-bold text-xl mb-2">Coaching OS</p>
                    <p className="text-gray-400 text-sm">Your practice, simplified</p>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-astral-violet/30 rounded-full filter blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-electric-cyan/30 rounded-full filter blur-xl"></div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/34611144170?text=Hi!%20I'd%20like%20to%20see%20a%20demo%20of%20Coaching%20OS%20for%20my%20practice."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-astral-violet text-white font-bold rounded-xl hover:bg-astral-violet/90 hover:shadow-lg hover:shadow-astral-violet/50 transform hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Request a Demo Walkthrough</span>
            </a>

            <a
              href="#packages"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-electric-cyan text-electric-cyan font-bold rounded-xl hover:bg-electric-cyan/20 transform hover:scale-105 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              <span>See Packages</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;

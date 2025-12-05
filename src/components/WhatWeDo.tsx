import { Package, Workflow, Cpu, ImageIcon } from 'lucide-react';

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-24 bg-soft-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl md:text-5xl font-bold text-space-dark mb-6">
            Why people choose{' '}
            <span className="bg-gradient-to-r from-astral-violet to-electric-cyan bg-clip-text text-transparent">
              Astral Integration
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            You already know what you want to create. You just need someone who can see it clearly — and build it with care.
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            We take what lives in your mind — even if it's still forming — and translate it into structure, flow, and a finished product. You hold the vision. We shape it into something the world can use.
          </p>

          {/* What We Build - With Mockup Previews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-astral-violet/30 transition-all overflow-hidden">
              {/* Mockup Preview */}
              <div className="relative h-40 bg-gradient-to-br from-astral-violet/10 to-astral-violet/5 overflow-hidden">
                <img
                  src="/images/mockup-product.jpg"
                  alt="Product mockup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-16 bg-white/50 rounded-lg border-2 border-dashed border-astral-violet/30 flex items-center justify-center">
                    <ImageIcon className="w-6 h-6 text-astral-violet/40" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="w-10 h-10 bg-astral-violet/20 rounded-xl flex items-center justify-center mb-3">
                  <Package className="w-5 h-5 text-astral-violet" />
                </div>
                <h3 className="font-bold text-space-dark mb-2">Full Products</h3>
                <p className="text-gray-600 text-sm">Apps, platforms, membership sites, course portals, digital tools</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-electric-cyan/30 transition-all overflow-hidden">
              {/* Mockup Preview */}
              <div className="relative h-40 bg-gradient-to-br from-electric-cyan/10 to-electric-cyan/5 overflow-hidden">
                <img
                  src="/images/mockup-system.jpg"
                  alt="System mockup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-16 bg-white/50 rounded-lg border-2 border-dashed border-electric-cyan/30 flex items-center justify-center">
                    <ImageIcon className="w-6 h-6 text-electric-cyan/40" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="w-10 h-10 bg-electric-cyan/20 rounded-xl flex items-center justify-center mb-3">
                  <Workflow className="w-5 h-5 text-electric-cyan" />
                </div>
                <h3 className="font-bold text-space-dark mb-2">Business Systems</h3>
                <p className="text-gray-600 text-sm">Booking flows, client journeys, automations, operations dashboards</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-pink-500/30 transition-all overflow-hidden">
              {/* Mockup Preview */}
              <div className="relative h-40 bg-gradient-to-br from-pink-500/10 to-pink-500/5 overflow-hidden">
                <img
                  src="/images/mockup-ai.jpg"
                  alt="AI experience mockup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-16 bg-white/50 rounded-lg border-2 border-dashed border-pink-500/30 flex items-center justify-center">
                    <ImageIcon className="w-6 h-6 text-pink-500/40" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="w-10 h-10 bg-pink-500/20 rounded-xl flex items-center justify-center mb-3">
                  <Cpu className="w-5 h-5 text-pink-500" />
                </div>
                <h3 className="font-bold text-space-dark mb-2">AI Experiences</h3>
                <p className="text-gray-600 text-sm">Custom AI tools, content engines, personalized guides, smart assistants</p>
              </div>
            </div>
          </div>

          {/* Deliverables List */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">What we can build for you</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Digital Products',
                'Apps & Platforms',
                'Automated Systems',
                'Custom Workflows',
                'Course Portals',
                'AI Experiences',
                'Revenue Streams',
                'Client Journeys'
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-gradient-to-r from-astral-violet/10 to-electric-cyan/10 rounded-full text-space-dark text-sm font-medium border border-astral-violet/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Note */}
          <p className="mt-8 text-gray-500 text-sm">
            Whatever you're called to create — we'll design it, build it, and bring it to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

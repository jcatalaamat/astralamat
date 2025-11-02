import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, Zap, Rocket, Database, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function ConsultancyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const smallBusinessServices = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Websites & Content Systems',
      description: 'Portfolio sites, blogs, service booking platforms',
      examples: ['Business websites', 'Content management', 'Booking systems', 'Client portals']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Simple SaaS Tools',
      description: 'Custom tools for invoicing, client management, scheduling',
      examples: ['Invoicing systems', 'CRM tools', 'Appointment scheduling', 'Task management']
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Lead Generation Funnels',
      description: 'Landing pages and conversion-optimized funnels',
      examples: ['Landing pages', 'Lead capture forms', 'Email automation', 'Analytics dashboards']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Admin Dashboards',
      description: 'Data visualization and management interfaces',
      examples: ['Analytics dashboards', 'Inventory management', 'Reporting tools', 'Data exports']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Platforms',
      description: 'Membership sites and community engagement',
      examples: ['Member portals', 'Forums & discussions', 'Content subscriptions', 'Event management']
    }
  ];

  const standaloneProducts = [
    {
      title: 'Niche SaaS Tools',
      description: 'Industry-specific workflow automation and data tools',
      gradient: 'from-cyan-500/10 to-blue-500/10',
      borderColor: 'border-cyan-500/20 hover:border-cyan-500/40'
    },
    {
      title: 'Template Marketplaces',
      description: 'Customizable templates and themes for various platforms',
      gradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/20 hover:border-purple-500/40'
    },
    {
      title: 'Content Platforms',
      description: 'Newsletter systems, course platforms, community hubs',
      gradient: 'from-pink-500/10 to-cyan-500/10',
      borderColor: 'border-pink-500/20 hover:border-pink-500/40'
    },
    {
      title: 'B2B Industry Tools',
      description: 'Specialized solutions for specific business verticals',
      gradient: 'from-blue-500/10 to-purple-500/10',
      borderColor: 'border-blue-500/20 hover:border-blue-500/40'
    },
    {
      title: 'API Wrappers & AI Utilities',
      description: 'Integration tools and AI-powered automation',
      gradient: 'from-cyan-500/10 to-purple-500/10',
      borderColor: 'border-cyan-500/20 hover:border-cyan-500/40'
    }
  ];

  const technicalCapabilities = [
    { icon: <CheckCircle2 className="w-5 h-5 text-cyan-600" />, text: 'Full CRUD applications (databases, forms, filters)' },
    { icon: <CheckCircle2 className="w-5 h-5 text-cyan-600" />, text: 'Authentication & user management systems' },
    { icon: <CheckCircle2 className="w-5 h-5 text-cyan-600" />, text: 'Payment integrations (Stripe, PayPal)' },
    { icon: <CheckCircle2 className="w-5 h-5 text-cyan-600" />, text: 'Real-time features (Supabase, Firebase)' },
    { icon: <CheckCircle2 className="w-5 h-5 text-cyan-600" />, text: 'AI integrations (ChatGPT, Claude APIs)' },
    { icon: <CheckCircle2 className="w-5 h-5 text-cyan-600" />, text: 'Third-party API integrations (Zapier, etc.)' },
    { icon: <CheckCircle2 className="w-5 h-5 text-cyan-600" />, text: 'Responsive web & mobile applications' },
    { icon: <CheckCircle2 className="w-5 h-5 text-cyan-600" />, text: 'Analytics & reporting dashboards' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-breathe"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Page Header */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Consultancy Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto mb-8">
              Practical, scalable solutions for small businesses and standalone products
            </p>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
              Everything that doesn't require massive real-time infrastructure or hardware integration.
              Built with modern tools, delivered fast, scaled smart.
            </p>
          </div>
        </section>

        {/* Small Business Services */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  For Small Businesses
                </span>
              </h2>
              <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                Your distribution play - tools that solve real problems for real businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {smallBusinessServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-100/50 to-blue-100/50 rounded-2xl p-6 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="text-cyan-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{service.title}</h3>
                  <p className="text-zinc-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.examples.map((example, exIndex) => (
                      <div key={exIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
                        <span className="text-sm text-zinc-500">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standalone Products */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-100/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Standalone Products
                </span>
              </h2>
              <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                Build once, scale to many - products that generate recurring value
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standaloneProducts.map((product, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${product.gradient} rounded-2xl p-6 backdrop-blur-sm border ${product.borderColor} transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="text-4xl mb-4">
                    <Rocket className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{product.title}</h3>
                  <p className="text-zinc-600">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Capabilities */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  What's Realistic
                </span>
              </h2>
              <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                Modern stack: Next.js, React, Supabase, AI APIs - everything you need for production-ready apps
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-100/30 via-purple-100/30 to-pink-100/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-300/30">
              <div className="grid md:grid-cols-2 gap-4">
                {technicalCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {capability.icon}
                    <span className="text-zinc-600">{capability.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Skip */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-100/50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-100/50 to-gray-200/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-400/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                <span className="text-zinc-600">What We Skip (For Now)</span>
              </h3>
              <p className="text-zinc-600 text-center mb-6">
                Being realistic about scope ensures we deliver quality, on time, every time.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Heavy graphics/gaming engines</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Live video/streaming infrastructure</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Complex real-time (like Figma)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Hardware connections/IoT</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-500">✗</span>
                  <span>High-frequency trading systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Enterprise-scale infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                  How We Work
                </span>
              </h2>
              <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                Fast, iterative, and transparent - using modern AI-assisted development
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Discovery & Scoping</h3>
                <p className="text-zinc-600">
                  We map out your needs, validate feasibility, and define clear deliverables
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Rapid Prototyping</h3>
                <p className="text-zinc-600">
                  Using v0, ChatGPT, and Cursor, we build working prototypes fast
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Iterate & Deploy</h3>
                <p className="text-zinc-600">
                  We refine based on feedback and deploy production-ready solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-100/30 via-purple-100/30 to-pink-100/30 rounded-2xl p-12 backdrop-blur-sm border border-gray-300/30 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Ready to Build Something Real?
              </h2>
              <p className="text-zinc-600 text-lg mb-8">
                Let's talk about your project. Whether it's a small business tool or a standalone product,
                we'll deliver practical solutions that actually work.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300 transform hover:scale-105"
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

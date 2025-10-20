import { useState } from 'react';
import { Mail, Send, Linkedin, Github, Instagram } from 'lucide-react';

interface ContactSectionProps {
  language: 'en' | 'es' | 'ca';
  translations: any;
}

const ContactSection = ({ translations }: ContactSectionProps) => {
  const t = translations.contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (can integrate with email service later)
    const mailtoLink = `mailto:${t.email}?subject=Contact from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-zinc-950/50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            {t.subtitle}
          </p>
          {t.description && (
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {t.description}
            </p>
          )}
        </div>

        {/* Best For Section */}
        {t.bestFor && t.bestForItems && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">{t.bestFor}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.bestForItems.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
            <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder={t.form.name}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder={t.form.email}
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder={t.form.message}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-[1.02] transition-all"
                >
                  <span>{t.form.submit}</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Email Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Email</h3>
                </div>
                <a
                  href={`mailto:${t.email}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {t.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                <h3 className="text-xl font-bold text-white mb-6">Social Links</h3>
                <div className="space-y-4">
                  {/* LinkedIn */}
                  <a
                    href={`https://${t.social.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-cyan-500/50 transition-all group/link"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 group-hover/link:text-cyan-400 transition-colors">
                      LinkedIn
                    </span>
                  </a>

                  {/* GitHub */}
                  <a
                    href={`https://${t.social.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-purple-500/50 transition-all group/link"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                      <Github className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 group-hover/link:text-purple-400 transition-colors">
                      GitHub
                    </span>
                  </a>

                  {/* Instagram */}
                  <a
                    href={`https://${t.social.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-pink-500/50 transition-all group/link"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 group-hover/link:text-pink-400 transition-colors">
                      Instagram
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note & Other Work */}
        {(t.note || t.otherWork) && (
          <div className="max-w-4xl mx-auto mt-16 space-y-6">
            {t.note && (
              <div className="text-center">
                <p className="text-gray-400 italic">
                  {t.note}
                </p>
              </div>
            )}
            {t.otherWork && (
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  {t.otherWork}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;

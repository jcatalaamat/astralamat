import { useState } from 'react';
import { Mail, Send, Linkedin, Github, Instagram, ExternalLink } from 'lucide-react';

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
    <section id="contact" className="py-24 px-4 bg-gray-50/50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-zinc-700 max-w-3xl mx-auto mb-6">
            {t.subtitle}
          </p>
          {t.description && (
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              {t.description}
            </p>
          )}
        </div>

        {/* Best For Section */}
        {t.bestFor && t.bestForItems && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-gradient-to-br from-purple-100/20 to-cyan-100/20 backdrop-blur-xl rounded-2xl border border-purple-300/20 p-8">
                <h3 className="text-2xl font-bold text-zinc-900 mb-6">{t.bestFor}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.bestForItems.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-700 to-purple-700 mt-2 flex-shrink-0"></div>
                      <span className="text-zinc-700">{item}</span>
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
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
            <div className="relative bg-white backdrop-blur-xl rounded-2xl border border-cyan-200/50 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-zinc-900 placeholder-gray-500 focus:outline-none focus:border-cyan-600 transition-colors"
                    placeholder={t.form.name}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-zinc-900 placeholder-gray-500 focus:outline-none focus:border-cyan-600 transition-colors"
                    placeholder={t.form.email}
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-zinc-900 placeholder-gray-500 focus:outline-none focus:border-cyan-600 transition-colors resize-none"
                    placeholder={t.form.message}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-600/50 transform hover:scale-[1.02] transition-all"
                >
                  <span>{t.form.submit}</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Links - Unified */}
          <div className="space-y-8">
            {/* Unified Contact & Social Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-white backdrop-blur-xl rounded-2xl border border-purple-200/50 p-8">
                <h3 className="text-xl font-bold text-zinc-900 mb-6">Get in Touch</h3>

                {/* Email */}
                <div className="mb-6 pb-6 border-b border-black/10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-zinc-900">Email</span>
                  </div>
                  <a
                    href={`mailto:${t.email}`}
                    className="text-cyan-700 hover:text-cyan-800 transition-colors font-medium ml-11"
                  >
                    {t.email}
                  </a>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-4">Social Links</h4>
                  <div className="space-y-3">
                    {/* All Projects */}
                    <a
                      href="https://astral-integration.com/links"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 bg-gray-50 border border-gray-300 rounded-lg hover:bg-violet-50 hover:border-violet-400 transition-all group/link"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-zinc-700 group-hover/link:text-violet-600 transition-colors font-medium text-sm">
                        All Projects
                      </span>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={`https://${t.social.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 bg-gray-50 border border-gray-300 rounded-lg hover:bg-cyan-50 hover:border-cyan-400 transition-all group/link"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600">
                        <Linkedin className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-zinc-700 group-hover/link:text-cyan-600 transition-colors font-medium text-sm">
                        LinkedIn
                      </span>
                    </a>

                    {/* GitHub */}
                    <a
                      href={`https://${t.social.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 bg-gray-50 border border-gray-300 rounded-lg hover:bg-purple-50 hover:border-purple-400 transition-all group/link"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
                        <Github className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-zinc-700 group-hover/link:text-purple-600 transition-colors font-medium text-sm">
                        GitHub
                      </span>
                    </a>

                    {/* Instagram */}
                    <a
                      href={`https://${t.social.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 bg-gray-50 border border-gray-300 rounded-lg hover:bg-pink-50 hover:border-pink-400 transition-all group/link"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600">
                        <Instagram className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-zinc-700 group-hover/link:text-pink-600 transition-colors font-medium text-sm">
                        Instagram
                      </span>
                    </a>
                  </div>
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
                <p className="text-zinc-600 italic">
                  {t.note}
                </p>
              </div>
            )}
            {t.otherWork && (
              <div className="text-center">
                <p className="text-sm text-zinc-500">
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

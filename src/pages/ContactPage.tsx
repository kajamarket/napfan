import React, { useState } from 'react';
import { Seo } from '../components/Seo';
import { ContactFooter } from '../components/ContactFooter';
import { siteConfig } from '../site.config';
import { HeartHandshake, CheckCircle2, MapPin, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    topic: 'Joining the Prayer Network',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-text-primary pt-28 pb-16">
      <Seo
        title={`Connect With ${siteConfig.name} — Standing in the Gap`}
        description={`Connect with ${siteConfig.name}. Share prayer requests, fellowship inquiries, or join believers standing in the gap for nations.`}
        path="/contact/"
        type="website"
        pageType="ContactPage"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Connect', path: '/contact/' },
        ]}
      />

      <div className="max-w-[800px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs text-muted uppercase tracking-[0.25em] font-medium font-mono">
              CONNECT & FELLOWSHIP
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display italic text-heading tracking-tight mb-5 leading-[1.12]">
            Connect With <span className="font-normal not-italic">{siteConfig.name}</span>
          </h1>

          <p className="text-lg md:text-xl text-heading/90 font-light leading-relaxed">
            We welcome intercessors, pastors, and Christian fellowships dedicated to persistent prayer, fasting, and standing in the gap for nations.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="space-y-5 text-base md:text-lg text-text-primary/85 leading-relaxed font-light border-t border-stroke pt-10 mb-12">
          <p>
            {siteConfig.name} is committed to fostering prayer unity and raising a vigilant generation of watchmen before God. Whether you are inquiring about corporate prayer initiatives, seeking guidance on establishing prayer fellowships, participating in the 21 Day Fasting and Prayer programme, or desiring to stand with the movement, we welcome your connection.
          </p>
          <p>
            Please use the communication form below to share your message. Correspondence is received with prayerful discretion and spiritual attentiveness.
          </p>
        </div>

        {/* Clean Contact Form Structure */}
        <div className="p-7 sm:p-10 rounded-3xl bg-surface/60 border border-stroke shadow-xs mb-16">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="w-12 h-12 rounded-full bg-accent/15 text-accent flex items-center justify-center mx-auto mb-4 font-mono text-xl">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display italic text-heading mb-2">
                Thank You for Connecting
              </h3>
              <p className="text-sm text-muted max-w-md mx-auto font-light leading-relaxed">
                Your message has been received by our pastoral and intercessory team. May the Lord strengthen your hands as you stand in faithful prayer.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-heading font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-stroke text-sm text-heading placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-xs font-mono uppercase tracking-wider text-heading font-medium mb-2">
                    City / Country
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Lagos, Nigeria or Nairobi, Kenya"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-stroke text-sm text-heading placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="topic" className="block text-xs font-mono uppercase tracking-wider text-heading font-medium mb-2">
                  Topic of Inquiry
                </label>
                <select
                  id="topic"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-stroke text-sm text-heading focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <option value="Joining the Prayer Network">Joining the Prayer & Fasting Network</option>
                  <option value="21 Day Fasting and Prayer">21 Day Fasting and Prayer Programme</option>
                  <option value="Fellowship Inquiries">Intercession Fellowship Inquiry</option>
                  <option value="Resources & Literature">Books, Teachings & Study Materials</option>
                  <option value="General Correspondence">General Correspondence</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-heading font-medium mb-2">
                  Message / Prayer Need
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your message, fellowship inquiry, or prayer focus..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-stroke text-sm text-heading placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white hover:bg-accent-light font-medium text-xs font-mono uppercase tracking-wider transition-colors shadow-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Communication</span>
              </button>
            </form>
          )}
        </div>

        {/* Social channels (if any) */}
        {siteConfig.social && siteConfig.social.length > 0 && (
          <div className="p-7 rounded-3xl bg-surface/40 border border-stroke">
            <h2 className="text-xs text-muted uppercase tracking-[0.2em] font-mono font-medium mb-4">
              Social Fellowship Channels
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              {siteConfig.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white border border-stroke text-xs font-mono text-heading hover:border-accent hover:text-accent transition-colors flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-20">
        <ContactFooter />
      </div>
    </div>
  );
};

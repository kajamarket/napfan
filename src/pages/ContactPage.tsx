import React from 'react';
import { Seo } from '../components/Seo';
import { ContactFooter } from '../components/ContactFooter';
import { EmbeddedGoogleForm } from '../components/EmbeddedGoogleForm';
import { siteConfig } from '../site.config';

export const ContactPage: React.FC = () => {
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

      <div className="max-w-[800px] mx-auto px-4 sm:px-8">
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
        <div className="space-y-5 text-base md:text-lg text-text-primary/85 leading-relaxed font-light border-t border-stroke pt-10 mb-10">
          <p>
            {siteConfig.name} is committed to fostering prayer unity and raising a vigilant generation of watchmen before God. Whether you are inquiring about corporate prayer initiatives, seeking guidance on establishing prayer fellowships, participating in the 21 Day Fasting and Prayer programme, or desiring to stand with the movement, we welcome your connection.
          </p>
          <p>
            Please use the communication form below to share your message or prayer petition. Correspondence is received with prayerful discretion and spiritual attentiveness.
          </p>
        </div>

        {/* Embedded Native Contact & Prayer Form */}
        <div id="contact-form" className="mb-16">
          <EmbeddedGoogleForm
            title={`Connect With ${siteConfig.name}`}
            confidentialityNote="Correspondence received with prayerful discretion by our ministry team"
          />
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

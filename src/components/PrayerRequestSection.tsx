import React from 'react';
import { siteConfig } from '../site.config';
import { EmbeddedGoogleForm } from './EmbeddedGoogleForm';

interface PrayerRequestSectionProps {
  googleFormUrl?: string;
}

export const PrayerRequestSection: React.FC<PrayerRequestSectionProps> = ({
  googleFormUrl,
}) => {
  return (
    <section
      id="prayer-request"
      className="scroll-mt-24 py-20 md:py-28 px-4 sm:px-6 bg-[#FFF9F2] border-t border-[#D9C4AA]/40"
    >
      <div className="max-w-[780px] mx-auto">
        {/* Section Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12 px-2">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="w-6 h-px bg-[#321C04]/40" />
            <span className="text-xs font-mono uppercase tracking-[0.24em] text-[#321C04]/70 font-medium">
              INTERCESSION &amp; CORRESPONDENCE
            </span>
            <span className="w-6 h-px bg-[#321C04]/40" />
          </div>

          <h2 className="text-[#321C04] text-3xl sm:text-4xl md:text-5xl font-normal font-display italic tracking-tight leading-[1.15]">
            How Can We Pray With You?
          </h2>

          <p className="text-[#321C04]/75 text-sm sm:text-base leading-relaxed mt-3.5 font-light">
            The intercessors of {siteConfig.name} stand with you in faith. Share your prayer request, testimony, or ministry inquiry below, and our team will uphold it prayerfully.
          </p>
        </div>

        {/* Native-proportioned Embedded Google Form */}
        <EmbeddedGoogleForm
          src={googleFormUrl}
          title="NAPFAN Prayer Request & Contact Form"
          confidentialityNote="Handled prayerfully and in confidence by our intercessory team"
        />
      </div>
    </section>
  );
};

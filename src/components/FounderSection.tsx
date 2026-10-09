import React from 'react';
import { siteConfig } from '../site.config';

export const FounderSection: React.FC = () => {
  const founder = siteConfig.founder;

  if (!founder || !founder.name) {
    return null;
  }

  const name = founder.name || 'Pastor Emmanuel Olu Falodun';
  const designation =
    founder.title ||
    'General Overseer, Christ Salvation Victory Mission International | President – Nations Prayer And Fasting Network (NAPFAN)';
  const photo = founder.photo || '/founder.jpg';

  return (
    <section id="leadership" className="bg-[#F6E4CF] py-20 px-6">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto mb-10 text-center">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#321C04]/70 font-mono block mb-2">
          {founder.label || 'LEADERSHIP & MINISTRY STORY'}
        </span>
        <h2 className="text-3xl sm:text-4xl font-normal text-[#321C04] font-display italic">
          Leadership & Ministry Oversight
        </h2>
      </div>

      {/* Leader card */}
      <div className="bg-[#FFF9F2] rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-start max-w-3xl mx-auto shadow-sm border border-[#D9C4AA]/40">
        {/* Existing verified photo if present */}
        {photo && (
          <img
            src={photo}
            alt={name}
            className="w-24 h-24 rounded-2xl object-cover shrink-0 shadow-xs"
            loading="lazy"
          />
        )}

        <div className="space-y-3 flex-1">
          {/* Existing name */}
          <h3 className="text-[#321C04] text-2xl font-semibold tracking-tight">
            {name}
          </h3>

          {/* Existing title/designation */}
          <p className="text-[#321C04]/70 text-sm leading-relaxed whitespace-pre-line font-medium">
            {designation}
          </p>

          {/* Existing brief paragraph if present */}
          {founder.paragraphs && founder.paragraphs.length > 0 && (
            <p className="text-[#321C04]/80 text-sm font-light leading-relaxed pt-2">
              {founder.paragraphs[0]}
            </p>
          )}

          {/* Link to books if available */}
          {founder.booksUrl && (
            <div className="pt-2">
              <a
                href={founder.booksUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#321C04] hover:text-[#1F1003] underline underline-offset-4 font-mono uppercase tracking-wider"
              >
                <span>Books & Publications</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

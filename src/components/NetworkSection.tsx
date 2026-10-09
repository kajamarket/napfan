import React from 'react';
import { siteConfig } from '../site.config';

export const NetworkSection: React.FC = () => {
  const items = (siteConfig.network || []).filter(
    (item) => item.href && item.href.trim() !== ''
  );

  if (items.length === 0) {
    return null;
  }

  return (
    <section id="network" className="bg-[#321C04] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#FFF9F2]/60 font-mono block mb-2">
            MINISTRY ECOSYSTEM
          </span>
          <h2 className="text-[#FFF9F2] text-3xl md:text-4xl font-normal font-display italic">
            Explore Our Ministry Network
          </h2>
          <p className="text-[#FFF9F2]/70 text-sm md:text-base mt-3 font-light leading-relaxed">
            {siteConfig.name} is connected within a wider network of sister platforms dedicated to Christian discipleship, media, prayer, and leadership development.
          </p>
        </div>

        {/* Existing network links as pill cards */}
        <div className="flex flex-wrap gap-4 items-center">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 rounded-full px-6 py-3 text-[#FFF9F2] text-sm font-medium transition-colors inline-flex items-center gap-2 group shadow-xs"
            >
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

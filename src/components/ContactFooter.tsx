import React from 'react';
import { Link } from 'react-router-dom';
import { NapfanLogo } from './NapfanLogo';
import { siteConfig } from '../site.config';

export const ContactFooter: React.FC = () => {
  const socialLinks = siteConfig.social || [];
  const navLinks = siteConfig.nav || [];

  return (
    <footer id="footer" className="bg-[#F6E4CF] py-20 px-6 select-none border-t border-[#D9C4AA]/40">
      <div className="max-w-6xl mx-auto">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          {/* SVG logo (color: #321C04) + existing site name */}
          <Link to="/" className="flex items-center gap-3">
            <div className="text-[#321C04] shrink-0">
              <NapfanLogo size={36} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[#321C04] text-base font-bold tracking-tight">
                {siteConfig.name}
              </span>
              <span className="text-[#321C04]/70 text-xs font-mono uppercase tracking-wider">
                {siteConfig.tagline || 'Standing in the Gap for Nations'}
              </span>
            </div>
          </Link>

          {/* Nav & Social Links: text-[#321C04]/70 text-sm hover:text-[#321C04] transition-colors */}
          <div className="flex flex-wrap gap-6 items-center">
            {navLinks.map((item) => {
              if (item.href.startsWith('/#') || item.href.startsWith('#')) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-[#321C04]/70 text-sm hover:text-[#321C04] transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-[#321C04]/70 text-sm hover:text-[#321C04] transition-colors font-medium"
                >
                  {item.label}
                </Link>
              );
            })}

            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#321C04]/70 text-sm hover:text-[#321C04] transition-colors font-medium flex items-center gap-1"
              >
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Decorative divider (same as Section 2: w-2 h-2 rounded-full + flex-1 h-[2px] + w-2 h-2 rounded-full bg-[#D9C4AA]) */}
        <div className="flex items-center gap-2 my-12" aria-hidden="true">
          <div className="w-2 h-2 rounded-full bg-[#D9C4AA]" />
          <div className="flex-1 h-[2px] bg-[#D9C4AA]" />
          <div className="w-2 h-2 rounded-full bg-[#D9C4AA]" />
        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#321C04]/50 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
          <div>
            Standing in the Gap for Individuals, Communities, and Nations
          </div>
        </div>
      </div>
    </footer>
  );
};

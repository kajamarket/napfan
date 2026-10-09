import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Plus } from 'lucide-react';
import { NapfanLogo } from './NapfanLogo';
import { siteConfig } from '../site.config';

export const MissionSection: React.FC = () => {
  const mission = siteConfig.mission;
  const shortIntro =
    mission?.paragraphs?.[0] ||
    'Nations Prayer and Fasting Network (NAPFAN) is a Christian ministry movement committed to raising, equipping, and uniting believers in devoted prayer, fasting, and spiritual vigilance for individuals, families, communities, churches, and nations.';

  const fullDescription =
    mission?.paragraphs?.[1] ||
    'At the core of our mandate is the biblical conviction of Ezekiel 22:30: God seeks for believers who will make up the hedge and stand before Him in intercession. When the Church unites with sincere humility and spiritual consecration, God heals the land and releases lasting transformation.';

  const categoryLabel = mission?.label || 'OUR MANDATE & CALLING';

  return (
    <section
      id="about"
      className="bg-[#F6E4CF] rounded-t-[25px] relative z-10 py-20 md:py-32 px-6"
    >
      {/* Top block */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#321C04] text-base md:text-lg leading-relaxed max-w-lg mx-auto font-normal">
          {shortIntro}
        </p>

        {/* Two pill buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {/* Dark pill */}
          <Link
            to="/about/"
            className="bg-[#321C04] text-[#FFF9F2] hover:bg-[#1F1003] rounded-full px-6 py-3 flex items-center gap-3 transition-colors group shadow-sm"
          >
            <div className="w-6 h-6 rounded-full bg-[#FFF9F2] text-[#321C04] flex items-center justify-center shrink-0">
              <Mail size={14} className="text-[#321C04]" />
            </div>
            <span className="text-xs uppercase tracking-wide font-medium">
              Learn More About Our Mandate
            </span>
          </Link>

          {/* Muted pill */}
          <a
            href="#prayer-request"
            className="bg-[#D9C4AA] text-[#321C04] hover:bg-[#CEBA9E] rounded-full px-6 py-3 flex items-center gap-3 transition-colors group shadow-sm"
          >
            <div className="w-6 h-6 rounded-full bg-[#FFF9F2] text-[#321C04] flex items-center justify-center shrink-0">
              <Plus size={14} className="text-[#321C04]" />
            </div>
            <span className="text-xs uppercase tracking-wide font-medium">
              Submit a Prayer Request
            </span>
          </a>
        </div>
      </div>

      {/* Decorative divider */}
      <div className="flex items-center gap-2 my-12 max-w-6xl mx-auto" aria-hidden="true">
        <div className="w-2 h-2 rounded-full bg-[#D9C4AA]" />
        <div className="flex-1 h-[2px] bg-[#D9C4AA]" />
        <div className="w-2 h-2 rounded-full bg-[#D9C4AA]" />
      </div>

      {/* Bottom block */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        {/* Left: SVG logo (color: #321C04) + short existing category label */}
        <div className="flex flex-col items-start gap-3 shrink-0">
          <div className="text-[#321C04]">
            <NapfanLogo size={44} />
          </div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#321C04]">
            {categoryLabel}
          </span>
        </div>

        {/* Right: Existing full organisational description */}
        <div className="flex-1">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.3] font-normal text-[#321C04]">
            {fullDescription}
          </p>
        </div>
      </div>
    </section>
  );
};

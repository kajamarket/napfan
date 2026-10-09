import React, { useState, useEffect } from 'react';
import { Seo } from '../components/Seo';
import { LoadingScreen } from '../components/LoadingScreen';
import { Hero } from '../components/Hero';
import { MissionSection } from '../components/MissionSection';
import { ProgrammeSection } from '../components/ProgrammeSection';
import { FounderSection } from '../components/FounderSection';
import { PrayerRequestSection } from '../components/PrayerRequestSection';
import { NetworkSection } from '../components/NetworkSection';
import { ContactFooter } from '../components/ContactFooter';
import { SelectedWorks } from '../components/SelectedWorks';
import { CategoryCarousel } from '../components/CategoryCarousel';
import { EditorialStatement } from '../components/EditorialStatement';
import { Explorations } from '../components/Explorations';
import { ArchiveTicker } from '../components/ArchiveTicker';
import { Stats } from '../components/Stats';
import { NewsletterSection } from '../components/NewsletterSection';
import { posts } from '../data/posts';
import { siteConfig } from '../site.config';

export const HomePage: React.FC = () => {
  const [showLoading, setShowLoading] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const alreadyLoaded = sessionStorage.getItem('napfan_site_loaded');
        if (!alreadyLoaded) {
          setShowLoading(true);
          sessionStorage.setItem('napfan_site_loaded', 'true');
        }
      } catch {
        setShowLoading(false);
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-[#321C04] overflow-x-clip">
      <Seo
        title={`${siteConfig.name} — Standing in the Gap for Nations`}
        description={siteConfig.description}
        path="/"
        type="website"
        pageType="WebPage"
      />

      {/* Loading Screen: Home only, once per session */}
      {showLoading && (
        <LoadingScreen onComplete={() => setShowLoading(false)} />
      )}

      {/* SECTION 1 — HERO */}
      <Hero ready={!showLoading} />

      {/* SECTION 2 — ABOUT / MANDATE (Overlaps Hero with rounded-t-[25px] on cream-bg) */}
      <MissionSection />

      {/* SECTION 3 — 21 DAY PROGRAMME (Dark fixed prayer background) */}
      <ProgrammeSection isSummary={true} />

      {/* SECTION 4 — LEADERSHIP (Cream treatment) */}
      <FounderSection />

      {/* SECTION 5 — PRAYER REQUEST (Cream container with dark left border) */}
      <PrayerRequestSection />

      {/* SECTION 6 — MINISTRY NETWORK (Dark cream bg) */}
      <NetworkSection />

      {/* SECTION 7 — FOOTER (Cream bg with logo and links) */}
      <ContactFooter />

      {/* HIDDEN SECTIONS (Preserved data & components, completely hidden visually) */}
      {/* Articles section parent wrapper → className="hidden" */}
      <div className="hidden" aria-hidden="true">
        <SelectedWorks posts={posts} />
      </div>

      {/* Areas of Focus & Teaching section wrapper → className="hidden" */}
      <div className="hidden" aria-hidden="true">
        <CategoryCarousel posts={posts} />
      </div>

      <div className="hidden" aria-hidden="true">
        <EditorialStatement />
        <Explorations />
        <ArchiveTicker />
        <Stats />
        <NewsletterSection />
      </div>
    </div>
  );
};

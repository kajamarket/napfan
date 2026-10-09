import React, { useState } from 'react';
import { Seo } from '../components/Seo';
import { ProgrammeSection } from '../components/ProgrammeSection';
import { PrayerRequestSection } from '../components/PrayerRequestSection';
import { ContactFooter } from '../components/ContactFooter';
import { PROGRAMME_META } from '../data/programmeData';
import { siteConfig } from '../site.config';
import { BookOpen, Calendar, Users, Flame, HeartHandshake } from 'lucide-react';

export const ProgrammePage: React.FC = () => {
  const [selectedDay] = useState<number>(1);

  return (
    <div className="min-h-screen bg-white text-text-primary pt-28 pb-16">
      <Seo
        title={`${PROGRAMME_META.fullName} — ${PROGRAMME_META.theme} | ${siteConfig.name}`}
        description={`Join ${siteConfig.name} for the ${PROGRAMME_META.edition}: ${PROGRAMME_META.fullName}. Theme: ${PROGRAMME_META.theme}. Dates: ${PROGRAMME_META.dates}. Daily prayers, scriptures, and exhortations.`}
        path="/prayer-programme/"
        type="website"
        pageType="WebPage"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: '21 Day Prayer Programme', path: '/prayer-programme/' },
        ]}
      />

      {/* Hero / Overview Header */}
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 mb-12 md:mb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs text-muted uppercase tracking-[0.25em] font-medium font-mono">
              ANNUAL SPIRITUAL CONSECRATION · {PROGRAMME_META.edition.toUpperCase()}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display italic text-heading tracking-tight mb-5 leading-[1.12]">
            {PROGRAMME_META.fullName}
          </h1>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xl sm:text-2xl text-accent font-light">
              Theme: <strong className="font-semibold text-heading">“{PROGRAMME_META.theme}”</strong>
            </span>
            <span className="text-muted text-sm font-mono">
              · {PROGRAMME_META.dates}
            </span>
          </div>

          <p className="text-base sm:text-lg text-text-primary/80 font-light leading-relaxed mb-8">
            Since 1994, the All Believers 21 Day Fasting and Prayer has gathered intercessors, families, and churches across nations to seek the face of God. Powered by <strong>{PROGRAMME_META.poweredBy}</strong>, this 32nd Edition calls the body of Christ into an unshakeable confidence in Jesus as our Way Maker.
          </p>
        </div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-8 border-t border-stroke">
          <div className="p-5 rounded-2xl bg-surface border border-stroke flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
                Dates & Duration
              </span>
            </div>
            <p className="text-sm font-medium text-heading">
              12 Oct – 1 Nov 2026
            </p>
            <span className="text-xs text-muted font-light mt-1">
              21 Consecutive Days of Seeking God
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-surface border border-stroke flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <Flame className="w-5 h-5 text-accent" />
              <span className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
                Theme Focus
              </span>
            </div>
            <p className="text-sm font-medium text-heading">
              Jesus: The Way Maker
            </p>
            <span className="text-xs text-muted font-light mt-1">
              Isaiah 43:19 · Revelation 3:8
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-surface border border-stroke flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
                Participation Levels
              </span>
            </div>
            <p className="text-sm font-medium text-heading">
              All Believers Everywhere
            </p>
            <span className="text-xs text-muted font-light mt-1">
              Family, Fellowship, Church & National
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-surface border border-stroke flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-5 h-5 text-accent" />
              <span className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
                Fasting Guideline
              </span>
            </div>
            <p className="text-sm font-medium text-heading">
              Flexible Schedules
            </p>
            <span className="text-xs text-muted font-light mt-1">
              Participants choose their daily fast schedule
            </span>
          </div>
        </div>
      </div>

      {/* Main Programme Section: Navigable 21 Days */}
      <ProgrammeSection initialDay={selectedDay} showFullIntro={false} />

      {/* Prayer Request Section on Hub */}
      <PrayerRequestSection />

      {/* Footer */}
      <div className="mt-16">
        <ContactFooter />
      </div>
    </div>
  );
};

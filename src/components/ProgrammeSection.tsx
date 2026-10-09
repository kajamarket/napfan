import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NapfanLogo } from './NapfanLogo';
import { PROGRAMME_META, PROGRAMME_DAYS } from '../data/programmeData';

interface ProgrammeSectionProps {
  initialDay?: number;
  showFullIntro?: boolean;
  isSummary?: boolean;
}

export const ProgrammeSection: React.FC<ProgrammeSectionProps> = ({
  initialDay = 1,
  showFullIntro = true,
  isSummary = false,
}) => {
  // Live temporal state updated client-side every second
  const [now, setNow] = useState<Date>(() => new Date());
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);

  // Full day slider states (for dedicated hub or full mode)
  const [activeDayNumber, setActiveDayNumber] = useState<number>(initialDay);
  const [revealedDays, setRevealedDays] = useState<Record<number, boolean>>({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Temporal logic for 21-Day Programme:
  // Start date: 12 October 2026. End date: 1 November 2026.
  const start = new Date('2026-10-12');
  const end = new Date('2026-11-01');

  const isBefore = now < start;
  const isDuring = now >= start && now <= end;
  const isAfter = now > end;

  // PATCH 3 — Progress Bar Calculation:
  // const progress = now < start ? 0 : now > end ? 100 : ((now - start) / (end - start)) * 100;
  const progress = isBefore
    ? 0
    : isAfter
    ? 100
    : ((now.getTime() - start.getTime()) / (end.getTime() - start.getTime())) * 100;

  // Active day index determination (1 to 21)
  const msPerDay = 1000 * 60 * 60 * 24;
  const liveDayNumber = isBefore
    ? 1
    : isAfter
    ? 21
    : Math.min(21, Math.max(1, Math.floor((now.getTime() - start.getTime()) / msPerDay) + 1));

  // Countdown calculations to 12 Oct 2026
  const diff = Math.max(0, start.getTime() - now.getTime());
  const countdownDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const countdownHours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const countdownMinutes = Math.floor((diff / (1000 * 60)) % 60);
  const countdownSeconds = Math.floor((diff / 1000) % 60);

  // IntersectionObserver for full day slider mode
  useEffect(() => {
    if (isSummary || typeof window === 'undefined') return;

    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const dayNumStr = entry.target.getAttribute('data-day');
            if (dayNumStr) {
              const dayNum = parseInt(dayNumStr, 10);
              setActiveDayNumber(dayNum);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const dayNumStr = entry.target.getAttribute('data-day');
            if (dayNumStr) {
              const dayNum = parseInt(dayNumStr, 10);
              setRevealedDays((prev) => ({ ...prev, [dayNum]: true }));
              revealObserver.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((el) => {
      if (el) {
        activeObserver.observe(el);
        revealObserver.observe(el);
      }
    });

    return () => {
      activeObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [isSummary]);

  const scrollToDay = (dayNum: number) => {
    if (dayNum < 1 || dayNum > 21) return;
    const el = document.getElementById(`day-card-${dayNum}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const previewDay = PROGRAMME_DAYS[liveDayNumber - 1] || PROGRAMME_DAYS[0];

  // ==========================================
  // RENDER: HOMEPAGE COLLAPSED SUMMARY PANEL
  // ==========================================
  if (isSummary) {
    return (
      <section
        id="programme"
        className="relative bg-fixed bg-cover bg-center px-5 md:px-10 lg:px-16 py-20 md:py-32"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10, 10, 10, 0.88), rgba(10, 10, 10, 0.94)), url('/faithheroes_whatsapp_img.jpeg')",
          backgroundColor: '#111827',
        }}
      >
        <div className="max-w-[1140px] mx-auto">
          {/* Main Summary Panel Box */}
          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 sm:p-10 lg:p-14 border border-white/10 shadow-2xl">
            {/* Top row: Edition + Live Status Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="text-white/60 text-xs font-mono uppercase tracking-[0.25em] font-medium">
                {PROGRAMME_META.edition.toUpperCase()}
              </span>

              {/* Live Status Badge */}
              {isBefore ? (
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-white/10 text-white/90 border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  Upcoming · Starts 12 Oct 2026
                </span>
              ) : isDuring ? (
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Now · Day {liveDayNumber} of 21
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-white/10 text-white/70 border border-white/20">
                  Programme Completed
                </span>
              )}
            </div>

            {/* Programme Title & Theme */}
            <div className="space-y-4 mb-8">
              <h2 className="text-white text-2xl sm:text-4xl lg:text-5xl leading-[1.18] font-normal tracking-tight">
                {PROGRAMME_META.fullName}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-white/80 text-base sm:text-lg">
                <span>
                  Theme:{' '}
                  <strong className="text-white font-semibold">
                    “{PROGRAMME_META.theme}”
                  </strong>
                </span>
                <span className="text-white/40">·</span>
                <span className="text-white/70 font-mono text-sm">
                  {PROGRAMME_META.dates}
                </span>
              </div>
            </div>

            {/* Middle Grid: Countdown Timer & Progress Bar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-8 border-t border-white/10 mb-8">
              {/* PATCH 2 — COUNTDOWN TIMER */}
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-white/60 mb-3">
                  {isBefore
                    ? 'Countdown to 12 Oct 2026'
                    : isDuring
                    ? 'Live Programme Progress'
                    : 'Programme Concluded'}
                </div>

                {isBefore ? (
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl px-3 sm:px-4 py-2.5 min-w-[62px] sm:min-w-[70px]">
                      <span className="text-2xl sm:text-3xl font-mono font-bold text-white leading-none">
                        {countdownDays}
                      </span>
                      <span className="text-[10px] uppercase font-mono text-white/50 tracking-wider mt-1.5">
                        Days
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl px-3 sm:px-4 py-2.5 min-w-[62px] sm:min-w-[70px]">
                      <span className="text-2xl sm:text-3xl font-mono font-bold text-white leading-none">
                        {String(countdownHours).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] uppercase font-mono text-white/50 tracking-wider mt-1.5">
                        Hours
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl px-3 sm:px-4 py-2.5 min-w-[62px] sm:min-w-[70px]">
                      <span className="text-2xl sm:text-3xl font-mono font-bold text-white leading-none">
                        {String(countdownMinutes).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] uppercase font-mono text-white/50 tracking-wider mt-1.5">
                        Mins
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl px-3 sm:px-4 py-2.5 min-w-[62px] sm:min-w-[70px]">
                      <span className="text-2xl sm:text-3xl font-mono font-bold text-white leading-none">
                        {String(countdownSeconds).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] uppercase font-mono text-white/50 tracking-wider mt-1.5">
                        Secs
                      </span>
                    </div>
                  </div>
                ) : isDuring ? (
                  <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
                    Day {liveDayNumber} of 21
                  </div>
                ) : (
                  <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
                    Programme Completed
                  </div>
                )}
              </div>

              {/* PATCH 3 — PROGRESS BAR */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-white/70 uppercase tracking-wider">
                  <span>
                    {isBefore
                      ? 'Starts 12 October 2026'
                      : isDuring
                      ? `Day ${liveDayNumber} of 21`
                      : 'Programme Completed'}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-2 bg-white/15 rounded-full overflow-hidden w-full">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-white/50 text-xs font-light">
                  Powered by {PROGRAMME_META.poweredBy}. Consecrating 21 days in prayer and fasting.
                </p>
              </div>
            </div>

            {/* Actions & Single Toggle Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/prayer-programme/"
                  className="bg-white text-black text-sm font-medium px-6 py-3 rounded-xl hover:bg-white/90 transition-colors shadow-sm cursor-pointer"
                >
                  View Full Programme Hub
                </Link>
                <a
                  href="#prayer-request"
                  className="border border-white/20 text-white text-sm font-medium px-5 py-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Prayer Request
                </a>
              </div>

              {/* Single Toggle Button to expand/collapse current day preview only */}
              <button
                type="button"
                onClick={() => setIsPreviewOpen(!isPreviewOpen)}
                aria-expanded={isPreviewOpen}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-colors cursor-pointer border border-white/10"
              >
                <span>
                  {isPreviewOpen
                    ? 'Hide Day Preview'
                    : `View Day ${liveDayNumber} Preview`}
                </span>
              </button>
            </div>

            {/* Expandable Preview of Current Day Only */}
            {isPreviewOpen && (
              <div className="mt-8 pt-8 border-t border-white/15 animate-fade-in-down">
                <div className="bg-black/30 rounded-2xl p-6 sm:p-8 border border-white/15 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="text-white/80 shrink-0">
                        <NapfanLogo size={28} />
                      </div>
                      <div>
                        <div className="text-white/60 text-xs font-mono uppercase tracking-wider">
                          DAY {previewDay.dayNumber} OF 21
                        </div>
                        <div className="text-white/40 text-xs font-mono">
                          {previewDay.date} ({previewDay.dayName})
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-white/60 border border-white/15 px-3 py-1 rounded-full">
                      Daily Focus
                    </span>
                  </div>

                  <h3 className="text-white text-2xl font-medium tracking-tight font-display italic">
                    “{previewDay.theme}”
                  </h3>

                  <div className="text-white/60 text-xs sm:text-sm font-mono">
                    <span className="text-white/40">Scriptures: </span>
                    <span className="text-white/90">
                      {previewDay.scriptures.join(' · ')}
                    </span>
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed font-light">
                    {previewDay.exhortation}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-white/50 font-semibold">
                      Key Prayer Points
                    </div>
                    {previewDay.prayerPoints.map((pt, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-white/75 text-sm leading-relaxed font-light"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10 flex justify-end">
                    <Link
                      to="/prayer-programme/"
                      className="text-xs font-mono uppercase tracking-wider text-white hover:text-white/80 underline underline-offset-4"
                    >
                      Open All 21 Days in Full Hub
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // ==========================================
  // RENDER: FULL DAY-BY-DAY SLIDER (Hub Page)
  // ==========================================
  return (
    <section
      id="programme"
      className="relative bg-fixed bg-cover bg-center px-5 md:px-10 lg:px-16 py-20 md:py-32"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10, 10, 10, 0.88), rgba(10, 10, 10, 0.94)), url('/faithheroes_whatsapp_img.jpeg')",
        backgroundColor: '#111827',
      }}
    >
      <div className="max-w-[1360px] mx-auto grid lg:grid-cols-[400px_1fr] xl:grid-cols-[460px_1fr] gap-16 lg:gap-24 xl:gap-48 items-start">
        {/* Left column (sticky desktop) */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-32 z-20">
          {/* Top: Section Heading */}
          <div>
            <span className="text-white/60 text-xs font-mono uppercase tracking-[0.25em] font-medium block mb-3">
              {PROGRAMME_META.edition.toUpperCase()}
            </span>
            <h2 className="text-white text-2xl sm:text-3xl lg:text-[46px] leading-[1.2] font-normal tracking-tight">
              {PROGRAMME_META.fullName}
            </h2>
            <div className="mt-3 flex items-center gap-2 text-white/80 text-sm">
              <span>
                Theme:{' '}
                <strong className="text-white font-semibold">
                  “{PROGRAMME_META.theme}”
                </strong>
              </span>
              <span className="text-white/40">·</span>
              <span className="text-white/60 font-mono text-xs">
                {PROGRAMME_META.dates}
              </span>
            </div>

            {/* Progress indicator */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-white/70 uppercase tracking-wider">
                <span>DAY {activeDayNumber} / 21</span>
                <span>{Math.round((activeDayNumber / 21) * 100)}%</span>
              </div>
              <div className="h-[2px] bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white/80 rounded-full transition-all duration-300"
                  style={{ width: `${(activeDayNumber / 21) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Middle: Day nav buttons */}
          <div className="hidden lg:flex flex-wrap gap-1.5 my-6 max-h-[35vh] overflow-y-auto pr-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {PROGRAMME_DAYS.map((d) => {
              const isActive = d.dayNumber === activeDayNumber;
              return (
                <button
                  key={d.dayNumber}
                  type="button"
                  onClick={() => scrollToDay(d.dayNumber)}
                  className={`text-xs font-mono rounded-lg px-2.5 py-1.5 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-black/20 text-white font-bold ring-1 ring-white/40'
                      : 'bg-black/20 text-white/40 hover:text-white/80'
                  }`}
                  aria-label={`Go to Day ${d.dayNumber}`}
                >
                  Day {d.dayNumber}
                </button>
              );
            })}
          </div>

          {/* Bottom: Supporting text + CTA button (No arrow icons per Patch 5) */}
          <div className="space-y-4">
            <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
              Powered by {PROGRAMME_META.poweredBy}. All believers are invited
              to participate in consecrated prayer and fasting across the
              nations.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#prayer-request"
                className="inline-block bg-white text-black text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors shadow-sm"
              >
                Prayer Altar
              </a>
            </div>
          </div>
        </div>

        {/* Right column — scrolling day cards */}
        <div className="space-y-8 md:space-y-12">
          {PROGRAMME_DAYS.map((d, index) => {
            const isRevealed = revealedDays[d.dayNumber];

            return (
              <div
                key={d.dayNumber}
                id={`day-card-${d.dayNumber}`}
                data-day={d.dayNumber}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`bg-black/20 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-white/10 transition-all ${
                  isRevealed
                    ? 'translate-x-0 opacity-100 duration-700 ease-out'
                    : 'translate-x-16 opacity-0'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3.5">
                    <div className="text-white/80 shrink-0">
                      <NapfanLogo size={32} />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm font-medium font-mono uppercase tracking-wider">
                        DAY {d.dayNumber} OF 21
                      </div>
                      <div className="text-white/40 text-xs font-mono">
                        {d.date}
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-widest text-white/50 border border-white/10 px-3 py-1 rounded-full">
                    {d.dayName}
                  </span>
                </div>

                {/* Day focus/title */}
                <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-medium tracking-tight mb-3 font-display italic">
                  “{d.theme}”
                </h3>

                {/* Scripture references */}
                <div className="text-white/60 text-sm font-mono mb-6">
                  <span>Scriptures: </span>
                  <span className="text-white/80">{d.scriptures.join(' · ')}</span>
                </div>

                {/* Exhortation */}
                <p className="text-white/80 text-sm md:text-base leading-relaxed font-light mb-6">
                  {d.exhortation}
                </p>

                {/* Prayer points */}
                <div className="space-y-3 pt-4 border-t border-white/10 mb-8">
                  <div className="text-xs font-mono uppercase tracking-widest text-white/50 font-semibold mb-2">
                    Prayer Points
                  </div>
                  {d.prayerPoints.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-3 text-white/70 text-sm md:text-base leading-relaxed font-light"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Prev/Next controls (No arrow icons per Patch 5) */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => scrollToDay(d.dayNumber - 1)}
                    disabled={d.dayNumber === 1}
                    className={`inline-flex items-center gap-1.5 border border-white/20 text-white/70 rounded-xl px-4 py-2 text-sm hover:bg-white/10 transition-colors cursor-pointer ${
                      d.dayNumber === 1
                        ? 'opacity-30 cursor-not-allowed hover:bg-transparent'
                        : ''
                    }`}
                  >
                    <span>Previous</span>
                  </button>

                  <span className="text-xs font-mono text-white/40">
                    Day {d.dayNumber} / 21
                  </span>

                  <button
                    type="button"
                    onClick={() => scrollToDay(d.dayNumber + 1)}
                    disabled={d.dayNumber === 21}
                    className={`inline-flex items-center gap-1.5 border border-white/20 text-white/70 rounded-xl px-4 py-2 text-sm hover:bg-white/10 transition-colors cursor-pointer ${
                      d.dayNumber === 21
                        ? 'opacity-30 cursor-not-allowed hover:bg-transparent'
                        : ''
                    }`}
                  >
                    <span>Next</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

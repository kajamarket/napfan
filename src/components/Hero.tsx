import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../site.config';

interface HeroProps {
  ready?: boolean;
}

export const Hero: React.FC<HeroProps> = () => {
  const handleScrollTo = (id: string) => {
    if (typeof document === 'undefined') return;
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const videoUrl = siteConfig.heroVideoUrl;
  const fallbackImage = '/faithheroes_whatsapp_img.jpeg';

  return (
    <section
      id="hero"
      className="h-screen overflow-hidden relative mb-[-25px] select-none"
    >
      {/* Background: Existing NAPFAN video asset or authentic image */}
      {videoUrl ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={fallbackImage}
          className="object-cover absolute inset-0 w-full h-full"
        >
          <source src={videoUrl} type="video/mp4" />
          <source src="/videos/silhouette-of-christ-carrying-his-cross-18091.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src={fallbackImage}
          alt="Nations Prayer and Fasting Network"
          className="object-cover absolute inset-0 w-full h-full"
          loading="eager"
        />
      )}

      {/* Hero overlay: bg-black/20 */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Hero Content: absolute bottom-0 left-0 right-0 pb-12 md:pb-16 flex flex-col items-center text-center px-6 */}
      <div className="absolute bottom-0 left-0 right-0 pb-12 md:pb-16 flex flex-col items-center text-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center max-w-5xl"
        >
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-normal text-white leading-[1.1] tracking-tight">
            21 Day{' '}
            <em
              className="not-italic font-normal"
              style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
            >
              Fasting &amp; Prayer
            </em>{' '}
            2026
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-sm md:text-base font-medium max-w-[420px] mt-4 leading-relaxed">
            Theme: Jesus — The Way Maker &nbsp;·&nbsp; 32nd Edition
            <br />
            Mon. 12th Oct. – Sun. 1st Nov., 2026
            <br />
            Time: 10:00PM Eastern Time &nbsp;|&nbsp; Venue: Zoom / YouTube
            <br />
            Meeting ID: 868 7993 6552 &nbsp;|&nbsp; Passcode: Jesus
            <br />
            Ministering: Pastor Emmanuel Olu Falodun &amp; Other Anointed Ministers
          </p>

          {/* CTA Bar: bg-black/25 backdrop-blur-md rounded-xl flex items-center pl-6 pr-1 py-1 mt-6 */}
          <div className="bg-black/25 backdrop-blur-md rounded-xl flex items-center pl-6 pr-1 py-1 mt-6 gap-4 border border-white/10 shadow-lg">
            {/* Supporting Text */}
            <span className="text-white text-sm font-medium hidden sm:block">
              Nations Prayer and Fasting Network (NAPFAN) · nationspray.org
            </span>
            <span className="text-white text-sm font-medium sm:hidden">
              NAPFAN · nationspray.org
            </span>

            {/* Primary Button */}
            <a
              href="https://forms.gle/rNaLYP6kKcCJqEDu9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors shrink-0 shadow-sm cursor-pointer"
            >
              Submit a Prayer Request
            </a>
          </div>

          {/* Prayer request note */}
          <p className="text-white/60 text-xs mt-3">
            Send your prayer request to{' '}
            <a
              href="mailto:powerforexploits@gmail.com"
              className="underline hover:text-white/90 transition-colors"
            >
              powerforexploits@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { ContactFooter } from '../components/ContactFooter';
import { siteConfig } from '../site.config';
import { BookOpen, Calendar, ShieldCheck, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-text-primary pt-28 pb-16">
      <Seo
        title={`About ${siteConfig.name} — Our Mandate & Ministry Story`}
        description={`Learn about the Nations Prayer and Fasting Network (NAPFAN), our mandate to stand in the gap for nations, and our leadership under Pastor Emmanuel Olu Falodun.`}
        path="/about/"
        type="website"
        pageType="AboutPage"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About & Mandate', path: '/about/' },
        ]}
      />

      <div className="max-w-[880px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs text-muted uppercase tracking-[0.25em] font-medium font-mono">
              ABOUT OUR MANDATE & CALLING
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display italic text-heading tracking-tight mb-6 leading-[1.12]">
            About <span className="font-normal not-italic">{siteConfig.name}</span>
          </h1>

          <p className="text-lg md:text-xl text-heading/90 font-light leading-relaxed">
            A network of consecrated intercessors committed to prayer, fasting, and standing in the gap for people, communities, and nations.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="space-y-12 text-base md:text-lg text-text-primary/85 leading-relaxed font-light border-t border-stroke pt-10">
          {/* Who We Are */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-display italic text-heading mb-4">
              Who We Are
            </h2>
            <p className="mb-4">
              Nations Prayer and Fasting Network (NAPFAN) is a Christian prayer and intercession movement dedicated to raising, encouraging, and mobilising believers across denominations and geographical boundaries to stand in the gap before God.
            </p>
            <p className="mb-4">
              We stand upon the timeless prophetic commission found in Ezekiel 22:30: <em>“I sought for a man among them who would make up the hedge and stand in the gap before Me on behalf of the land, that I should not destroy it.”</em> In a world marked by cultural turbulence, systemic injustice, and moral uncertainty, we believe that fervent, sacrificial intercession is the highest service the Church can render to humanity.
            </p>
            <p>
              Rather than viewing prayer as an occasional emergency measure, NAPFAN fosters a culture of ongoing spiritual vigilance, biblical fasting, and corporate unity.
            </p>
          </section>

          {/* Our Mandate & Core Pillars */}
          <section className="p-7 sm:p-9 rounded-3xl bg-surface/70 border border-stroke shadow-xs">
            <div className="flex items-center gap-2 text-xs text-accent uppercase tracking-[0.2em] font-mono font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Our Foundational Pillars</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <h3 className="font-display italic text-lg sm:text-xl text-heading font-medium">
                  1. Prevailing Prayer & Fasting
                </h3>
                <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                  Cultivating personal and corporate prayer altars where believers seek God with fasting, purity, and spiritual earnestness.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-display italic text-lg sm:text-xl text-heading font-medium">
                  2. Standing in the Gap
                </h3>
                <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                  Interceding selflessly on behalf of individuals, families, vulnerable communities, pastors, and civil leaders.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-display italic text-lg sm:text-xl text-heading font-medium">
                  3. Unity Across the Body of Christ
                </h3>
                <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                  Uniting believers across tribal, national, and denominational boundaries around the common altar of Christ.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-display italic text-lg sm:text-xl text-heading font-medium">
                  4. Continental & National Awakening
                </h3>
                <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                  Targeting the spiritual climate of African nations and the global Church for moral renewal and righteous governance.
                </p>
              </div>
            </div>
          </section>

          {/* The Ministry Story & 1994 Roots */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                TIMELINE & LEGACY (1994–2026)
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display italic text-heading mb-4">
              The Ministry Story
            </h2>

            <p className="mb-4">
              The roots of NAPFAN trace back to 1994, when the first edition of the <strong>All Believers 21 Day Fasting and Prayer</strong> was birthed. What began as a focused call to intercessors in local fellowships has expanded across decades into an annual spiritual landmark, now marking its <strong>32nd Edition</strong> in 2026 under the theme <em>“Jesus: The Way Maker.”</em>
            </p>
            <p>
              Over the past thirty-two years, thousands of testimonies of broken generational yokes, preserved nations, healed communities, and restored families have verified the reality of God’s promise when His people humble themselves and pray.
            </p>
          </section>

          {/* Leadership Section */}
          <section className="p-7 sm:p-9 rounded-3xl bg-white border border-stroke shadow-md">
            <div className="flex flex-col md:flex-row gap-7 items-center md:items-start">
              <div className="w-40 sm:w-48 aspect-[4/5] rounded-2xl overflow-hidden bg-surface border border-stroke shrink-0 shadow-sm">
                <img
                  src="/founder.jpg"
                  alt="Pastor Emmanuel Olu Falodun"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest font-semibold mb-2">
                  <span>MINISTRY LEADERSHIP</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display italic text-heading leading-tight mb-2">
                  Pastor Emmanuel Olu Falodun
                </h3>

                <div className="space-y-1 mb-4 text-xs font-mono text-muted uppercase tracking-wider">
                  <p className="text-heading font-semibold">
                    General Overseer, Christ Salvation Victory Mission International
                  </p>
                  <p className="text-accent font-semibold">
                    President – Nations Prayer And Fasting Network (NAPFAN)
                  </p>
                </div>

                <p className="text-sm sm:text-base text-text-primary/80 font-light leading-relaxed mb-4">
                  Pastor Emmanuel Olu Falodun has served the body of Christ for over three decades with an unyielding burden for prayer, fasting, discipleship, and spiritual leadership. Through his pastoral ministry, published literature, and annual prayer convocations, he continues to shepherd believers into authentic, prevailing fellowship with God.
                </p>

                <div className="pt-3 border-t border-stroke flex items-center justify-between">
                  <a
                    href="https://www.amazon.com/stores/author/B00AYLJTSY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent hover:text-heading font-semibold underline underline-offset-4"
                  >
                    <span>View Books & Publications</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Action CTAs */}
          <div className="pt-8 border-t border-stroke flex flex-wrap items-center gap-4">
            <Link
              to="/prayer-programme/"
              className="px-6 py-3.5 rounded-full bg-accent text-white hover:bg-accent-light font-medium text-xs font-mono uppercase tracking-wider transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-accent"
            >
              Explore 21 Day Programme
            </Link>
            <Link
              to="/contact/"
              className="px-6 py-3.5 rounded-full bg-white border border-stroke text-heading font-medium text-xs font-mono uppercase tracking-wider hover:border-accent hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent"
            >
              Connect With Us
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <ContactFooter />
      </div>
    </div>
  );
};

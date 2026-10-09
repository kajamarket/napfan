import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteConfig } from '../site.config';
import { HeartHandshake } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  return (
    <section
      id="join"
      className="bg-white py-20 md:py-28 border-b border-stroke/50 relative"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mx-auto text-center p-8 sm:p-12 rounded-3xl bg-surface/50 border border-stroke"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-accent font-mono text-xs tracking-widest font-semibold">
              06.
            </span>
            <span className="text-muted text-xs tracking-[0.25em] font-medium uppercase font-mono">
              STAND WITH US
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display italic text-heading tracking-tight leading-[1.15] mb-4">
            Stand With Us in Prayer & Fasting
          </h2>

          {/* Supporting Text */}
          <p className="text-muted text-sm md:text-base font-light leading-relaxed mb-8 max-w-lg mx-auto">
            If you hear the divine trumpet call to stand in the gap for individuals, families, communities, and nations, we invite you to walk with {siteConfig.name}.
          </p>

          {/* CTAs */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <a
              href="#prayer-request"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-white hover:bg-accent-light text-xs font-mono uppercase tracking-wider font-semibold transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Submit a Prayer Request</span>
            </a>

            <Link
              to="/prayer-programme/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-stroke text-heading hover:border-accent hover:text-accent text-xs font-mono uppercase tracking-wider font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>Explore 21 Day Fasting</span>
            </Link>

            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-stroke text-muted hover:border-accent hover:text-heading text-xs font-mono uppercase tracking-wider font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>Connect With Us</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

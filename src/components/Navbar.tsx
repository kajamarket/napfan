import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NapfanLogo } from './NapfanLogo';
import { siteConfig } from '../site.config';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  // Close dropdown on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = siteConfig.nav || [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about/' },
    { label: '21 Day Prayer', href: '/prayer-programme/' },
    { label: 'Connect', href: '/contact/' },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[92vw]">
      {/* Floating Centered Pill Navbar */}
      <nav
        aria-label="Main Navigation"
        className="bg-white rounded-full shadow-lg px-5 py-2.5 flex items-center justify-between gap-6 border border-black/5 select-none"
      >
        {/* Left: SVG logo (color: #321C04) + existing site name */}
        <Link
          to="/"
          className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#321C04] rounded-full"
          title="NAPFAN"
        >
          <div className="text-[#321C04] shrink-0">
            <NapfanLogo size={24} />
          </div>
          <span className="text-sm font-bold tracking-tight text-black whitespace-nowrap">
            NAPFAN
          </span>
        </Link>

        {/* Right: Animated hamburger -> X toggle (two div lines) */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 focus:outline-none cursor-pointer group"
        >
          <div
            className={`w-5 h-[2px] bg-[#321C04] rounded-full transition-transform duration-300 ${
              isOpen ? 'translate-y-[4px] rotate-45' : ''
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.77,0,0.175,1)' }}
          />
          <div
            className={`w-5 h-[2px] bg-[#321C04] rounded-full transition-transform duration-300 ${
              isOpen ? '-translate-y-[4px] -rotate-45' : ''
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.77,0,0.175,1)' }}
          />
        </button>
      </nav>

      {/* Dropdown Menu Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.2, ease: [0.77, 0, 0.175, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-2xl shadow-xl p-3 border border-black/5 flex flex-col gap-1 z-50"
          >
            {navLinks.map((item) => {
              const isHash = item.href.startsWith('/#') || item.href.startsWith('#');
              const isActive =
                item.href === '/'
                  ? location.pathname === '/'
                  : !isHash && location.pathname.startsWith(item.href);

              if (isHash) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#321C04] hover:bg-[#F6E4CF] transition-colors"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#F6E4CF] text-[#321C04] font-semibold'
                      : 'text-[#321C04] hover:bg-[#F6E4CF]/60'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Quick Action Button */}
            <div className="pt-2 mt-1 border-t border-[#D9C4AA]/40">
              <a
                href="/#prayer-request"
                onClick={() => setIsOpen(false)}
                className="w-full block text-center py-2 px-3 rounded-xl bg-[#321C04] text-[#FFF9F2] text-xs uppercase tracking-wider font-semibold hover:bg-[#1F1003] transition-colors"
              >
                Submit Prayer Request
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

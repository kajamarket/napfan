import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { ScrollToTop } from './ScrollToTop';

export const Layout: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (hash) {
        const id = hash.replace('#', '');
        const timer = window.setTimeout(() => {
          const target = document.getElementById(id);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }, 60);
        return () => window.clearTimeout(timer);
      }
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-accent/30 selection:text-text-primary">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ScrollToTop />
    </div>
  );
};

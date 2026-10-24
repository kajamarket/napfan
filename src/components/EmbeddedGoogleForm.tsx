import React, { useState, useEffect } from 'react';
import { Shield, ExternalLink } from 'lucide-react';

export const DEFAULT_GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfkz3R0Eoq5orOTCtTv31yq33tf4sm-aGLQcX92juV3sWNgHA/viewform?embedded=true';

export const DEFAULT_GOOGLE_FORM_DIRECT_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfkz3R0Eoq5orOTCtTv31yq33tf4sm-aGLQcX92juV3sWNgHA/viewform';

interface EmbeddedGoogleFormProps {
  src?: string;
  title?: string;
  confidentialityNote?: string;
}

export const EmbeddedGoogleForm: React.FC<EmbeddedGoogleFormProps> = ({
  src = DEFAULT_GOOGLE_FORM_EMBED_URL,
  title = 'NAPFAN Communication & Prayer Request Form',
  confidentialityNote = 'Received in confidence by our pastoral & intercessory team',
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Ensure skeleton overlay never stays stuck if iframe finishes loading during SSG hydration
  useEffect(() => {
    const fallbackTimer = window.setTimeout(() => {
      setIsLoaded(true);
    }, 2200);

    return () => window.clearTimeout(fallbackTimer);
  }, []);

  const directUrl = src.includes('?embedded=true')
    ? src.replace('?embedded=true', '')
    : DEFAULT_GOOGLE_FORM_DIRECT_URL;

  return (
    <div className="w-full">
      {/* Seamless single-elevation form frame */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl bg-white border border-[#D9C4AA]/70 shadow-xs overflow-hidden">
        {/* Subtle Editorial Trust & Utility Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-[#FFF9F2] border-b border-[#D9C4AA]/50">
          <div className="flex items-center gap-2 text-xs text-[#321C04]/80 font-light">
            <Shield className="w-3.5 h-3.5 text-[#321C04] shrink-0" />
            <span>{confidentialityNote}</span>
          </div>

          <a
            href={directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#321C04]/70 hover:text-[#321C04] transition-colors"
          >
            <span>Open in new window</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Responsive Iframe Viewport */}
        <div className="relative w-full bg-white">
          {/* Refined Warm Skeleton State while Google Form initializes */}
          {!isLoaded && (
            <div
              aria-hidden="true"
              className="absolute inset-0 z-10 bg-white px-5 sm:px-10 py-8 sm:py-10 flex flex-col gap-6 pointer-events-none transition-opacity duration-500"
            >
              <div className="space-y-3 border-b border-[#D9C4AA]/40 pb-6">
                <div className="h-3 w-28 rounded bg-[#F6E4CF] animate-pulse" />
                <div className="h-7 w-3/4 max-w-sm rounded bg-[#F6E4CF]/80 animate-pulse" />
                <div className="h-4 w-full max-w-md rounded bg-[#F6E4CF]/60 animate-pulse" />
              </div>

              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="space-y-2.5 py-2">
                  <div className="h-3.5 w-40 rounded bg-[#F6E4CF]/80 animate-pulse" />
                  <div className="h-11 w-full rounded-xl bg-[#FFF9F2] border border-[#D9C4AA]/40 animate-pulse" />
                </div>
              ))}

              <div className="space-y-2.5 py-2">
                <div className="h-3.5 w-48 rounded bg-[#F6E4CF]/80 animate-pulse" />
                <div className="h-28 w-full rounded-xl bg-[#FFF9F2] border border-[#D9C4AA]/40 animate-pulse" />
              </div>

              <div className="pt-2">
                <div className="h-10 w-32 rounded-lg bg-[#321C04]/15 animate-pulse" />
              </div>
            </div>
          )}

          <iframe
            src={src}
            title={title}
            onLoad={() => setIsLoaded(true)}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            className={`block w-full h-[1360px] sm:h-[1240px] md:h-[1160px] border-0 bg-white transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

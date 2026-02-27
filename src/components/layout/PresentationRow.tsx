import React, { useRef, useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { PhoneFrame } from './PhoneFrame';

export interface ScreenConfig {
  label: string;
  screen: React.ReactNode;
}

interface PresentationRowProps {
  title: string;
  subtitle?: string;
  screens: ScreenConfig[];
}

export const PresentationRow: React.FC<PresentationRowProps> = ({ title, subtitle, screens }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [screens]);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section className="mb-20">
      {/* Section header */}
      <div className="mb-8">
        <h2 className="text-white text-xl font-bold tracking-tight">{title}</h2>
        {subtitle && (
          <p className="text-white/40 text-sm mt-1">{subtitle}</p>
        )}
        <div className="mt-3 w-10 h-0.5 bg-brand-blue rounded-full" />
      </div>

      {/* Scroll container + arrow */}
      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-8 overflow-x-auto pb-4 scrollbar-presentation"
        >
          {screens.map((s, i) => (
            <PhoneFrame key={i} label={s.label}>
              {s.screen}
            </PhoneFrame>
          ))}
          {/* Right padding sentinel */}
          <div className="flex-shrink-0 w-2" />
        </div>

        {/* Scroll hint arrow — fades out when fully scrolled */}
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full"
            style={{
              width: 40, height: 40,
              background: 'rgba(59,91,219,0.85)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.15)',
              zIndex: 10,
            }}
          >
            <ChevronRight size={18} color="white" strokeWidth={2.5} />
          </button>
        )}

        {/* Count badge — shows how many screens */}
        <div
          className="absolute top-0 right-0 flex items-center gap-1.5"
          style={{ transform: 'translateY(-32px)' }}
        >
          {screens.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === 0 ? 16 : 6,
                height: 4,
                borderRadius: 2,
                background: i === 0 ? 'rgba(59,91,219,0.8)' : 'rgba(255,255,255,0.15)',
                transition: 'all 0.2s',
              }}
            />
          ))}
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginLeft: 4 }}>
            {screens.length} screens
          </span>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowLeftRight, PhoneOff, Info, Clock, MapPin, User } from 'lucide-react';
import { AppNavbar } from '../ui/AppNavbar';
import { CalendarToolbar } from '../ui/CalendarToolbar';
import { CalendarGrid } from '../ui/CalendarGrid';
import { BottomTabBar } from '../ui/BottomTabBar';

export const ShiftDetailScreen: React.FC = () => {
  return (
    <div className="flex flex-col bg-white relative" style={{ height: '100%' }}>
      <AppNavbar showBadge />
      <CalendarToolbar view="week" team="me" />

      {/* Calendar — dimmed */}
      <div className="flex-1 overflow-hidden" style={{ opacity: 0.45 }}>
        <CalendarGrid selectedDay={18} highlightToday={false} />
      </div>

      <BottomTabBar active="calendar" />

      {/* Shift Detail Bottom Sheet */}
      <div
        className="absolute left-0 right-0 bg-white"
        style={{
          bottom: 0, zIndex: 20,
          borderRadius: '24px 24px 0 0',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.12)',
          borderTop: '1px solid #f1f1f4',
        }}
      >
        {/* Handle */}
        <div className="flex justify-center" style={{ paddingTop: 10, paddingBottom: 6 }}>
          <div style={{ width: 36, height: 4, background: '#d1d5db', borderRadius: 2 }} />
        </div>

        {/* Shift header */}
        <div style={{ padding: '4px 20px 12px' }}>
          <div className="flex items-center justify-between" style={{ marginBottom: 4 }}>
            <span style={{ fontSize: 10, fontWeight: 700, background: '#eff3ff', color: '#3B5BDB', padding: '3px 8px', borderRadius: 20 }}>
              REGULAR SHIFT
            </span>
            <span style={{ fontSize: 10, color: '#9ca3af' }}>Sep 18, 2024</span>
          </div>
          <p style={{ fontSize: 18, fontWeight: 800, color: '#1e2d5a', marginTop: 6 }}>MER 2N Medical</p>
        </div>

        {/* Details */}
        <div style={{ margin: '0 16px 12px', padding: '12px 14px', background: '#f9fafb', borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { Icon: Clock,   text: '7:00 AM — 7:00 PM', sub: '12 hours' },
            { Icon: MapPin,  text: 'MER Floor 2N',       sub: 'Medical Unit' },
            { Icon: User,    text: 'Registered Nurse',   sub: 'RN · Regular rate' },
          ].map(({ Icon, text, sub }) => (
            <div key={text} className="flex items-center" style={{ gap: 10 }}>
              <div style={{ width: 30, height: 30, borderRadius: 10, background: '#eff3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={14} color="#3B5BDB" strokeWidth={2} />
              </div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: '#111827' }}>{text}</p>
                <p style={{ fontSize: 9, color: '#9ca3af' }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ padding: '0 14px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <button
            className="w-full flex items-center justify-center gap-2 rounded-xl font-bold text-white"
            style={{ paddingTop: 12, paddingBottom: 12, fontSize: 13, background: '#3B5BDB' }}
          >
            <Info size={15} strokeWidth={2.5} />
            View Full Details
          </button>
          <div className="flex" style={{ gap: 8 }}>
            <button
              className="flex-1 flex items-center justify-center gap-1.5 rounded-xl font-semibold"
              style={{ paddingTop: 10, paddingBottom: 10, fontSize: 12, background: '#f5f3ff', color: '#7C3AED' }}
            >
              <ArrowLeftRight size={13} strokeWidth={2} />
              Request Swap
            </button>
            <button
              className="flex-1 flex items-center justify-center gap-1.5 rounded-xl font-semibold"
              style={{ paddingTop: 10, paddingBottom: 10, fontSize: 12, background: '#fef2f2', color: '#EF4444' }}
            >
              <PhoneOff size={13} strokeWidth={2} />
              Call Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

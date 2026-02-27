import React from 'react';
import { AppNavbar } from '../ui/AppNavbar';
import { CalendarToolbar } from '../ui/CalendarToolbar';
import { CalendarGrid } from '../ui/CalendarGrid';
import { BottomTabBar } from '../ui/BottomTabBar';

export const DayDetailScreen: React.FC = () => {
  return (
    <div className="flex flex-col bg-white relative" style={{ height: '100%' }}>
      <AppNavbar showBadge />
      <CalendarToolbar view="week" team="me" />

      {/* Timecard */}
      <div className="flex gap-2.5 bg-gray-50 border-b border-gray-100" style={{ padding: '10px 16px' }}>
        <button
          className="flex-1 text-white font-bold rounded-xl"
          style={{ paddingTop: 11, paddingBottom: 11, fontSize: 13, background: '#1e2d5a' }}
        >
          Clock Out
        </button>
        <button
          className="flex-1 text-white font-bold rounded-xl"
          style={{ paddingTop: 11, paddingBottom: 11, fontSize: 13, background: '#F59E0B' }}
        >
          End Lunch
        </button>
      </div>

      {/* Calendar — dimmed */}
      <div className="flex-1 overflow-y-auto" style={{ opacity: 0.5 }}>
        <CalendarGrid selectedDay={18} highlightToday={false} />
      </div>

      <BottomTabBar active="calendar" />

      {/* Bottom Sheet — overlays tab bar */}
      <div
        className="absolute left-0 right-0 bg-white"
        style={{
          bottom: 0,
          borderRadius: '22px 22px 0 0',
          boxShadow: '0 -6px 30px rgba(0,0,0,0.10)',
          borderTop: '1px solid #f1f1f4',
          zIndex: 20,
        }}
      >
        {/* Handle */}
        <div className="flex justify-center" style={{ paddingTop: 10, paddingBottom: 4 }}>
          <div style={{ width: 36, height: 4, background: '#d1d5db', borderRadius: 2 }} />
        </div>

        {/* Date header */}
        <div style={{ padding: '4px 20px 8px' }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#111827' }}>Wednesday, Sep 18, 2026</p>
          <p style={{ fontSize: 10, color: '#9ca3af', marginTop: 1 }}>1 shift scheduled</p>
        </div>

        {/* Shift card */}
        <div
          style={{
            margin: '0 16px 12px',
            padding: '12px 14px',
            background: '#eff3ff',
            borderRadius: 16,
            border: '1px solid #c7d2fe',
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#3B5BDB' }}>MER 2N Medical</p>
              <p style={{ fontSize: 10, color: '#6b7280', marginTop: 2 }}>7:00 AM — 7:00 PM · 12 hrs</p>
              <p style={{ fontSize: 9, color: '#9ca3af', marginTop: 2 }}>RN · Regular</p>
            </div>
            <span
              style={{
                background: '#3B5BDB', color: 'white', fontSize: 8, fontWeight: 700,
                padding: '3px 7px', borderRadius: 6,
              }}
            >
              WORK
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2.5" style={{ padding: '0 16px 20px' }}>
          <button
            className="flex-1 text-white font-bold rounded-xl"
            style={{ paddingTop: 11, paddingBottom: 11, fontSize: 12, background: '#3B5BDB' }}
          >
            Add on this date
          </button>
          <button
            className="flex-1 font-bold rounded-xl"
            style={{ paddingTop: 11, paddingBottom: 11, fontSize: 12, background: '#f3f4f6', color: '#374151' }}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

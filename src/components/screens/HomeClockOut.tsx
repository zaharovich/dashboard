import React from 'react';
import { AppNavbar } from '../ui/AppNavbar';
import { CalendarToolbar } from '../ui/CalendarToolbar';
import { CalendarGrid } from '../ui/CalendarGrid';
import { BottomTabBar } from '../ui/BottomTabBar';

export const HomeClockOut: React.FC = () => {
  return (
    <div className="flex flex-col bg-white" style={{ height: '100%' }}>
      <AppNavbar showBadge />
      <CalendarToolbar view="week" team="me" />

      {/* Timecard — on the clock */}
      <div className="bg-gray-50 border-b border-gray-100" style={{ padding: '8px 16px 10px' }}>
        <p className="text-center" style={{ fontSize: 10, color: '#9ca3af', marginBottom: 6 }}>
          On the clock since{' '}
          <span style={{ color: '#1e2d5a', fontWeight: 700 }}>7:02 AM</span>
        </p>
        <div className="flex gap-2.5">
          <button
            className="flex-1 text-white font-bold rounded-xl"
            style={{ paddingTop: 11, paddingBottom: 11, fontSize: 13, background: '#1e2d5a' }}
          >
            Clock Out
          </button>
          <button
            className="flex-1 text-white font-bold rounded-xl"
            style={{ paddingTop: 11, paddingBottom: 11, fontSize: 13, background: '#F59E0B', boxShadow: '0 2px 8px rgba(245,158,11,0.3)' }}
          >
            End Lunch
          </button>
        </div>
        <p className="text-center" style={{ fontSize: 9, color: '#9ca3af', marginTop: 5 }}>
          Lunch timer:{' '}
          <span style={{ color: '#F59E0B', fontWeight: 700 }}>22:14</span> remaining
        </p>
      </div>

      {/* Calendar */}
      <div className="flex-1 overflow-y-auto">
        <CalendarGrid highlightToday />
      </div>

      <BottomTabBar active="calendar" badge />
    </div>
  );
};

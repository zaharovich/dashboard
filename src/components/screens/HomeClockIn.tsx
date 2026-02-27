import React from 'react';
import { AppNavbar } from '../ui/AppNavbar';
import { CalendarToolbar } from '../ui/CalendarToolbar';
import { CalendarGrid } from '../ui/CalendarGrid';
import { BottomTabBar } from '../ui/BottomTabBar';

export const HomeClockIn: React.FC = () => {
  return (
    <div className="flex flex-col bg-white" style={{ height: '100%' }}>
      <AppNavbar showBadge />
      <CalendarToolbar view="week" team="me" />

      {/* Timecard */}
      <div className="flex gap-2.5 bg-gray-50 border-b border-gray-100" style={{ padding: '10px 16px' }}>
        <button
          className="flex-1 text-white font-bold rounded-xl"
          style={{ paddingTop: 11, paddingBottom: 11, fontSize: 13, background: '#3B5BDB', boxShadow: '0 2px 8px rgba(59,91,219,0.3)' }}
        >
          Clock In
        </button>
        <button
          className="flex-1 text-white font-bold rounded-xl"
          style={{ paddingTop: 11, paddingBottom: 11, fontSize: 13, background: '#12B76A', boxShadow: '0 2px 8px rgba(18,183,106,0.3)' }}
        >
          Start Lunch
        </button>
      </div>

      {/* Calendar */}
      <div className="flex-1 overflow-y-auto">
        <CalendarGrid highlightToday />
      </div>

      <BottomTabBar active="calendar" badge />
    </div>
  );
};

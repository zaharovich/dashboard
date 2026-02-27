import React from 'react';
import { AppNavbar } from '../ui/AppNavbar';
import { CalendarToolbar } from '../ui/CalendarToolbar';
import { CalendarGrid } from '../ui/CalendarGrid';
import { BottomTabBar } from '../ui/BottomTabBar';

export const MonthViewScreen: React.FC = () => {
  return (
    <div className="flex flex-col bg-white" style={{ height: '100%' }}>
      <AppNavbar showBadge />
      <CalendarToolbar view="month" team="me" />

      {/* Timecard */}
      <div className="flex gap-2 bg-gray-50 border-b border-gray-100 flex-shrink-0" style={{ padding: '8px 16px' }}>
        <button className="flex-1 text-white font-bold rounded-xl" style={{ paddingTop: 9, paddingBottom: 9, fontSize: 12, background: '#3B5BDB' }}>
          Clock In
        </button>
        <button className="flex-1 text-white font-bold rounded-xl" style={{ paddingTop: 9, paddingBottom: 9, fontSize: 12, background: '#12B76A' }}>
          Start Lunch
        </button>
      </div>

      {/* Month stats bar */}
      <div className="flex items-center justify-around flex-shrink-0 bg-white" style={{ padding: '8px 16px', borderBottom: '1px solid #f1f1f4' }}>
        {[
          { label: 'Shifts', value: '12', color: '#3B5BDB' },
          { label: 'Hours',  value: '96h', color: '#111827' },
          { label: 'PTO',    value: '1d',  color: '#12B76A' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <p style={{ fontSize: 14, fontWeight: 800, color: s.color }}>{s.value}</p>
            <p style={{ fontSize: 8, color: '#9ca3af', marginTop: 1 }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Calendar */}
      <div className="flex-1 overflow-y-auto">
        <CalendarGrid highlightToday />
      </div>

      <BottomTabBar active="calendar" badge />
    </div>
  );
};

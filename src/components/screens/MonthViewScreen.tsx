import React, { useState } from 'react';
import { AppNavbar } from '../ui/AppNavbar';
import { CalendarToolbar } from '../ui/CalendarToolbar';
import { CalendarGrid } from '../ui/CalendarGrid';
import { BottomTabBar } from '../ui/BottomTabBar';
import { AiSuggestionSheet } from './AiSuggestionSheet';

export const MonthViewScreen: React.FC = () => {
  const [aiDay, setAiDay] = useState<number | null>(null);

  return (
    <div className="flex flex-col bg-white relative" style={{ height: '100%' }}>
      <AppNavbar />
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
          { label: 'PTO',    value: '8h',  color: '#12B76A' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <p style={{ fontSize: 14, fontWeight: 800, color: s.color }}>{s.value}</p>
            <p style={{ fontSize: 8, color: '#9ca3af', marginTop: 1 }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Calendar — fills remaining height */}
      <div className="flex-1 overflow-y-auto" style={{ minHeight: 0, display: 'flex', flexDirection: 'column' }}>
        <CalendarGrid
          highlightToday
          fillHeight
          onAiDayClick={(day) => setAiDay(day)}
        />
      </div>

      <BottomTabBar active="calendar" badge />

      {/* AI suggestion sheet — full screen when an AI day is tapped */}
      {aiDay !== null && (
        <AiSuggestionSheet
          day={aiDay}
          monthLabel="September 2026"
          onClose={() => setAiDay(null)}
        />
      )}
    </div>
  );
};

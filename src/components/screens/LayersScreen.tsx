import React from 'react';
import { AppNavbar } from '../ui/AppNavbar';
import { CalendarToolbar } from '../ui/CalendarToolbar';
import { CalendarGrid } from '../ui/CalendarGrid';
import { BottomTabBar } from '../ui/BottomTabBar';

const LAYERS = [
  { id: 'work',     label: 'Work',        sub: 'Regular & OT shifts',     color: '#3B5BDB', on: true },
  { id: 'timeoff',  label: 'Time Off',    sub: 'PTO / Sick / Vacation',   color: '#059669', on: true },
  { id: 'personal', label: 'Personal',   sub: 'Private events (only me)', color: '#06B6D4', on: true },
  { id: 'avail',    label: 'Availability',sub: 'Available / Unavailable', color: '#F59E0B', on: false },
  { id: 'ai',       label: 'AI Draft',    sub: 'Suggested by AI planner', color: '#8B5CF6', on: false },
  { id: 'open',     label: 'Open Shifts', sub: 'Shifts to pick up',       color: '#10B981', on: true },
];

const Toggle: React.FC<{ on: boolean }> = ({ on }) => (
  <div
    style={{
      width: 36, height: 20, borderRadius: 10, padding: 2,
      background: on ? '#3B5BDB' : '#e5e7eb',
      display: 'flex', alignItems: 'center',
      justifyContent: on ? 'flex-end' : 'flex-start',
      transition: 'all 0.15s', flexShrink: 0,
    }}
  >
    <div style={{ width: 16, height: 16, borderRadius: 8, background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
  </div>
);

export const LayersScreen: React.FC = () => {
  return (
    <div className="flex flex-col bg-white relative" style={{ height: '100%' }}>
      <AppNavbar />
      <CalendarToolbar view="month" team="me" />

      {/* Calendar — dimmed */}
      <div className="flex-1 overflow-hidden" style={{ opacity: 0.35, pointerEvents: 'none' }}>
        <CalendarGrid />
      </div>

      <BottomTabBar active="calendar" />

      {/* Bottom Sheet */}
      <div
        className="absolute left-0 right-0 bg-white"
        style={{
          bottom: 0, zIndex: 20,
          borderRadius: '22px 22px 0 0',
          boxShadow: '0 -6px 30px rgba(0,0,0,0.10)',
          borderTop: '1px solid #f1f1f4',
        }}
      >
        {/* Handle */}
        <div className="flex justify-center" style={{ paddingTop: 10, paddingBottom: 6 }}>
          <div style={{ width: 36, height: 4, background: '#d1d5db', borderRadius: 2 }} />
        </div>

        <div className="flex items-center justify-between" style={{ padding: '0 20px 10px' }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>Calendar Layers</p>
          <button style={{ fontSize: 11, color: '#3B5BDB', fontWeight: 600 }}>Reset</button>
        </div>

        <div style={{ padding: '0 20px 22px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {LAYERS.map((layer) => (
            <div key={layer.id} className="flex items-center" style={{ gap: 12 }}>
              <div style={{ width: 12, height: 12, borderRadius: 3, background: layer.color, flexShrink: 0 }} />
              <div className="flex-1 min-w-0">
                <p style={{ fontSize: 12, fontWeight: 600, color: '#111827', lineHeight: 1.2 }}>{layer.label}</p>
                <p style={{ fontSize: 9, color: '#9ca3af', lineHeight: 1.3, marginTop: 1 }}>{layer.sub}</p>
              </div>
              <Toggle on={layer.on} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { AppNavbar } from '../ui/AppNavbar';
import { CalendarToolbar } from '../ui/CalendarToolbar';
import { CalendarGrid } from '../ui/CalendarGrid';
import { BottomTabBar } from '../ui/BottomTabBar';

const SHIFTS = [
  { hrs: '12 hrs', time: '07:00 – 19:00', rate: '$15.00', unit: 'MER 2N Medical', status: 'Open · RN', open: true },
  { hrs: '12 hrs', time: '07:00 – 19:00', rate: '$15.00', unit: 'MER 2N Medical', status: 'Scheduled by Manager', open: false },
];

export const AddEventScreen: React.FC = () => {
  return (
    <div className="flex flex-col bg-white relative" style={{ height: '100%' }}>
      <AppNavbar />
      <CalendarToolbar view="month" team="me" />

      {/* Calendar — dimmed, selected day highlighted */}
      <div className="flex-1 overflow-hidden" style={{ opacity: 0.55 }}>
        <CalendarGrid selectedDay={18} highlightToday={false} />
      </div>

      <BottomTabBar active="calendar" />

      {/* Bottom Sheet */}
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
        <div className="flex justify-center" style={{ paddingTop: 10, paddingBottom: 6 }}>
          <div style={{ width: 36, height: 4, background: '#d1d5db', borderRadius: 2 }} />
        </div>

        {/* Date + hours row */}
        <div
          className="flex items-center justify-between"
          style={{ padding: '0 20px 10px' }}
        >
          <div>
            <p style={{ fontSize: 10, color: '#9ca3af' }}>Selected date</p>
            <p style={{ fontSize: 16, fontWeight: 800, color: '#1e2d5a', marginTop: 2 }}>Sep 18, 2026</p>
          </div>
          <div className="text-right">
            <p style={{ fontSize: 10, color: '#9ca3af' }}>Hours this week</p>
            <p style={{ fontSize: 16, fontWeight: 800, color: '#1e2d5a', marginTop: 2 }}>24.00 hrs</p>
            <div className="flex items-center justify-end gap-1" style={{ marginTop: 3 }}>
              <div style={{ width: 52, height: 3, background: '#e5e7eb', borderRadius: 2 }}>
                <div style={{ width: '60%', height: '100%', background: '#3B5BDB', borderRadius: 2 }} />
              </div>
              <span style={{ fontSize: 8, color: '#9ca3af' }}>Sep 15–21</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#f1f1f4', margin: '0 16px 10px' }} />

        {/* Shifts label */}
        <p style={{ fontSize: 12, fontWeight: 700, color: '#374151', padding: '0 20px', marginBottom: 8 }}>
          Available Shifts ({SHIFTS.length})
        </p>

        {/* Shift cards */}
        <div style={{ padding: '0 14px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {SHIFTS.map((s, i) => (
            <div
              key={i}
              style={{
                padding: '10px 12px',
                borderRadius: 16,
                background: s.open ? '#f0fdf4' : '#eff3ff',
                border: `1px solid ${s.open ? '#bbf7d0' : '#c7d2fe'}`,
              }}
            >
              <div className="flex items-start" style={{ gap: 10 }}>
                <div style={{
                  width: 3, alignSelf: 'stretch', borderRadius: 2,
                  background: s.open ? '#12B76A' : '#3B5BDB', flexShrink: 0,
                }} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p style={{ fontSize: 12, fontWeight: 700, color: '#111827' }}>{s.hrs}</p>
                    <span style={{
                      fontSize: 8, fontWeight: 700, padding: '2px 7px', borderRadius: 6,
                      background: s.open ? '#12B76A' : '#3B5BDB', color: 'white',
                    }}>
                      {s.open ? 'OPEN' : 'SCHEDULED'}
                    </span>
                  </div>
                  <p style={{ fontSize: 10, color: '#6b7280', marginTop: 2 }}>{s.time}</p>
                  <p style={{ fontSize: 11, fontWeight: 600, color: '#374151', marginTop: 2 }}>{s.unit}</p>
                  <div className="flex items-center" style={{ gap: 6, marginTop: 4 }}>
                    <span style={{ fontSize: 14, fontWeight: 800, color: '#12B76A' }}>{s.rate}</span>
                    <span style={{ fontSize: 10, color: '#9ca3af' }}>· {s.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

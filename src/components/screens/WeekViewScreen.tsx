import React from 'react';
import { AppNavbar } from '../ui/AppNavbar';
import { CalendarToolbar } from '../ui/CalendarToolbar';
import { BottomTabBar } from '../ui/BottomTabBar';

const WEEK_DAYS = [
  { short: 'Sun', date: 15, shifts: [] },
  { short: 'Mon', date: 16, shifts: [{ label: 'MER 2N Medical', time: '7:00a – 7:00p', type: 'work', hrs: '12h' }, { label: 'Brady 7a', time: '7:00a – 7:00p', type: 'work', hrs: '12h' }] },
  { short: 'Tue', date: 17, shifts: [{ label: 'Sick Leave', time: 'All Day', type: 'sick', hrs: '—' }] },
  { short: 'Wed', date: 18, shifts: [{ label: 'MER 2N Medical', time: '7:00a – 7:00p', type: 'work', hrs: '12h' }] },
  { short: 'Thu', date: 19, shifts: [] },
  { short: 'Fri', date: 20, shifts: [{ label: 'MER 2N Medical', time: '7:00p – 7:00a', type: 'ot', hrs: '12h OT' }] },
  { short: 'Sat', date: 21, shifts: [{ label: 'PTO', time: 'All Day', type: 'pto', hrs: '—' }] },
];

const TYPE_COLORS: Record<string, { bg: string; bar: string; text: string }> = {
  work: { bg: '#eff3ff', bar: '#3B5BDB', text: '#3B5BDB' },
  ot:   { bg: '#f5f3ff', bar: '#7C3AED', text: '#7C3AED' },
  sick: { bg: '#fffbeb', bar: '#F59E0B', text: '#d97706' },
  pto:  { bg: '#f0fdf4', bar: '#12B76A', text: '#059669' },
};

const today = 18;

export const WeekViewScreen: React.FC = () => {
  return (
    <div className="flex flex-col bg-white" style={{ height: '100%' }}>
      <AppNavbar showBadge />
      <CalendarToolbar view="week" team="me" />

      {/* Timecard strip */}
      <div className="flex gap-2 bg-gray-50 border-b border-gray-100 flex-shrink-0" style={{ padding: '8px 16px' }}>
        <button className="flex-1 text-white font-bold rounded-xl" style={{ paddingTop: 9, paddingBottom: 9, fontSize: 12, background: '#3B5BDB' }}>
          Clock In
        </button>
        <button className="flex-1 text-white font-bold rounded-xl" style={{ paddingTop: 9, paddingBottom: 9, fontSize: 12, background: '#12B76A' }}>
          Start Lunch
        </button>
      </div>

      {/* Week strip header */}
      <div className="flex-shrink-0 bg-white" style={{ padding: '10px 12px 6px', borderBottom: '1px solid #f1f1f4' }}>
        {/* Week label */}
        <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
          <button style={{ fontSize: 11, color: '#9ca3af' }}>‹</button>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#374151' }}>Sep 15 – Sep 21, 2026</span>
          <button style={{ fontSize: 11, color: '#9ca3af' }}>›</button>
        </div>

        {/* Day columns */}
        <div className="grid grid-cols-7" style={{ gap: 3 }}>
          {WEEK_DAYS.map((d) => {
            const isToday = d.date === today;
            return (
              <div key={d.date} className="flex flex-col items-center" style={{ gap: 4 }}>
                <span style={{ fontSize: 9, fontWeight: 500, color: '#9ca3af' }}>{d.short}</span>
                <div style={{
                  width: 30, height: 30, borderRadius: 15,
                  background: isToday ? '#3B5BDB' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: isToday ? 'white' : '#374151' }}>
                    {d.date}
                  </span>
                </div>
                {/* Shift dot indicator */}
                <div style={{ height: 4, display: 'flex', gap: 2 }}>
                  {d.shifts.slice(0, 2).map((s, i) => (
                    <div key={i} style={{
                      width: 4, height: 4, borderRadius: 2,
                      background: TYPE_COLORS[s.type]?.bar ?? '#d1d5db',
                    }} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Agenda list */}
      <div className="flex-1 overflow-y-auto" style={{ padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {WEEK_DAYS.filter((d) => d.shifts.length > 0).map((d) => (
          <div key={d.date}>
            {/* Day label */}
            <div className="flex items-center gap-2" style={{ marginBottom: 5, marginTop: 6 }}>
              <div style={{
                width: 22, height: 22, borderRadius: 11, flexShrink: 0,
                background: d.date === today ? '#3B5BDB' : '#f1f3f9',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: d.date === today ? 'white' : '#374151' }}>
                  {d.date}
                </span>
              </div>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#6b7280' }}>
                {d.short}, Sep {d.date}
              </span>
            </div>

            {/* Shift cards */}
            {d.shifts.map((s, si) => {
              const c = TYPE_COLORS[s.type] ?? { bg: '#f3f4f6', bar: '#9ca3af', text: '#6b7280' };
              return (
                <div
                  key={si}
                  className="flex items-stretch rounded-xl"
                  style={{ background: c.bg, marginBottom: 5, overflow: 'hidden' }}
                >
                  <div style={{ width: 3, background: c.bar, flexShrink: 0 }} />
                  <div style={{ padding: '9px 12px', flex: 1 }}>
                    <div className="flex items-center justify-between">
                      <p style={{ fontSize: 12, fontWeight: 700, color: '#111827' }}>{s.label}</p>
                      <span style={{ fontSize: 9, fontWeight: 700, color: c.text, background: 'white', padding: '2px 6px', borderRadius: 6 }}>
                        {s.hrs}
                      </span>
                    </div>
                    <p style={{ fontSize: 10, color: '#6b7280', marginTop: 2 }}>{s.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        {/* Empty days note */}
        <div style={{ marginTop: 4, padding: '10px 12px', background: '#f9fafb', borderRadius: 12, border: '1px dashed #e5e7eb' }}>
          <p style={{ fontSize: 10, color: '#9ca3af', textAlign: 'center' }}>Sun & Thu — no shifts scheduled</p>
        </div>
      </div>

      <BottomTabBar active="calendar" badge />
    </div>
  );
};

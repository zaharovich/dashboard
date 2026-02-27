import React from 'react';
import { Clock } from 'lucide-react';
import { AppNavbar } from '../ui/AppNavbar';
import { CalendarToolbar } from '../ui/CalendarToolbar';
import { BottomTabBar } from '../ui/BottomTabBar';

// 6 weeks: Sep 15 – Oct 26
const SIX_WEEKS = [
  { month: 'Sep', startDay: 15, shifts: [
    { d: 15, type: 'off'  },
    { d: 16, type: 'work' },
    { d: 17, type: 'sick' },
    { d: 18, type: 'work' },
    { d: 19, type: 'off'  },
    { d: 20, type: 'ot'   },
    { d: 21, type: 'pto'  },
  ]},
  { month: 'Sep', startDay: 22, shifts: [
    { d: 22, type: 'work' },
    { d: 23, type: 'off'  },
    { d: 24, type: 'work' },
    { d: 25, type: 'off'  },
    { d: 26, type: 'work' },
    { d: 27, type: 'work' },
    { d: 28, type: 'off'  },
  ]},
  { month: 'Sep–Oct', startDay: 29, shifts: [
    { d: 29, type: 'off'  },
    { d: 30, type: 'work' },
    { d: 1,  type: 'off'  },
    { d: 2,  type: 'work' },
    { d: 3,  type: 'work' },
    { d: 4,  type: 'off'  },
    { d: 5,  type: 'work' },
  ]},
  { month: 'Oct', startDay: 6, shifts: [
    { d: 6,  type: 'work' },
    { d: 7,  type: 'work' },
    { d: 8,  type: 'off'  },
    { d: 9,  type: 'off'  },
    { d: 10, type: 'work' },
    { d: 11, type: 'off'  },
    { d: 12, type: 'ot'   },
  ]},
  { month: 'Oct', startDay: 13, shifts: [
    { d: 13, type: 'off'  },
    { d: 14, type: 'off'  },
    { d: 15, type: 'work' },
    { d: 16, type: 'work' },
    { d: 17, type: 'work' },
    { d: 18, type: 'off'  },
    { d: 19, type: 'off'  },
  ]},
  { month: 'Oct', startDay: 20, shifts: [
    { d: 20, type: 'work' },
    { d: 21, type: 'off'  },
    { d: 22, type: 'off'  },
    { d: 23, type: 'work' },
    { d: 24, type: 'off'  },
    { d: 25, type: 'work' },
    { d: 26, type: 'work' },
  ]},
];

const DAYS_HEADER = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const SHIFT_STYLE: Record<string, { bg: string; text: string; label: string }> = {
  work: { bg: '#3B5BDB', text: 'white',   label: '7a' },
  ot:   { bg: '#7C3AED', text: 'white',   label: 'OT' },
  sick: { bg: '#F59E0B', text: 'white',   label: 'Sk' },
  pto:  { bg: '#12B76A', text: 'white',   label: 'P'  },
  off:  { bg: 'transparent', text: '#d1d5db', label: '' },
};

export const SixWeekViewScreen: React.FC = () => {
  return (
    <div className="flex flex-col bg-white" style={{ height: '100%' }}>
      <AppNavbar />
      <CalendarToolbar view="6w" team="me" />

      {/* Planning banner */}
      <div
        className="flex items-center flex-shrink-0"
        style={{ margin: '8px 14px', padding: '9px 12px', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 14, gap: 10 }}
      >
        <div style={{ width: 28, height: 28, borderRadius: 8, background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Clock size={13} color="#d97706" strokeWidth={2} />
        </div>
        <div className="flex-1 min-w-0">
          <p style={{ fontSize: 10, fontWeight: 700, color: '#92400e' }}>Self-scheduling closes in 6 hours</p>
          <p style={{ fontSize: 8, color: '#b45309', marginTop: 1 }}>Sep 15 – Oct 26 · Submit your plan</p>
        </div>
        <button style={{ fontSize: 9, fontWeight: 700, color: '#3B5BDB', flexShrink: 0, background: 'white', padding: '4px 8px', borderRadius: 8, border: '1px solid #c7d2fe' }}>
          Plan
        </button>
      </div>

      {/* Legend */}
      <div className="flex items-center flex-shrink-0" style={{ padding: '0 16px 6px', gap: 10 }}>
        {[
          { color: '#3B5BDB', label: 'Work' },
          { color: '#7C3AED', label: 'OT' },
          { color: '#12B76A', label: 'PTO' },
          { color: '#F59E0B', label: 'Sick' },
        ].map((l) => (
          <div key={l.label} className="flex items-center" style={{ gap: 4 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: l.color }} />
            <span style={{ fontSize: 8, color: '#6b7280' }}>{l.label}</span>
          </div>
        ))}
      </div>

      {/* 6-week grid */}
      <div className="flex-1 overflow-y-auto" style={{ padding: '0 12px 12px' }}>

        {/* Days header */}
        <div style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 4, marginBottom: 4, paddingLeft: 2 }}>
          <div />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 3 }}>
            {DAYS_HEADER.map((d, i) => (
              <div key={i} style={{ textAlign: 'center', fontSize: 9, fontWeight: 600, color: '#9ca3af' }}>{d}</div>
            ))}
          </div>
        </div>

        {/* Weeks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          {SIX_WEEKS.map((week, wi) => (
            <div key={wi} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 4, alignItems: 'center' }}>
              {/* Week label */}
              <div style={{ textAlign: 'right', paddingRight: 4 }}>
                <span style={{ fontSize: 8, color: '#9ca3af', fontWeight: 600 }}>{week.startDay}</span>
                <br />
                <span style={{ fontSize: 7, color: '#d1d5db' }}>{week.month}</span>
              </div>

              {/* Day cells */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 3 }}>
                {week.shifts.map((s, di) => {
                  const style = SHIFT_STYLE[s.type];
                  const isCurrentWeek = wi === 0;
                  return (
                    <div
                      key={di}
                      style={{
                        height: 36, borderRadius: 10,
                        background: style.bg,
                        border: s.type === 'off'
                          ? `1.5px dashed ${isCurrentWeek ? '#c7d2fe' : '#e5e7eb'}`
                          : 'none',
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'center', justifyContent: 'center', gap: 1,
                      }}
                    >
                      <span style={{ fontSize: 7, fontWeight: 700, color: style.text }}>
                        {s.d}
                      </span>
                      {s.type !== 'off' && (
                        <span style={{ fontSize: 6, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>
                          {style.label}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div
          style={{ marginTop: 10, padding: '10px 14px', background: '#eff3ff', borderRadius: 14, border: '1px solid #c7d2fe' }}
        >
          <p style={{ fontSize: 10, fontWeight: 700, color: '#1e2d5a', marginBottom: 6 }}>6-Week Summary</p>
          <div className="flex justify-between">
            {[
              { label: 'Total shifts', value: '18' },
              { label: 'Total hours',  value: '216h' },
              { label: 'Weekends',     value: '4' },
              { label: 'OT days',      value: '2' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p style={{ fontSize: 13, fontWeight: 800, color: '#3B5BDB' }}>{s.value}</p>
                <p style={{ fontSize: 7, color: '#6b7280', marginTop: 1 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomTabBar active="calendar" />
    </div>
  );
};

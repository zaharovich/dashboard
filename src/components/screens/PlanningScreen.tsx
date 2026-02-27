import React from 'react';
import { Clock, Sparkles, ChevronLeft } from 'lucide-react';
import { BottomTabBar } from '../ui/BottomTabBar';

const SIX_WEEKS = [
  { label: 'Sep 15–21',    shifts: [0, 1, 1, 1, 0, 1, 0] },
  { label: 'Sep 22–28',    shifts: [1, 0, 1, 0, 1, 1, 0] },
  { label: 'Sep 29–Oct 5', shifts: [0, 1, 0, 1, 1, 0, 1] },
  { label: 'Oct 6–12',     shifts: [1, 1, 0, 0, 1, 0, 1] },
  { label: 'Oct 13–19',    shifts: [0, 0, 1, 1, 1, 0, 0] },
  { label: 'Oct 20–26',    shifts: [1, 0, 0, 1, 0, 1, 1] },
];
const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export const PlanningScreen: React.FC = () => {
  return (
    <div className="flex flex-col bg-gray-50" style={{ height: '100%' }}>

      {/* Header */}
      <div className="bg-white flex-shrink-0" style={{ padding: '14px 20px 12px', borderBottom: '1px solid #f1f1f4' }}>
        <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
          <button style={{ color: '#9ca3af' }}>
            <ChevronLeft size={18} strokeWidth={2} />
          </button>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: '#1e2d5a' }}>6-Week Planning</h2>
          <button style={{ fontSize: 11, color: '#3B5BDB', fontWeight: 600 }}>Help</button>
        </div>

        {/* Banner */}
        <div style={{
          background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 14,
          padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: 10, background: '#fef3c7',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <Clock size={16} color="#d97706" strokeWidth={2} />
          </div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: '#92400e' }}>Planning closes in 6 hours</p>
            <p style={{ fontSize: 9, color: '#b45309', marginTop: 1 }}>Sep 15 – Oct 26 · Submit your schedule</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white flex-shrink-0" style={{ display: 'flex', borderBottom: '1px solid #f1f1f4', padding: '10px 0' }}>
        {[
          { label: 'Scheduled', value: '18', color: '#3B5BDB' },
          { label: 'Required',  value: '20', color: '#111827' },
          { label: 'Weekends',  value: '4/4', color: '#F59E0B' },
        ].map((s) => (
          <div key={s.label} style={{ flex: 1, textAlign: 'center' }}>
            <p style={{ fontSize: 18, fontWeight: 800, color: s.color }}>{s.value}</p>
            <p style={{ fontSize: 9, color: '#9ca3af', marginTop: 1 }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* 6-week grid */}
      <div className="flex-1 overflow-y-auto" style={{ padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {SIX_WEEKS.map((week, wi) => (
          <div key={wi} className="bg-white rounded-2xl" style={{ padding: '10px 12px', border: '1px solid #f3f4f6' }}>
            <p style={{ fontSize: 9, fontWeight: 700, color: '#9ca3af', marginBottom: 8 }}>{week.label}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
              {DAYS.map((d, di) => (
                <div key={di} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                  <span style={{ fontSize: 8, color: '#9ca3af' }}>{d}</span>
                  <div style={{
                    width: 28, height: 28, borderRadius: 8,
                    background: week.shifts[di] ? '#3B5BDB' : 'transparent',
                    border: week.shifts[di] ? 'none' : '1.5px dashed #e5e7eb',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {week.shifts[di]
                      ? <span style={{ fontSize: 7, color: 'white', fontWeight: 700 }}>7a</span>
                      : <span style={{ fontSize: 12, color: '#d1d5db', lineHeight: 1 }}>+</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="bg-white flex-shrink-0" style={{ padding: '12px 14px 14px', borderTop: '1px solid #f1f1f4', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <button
          className="w-full rounded-xl text-white font-bold flex items-center justify-center"
          style={{
            paddingTop: 13, paddingBottom: 13, fontSize: 13, gap: 8,
            background: 'linear-gradient(135deg, #4C6EF5 0%, #3B5BDB 100%)',
            boxShadow: '0 4px 14px rgba(59,91,219,0.4)',
          }}
        >
          <Sparkles size={15} strokeWidth={2} />
          Create My Schedule (AI)
        </button>
        <div className="flex" style={{ gap: 8 }}>
          <button
            className="flex-1 rounded-xl font-semibold"
            style={{ paddingTop: 10, paddingBottom: 10, fontSize: 12, background: '#f3f4f6', color: '#374151' }}
          >
            Manual Edit
          </button>
          <button
            className="flex-1 rounded-xl font-bold text-white"
            style={{ paddingTop: 10, paddingBottom: 10, fontSize: 12, background: '#12B76A' }}
          >
            Submit Schedule
          </button>
        </div>
      </div>

      <BottomTabBar active="calendar" />
    </div>
  );
};

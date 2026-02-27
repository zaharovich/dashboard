import React from 'react';
import { AppNavbar } from '../ui/AppNavbar';
import { CalendarToolbar } from '../ui/CalendarToolbar';
import { BottomTabBar } from '../ui/BottomTabBar';

const TEAM_SHIFTS = [
  { name: 'Vladimir S.',  role: 'RN',  days: [0,1,1,1,0,1,0], color: '#3B5BDB' },
  { name: 'Sarah M.',     role: 'RN',  days: [1,0,1,0,1,0,1], color: '#7C3AED' },
  { name: 'James K.',     role: 'LVN', days: [0,1,0,1,1,1,0], color: '#12B76A' },
  { name: 'Priya N.',     role: 'RN',  days: [1,1,0,0,1,0,1], color: '#F59E0B' },
  { name: 'Carlos R.',    role: 'CNA', days: [0,0,1,1,0,1,1], color: '#06B6D4' },
  { name: 'Dana W.',      role: 'RN',  days: [1,0,0,1,1,0,0], color: '#EF4444' },
];

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const DATES = [15, 16, 17, 18, 19, 20, 21];
const today = 18;

export const TeamViewScreen: React.FC = () => {
  return (
    <div className="flex flex-col bg-white" style={{ height: '100%' }}>
      <AppNavbar />
      <CalendarToolbar view="week" team="team" />

      {/* Week header */}
      <div className="flex-shrink-0 bg-white" style={{ padding: '10px 14px 6px', borderBottom: '1px solid #f1f1f4' }}>
        <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
          <button style={{ fontSize: 12, color: '#9ca3af' }}>‹</button>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#374151' }}>Sep 15 – Sep 21 · MER 2N</span>
          <button style={{ fontSize: 12, color: '#9ca3af' }}>›</button>
        </div>

        {/* Day headers with dates */}
        <div style={{ display: 'grid', gridTemplateColumns: '70px repeat(7, 1fr)', gap: 2 }}>
          <div />
          {DAYS.map((d, i) => {
            const isToday = DATES[i] === today;
            return (
              <div key={i} className="flex flex-col items-center" style={{ gap: 2 }}>
                <span style={{ fontSize: 8, color: '#9ca3af', fontWeight: 500 }}>{d}</span>
                <div style={{
                  width: 22, height: 22, borderRadius: 11,
                  background: isToday ? '#3B5BDB' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: isToday ? 'white' : '#374151' }}>
                    {DATES[i]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team schedule grid */}
      <div className="flex-1 overflow-y-auto" style={{ padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {TEAM_SHIFTS.map((member) => (
          <div key={member.name} style={{ display: 'grid', gridTemplateColumns: '70px repeat(7, 1fr)', gap: 2, alignItems: 'center' }}>
            {/* Name */}
            <div style={{ paddingRight: 6 }}>
              <div style={{ width: 22, height: 22, borderRadius: 11, background: member.color + '22', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2 }}>
                <span style={{ fontSize: 7, fontWeight: 700, color: member.color }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <p style={{ fontSize: 8, fontWeight: 700, color: '#374151', lineHeight: 1.2 }}>{member.name.split(' ')[0]}</p>
              <p style={{ fontSize: 7, color: '#9ca3af' }}>{member.role}</p>
            </div>

            {/* Day cells */}
            {member.days.map((hasShift, di) => (
              <div
                key={di}
                style={{
                  height: 38, borderRadius: 8,
                  background: hasShift ? member.color + '18' : '#f9fafb',
                  border: hasShift ? `1.5px solid ${member.color}40` : '1.5px solid #f1f1f4',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                {hasShift && (
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ width: 20, height: 3, borderRadius: 2, background: member.color, margin: '0 auto 2px' }} />
                    <span style={{ fontSize: 7, fontWeight: 700, color: member.color }}>7a</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* Coverage summary */}
        <div style={{ marginTop: 6, padding: '10px 12px', background: '#eff3ff', borderRadius: 14, border: '1px solid #c7d2fe' }}>
          <p style={{ fontSize: 9, fontWeight: 700, color: '#1e2d5a', marginBottom: 6 }}>Week Coverage · MER 2N</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
            {DATES.map((_date, i) => {
              const count = TEAM_SHIFTS.filter(m => m.days[i]).length;
              return (
                <div key={i} style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: 11, fontWeight: 800, color: count >= 3 ? '#12B76A' : '#F59E0B' }}>{count}</p>
                  <p style={{ fontSize: 7, color: '#9ca3af' }}>staff</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <BottomTabBar active="calendar" />
    </div>
  );
};

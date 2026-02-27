import React from 'react';
import { BadgeAlert, Clock, GraduationCap, Check } from 'lucide-react';
import { BottomTabBar } from '../ui/BottomTabBar';

const TABS = ['Requests', 'Updates', 'Alerts', 'Punches'];

const ALERTS = [
  {
    Icon: BadgeAlert,
    iconBg: '#fef2f2',
    iconColor: '#EF4444',
    title: 'Certification expires soon',
    body: 'Your BLS Certification expires in 14 days (Oct 11, 2024). Book renewal to stay compliant.',
    time: 'Today',
    urgent: true,
    actions: [
      { label: 'Book Renewal', bg: '#EF4444', color: 'white' },
      { label: 'Dismiss', bg: '#f3f4f6', color: '#374151' },
    ],
  },
  {
    Icon: Clock,
    iconBg: '#fffbeb',
    iconColor: '#F59E0B',
    title: 'Planning closes in 6 hours',
    body: 'Self-scheduling window for Sep 15 – Oct 26 closes at 6:00 PM today. Submit your schedule.',
    time: '30m ago',
    urgent: false,
    actions: [
      { label: 'Open Planning', bg: '#3B5BDB', color: 'white' },
      { label: 'Snooze 1h', bg: '#f3f4f6', color: '#374151' },
    ],
  },
  {
    Icon: GraduationCap,
    iconBg: '#f5f3ff',
    iconColor: '#7C3AED',
    title: 'Mandatory training due',
    body: 'Annual Infection Control Training must be completed by Oct 31, 2024.',
    time: 'Yesterday',
    urgent: false,
    actions: [
      { label: 'Start Training', bg: '#7C3AED', color: 'white' },
      { label: 'Remind me', bg: '#f3f4f6', color: '#374151' },
    ],
  },
];

export const InboxAlertsScreen: React.FC = () => {
  return (
    <div className="flex flex-col bg-gray-50" style={{ height: '100%' }}>
      {/* Header */}
      <div className="bg-white flex-shrink-0" style={{ borderBottom: '1px solid #f1f1f4' }}>
        <div className="flex items-center justify-between" style={{ padding: '14px 20px 0' }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: '#1e2d5a' }}>Inbox</h2>
          <button className="flex items-center justify-center bg-gray-100 rounded-full" style={{ width: 32, height: 32 }}>
            <Check size={14} color="#6b7280" strokeWidth={2.5} />
          </button>
        </div>
        <div className="flex" style={{ marginTop: 10 }}>
          {TABS.map((tab, i) => (
            <button
              key={tab}
              className="flex-1 relative"
              style={{ paddingBottom: 10, fontSize: 11, fontWeight: 600, color: i === 2 ? '#3B5BDB' : '#9ca3af' }}
            >
              {tab}
              {i === 2 && (
                <span style={{ marginLeft: 3, background: '#ef4444', color: 'white', fontSize: 7, padding: '1px 4px', borderRadius: 10, fontWeight: 700 }}>
                  3
                </span>
              )}
              {i === 2 && (
                <div style={{ position: 'absolute', bottom: 0, left: '15%', right: '15%', height: 2, background: '#3B5BDB', borderRadius: '1px 1px 0 0' }} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Alerts cards */}
      <div className="flex-1 overflow-y-auto" style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {ALERTS.map((a, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl"
            style={{
              padding: '14px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              border: a.urgent ? '1.5px solid #fecaca' : '1px solid #f3f4f6',
            }}
          >
            <div className="flex items-start" style={{ gap: 10, marginBottom: 10 }}>
              <div className="flex items-center justify-center rounded-xl flex-shrink-0" style={{ width: 36, height: 36, background: a.iconBg }}>
                <a.Icon size={16} color={a.iconColor} strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#111827', lineHeight: 1.3 }}>{a.title}</p>
                  <span style={{ fontSize: 9, color: '#d1d5db', flexShrink: 0, marginTop: 1 }}>{a.time}</span>
                </div>
                <p style={{ fontSize: 10, color: '#6b7280', lineHeight: 1.5, marginTop: 3 }}>{a.body}</p>
              </div>
            </div>
            <div className="flex" style={{ gap: 8 }}>
              {a.actions.map((act, ai) => (
                <button
                  key={ai}
                  className="flex-1 rounded-xl font-bold"
                  style={{ paddingTop: 9, paddingBottom: 9, fontSize: 11, background: act.bg, color: act.color }}
                >
                  {act.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <BottomTabBar active="inbox" badge />
    </div>
  );
};

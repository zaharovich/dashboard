import React from 'react';
import { CalendarClock, CalendarOff, Check } from 'lucide-react';
import { BottomTabBar } from '../ui/BottomTabBar';

const TABS = ['Requests', 'Updates', 'Alerts', 'Punches'];

const UPDATES = [
  {
    Icon: CalendarClock,
    iconBg: '#eff3ff',
    iconColor: '#3B5BDB',
    title: 'Manager moved your shift',
    body: 'Your Friday Sep 20 shift (7a–7p) has been rescheduled to Thursday Sep 19.',
    time: '1h ago',
    tag: 'RESCHEDULED',
    tagBg: '#eff3ff',
    tagColor: '#3B5BDB',
    actions: [
      { label: 'Acknowledge', bg: '#3B5BDB', color: 'white' },
      { label: 'Request Change', bg: '#f3f4f6', color: '#374151' },
    ],
  },
  {
    Icon: CalendarOff,
    iconBg: '#fef2f2',
    iconColor: '#EF4444',
    title: 'Your shift was cancelled',
    body: 'Saturday Sep 21 · 7:00 AM – 3:00 PM has been removed by the manager.',
    time: '3h ago',
    tag: 'CALL OFF',
    tagBg: '#fef2f2',
    tagColor: '#EF4444',
    actions: [
      { label: 'Acknowledge', bg: '#1e2d5a', color: 'white' },
      { label: 'View Options', bg: '#f3f4f6', color: '#374151' },
    ],
  },
];

export const InboxUpdatesScreen: React.FC = () => {
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
              style={{ paddingBottom: 10, fontSize: 11, fontWeight: 600, color: i === 1 ? '#3B5BDB' : '#9ca3af' }}
            >
              {tab}
              {i === 1 && (
                <span style={{ marginLeft: 3, background: '#ef4444', color: 'white', fontSize: 7, padding: '1px 4px', borderRadius: 10, fontWeight: 700 }}>
                  2
                </span>
              )}
              {i === 1 && (
                <div style={{ position: 'absolute', bottom: 0, left: '15%', right: '15%', height: 2, background: '#3B5BDB', borderRadius: '1px 1px 0 0' }} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Updates cards */}
      <div className="flex-1 overflow-y-auto" style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {UPDATES.map((u, i) => (
          <div key={i} className="bg-white rounded-2xl" style={{ padding: '14px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', border: '1px solid #f3f4f6' }}>
            <div className="flex items-start" style={{ gap: 10, marginBottom: 10 }}>
              <div className="flex items-center justify-center rounded-xl flex-shrink-0" style={{ width: 36, height: 36, background: u.iconBg }}>
                <u.Icon size={16} color={u.iconColor} strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2" style={{ marginBottom: 3 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#111827' }}>{u.title}</p>
                  <span style={{ fontSize: 7, fontWeight: 700, padding: '2px 6px', borderRadius: 6, background: u.tagBg, color: u.tagColor, flexShrink: 0 }}>
                    {u.tag}
                  </span>
                </div>
                <p style={{ fontSize: 10, color: '#6b7280', lineHeight: 1.5 }}>{u.body}</p>
              </div>
              <span style={{ fontSize: 9, color: '#d1d5db', flexShrink: 0 }}>{u.time}</span>
            </div>
            <div className="flex" style={{ gap: 8 }}>
              {u.actions.map((a, ai) => (
                <button
                  key={ai}
                  className="flex-1 rounded-xl font-bold"
                  style={{ paddingTop: 9, paddingBottom: 9, fontSize: 11, background: a.bg, color: a.color }}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <BottomTabBar active="inbox" />
    </div>
  );
};

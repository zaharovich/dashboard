import React from 'react';
import { ArrowLeftRight, ClipboardList, Check } from 'lucide-react';
import { BottomTabBar } from '../ui/BottomTabBar';

const TABS = ['Requests', 'Updates', 'Alerts', 'Punches'];

const REQUESTS = [
  {
    Icon: ArrowLeftRight,
    iconBg: '#eff3ff',
    iconColor: '#3B5BDB',
    title: 'Swap request from Alex',
    sub: 'Tue Sep 17 · 7a–7p → Your Thu Sep 19',
    time: '2h ago',
    actions: [
      { label: 'Accept', bg: '#12B76A', color: 'white' },
      { label: 'Decline', bg: '#f3f4f6', color: '#374151' },
    ],
  },
  {
    Icon: ClipboardList,
    iconBg: '#f0fdf4',
    iconColor: '#12B76A',
    title: 'Open shift available',
    sub: 'Fri Sep 20 · 7p–7a · MER 2N · $15/hr',
    time: '5h ago',
    actions: [
      { label: 'Accept', bg: '#3B5BDB', color: 'white' },
      { label: 'Ignore', bg: '#f3f4f6', color: '#374151' },
    ],
  },
];

const PUNCHES = [
  { action: 'Clock In',    time: '7:02 AM',  done: true },
  { action: 'Start Lunch', time: '12:01 PM', done: true },
  { action: 'End Lunch',   time: '12:32 PM', done: true },
  { action: 'Clock Out',   time: 'Pending…', done: false },
];

export const InboxScreen: React.FC = () => {
  return (
    <div className="flex flex-col bg-gray-50" style={{ height: '100%' }}>

      {/* Header */}
      <div className="bg-white flex-shrink-0" style={{ borderBottom: '1px solid #f1f1f4' }}>
        <div className="flex items-center justify-between" style={{ padding: '14px 20px 0' }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: '#1e2d5a' }}>Inbox</h2>
          <button
            className="flex items-center justify-center bg-gray-100 rounded-full"
            style={{ width: 32, height: 32 }}
          >
            <Check size={14} color="#6b7280" strokeWidth={2.5} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex" style={{ marginTop: 10 }}>
          {TABS.map((tab, i) => (
            <button
              key={tab}
              className="flex-1 relative"
              style={{ paddingBottom: 10, fontSize: 11, fontWeight: 600, color: i === 0 ? '#3B5BDB' : '#9ca3af' }}
            >
              {tab}
              {i === 0 && (
                <span style={{
                  marginLeft: 3, background: '#ef4444', color: 'white',
                  fontSize: 7, padding: '1px 4px', borderRadius: 10, fontWeight: 700,
                }}>
                  2
                </span>
              )}
              {i === 0 && (
                <div style={{
                  position: 'absolute', bottom: 0, left: '15%', right: '15%',
                  height: 2, background: '#3B5BDB', borderRadius: '1px 1px 0 0',
                }} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="flex-1 overflow-y-auto" style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>

        {REQUESTS.map((req, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl"
            style={{ padding: '14px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', border: '1px solid #f3f4f6' }}
          >
            <div className="flex items-start" style={{ gap: 10, marginBottom: 12 }}>
              {/* Icon */}
              <div
                className="flex items-center justify-center rounded-xl flex-shrink-0"
                style={{ width: 36, height: 36, background: req.iconBg }}
              >
                <req.Icon size={16} color={req.iconColor} strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <p style={{ fontSize: 12, fontWeight: 700, color: '#111827', lineHeight: 1.3 }}>{req.title}</p>
                <p style={{ fontSize: 10, color: '#9ca3af', marginTop: 2 }}>{req.sub}</p>
              </div>
              <span style={{ fontSize: 9, color: '#d1d5db', flexShrink: 0 }}>{req.time}</span>
            </div>
            <div className="flex" style={{ gap: 8 }}>
              {req.actions.map((a, ai) => (
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

        {/* Punches */}
        <div
          className="bg-white rounded-2xl"
          style={{ padding: '14px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', border: '1px solid #f3f4f6' }}
        >
          <p style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', marginBottom: 12 }}>Today's Punches — Sep 18</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {PUNCHES.map((p, i) => (
              <div key={i} className="flex items-center" style={{ gap: 10 }}>
                <div style={{
                  width: 18, height: 18, borderRadius: 9, flexShrink: 0,
                  background: p.done ? '#12B76A' : '#e5e7eb',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {p.done && <Check size={10} color="white" strokeWidth={3} />}
                </div>
                <span style={{ fontSize: 11, color: '#374151', flex: 1 }}>{p.action}</span>
                <span style={{
                  fontSize: 11, fontWeight: 600,
                  color: p.done ? '#111827' : '#9ca3af',
                  fontStyle: p.done ? 'normal' : 'italic',
                }}>
                  {p.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomTabBar active="inbox" badge />
    </div>
  );
};

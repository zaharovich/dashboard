import React from 'react';
import { Pencil, Trash2, Clock, AlignLeft } from 'lucide-react';
import { AppNavbar } from '../ui/AppNavbar';
import { CalendarToolbar } from '../ui/CalendarToolbar';
import { CalendarGrid } from '../ui/CalendarGrid';
import { BottomTabBar } from '../ui/BottomTabBar';

export const PersonalEventDetailScreen: React.FC = () => {
  return (
    <div className="flex flex-col bg-white relative" style={{ height: '100%' }}>
      <AppNavbar />
      <CalendarToolbar view="month" team="me" />

      {/* Calendar — dimmed */}
      <div className="flex-1 overflow-hidden" style={{ opacity: 0.45 }}>
        <CalendarGrid selectedDay={9} highlightToday={false} />
      </div>

      <BottomTabBar active="calendar" />

      {/* Personal Event Detail Sheet */}
      <div
        className="absolute left-0 right-0 bg-white"
        style={{
          bottom: 0, zIndex: 20,
          borderRadius: '24px 24px 0 0',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.12)',
          borderTop: '1px solid #f1f1f4',
        }}
      >
        {/* Handle */}
        <div className="flex justify-center" style={{ paddingTop: 10, paddingBottom: 6 }}>
          <div style={{ width: 36, height: 4, background: '#d1d5db', borderRadius: 2 }} />
        </div>

        {/* Header */}
        <div style={{ padding: '4px 20px 10px' }}>
          <div className="flex items-center gap-2" style={{ marginBottom: 8 }}>
            <div style={{ width: 10, height: 10, borderRadius: 5, background: '#06B6D4' }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: '#06B6D4' }}>PERSONAL EVENT</span>
            <span style={{ fontSize: 9, color: '#d1d5db', marginLeft: 'auto' }}>Only visible to you</span>
          </div>
          <p style={{ fontSize: 18, fontWeight: 800, color: '#1e2d5a' }}>Doctor Appointment</p>
          <p style={{ fontSize: 11, color: '#9ca3af', marginTop: 2 }}>Mon, Sep 9</p>
        </div>

        {/* Details */}
        <div style={{ margin: '0 16px 14px', padding: '12px 14px', background: '#ecfeff', borderRadius: 16, border: '1px solid #a5f3fc', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { Icon: Clock,      label: '10:30 AM – 11:30 AM', sub: '1 hour' },
            { Icon: AlignLeft,  label: 'Annual checkup — Dr. Peterson', sub: 'Note' },
          ].map(({ Icon, label, sub }) => (
            <div key={label} className="flex items-center" style={{ gap: 10 }}>
              <div style={{ width: 30, height: 30, borderRadius: 10, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={14} color="#06B6D4" strokeWidth={2} />
              </div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: '#111827' }}>{label}</p>
                <p style={{ fontSize: 9, color: '#9ca3af' }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ padding: '0 14px 22px', display: 'flex', gap: 8 }}>
          <button
            className="flex-1 flex items-center justify-center gap-2 rounded-xl font-bold"
            style={{ paddingTop: 12, paddingBottom: 12, fontSize: 13, background: '#ecfeff', color: '#06B6D4' }}
          >
            <Pencil size={14} strokeWidth={2.5} />
            Edit Event
          </button>
          <button
            className="flex items-center justify-center rounded-xl"
            style={{ width: 48, background: '#fef2f2', color: '#EF4444' }}
          >
            <Trash2 size={16} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
};
